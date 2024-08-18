import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import EnvironmentPlugin from "vite-plugin-environment";

delete process.env["CommonProgramFiles(x86)"];
delete process.env["ProgramFiles(x86)"];

export default defineConfig({
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin("all")],
});
