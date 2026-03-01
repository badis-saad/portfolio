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
            :key="project.order"
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
  {
    title: "Very Bad Click – Code Game Jam 2026",
    description: "Jeu de survie développé en équipe lors de la 10e édition de la Code Game Jam. Conception du système central de fusibles et de réactivation du panneau électrique.",
    image: defaultImage,
    teamSize: 7,
    type: "Game Jam",
    technologies: ["C#", "Godot", "Git", "Game Design"],
    extraImages: [],
    detailedDescription: `
Projet réalisé lors de la 10e édition de la Code Game Jam.

Après une phase de brainstorming collectif, nous avons conçu un jeu de survie dans lequel le joueur doit récupérer des fusibles dispersés dans une salle plongée dans l’obscurité afin de réactiver un panneau électrique et relancer la fête.

Ma contribution principale a porté sur la mécanique centrale du jeu :
- Conception et implémentation du système de fusibles (ramassage, transport, dépôt).
- Développement du panneau électrique interactif.
- Gestion de la logique de validation (nombre de fusibles requis).
- Activation du système de lumière une fois le panneau réparé.

Cette fonctionnalité constitue le cœur du gameplay : récupérer les éléments nécessaires, réparer le panneau et restaurer l’électricité.
  `,
    technicalDetails: `
Développement en C# sous Godot.

Implémentation :
- Système d’interaction joueur-objet (détection, récupération, dépôt).
- Gestion d’état du panneau électrique (incomplet, réparé, activé).
- Logique conditionnelle déclenchant la remise en lumière de la scène.
- Communication entre objets via signaux et scripts Godot.
- Tests et ajustements pour assurer la stabilité en contexte de game jam.

Exports Windows et Linux.
  `,
    learned: `
Conception d’une mécanique gameplay centrale de bout en bout.
Structuration d’un système basé sur des états et des conditions.
Travail collaboratif dans un environnement multi-rôles (dev, graphisme, sound design).
Gestion du temps et priorisation des fonctionnalités essentielles.
  `,
    sources: [
      "https://milwenn.itch.io/very-bad-click"
    ],
    featured: true,
    order: 1
  },
  {
    title: 'API Backend Neo4j',
    description: 'API REST développée en Spring Boot pour interagir avec une base de données graphe Neo4j via le langage Cypher.',
    image: defaultImage,
    teamSize: 1,
    type: 'Personnel',
    technologies: ['Java', 'Spring Boot', 'Neo4j', 'Cypher', 'REST API'],
    featured: true,
    order: 2,

    extraImages: [defaultImage],

    detailedDescription: `
  Projet personnel réalisé en autonomie dans le but de découvrir une base de données non relationnelle orientée graphe : Neo4j.

  L’objectif était de comprendre la logique des bases en nœuds et relations, ainsi que le langage de requête Cypher, très différent du SQL traditionnel.

  Pour exploiter cette base de données, j’ai développé une API REST en Java avec Spring Boot afin de créer une couche d’abstraction propre et manipulable depuis un client externe.

  Le projet a été réalisé sur une matinée dédiée à l’expérimentation et à la découverte technologique.
  `,

    technicalDetails: `
  - Développement d’une API REST avec Spring Boot
  - Connexion à une base Neo4j
  - Utilisation du langage Cypher pour les requêtes
  - Modélisation en nœuds et relations
  - Tests des endpoints via Postman
  - Architecture simple en couches (Controller / Service / Repository)
  `,

    learned: `
  - Compréhension du fonctionnement des bases de données orientées graphe
  - Différences fondamentales entre SQL relationnel et modèle graphe
  - Manipulation du langage Cypher
  - Intégration de Neo4j dans un projet Spring Boot
  - Mise en place rapide d’une API REST propre en Java
  `,

    sources: [
      'https://github.com/badis-saad/neo4j-java-api'
    ]
  },
  {
    title: "MyAvatar – Clone Gravatar avec Symfony",
    description: "Application web server-side développée avec Symfony permettant d’associer une adresse email à un avatar accessible via un hash SHA256.",
    image: defaultImage,
    teamSize: 4,
    type: "Universitaire",
    technologies: ["PHP", "Symfony", "Twig", "MySQL", "JavaScript", "AJAX"],
    extraImages: [],
    detailedDescription: `
Projet réalisé en équipe de quatre dans le cadre d’un module Symfony.

L’objectif était de développer une application web inspirée de Gravatar, permettant d’associer une image de profil à une adresse email.

Fonctionnalités principales :
- Inscription avec login, mot de passe, email et photo de profil optionnelle.
- Espace privé permettant de visualiser, modifier ou supprimer son avatar.
- Modification sécurisée des informations (email, mot de passe) avec validation par mot de passe actuel.
- Suppression de compte.
- Vérification en temps réel de l’unicité du login et de l’email via JavaScript et requêtes AJAX.
- Accès public aux avatars via une route /avatar/{hash} basée sur un hash SHA256 de l’email.
- Image par défaut si l’utilisateur n’existe pas ou n’a pas d’avatar.
- Possibilité de masquer/démasquer son profil dynamiquement (AJAX).
- Hébergement sur le serveur de l’IUT.
  `,
    technicalDetails: `
Mes contributions principales :

- Setup complet du projet Symfony (configuration environnement, base de données, structure).
- Développement du système d’inscription.
- Implémentation de l’édition des informations utilisateur (Read & Update).
- CRUD complet de l’avatar (upload, stockage sécurisé hors dossier public, suppression).
- Implémentation de la route /avatar/{hash} avec génération SHA256 et retour d’image via BinaryFileResponse.
- Gestion de la mise à jour du hash en cas de modification d’email.
- Mise en place de l’hébergement sur le serveur IUT (FTP, SSH, composer install, droits d’écriture).

Architecture :
- Server-side rendering avec Twig.
- Doctrine ORM pour la gestion des entités.
- JavaScript natif pour les requêtes AJAX (unicité login/email, masquage profil).
- Sécurisation de l’accès aux fichiers via contrôleurs Symfony.
  `,
    learned: `
Approfondissement de Symfony (sécurité, formulaires, événements, rôles).
Gestion complète d’un cycle CRUD sécurisé.
Manipulation de hash SHA256 et logique d’accès conditionnel.
Déploiement et configuration serveur (droits, installation dépendances).
Travail collaboratif structuré avec Git.
  `,
    sources: ['https://webinfo.iutmontp.univ-montp2.fr/~saadb/r5.d.04-my-avatar/public/login',
      'https://gitlabinfo.iutmontp.univ-montp2.fr/saadb/r5.d.04-my-avatar'],
    featured: true,
    order: 3
  },
  {
    title: "Nuit de l’Info 2025 – Application NIRD",
    description: "Développement en équipe d’une application web en une nuit autour du Numérique Inclusif, Responsable et Durable (NIRD).",
    image: defaultImage,
    teamSize: 6,
    type: "Universitaire",
    technologies: ["Vue.js", "JavaScript", "HTML", "CSS", "Git"],
    extraImages: [defaultImage],
    detailedDescription: `
Projet réalisé lors de la Nuit de l’Info 2025 à Montpellier, en équipe de six développeurs.

L’objectif était de concevoir en une seule nuit une application web complète autour du Numérique Inclusif, Responsable et Durable.

Mes contributions :
- Conception et développement d’une barre de navigation circulaire interactive.
- Création d’un effet de texte cinématique (animation d’écriture) sur la page d’accueil.
- Intégration et harmonisation du code développé par l’équipe.
- Débogage collaboratif et optimisation du rendu final sous contrainte de temps.
- Participation à un défi de visualisation sonore pour enrichir l’expérience utilisateur.

Le projet a été conçu, développé et stabilisé en moins de 12 heures.
  `,
    technicalDetails: `
Architecture front-end en Vue.js avec composants réutilisables.
Structuration modulaire du code pour faciliter l’intégration des différentes parties développées par l’équipe.
Gestion des animations en JavaScript et CSS.
Travail collaboratif via Git avec fusion et résolution de conflits.
Optimisation du rendu et corrections de bugs avant livraison finale.
  `,
    learned: `
Renforcement du travail en équipe sous pression.
Amélioration des compétences en intégration et harmonisation de code multi-contributeurs.
Gestion efficace du temps sur un projet à contrainte forte.
Expérimentation créative autour des animations et de la visualisation dynamique.
  `,
    sources: [
      "https://lnkd.in/etZHNgyP"
    ],
    featured: true,
    order: 4
  },
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
