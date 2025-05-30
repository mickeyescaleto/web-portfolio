import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-30',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['@/app/styles/main.css'],
  alias: {
    '@': '../src',
  },
  dir: {
    pages: './src/app/routes',
  },
  hooks: {
    'app:templates'(app) {
      app.rootComponent = '@/app/app.vue';
    },
  },
  app: {
    rootTag: 'main',
    rootAttrs: {
      id: 'application',
    },
    head: {
      noscript: [{ textContent: 'JavaScript is required' }],
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Artem Kuznetsov • @mickeyescaleto',
      meta: [
        {
          name: 'description',
          content:
            'Web developer specializing in React, VueJS, NextJS and NuxtJS',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
});
