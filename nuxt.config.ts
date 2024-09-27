import {fileURLToPath} from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  devtools: { enabled: true },
  devServer: { host: '0.0.0.0' },
  typescript: {
    typeCheck: true,
  },
   vite: {
     build: { target: "es2022" },
    // Better support for Tauri CLI output
    clearScreen: false,
    // Enable environment variables
    // Additional environment variables can be found at
    // https://v2.tauri.app/reference/environment-variables/
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      // Tauri requires a consistent port
      strictPort: true,
      hmr: {
        // Use websocket for mobile hot reloading
        protocol: 'ws',
        // Make sure it's available on the network
        host: '0.0.0.0',
        // Use a specific port for hmr
        port: 5183,
      },
    },
    },
  css: ["@/assets/scss/index.scss"],
  srcDir: "src/",
  alias: {
    "@/": fileURLToPath(new URL(".\\src", import.meta.url)),
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
  ],
});
