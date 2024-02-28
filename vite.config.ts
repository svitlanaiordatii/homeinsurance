import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import postcssCustomMedia from "postcss-custom-media";
import postcssGlobalData from "@csstools/postcss-global-data";

export default defineConfig({
  //dev server
  server: {
    proxy: {
      '/api': {
        target: 'https://api.zipcodestack.com/v1/search',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/zipdecode/, ''),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({
          files: [
            fileURLToPath(
              new URL("./src/assets/css/media.css", import.meta.url)
            ),
          ],
        }),
        postcssCustomMedia(),
      ],
    },
  },
});
