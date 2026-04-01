import React from "react";
import PromptCard from "./components/PromptCard.js";
import { PROMPTS } from "./data/prompts.js";

const h = React.createElement;

const TABS = PROMPTS.map((p) => ({ id: p.id, label: p.label, icon: p.icon }));

export default function App() {
  const [activeTab, setActiveTab] = React.useState(PROMPTS[0].id);

  const activePrompt = PROMPTS.find((p) => p.id === activeTab);

  return h(
    "div",
    { className: "min-h-screen" },

    // ─── Header ───────────────────────────────────────────────
    h(
      "header",
      {
        className:
          "sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-6 py-4 shadow-sm backdrop-blur",
      },
      h(
        "div",
        { className: "mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4" },
        h(
          "div",
          null,
          h("h1", { className: "text-xl font-bold text-slate-800" }, "📓 QuizCraftQA NotebookLM"),
          h(
            "p",
            { className: "text-xs text-slate-500" },
            "Ready-to-use NotebookLM prompt templates for ISTQB exam prep"
          )
        ),
        h(
          "nav",
          { className: "flex items-center gap-1 flex-wrap" },
          TABS.map((tab) =>
            h(
              "button",
              {
                key: tab.id,
                type: "button",
                onClick: () => setActiveTab(tab.id),
                className:
                  "rounded-full px-4 py-2 text-sm font-medium transition flex items-center gap-1.5 " +
                  (activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"),
              },
              h("span", null, tab.icon),
              tab.label
            )
          )
        )
      )
    ),

    // ─── How to use banner ────────────────────────────────────
    h(
      "div",
      { className: "bg-blue-50 border-b border-blue-100" },
      h(
        "div",
        { className: "mx-auto max-w-5xl px-6 py-3 flex items-start gap-2" },
        h("span", { className: "text-blue-500 text-sm shrink-0" }, "ℹ️"),
        h(
          "p",
          { className: "text-xs text-blue-700" },
          "Upload an ISTQB syllabus PDF to ",
          h(
            "a",
            {
              href: "https://notebooklm.google.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline font-medium",
            },
            "NotebookLM"
          ),
          ", then copy a prompt below and paste it into the chat."
        )
      )
    ),

    // ─── Content ──────────────────────────────────────────────
    h(
      "main",
      { className: "mx-auto max-w-5xl px-6 py-8" },
      activePrompt && h(PromptCard, { key: activeTab, prompt: activePrompt })
    )
  );
}
