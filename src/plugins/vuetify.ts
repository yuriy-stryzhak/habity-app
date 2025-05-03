
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
        },
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: '#3FBF7F',
                        accent: '#FFA65C',
                        secondary: '#A9A6C9',
                        background: '#F6F8F9',
                        text: '#2E2E2E'
                    },
                },
                dark: {
                    dark: true,
                    colors: {
                        primary: '#3FBF7F',
                        accent: '#FFA65C',
                        secondary: '#B6B4D4',
                        background: '#121212',
                        text: '#EDEDED'
                    },
                },
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
