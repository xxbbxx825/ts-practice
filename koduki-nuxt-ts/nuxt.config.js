const { FIREBASE_AUTH_API_KEY, FIREBASE_AUTH_DOMAIN } = process.env;
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "koduki-nuxt-ts",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "nuxt-typed-vuex",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  firebase: {
    // options
  },
  // Set Runtime Configuration: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config
  publicRuntimeConfig: {
    firebase: {
      apiKey:
        process.env.NODE_ENV !== "production"
          ? process.env.FIREBASE_AUTH_API_KEY
          : undefined,
      authDomain:
        process.env.NODE_ENV !== "production"
          ? process.env.FIREBASE_AUTH_DOMAIN
          : undefined,
    },
  },
  privateRuntimeConfig: {
    firebase: {
      apiKey: FIREBASE_AUTH_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
    },
  },
};
