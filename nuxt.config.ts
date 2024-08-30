// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/main.css', '~/assets/reset.css'],
    modules: [
        '@nuxtjs/color-mode',
        'nuxt-svg-icons',
        '@nuxt/content'
    ],
    nuxtSvgIcons: {
        svg4vue: {
            assetsDirName: 'assets/icons'
        }
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    extends: '@nuxt-themes/docus'
})
