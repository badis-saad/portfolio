<template>
  <article
    @click="goToProject"
    class="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden
           hover:border-lime-400 hover:-translate-y-1 transition
           cursor-pointer flex flex-col"
  >
    <!-- IMAGE -->
    <div class="relative h-48 w-full overflow-hidden">
      <img
        :src="image || defaultImage"
        alt="Image du projet"
        class="w-full h-full object-cover"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>

      <!-- TITRE -->
      <h3 class="absolute bottom-4 left-4 text-xl font-semibold text-slate-50">
        {{ title }}
      </h3>
    </div>

    <!-- CONTENU -->
    <div class="p-6 flex flex-col gap-4 flex-1">
      <!-- Description -->
      <p class="text-slate-300 text-sm leading-relaxed">
        {{ description }}
      </p>

      <!-- TAGS -->
      <div class="mt-auto flex flex-wrap gap-2">
        <!-- Équipe -->
        <span class="tag tag-team">
          👥 {{ teamSize }}
        </span>

        <!-- Type -->
        <span class="tag tag-type">
          {{ type }}
        </span>

        <!-- Technos -->
        <span
          v-for="tech in technologies"
          :key="tech"
          class="tag tag-tech"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import defaultImage from '@/assets/project-default.jpg'

const router = useRouter()

interface Props {
  title: string
  description: string
  image?: string
  teamSize: number | string
  type: 'Personnel' | 'Professionnel' | 'Universitaire'
  technologies: string[]
  slug: string
}

const props = defineProps<Props>()

function goToProject() {
  router.push(`/projects/${props.slug}`)
}
</script>

<style scoped>
</style>
