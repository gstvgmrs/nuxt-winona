// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Awesome Blog",
      bodyAttrs: {
        class: "bg-base-200 text-base-content h-full",
      },
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || "",
      apiToken: process.env.API_TOKEN || "",
    }
  },

  future: {
    compatibilityVersion: 4,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/main.css'],
  modules: ["@pinia/nuxt"],
});
