const PORT = process.env.PORT || 8080

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '澎湖民宿-飛樂米星空號民宿',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '澎湖推薦民宿，在這裡可以讓您仰望清澈的星空，親近薰衣草森林浮潛行程、澎湖花火節、摩西分海、北海吉貝、東海超值一日遊行程、夜釣小管、海洋牧場、七美雙心石滬、西吉藍洞、澎湖二崁古厝，一年四季皆可體驗不同的湖澎人文風情及美麗的自然景色！' },
      { name: 'author', content: '澎湖民宿-飛樂米星空號民宿' },
      { name: 'copyright', content: '澎湖民宿-飛樂米星空號民宿' },
      { name: 'keywords', content: '澎湖民宿,澎湖住宿,澎湖花火節,澎湖浮潛,澎湖美食,澎湖好玩,澎湖特產,澎湖旅遊,澎湖自由行,澎湖海上活動,澎湖景點,澎湖飯店,澎湖觀光,Penghu' },
      { itemprop: 'name', content: '澎湖民宿-飛樂米星空號民宿' },
      // { itemprop: 'image', content: 'https://starrysky.family/img/starryskyFamily.jpg' },
      { property: 'og:title', content: '澎湖民宿-飛樂米星空號民宿' },
      { property: 'og:url', content: 'https://starrysky.family/' },
      // { property: 'og:image', content: 'https://starrysky.family/img/starryskyFamily.jpg' },
      { property: 'og:description', content: '澎湖推薦民宿，在這裡可以讓您仰望清澈的星空，親近薰衣草森林浮潛行程、澎湖花火節、摩西分海、北海吉貝、東海超值一日遊行程、夜釣小管、海洋牧場、七美雙心石滬、西吉藍洞、澎湖二崁古厝，一年四季皆可體驗不同的湖澎人文風情及美麗的自然景色！' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      { hid: 'shortcut-icon', rel: 'shortcut icon', href: '/favicon-60x60.png' },
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '512x512', href: '/favicon-512x512.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-lazyload.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/router-extras'
  ],

  tailwindcss: {
    jit: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: PORT,
    host: '0.0.0.0'
  }
}
