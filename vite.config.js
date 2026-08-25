import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// /se_final_project_frontend/
export default defineConfig({
  base: "/se_final_project_frontend/",
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
