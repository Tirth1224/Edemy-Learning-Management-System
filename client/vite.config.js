import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  server: {
    hmr: {
      overlay: false, // Disable error overlay
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ["**/*.JPG"],
//   server: {
//     hmr: {
//       overlay: false, // Disable error overlay
//     },
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
// });
