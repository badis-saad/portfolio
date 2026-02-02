<script setup lang="ts">

import ProjectCard from "@/components/ProjectCard.vue";
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold text-slate-50 mb-8">
      Projets
    </h1>
    <p class="text-slate-300">
      Cette section est en cours de développement. Revenez bientôt pour découvrir mes projets !
    </p>
    <ProjectCard
      title="Projet Exemple"
      description="Ceci est une description d'exemple pour un projet en cours de développement."
      :teamSize="3"
      type="Personnel"
      :technologies="['Vue.js', 'TypeScript', 'Tailwind CSS']"
      slug="projet-exemple"
    />
  </div>
</template>

<style scoped>

</style>
