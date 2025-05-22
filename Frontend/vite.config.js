import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://job-listing-website-vteo.onrender.com",
        changeOrigin: true,
        // KEEP `/api` in the request
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
