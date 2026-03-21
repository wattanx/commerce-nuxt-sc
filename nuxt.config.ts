// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/a11y",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "nuxt-auth-utils",
  ],
  experimental: {
    componentIslands: true,
  },

  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    oauth: {
      github: {
        clientId: "",
        clientSecret: "",
      },
    },
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: false,
    },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },

    storage: {
      cart: {
        driver: "cloudflare-kv-binding",
        binding: "CART_KV",
      },
    },
    devStorage: {
      cart: {
        driver: "fs",
        base: ".data/cart",
      },
    },
  },
});
