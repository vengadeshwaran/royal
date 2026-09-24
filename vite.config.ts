import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

  server: {
    host: "0.0.0.0",
    allowedHosts: ["royal-kx2z.onrender.com"],
  },
});
