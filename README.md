# QuizCraftQA NotebookLM

[![CI](https://github.com/SUDARSHANCHAUDHARI/QuizCraftQA-NotebookLM/actions/workflows/ci.yml/badge.svg)](https://github.com/SUDARSHANCHAUDHARI/QuizCraftQA-NotebookLM/actions/workflows/ci.yml)
[![Deploy](https://github.com/SUDARSHANCHAUDHARI/QuizCraftQA-NotebookLM/actions/workflows/deploy.yml/badge.svg)](https://github.com/SUDARSHANCHAUDHARI/QuizCraftQA-NotebookLM/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://sudarshanchaudhari.github.io/QuizCraftQA-NotebookLM/)

Ready-to-use NotebookLM prompt templates for ISTQB exam preparation. Browse, customise with your topic, and copy prompts directly into NotebookLM.

## Features

- Prompt templates for MCQ, True/False, Fill-in-the-Blank, and Study Plan
- Topic input fills `[CHAPTER/TOPIC]` live — no manual editing
- One-click copy to clipboard
- Weak areas variant for the Study Plan prompt
- Example output tab showing real NotebookLM responses
- Static app — deploys to GitHub Pages, no backend needed

## How to Use

1. Open [NotebookLM](https://notebooklm.google.com) and upload your ISTQB syllabus PDF
2. Open the [live app](https://sudarshanchaudhari.github.io/QuizCraftQA-NotebookLM/)
3. Pick a prompt type, enter your topic, click **Copy prompt**
4. Paste into the NotebookLM chat

## Quick Start (local)

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build for Production

```bash
npm run build
npm run preview
```

## Tech Stack

- React 19 (no build-time JSX — uses `React.createElement`)
- Vite 4
- Tailwind CSS 3

## Related Projects

- [QuizCraftQA](https://github.com/SUDARSHANCHAUDHARI/QuizCraftQA) — Main ISTQB quiz web app
- [QuizCraftQA-AI](https://github.com/SUDARSHANCHAUDHARI/QuizCraftQA-AI) — AI question & study plan generator
