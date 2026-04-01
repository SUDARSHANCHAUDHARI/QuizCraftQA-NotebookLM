import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/QuizCraftQA-NotebookLM/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*.{js,jsx}"],
      exclude: ["src/main.jsx"],
    },
  },
});
