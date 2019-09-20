import pkg from './package'
import webpack from 'webpack'

export default {
  mode: 'spa',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap' }
    ]
  },

  loading: { color: '#2d862d' },

  loadingIndicator: {
    name: 'pulse',
    color: '#b30000',
    background: '#004466'
  },

  css: ['~/assets/app.css'],

  plugins: [
    '~/plugins/api.js',
    '~/plugins/content.js',
    '~/plugins/icons.js',
    '~/plugins/util.js'
  ],

  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      './assets/*.scss'
    ]
  },

  toast: {
    position: 'top-center',
    duration: 5000,
    fullWidth: true,
    fitToWidth: true,
    keepOnHover: true
  },

  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
