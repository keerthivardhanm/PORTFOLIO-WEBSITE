// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // default slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance
  }
} satisfies Theme