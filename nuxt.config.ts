// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@nuxtjs/plausible',
  ],
  app: {
    head: {
      charset: 'utf-16',
      meta: [
        { name: 'facebook-domain-verification', content: 'osvguhsfzubi9g6wmu1ik2kijtrodh' }
      ],
    }
  },

  runtimeConfig: { // Remove this in prod
    // apiKey: '' // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
    public: {
      siteName: 'Juwelier Schmucktraeume.com',
      language: 'de-DE',
      titleSeparator: '·',
    }
  },

  plausible: {
    domain: 'schmucktraeume.netlify.app',
    // trackLocalhost: true,
    autoOutboundTracking: true,
  },

  css: [
    '@/assets/scss/styles.scss'
  ],
})
