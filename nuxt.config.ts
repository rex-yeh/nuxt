// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,

  app: {
    baseURL: '/nuxt/'
  },

  nitro: {
    preset: 'github-pages',

    prerender: {
      crawlLinks: false,
      routes: [],
      failOnError: false,
    }
  },

  routeRules: {
    '/**': { prerender: false }
  },

  devtools: { enabled: true }
});

