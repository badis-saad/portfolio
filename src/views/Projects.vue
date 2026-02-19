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
  extraImages?: string[]
  detailedDescription?: string
  technicalDetails?: string
  learned?: string
  sources?: string[]
  featured?: boolean
  order: number
}

const projects = ref<Project[]>([
  /*{
    title: 'Portfolio',
    description: 'Portfolio moderne développé avec Vue 3 et Tailwind.',
    image: defaultImage,
    teamSize: 1,
    type: 'Personnel',
    technologies: ['Vue', 'Tailwind'],
    extraImages: [defaultImage],
    detailedDescription: 'Description complète du portfolio.',
    technicalDetails: 'Vue 3 + Composition API + Tailwind.',
    learned: 'Structuration avancée et architecture propre.',
    sources: ['https://github.com/username/portfolio'],
    featured: true,
    order: 1
  },
  {
    title: 'API Backend',
    description: 'API REST sécurisée.',
    image: defaultImage,
    teamSize: 2,
    type: 'Professionnel',
    technologies: ['Node', 'MongoDB'],
    extraImages: [defaultImage],
    detailedDescription: 'API sécurisée avec authentification.',
    technicalDetails: 'Node + Express + JWT.',
    learned: 'Architecture backend sécurisée.',
    sources: ['https://github.com/username/api-backend'],
    featured: true,
    order: 2
  },
  {
    title: 'Application Universitaire',
    description: 'Projet académique collaboratif.',
    image: defaultImage,
    teamSize: 3,
    type: 'Universitaire',
    technologies: ['Java', 'SQL'],
    extraImages: [defaultImage, defaultImage],
    detailedDescription: 'Application développée en équipe.',
    technicalDetails: 'Java backend + base SQL.',
    learned: 'Travail en équipe et gestion Git.',
    sources: [],
    featured: true,
    order: 3
  },
  {
    title: 'Portfolio',
    description: 'Portfolio moderne développé avec Vue 3 et Tailwind.',
    image: defaultImage,
    teamSize: 1,
    type: 'Personnel',
    technologies: ['Vue', 'Tailwind'],
    extraImages: [defaultImage],
    detailedDescription: 'Description complète du portfolio.',
    technicalDetails: 'Vue 3 + Composition API + Tailwind.',
    learned: 'Structuration avancée et architecture propre.',
    sources: ['https://github.com/username/portfolio'],
    featured: true,
    order: 4
  },
  */
  {
    title: 'CTF+Z',
    description: 'Dans le cadre d’un projet de mise en application d’un Capture The Flag (CTF) pour un client en 2024, j’ai occupé le rôle de Scrum Master et été responsable de l’infrastructure.',
    image: defaultImage,
    teamSize: 4,
    type: 'Universitaire',
    technologies: ['CTFd (framework CTF)', 'Python', 'Docker', 'Discord API', 'Flask', 'MySQL', 'HTML/CSS', 'GitLab'],
    extraImages: [defaultImage],
    detailedDescription: 'CTF+Z est une plateforme CTF destinée à sensibiliser un large public à la cybersécurité via des défis interactifs. Elle se veut conviviale, accessible et sécurisée. Les utilisateurs peuvent participer seuls ou en équipe à des événements regroupant plusieurs types de challenges. Le tout repose sur CTFd, enrichi de personnalisations répondant aux besoins précis de l’association cliente. Ce projet a été réalisé dans le cadre du BUT Informatique (année 2), en partenariat avec l’association Yggame. Il s’inscrit dans une SAE mobilisant les compétences de développement d’applications, d’administration système, d’optimisation logicielle et de conduite de projet.',
    technicalDetails: 'Durée\n' +
      '4 mois : de septembre 2024 à décembre 2024, répartis en 5 sprints selon la méthode agile Scrum, avec une livraison finale en janvier.\n' +
      '\nLe projet a été mené en utilisant la méthode Agile pour la planification et l’organisation de l’équipe. J’ai travaillé avec Docker Compose pour la gestion de l’infrastructure et un framework Python (CTFd) pour le développement du site CTF. Mon rôle a également consisté à ajouter les fonctionnalités demandées par le client, tout en assurant la coordination et la gestion des tâches de l’équipe.',
    learned: 'Mes missions principales\n' +
      'Configuration technique\n' +
      'J’ai pris en charge toute l’installation et configuration de Docker et Docker Compose pour déployer la plateforme CTFd sur le VPS du client.\n' +
      'J’ai intégré les outils de sécurité comme docker compose, en garantissant l’isolation des défis via des conteneurs.\n' +
      'Déploiement\n' +
      'Mise en place d’un environnement serveur sécurisé et scalable.\n' +
      'Configuration du fichier docker-compose.yml, des volumes et des variables d’environnement sensibles.\n' +
      'Liaison avec la base de données via config.ini.\n' +
      'Création de plugins\n' +
      'J’ai développé un plugin Discord notifier (CTFd_chat_notifier) permettant d’envoyer automatiquement une alerte lorsqu’un défi est réussi.\n' +
      'Participation à l’intégration d’un plugin de pénalité en cas de mauvaise réponse (incorrect_penalty_challenges), en Python et JavaScript.\n' +
      'Scrum Master\n' +
      'Organisation de réunions hebdomadaires pour améliorer la communication d’équipe après un sprint difficile.\n' +
      'Suivi des tâches sur GitLab, gestion des priorités, coordination des merges.\n' +
      'Support technique auprès des coéquipiers en cas de blocage sur l’environnement.',
    sources: [],
    featured: true,
    order: 4
  },
  {
    title: 'Nuit de l\'info 2024',
    description: '#Concours national · #Équipe de 6\n' +
      'La Nuit de l\'Info 2024 a été une expérience intense et enrichissante, s’étendant de 16h39 jusqu’à 8h04 le lendemain matin, sur le thème « L’eau et le corps humain ». Notre équipe de six membres a conçu un site web pédagogique en un temps limité, en utilisant un framework tel que Symfony.',
    image: defaultImage,
    teamSize: 6,
    type: 'Universitaire',
    technologies: ['Symfony', 'JS'],
    extraImages: [defaultImage],
    detailedDescription: 'De mon côté je me suis occupé de la page dark UX du podcast en utilisant javascript. Et j’ai collaboré avec mon équipe pour concevoir la page principale. Et j\'ai poursuivi cette collaboration en fusionnant 2 fonctionnalités de mon équipe. La collaboration a été un élément clé de notre réussite. Chaque membre a mis à profit ses compétences spécifiques, qu’il s’agisse de programmation, de design ou de gestion de projet. Travailler dans une contrainte temporelle aussi forte nous a appris à prioriser les tâches de manière efficace et à gérer notre temps avec rigueur. Ce thème stimulant nous a encouragés à faire preuve de créativité pour proposer des solutions innovantes et sensibiliser les utilisateurs de manière éducative.',
    technicalDetails: 'Le projet a été développé en utilisant Symfony pour le backend, avec une architecture MVC bien définie. Le frontend a été réalisé avec JavaScript pour créer une expérience utilisateur interactive et engageante. Nous avons également utilisé des outils de gestion de projet pour coordonner nos efforts et assurer une communication fluide au sein de l’équipe.',
    learned: 'Cette expérience m’a permis de renforcer mes compétences en développement web, de travailler efficacement en équipe et de gérer un projet dans des conditions de temps limitées. J’ai également appris à faire preuve de créativité pour répondre à un thème donné et à collaborer avec des personnes aux compétences diverses pour atteindre un objectif commun.',
    sources: ['https://ndi2024.jumperboost.fr'],
    featured: true,
    order: 6
  },
  {
    title: 'Code Game Jam Janvier 2024',
    description: 'Lors de la 8ᵉ édition de la Code Game Jam en janvier 2024, j’ai participé à un événement intensif de 30 heures pour créer un jeu vidéo.',
    image: defaultImage,
    teamSize: 6,
    type: 'Universitaire',
    technologies: ['LUA', 'LOVE2D'],
    extraImages: [defaultImage],
    detailedDescription: 'Lors de la 8ᵉ édition de la Code Game Jam en janvier 2024, j’ai participé à un événement intensif de 30 heures pour créer un jeu vidéo en utilisant le langage de programmation LUA.',
    technicalDetails: 'LOVE2D pour le développement du jeu, avec une architecture orientée objet pour gérer les différentes entités du jeu. Le projet a été réalisé en équipe de 6 personnes, nécessitant une coordination efficace et une gestion du temps rigoureuse pour respecter les délais serrés de la jam.',
    learned: 'Ce projet m’a permis de travailler en équipe, d’appliquer ma créativité dans un cadre limité et de perfectionner ma gestion du temps, tout en développant un jeu interactif et fonctionnel.',
    sources: ['https://arqaurelien.itch.io/eggdrasil'],
    featured: true,
    order: 7
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
