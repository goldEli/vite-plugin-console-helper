import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ConsoleHelper from "../../src";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ConsoleHelper({
      splitBy: "\n",
      preTip: "🐖🐖🐖🐖🐖🐖🐖🐖🐖",
      enableFileName: {
        enableDir: false,
      },
    }),
    react(),
  ],
});
