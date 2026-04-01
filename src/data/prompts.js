export const PROMPTS = [
  {
    id: "mcq",
    label: "Multiple Choice",
    icon: "🔵",
    description: "Generate 10 MCQ questions from a chapter or topic.",
    topicPlaceholder: "e.g. test levels, risk-based testing",
    template: (topic) =>
      `From the uploaded ISTQB syllabus, generate 10 multiple choice questions based on ${topic || "[CHAPTER/TOPIC]"}.

For each question:
- Write a clear, exam-style question
- Provide 4 options (A, B, C, D)
- Mark the correct answer
- Add a brief explanation (1-2 sentences) of why the answer is correct
- Reference the syllabus section number

Format each question as:
Q1. [Question text]
A) ...
B) ...
C) ...
D) ...
Answer: [Letter]
Explanation: [Why this is correct]
Section: [e.g. 1.3.2]`,
    tips: [
      "Replace [CHAPTER/TOPIC] with something specific, e.g. \"test levels\", \"risk-based testing\"",
      "For harder questions: add \"Focus on application and analysis level (Bloom's taxonomy level 3-4)\"",
      "For easier questions: add \"Focus on knowledge and comprehension level (Bloom's taxonomy level 1-2)\"",
    ],
  },
  {
    id: "true_false",
    label: "True / False",
    icon: "✅",
    description: "Generate 10 True/False questions from a chapter or topic.",
    topicPlaceholder: "e.g. static testing, test design",
    template: (topic) =>
      `From the uploaded ISTQB syllabus, generate 10 True/False questions about ${topic || "[CHAPTER/TOPIC]"}.

For each question:
- Write a clear statement that is either true or false
- State whether it is True or False
- Add a brief explanation (1-2 sentences)
- Reference the syllabus section number

Format:
Q1. [Statement]
Answer: True / False
Explanation: [Why]
Section: [e.g. 2.1.1]`,
    tips: [
      "Good for quick recall of definitions and rules",
      "Ask NotebookLM to \"make some statements subtly wrong\" for harder questions",
    ],
  },
  {
    id: "fill_blank",
    label: "Fill in the Blank",
    icon: "✏️",
    description: "Generate 10 fill-in-the-blank questions from a chapter or topic.",
    topicPlaceholder: "e.g. test techniques, defect management",
    template: (topic) =>
      `From the uploaded ISTQB syllabus, generate 10 fill-in-the-blank questions about ${topic || "[CHAPTER/TOPIC]"}.

For each question:
- Take a key sentence or definition from the syllabus
- Replace one important word or phrase with a blank (_____)
- Provide the correct answer
- Add a brief explanation
- Reference the syllabus section

Format:
Q1. [Sentence with _____]
Answer: [Missing word/phrase]
Explanation: [Why]
Section: [e.g. 3.2.1]`,
    tips: [
      "Works best for definitions, e.g. \"_______ is the process of evaluating a component or system...\"",
      "Ask for \"key terminology questions\" to focus on ISTQB glossary terms",
    ],
  },
  {
    id: "study_plan",
    label: "Study Plan",
    icon: "📅",
    description: "Create a week-by-week ISTQB study plan.",
    topicPlaceholder: "",
    template: () =>
      `Based on the uploaded ISTQB Foundation Level syllabus, create a 4-week study plan for someone preparing for the CTFL exam.

- Week-by-week breakdown of chapters to cover
- Suggested time per topic (in hours)
- Key concepts to focus on each week
- Recommended question types to practice (MCQ, T/F, fill-in-blank)
- Tips for the final week before the exam`,
    variant: {
      label: "Weak Areas Variant",
      template: (topics) =>
        `I struggled with the following topics: ${topics || "[list topics]"}.
Based on the ISTQB syllabus, create a focused 1-week revision plan to strengthen these areas.`,
    },
    tips: [
      "Upload the ISTQB Foundation Level syllabus PDF before using this prompt",
      "Use the weak areas variant if you've already done a practice test",
    ],
  },
];
