import { describe, it, expect } from "vitest";
import { PROMPTS, EXAMPLE_OUTPUT } from "../data/prompts.js";

// ── PROMPTS structure ──────────────────────────────────────────────────────────

describe("PROMPTS", () => {
  it("exports an array of 4 prompts", () => {
    expect(PROMPTS).toHaveLength(4);
  });

  it("each prompt has required fields", () => {
    PROMPTS.forEach((p) => {
      expect(p).toHaveProperty("id");
      expect(p).toHaveProperty("label");
      expect(p).toHaveProperty("icon");
      expect(p).toHaveProperty("description");
      expect(p).toHaveProperty("template");
      expect(p).toHaveProperty("tips");
      expect(typeof p.template).toBe("function");
      expect(Array.isArray(p.tips)).toBe(true);
    });
  });

  it("prompt ids are unique", () => {
    const ids = PROMPTS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ── MCQ template ───────────────────────────────────────────────────────────────

describe("MCQ prompt template", () => {
  const mcq = PROMPTS.find((p) => p.id === "mcq");

  it("includes [CHAPTER/TOPIC] placeholder when no topic given", () => {
    expect(mcq.template("")).toContain("[CHAPTER/TOPIC]");
  });

  it("replaces placeholder with provided topic", () => {
    const result = mcq.template("risk-based testing");
    expect(result).toContain("risk-based testing");
    expect(result).not.toContain("[CHAPTER/TOPIC]");
  });

  it("includes MCQ format instructions", () => {
    const result = mcq.template("test levels");
    expect(result).toContain("A)");
    expect(result).toContain("Answer:");
    expect(result).toContain("Explanation:");
  });

  it("requests 10 questions", () => {
    expect(mcq.template("")).toContain("10 multiple choice questions");
  });
});

// ── True/False template ────────────────────────────────────────────────────────

describe("True/False prompt template", () => {
  const tf = PROMPTS.find((p) => p.id === "true_false");

  it("includes [CHAPTER/TOPIC] placeholder when no topic given", () => {
    expect(tf.template("")).toContain("[CHAPTER/TOPIC]");
  });

  it("replaces placeholder with provided topic", () => {
    const result = tf.template("static testing");
    expect(result).toContain("static testing");
  });

  it("includes True/False format instructions", () => {
    const result = tf.template("");
    expect(result).toContain("True / False");
  });
});

// ── Fill-in-the-Blank template ─────────────────────────────────────────────────

describe("Fill-in-the-Blank prompt template", () => {
  const fib = PROMPTS.find((p) => p.id === "fill_blank");

  it("includes blank placeholder in format", () => {
    expect(fib.template("")).toContain("_____");
  });

  it("replaces topic when provided", () => {
    const result = fib.template("defect management");
    expect(result).toContain("defect management");
  });
});

// ── Study Plan template ────────────────────────────────────────────────────────

describe("Study Plan prompt template", () => {
  const sp = PROMPTS.find((p) => p.id === "study_plan");

  it("generates a 4-week study plan prompt", () => {
    expect(sp.template()).toContain("4-week study plan");
  });

  it("has a variant with its own template function", () => {
    expect(sp.variant).toBeDefined();
    expect(typeof sp.variant.template).toBe("function");
  });

  it("variant includes provided weak topics", () => {
    const result = sp.variant.template("risk-based testing, static analysis");
    expect(result).toContain("risk-based testing, static analysis");
  });

  it("variant uses placeholder when no topics given", () => {
    const result = sp.variant.template("");
    expect(result).toContain("[list topics]");
  });
});

// ── EXAMPLE_OUTPUT ─────────────────────────────────────────────────────────────

describe("EXAMPLE_OUTPUT", () => {
  it("has correct id, label and icon", () => {
    expect(EXAMPLE_OUTPUT.id).toBe("examples");
    expect(EXAMPLE_OUTPUT.label).toBe("Example Output");
    expect(EXAMPLE_OUTPUT.icon).toBe("💡");
  });

  it("contains at least one question", () => {
    expect(EXAMPLE_OUTPUT.questions.length).toBeGreaterThan(0);
  });

  it("each question has required fields", () => {
    EXAMPLE_OUTPUT.questions.forEach((q) => {
      expect(q).toHaveProperty("q");
      expect(q).toHaveProperty("options");
      expect(q).toHaveProperty("answer");
      expect(q).toHaveProperty("explanation");
      expect(q).toHaveProperty("section");
      expect(Array.isArray(q.options)).toBe(true);
    });
  });

  it("each answer is a valid option letter", () => {
    EXAMPLE_OUTPUT.questions.forEach((q) => {
      expect(["A", "B", "C", "D"]).toContain(q.answer);
    });
  });
});
