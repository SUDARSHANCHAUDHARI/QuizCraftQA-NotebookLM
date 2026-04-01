import React from "react";

const h = React.createElement;

function CopyButton({ text }) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return h(
    "button",
    {
      type: "button",
      onClick: handleCopy,
      className:
        "inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold shadow-sm transition " +
        (copied
          ? "bg-accent text-white"
          : "bg-primary text-white hover:bg-primary/90"),
    },
    copied ? "✓ Copied!" : "Copy prompt"
  );
}

export default function PromptCard({ prompt }) {
  const [topic, setTopic] = React.useState("");
  const [weakTopics, setWeakTopics] = React.useState("");

  const generatedPrompt = prompt.template(topic);
  const variantPrompt = prompt.variant ? prompt.variant.template(weakTopics) : null;

  return h(
    "div",
    { className: "space-y-6" },

    // ── Main prompt ─────────────────────────────────────────
    h(
      "section",
      {
        className:
          "space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg backdrop-blur",
      },
      h(
        "div",
        { className: "flex items-center gap-3" },
        h("span", { className: "text-3xl" }, prompt.icon),
        h(
          "div",
          null,
          h("h3", { className: "text-xl font-semibold text-slate-800" }, prompt.label),
          h("p", { className: "text-xs text-slate-500" }, prompt.description)
        )
      ),

      prompt.topicPlaceholder &&
        h(
          "div",
          {
            className:
              "flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4",
          },
          h(
            "div",
            null,
            h("p", { className: "text-sm font-semibold text-slate-700" }, "Topic / Chapter"),
            h(
              "p",
              { className: "text-xs text-slate-500" },
              "Fills in [CHAPTER/TOPIC] in the prompt below"
            )
          ),
          h("input", {
            type: "text",
            value: topic,
            onChange: (e) => setTopic(e.target.value),
            placeholder: prompt.topicPlaceholder,
            className:
              "rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 w-64",
          })
        ),

      h(
        "div",
        { className: "space-y-2" },
        h(
          "div",
          { className: "flex items-center justify-between" },
          h("p", { className: "text-xs font-semibold text-slate-500 uppercase tracking-wide" }, "Prompt"),
          h(CopyButton, { text: generatedPrompt })
        ),
        h(
          "pre",
          {
            className:
              "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700 whitespace-pre-wrap leading-relaxed font-mono overflow-auto max-h-56",
          },
          generatedPrompt
        )
      ),

      prompt.tips &&
        h(
          "div",
          {
            className:
              "rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-1",
          },
          h("p", { className: "text-xs font-semibold text-slate-700 mb-2" }, "Tips"),
          prompt.tips.map((tip, i) =>
            h("p", { key: i, className: "text-xs text-slate-500" }, `• ${tip}`)
          )
        )
    ),

    // ── Variant (study plan only) ────────────────────────────
    prompt.variant &&
      h(
        "section",
        {
          className:
            "space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg backdrop-blur",
        },
        h("h3", { className: "text-xl font-semibold text-slate-800" }, prompt.variant.label),

        h(
          "div",
          {
            className:
              "flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4",
          },
          h(
            "div",
            null,
            h("p", { className: "text-sm font-semibold text-slate-700" }, "Weak topics"),
            h(
              "p",
              { className: "text-xs text-slate-500" },
              "Comma-separated list of topics to focus on"
            )
          ),
          h("input", {
            type: "text",
            value: weakTopics,
            onChange: (e) => setWeakTopics(e.target.value),
            placeholder: "e.g. risk-based testing, static analysis",
            className:
              "rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 w-72",
          })
        ),

        h(
          "div",
          { className: "space-y-2" },
          h(
            "div",
            { className: "flex items-center justify-between" },
            h("p", { className: "text-xs font-semibold text-slate-500 uppercase tracking-wide" }, "Variant prompt"),
            h(CopyButton, { text: variantPrompt })
          ),
          h(
            "pre",
            {
              className:
                "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700 whitespace-pre-wrap leading-relaxed font-mono",
            },
            variantPrompt
          )
        )
      )
  );
}
