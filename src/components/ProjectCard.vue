<template>
  <div
    @click="openProject"
    class="cursor-pointer bg-slate-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
  >
    <!-- Image -->
    <div class="w-full h-48 bg-gray-700">
      <img
        v-if="image"
        :src="image"
        alt="Project image"
        class="w-full h-full object-cover"
      />
      <div v-else class="w-full h-full flex items-center justify-center text-slate-400">
        Pas d'image
      </div>
    </div>

    <!-- Contenu -->
    <div class="p-4">
      <h3 class="text-lg font-semibold text-slate-50 mb-2">{{ title }}</h3>
      <p class="text-slate-300 text-sm mb-4 line-clamp-3">{{ description }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span class="bg-lime-400 text-slate-900 rounded-full px-2 py-1 text-xs font-medium">
          {{ type }}
        </span>
        <span class="bg-sky-400 text-slate-900 rounded-full px-2 py-1 text-xs font-medium">
          {{ teamSize }} pers.
        </span>
        <span
          v-for="tech in technologies"
          :key="tech"
          class="bg-purple-400 text-slate-900 rounded-full px-2 py-1 text-xs font-medium"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  title: string
  description: string
  image?: string
  teamSize: number
  type: string
  technologies: string[]
  extraImages?: string[]
  detailedDescription?: string
  technicalDetails?: string
  learned?: string
  sources?: string[]
  featured?: boolean
  order: number
}

const props = defineProps<Props>()
const router = useRouter()

function openProject() {
  // Passer toutes les infos au composant ProjectDetail via state ou params
  router.push({ name: 'project-detail', params: { slug: props.slug }, state: props })
}
</script>
