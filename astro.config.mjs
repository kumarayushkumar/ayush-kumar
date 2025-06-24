// @ts-check
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://ayushkumar.space/',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
})
