<template>
  <main class="bg-slate-900 text-slate-50 min-h-screen px-6 py-20 flex justify-center">
    <div class="w-full max-w-6xl space-y-24">

      <!-- ================================= -->
      <!-- CAROUSEL -->
      <!-- ================================= -->
      <section>
        <h1 class="text-2xl font-semibold mb-16 text-center">
          Projets en avant
        </h1>

        <div class="relative h-[420px] flex items-center justify-center overflow-hidden">

          <!-- Flèche gauche -->
          <button
            @click="prev"
            class="absolute left-6 z-30 group"
          >
            <div
              class="w-7 h-7 border-l-2 border-b-2 border-lime-400 rotate-45
                     transition group-hover:scale-110"
            />
          </button>

          <!-- Carte gauche -->
          <div
            v-if="leftProject"
            class="absolute -translate-x-80 scale-90 opacity-40 z-10
                   transition-all duration-500 ease-in-out cursor-pointer"
            @click="openModal(leftProject)"
          >
            <ProjectCard v-bind="leftProject" />
          </div>

          <!-- Carte centre -->
          <div
            class="absolute scale-100 opacity-100 z-20
                   transition-all duration-500 ease-in-out cursor-pointer"
            @click="openModal(centerProject)"
          >
            <ProjectCard v-bind="centerProject" />
          </div>

          <!-- Carte droite -->
          <div
            v-if="rightProject"
            class="absolute translate-x-80 scale-90 opacity-40 z-10
                   transition-all duration-500 ease-in-out cursor-pointer"
            @click="openModal(rightProject)"
          >
            <ProjectCard v-bind="rightProject" />
          </div>

          <!-- Flèche droite -->
          <button
            @click="next"
            class="absolute right-6 z-30 group"
          >
            <div
              class="w-7 h-7 border-r-2 border-t-2 border-lime-400 rotate-45
                     transition group-hover:scale-110"
            />
          </button>

        </div>
      </section>

      <!-- ================================= -->
      <!-- GRILLE DES PROJETS -->
      <!-- ================================= -->
      <section>
        <h2 class="text-xl font-semibold mb-12 text-center">
          Tous les projets
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          <div
            v-for="project in projects"
            :key="project.slug"
            class="cursor-pointer"
            @click="openModal(project)"
          >
            <ProjectCard v-bind="project" />
          </div>
        </div>
      </section>

      <!-- ================================= -->
      <!-- MODAL -->
      <!-- ================================= -->
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6 overflow-auto"
        @click.self="closeModal"
      >
        <div class="bg-slate-900 rounded-2xl max-w-5xl w-full py-8 px-6 space-y-8">

          <!-- Header -->
          <div class="flex justify-between items-start">
            <div>
              <h1 class="text-3xl font-bold">{{ selectedProject.title }}</h1>
              <p class="text-slate-300">{{ selectedProject.description }}</p>
            </div>

            <button
              @click="closeModal"
              class="text-slate-400 hover:text-lime-400 text-2xl"
            >
              ✕
            </button>
          </div>

          <!-- Images -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              v-for="img in selectedProject.extraImages?.length
                ? selectedProject.extraImages
                : [selectedProject.image || defaultImage]"
              :key="img"
              :src="img || defaultImage"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>

          <!-- Description -->
          <section>
            <h2 class="text-2xl font-semibold mb-2">Description détaillée</h2>
            <p class="text-slate-300">
              {{ selectedProject.detailedDescription }}
            </p>
          </section>

          <!-- Technique -->
          <section>
            <h2 class="text-2xl font-semibold mb-2">Aspects techniques</h2>
            <p class="text-slate-300">
              {{ selectedProject.technicalDetails }}
            </p>
          </section>

          <!-- Apprentissage -->
          <section>
            <h2 class="text-2xl font-semibold mb-2">Ce que j'ai appris</h2>
            <p class="text-slate-300">
              {{ selectedProject.learned }}
            </p>
          </section>

          <!-- Sources -->
          <section v-if="selectedProject.sources?.length">
            <h2 class="text-2xl font-semibold mb-2">Sources</h2>
            <ul class="list-disc list-inside text-slate-300">
              <li
                v-for="link in selectedProject.sources"
                :key="link"
              >
                <a
                  :href="link"
                  target="_blank"
                  class="text-lime-400 hover:underline"
                >
                  {{ link }}
                </a>
              </li>
            </ul>
          </section>

        </div>
      </div>

    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import defaultImage from '@/assets/project-default.jpg'

interface Project {
  title: string
  description: string
  image?: string
  teamSize: number
  type: string
  technologies: string[]
  slug: string
  extraImages?: string[]
  detailedDescription?: string
  technicalDetails?: string
  learned?: string
  sources?: string[]
  featured?: boolean
  order: number
}

const projects = ref<Project[]>([
  {
    title: 'Portfolio',
    description: 'Portfolio moderne développé avec Vue 3 et Tailwind.',
    image: defaultImage,
    teamSize: 1,
    type: 'Personnel',
    technologies: ['Vue', 'Tailwind'],
    slug: 'portfolio',
    extraImages: [defaultImage],
    detailedDescription: 'Description complète du portfolio.',
    technicalDetails: 'Vue 3 + Composition API + Tailwind.',
    learned: 'Structuration avancée et architecture propre.',
    sources: ['https://github.com/username/portfolio'],
    featured: true,
    order: 1
  },
  {
    title: 'Application Universitaire',
    description: 'Projet académique collaboratif.',
    image: defaultImage,
    teamSize: 3,
    type: 'Universitaire',
    technologies: ['Java', 'SQL'],
    slug: 'app-universitaire',
    extraImages: [defaultImage, defaultImage],
    detailedDescription: 'Application développée en équipe.',
    technicalDetails: 'Java backend + base SQL.',
    learned: 'Travail en équipe et gestion Git.',
    sources: [],
    featured: true,
    order: 2
  },
  {
    title: 'API Backend',
    description: 'API REST sécurisée.',
    image: defaultImage,
    teamSize: 2,
    type: 'Professionnel',
    technologies: ['Node', 'MongoDB'],
    slug: 'api-backend',
    extraImages: [defaultImage],
    detailedDescription: 'API sécurisée avec authentification.',
    technicalDetails: 'Node + Express + JWT.',
    learned: 'Architecture backend sécurisée.',
    sources: ['https://github.com/username/api-backend'],
    featured: true,
    order: 3
  }
])

/* ============================= */
/* CAROUSEL */
/* ============================= */

const featuredProjects = computed(() =>
  projects.value.filter(p => p.featured)
)

const currentIndex = ref(0)
const total = computed(() => featuredProjects.value.length)

const centerProject = computed(() =>
  featuredProjects.value[currentIndex.value]
)

const leftProject = computed(() => {
  if (total.value < 2) return null
  return featuredProjects.value[(currentIndex.value - 1 + total.value) % total.value]
})

const rightProject = computed(() => {
  if (total.value < 2) return null
  return featuredProjects.value[(currentIndex.value + 1) % total.value]
})

function next() {
  if (total.value < 2) return
  currentIndex.value = (currentIndex.value + 1) % total.value
}

function prev() {
  if (total.value < 2) return
  currentIndex.value = (currentIndex.value - 1 + total.value) % total.value
}

/* ============================= */
/* MODAL */
/* ============================= */

const selectedProject = ref<Project | null>(null)

function openModal(project: Project) {
  selectedProject.value = project
}

function closeModal() {
  selectedProject.value = null
}
</script>
