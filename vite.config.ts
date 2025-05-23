import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Update this to match your GitHub repo name
const repoName = "pocket-image-gallery";

export default defineConfig(({ mode }) => ({
  base: "./", // Use relative paths for all assets
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
