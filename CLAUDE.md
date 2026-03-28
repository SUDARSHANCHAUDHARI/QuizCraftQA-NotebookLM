# QuizCraftQA-NotebookLM — Claude Code Notes

## What is this project?
Documentation-only repo. Contains prompt templates and guides for using Google NotebookLM manually to generate high-quality ISTQB exam questions — no code required.

## Purpose
Validate whether LLM-generated questions are better than rule-based ones (from QuizCraftQA) before investing in a full AI backend.

## Folder Structure
```
prompts/                    # Prompt templates for NotebookLM
  multiple_choice.md        # MCQ generation prompt
  true_false.md             # True/False generation prompt
  fill_in_blank.md          # Fill-in-the-blank prompt
  study_plan.md             # Study plan generation prompt
examples/                   # Sample NotebookLM outputs
  sample_mcq_output.md      # Example MCQ output
```

## How to Use
1. Go to https://notebooklm.google.com
2. Create a new notebook
3. Upload ISTQB PDFs from the QuizCraftQA repo
4. Copy a prompt from `prompts/` and paste into NotebookLM
5. Save good outputs to `examples/`

## ISTQB PDFs
Available in the [QuizCraftQA repo](https://github.com/SUDARSHANCHAUDHARI/QuizCraftQA/tree/main/ISTQB).
Start with `ISTQB_CTFL_Syllabus_v4.0.1.pdf` (Foundation Level).

## Related Projects
- [QuizCraftQA](../QuizCraftQA) — Main web app
- [QuizCraftQA-AI](../QuizCraftQA-AI) — Gemini API backend (next step after validating here)
