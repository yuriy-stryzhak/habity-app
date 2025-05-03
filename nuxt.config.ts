// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  srcDir: 'src/',

  // CSS-files
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/shared/styles/main.scss', // global SCSS
  ],

  build: {
    transpile: ['vuetify']
  },

  // Plugins and modules
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt'
  ],

  // vite plugins
  vite: {
    define: {
      'process.env.DEBUG': false
    },
    ssr: {
      noExternal: ['vuetify']
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/shared/styles/variables.scss" as *;`
        }
      }
    },


  },

  // TypeScript
  typescript: {
    strict: true,
    shim: false
  },

  // i18n
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'uk', language: 'uk-UA', file: 'uk.json', name: 'Українська' }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',

  },

  // PWA
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Habity',
      short_name: 'Habity',
      description: 'Track your habits and build better routines.',
      theme_color: '#4CAF50',
      background_color: '#F5F5F5',
      display: 'standalone'
    }
  }

})
