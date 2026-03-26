# QuizCraftQA — NotebookLM Workflow

A manual workflow for generating high-quality ISTQB exam questions using [Google NotebookLM](https://notebooklm.google.com).

## What is this?

This repo documents how to use NotebookLM as a free, no-code way to generate better ISTQB quiz questions from official syllabus PDFs — before investing in a full AI backend.

## Quick Start

1. Go to [notebooklm.google.com](https://notebooklm.google.com)
2. Create a new notebook
3. Upload one or more ISTQB syllabus PDFs from [QuizCraftQA](https://github.com/SUDARSHANCHAUDHARI/QuizCraftQA/tree/main/ISTQB)
4. Use the prompt templates in [`prompts/`](prompts/) to generate questions
5. Copy outputs into QuizCraftQA or save them in [`examples/`](examples/)

## Recommended PDFs to Start With

| PDF | Level |
|-----|-------|
| `ISTQB_CTFL_Syllabus_v4.0.1.pdf` | Foundation *(start here)* |
| `ISTQB-CTAL-TA-Syllabus-v4.0-EN.pdf` | Advanced — Test Analyst |
| `ISTQB_CTAL-TM_Syllabus_v3.0_ALL_.pdf` | Advanced — Test Manager |

## Folder Structure

```
prompts/         # Prompt templates for different question types
examples/        # Sample NotebookLM outputs
```

## Related Projects

- [QuizCraftQA](https://github.com/SUDARSHANCHAUDHARI/QuizCraftQA) — Main web app
- [QuizCraftQA-AI](https://github.com/SUDARSHANCHAUDHARI/QuizCraftQA-AI) — Gemini API backend
