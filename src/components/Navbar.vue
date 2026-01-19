<template>
  <header class="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-700">
    <nav class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <RouterLink to="/" class="flex flex-col leading-none">
        <span class="text-lg font-semibold text-slate-50 hover:text-lime-400 transition">Badis Saad</span>
        <span class="text-xs uppercase text-slate-300 mt-1">Architecte SI</span>
      </RouterLink>

      <ul class="hidden md:flex items-center gap-12 text-sm font-medium text-slate-300">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="relative pb-1 transition hover:text-lime-400
                 after:absolute after:left-0 after:bottom-0 after:h-[2px]
                 after:w-0 after:bg-lime-400 after:transition-all after:duration-300
                 hover:after:w-full"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <button class="md:hidden flex flex-col gap-1.5" @click="open = !open">
        <span class="w-6 h-0.5 bg-slate-50"></span>
        <span class="w-6 h-0.5 bg-slate-50"></span>
        <span class="w-6 h-0.5 bg-slate-50"></span>
      </button>
    </nav>

    <div v-if="open" class="md:hidden bg-slate-900 border-t border-slate-700">
      <ul class="flex flex-col px-6 py-6 gap-6 text-slate-300">
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to" @click="open = false" class="block text-base font-medium hover:text-lime-400">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
const links = [
  { label: 'Résumé', to: '/resume' },
  { label: 'Projets', to: '/projets' },
  { label: 'Portfolio d’apprentissage', to: '/apprentissage' },
  { label: 'Contact', to: '/contact' }
]
</script>
