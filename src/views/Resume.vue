<template>
  <main class="bg-slate-900 text-slate-50 min-h-screen flex justify-center">
    <div class="w-full max-w-5xl px-6 py-20 space-y-24">

      <!-- SECTION CV -->
      <section class="w-full max-w-4xl border border-slate-700 rounded-2xl p-8 mx-auto">
        <!-- Ligne CV -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 class="text-2xl font-semibold">Curriculum Vitae</h1>
            <p class="text-slate-300 text-sm mt-1">
              Aperçu synthétique de mon parcours académique et technique
            </p>
          </div>

          <div class="flex gap-4 flex-wrap">
            <!-- Prévisualiser -->
            <button
              @click="openPreview = true"
              class="px-6 py-2 rounded-xl border border-slate-700 hover:border-lime-400 hover:text-lime-400 transition"
            >
              Prévisualiser
            </button>

            <!-- Télécharger -->
            <a
              :href="cvFile"
              download
              class="px-6 py-2 rounded-xl bg-lime-400 text-slate-900 font-medium hover:bg-lime-300 transition"
            >
              Télécharger
            </a>
          </div>
        </div>

        <!-- MODAL PRÉVISUALISATION -->
        <div
          v-if="openPreview"
          class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6"
        >
          <div class="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-5xl h-[80vh] flex flex-col">
            <div class="flex items-center justify-between px-6 py-4 border-b border-slate-700">
              <h2 class="text-lg font-semibold">Prévisualisation du CV</h2>
              <button
                @click="openPreview = false"
                class="text-slate-300 hover:text-lime-400 transition"
              >
                Fermer
              </button>
            </div>
            <div class="flex-1">
              <iframe :src="cvFile" class="w-full h-full rounded-b-2xl"></iframe>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION PARCOURS DE FORMATION -->
      <section class="w-full max-w-4xl border border-slate-700 rounded-2xl p-8 mx-auto">
        <div class="w-full max-w-3xl px-6">

          <h2 class="text-2xl font-semibold mb-12 text-center">
            Parcours
          </h2>

          <!-- Timeline centrée -->
          <div class="flex flex-col items-center relative">
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-slate-700"></div>

            <div
              v-for="item in formations"
              :key="item.id"
              class="relative w-full max-w-md mb-12 flex flex-col items-start md:items-start cursor-pointer"
              @click="openFormation(item)"
            >
              <!-- Point -->
              <span
                class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-lime-400 z-10"
              ></span>

              <!-- Contenu -->
              <div class="mt-6 ml-0 md:ml-6 bg-slate-800 rounded-xl p-4 w-full z-0">
                <p class="text-sm text-lime-400 font-medium">{{ item.period }}</p>
                <h3 class="text-lg font-semibold text-slate-50 mt-1">{{ item.title }}</h3>
                <p class="text-slate-300 text-sm mt-1">{{ item.type }}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- MODAL FORMATION -->
      <div
        v-if="selectedFormation"
        class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6"
        @click.self="closeFormation"
      >
        <div
          class="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col"
        >
          <!-- Header -->
          <div class="flex justify-between items-start px-6 py-4 border-b border-slate-700">
            <div>
              <p class="text-sm text-lime-400">{{ selectedFormation.period }}</p>
              <h3 class="text-xl font-semibold mt-1">{{ selectedFormation.title }}</h3>
              <p class="text-slate-300 text-sm mt-1">{{ selectedFormation.type }}</p>
            </div>

            <button
              @click="closeFormation"
              class="text-slate-400 hover:text-lime-400 transition"
            >
              ✕
            </button>
          </div>

          <!-- Contenu -->
          <div class="px-6 py-6 overflow-y-auto text-slate-300 leading-relaxed">
            {{ selectedFormation.description }}
          </div>
        </div>
      </div>


      <!-- SECTION COMPÉTENCES -->
      <section class="w-full max-w-5xl mx-auto border border-slate-700 rounded-2xl p-8">
        <h2 class="text-2xl font-semibold mb-12 text-center">Compétences</h2>

        <!-- Sous-section : Compétences professionnelles -->
        <div class="mb-12">
          <h3 class="text-lg font-semibold text-lime-400 mb-4">Compétences professionnelles</h3>
          <div class="flex flex-wrap gap-4 justify-start">
            <div
              v-for="(comp, index) in professionalSkills"
              :key="index"
              class="bg-slate-800 text-slate-50 px-4 py-3 rounded-xl shadow hover:shadow-lg transition flex-1 min-w-[8rem] max-w-[calc(33%-1rem)] text-center"
            >
              {{ comp }}
            </div>
          </div>
        </div>

        <!-- Sous-section : Technologies maîtrisées -->
        <div class="mb-12">
          <h3 class="text-lg font-semibold text-lime-400 mb-4">Technologies maîtrisées</h3>
          <div class="flex flex-wrap gap-4 justify-start">
            <div
              v-for="(tech, index) in technologies"
              :key="index"
              class="bg-slate-800 text-slate-50 px-4 py-3 rounded-xl shadow hover:shadow-lg transition flex-1 min-w-[8rem] max-w-[calc(33%-1rem)] text-center"
            >
              {{ tech }}
            </div>
          </div>
        </div>

        <!-- Sous-section : Langages de programmation -->
        <div>
          <h3 class="text-lg font-semibold text-lime-400 mb-4">Langages de programmation</h3>
          <div class="flex flex-wrap gap-4 justify-start">
            <div
              v-for="(lang, index) in languages"
              :key="index"
              class="bg-slate-800 text-slate-50 px-4 py-3 rounded-xl shadow hover:shadow-lg transition flex-1 min-w-[8rem] max-w-[calc(33%-1rem)] text-center"
            >
              {{ lang }}
            </div>
          </div>
        </div>
      </section>

    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import cvFile from '@/assets/SAAD-Badis-CV.pdf'

const openPreview = ref(false)

interface Formation {
  id: number
  period: string
  title: string
  type: string
  description: string
}

const formations = ref<Formation[]>([
  {
    id: 1,
    period: '2023 – 2026',
    title: 'BUT Informatique',
    type: 'Formation universitaire – IUT',
    description:
      'Formation orientée développement logiciel, systèmes d’information, bases de données et architecture applicative.'
  },
  {
    id: 2,
    period: '2021 – 2023',
    title: 'Baccalauréat STI2D',
    type: 'Formation secondaire',
    description:
    'J\'ai obtenu mon Baccalauréat STI2D (Sciences et Technologies de l\'Industrie et du Développement Durable), spécialité Systèmes d’Information et Numérique (SIN), avec mention Très Bien. Cette formation m’a permis de développer une solide compréhension des systèmes informatiques, électroniques et de programmation, tout en renforçant ma rigueur et mes capacités d’analyse.'
  }
])

const selectedFormation = ref<Formation | null>(null)

function openFormation(item: Formation) {
  selectedFormation.value = item
}

function closeFormation() {
  selectedFormation.value = null
}

const professionalSkills = [
  'Développement Web',
  'Développement Système',
  'Développement Logiciel',
  'Analyse de données',
  'Architecture SI',
  'Méthodologie agile',
  'Scrum Master',
  'Gestion de projet',
  'Gestion d\'équipe'
]

const technologies = [
  'Git',
  'Docker',
  'Docker compose',
  'Unity',
  'Node.js',
  'MongoDB',
  'Symfony',
  'Vue.js',
  'Tailwind',
  'Godot',
  'Linux',
  'Windows'
]

const languages = [
  'HTML / CSS',
  'JavaScript / TypeScript',
  'Python',
  'C / C++ / C#',
  'Java',
  'Php',
  'SQL',
  'CQL',
  'PL/SQL',
  'Lua'
]

</script>
