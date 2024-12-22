import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { socialLinks } from './config/social'

export default defineConfig({
  lang: 'en-US',
  title: 'M Keerthi Vardhan',
  description: 'Cybersecurity Professional & Developer',
  themeConfig: {
    logo: '/logo.png',
    nav,
    sidebar,
    socialLinks,
    footer: {
      message: 'Built with VitePress',
      copyright: '© 2024 M Keerthi Vardhan'
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
    ['script', { src: '/interactive.js' }]
  ]
})