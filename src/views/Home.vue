<template>
  <main class="bg-slate-900 text-slate-50 min-h-screen">
    <!-- HERO -->
    <section class="max-w-7xl mx-auto px-6 py-28">
      <div class="grid md:grid-cols-2 gap-20 items-center">

        <!-- Texte -->
        <div class="space-y-8">
          <p class="uppercase tracking-widest text-lime-400 font-medium">Portfolio Personnel</p>

          <h1 class="text-4xl md:text-5xl font-semibold leading-tight">
            Architecte SI<br />
            <span class="text-slate-300">en construction</span>
          </h1>

          <p class="text-slate-300 max-w-xl leading-relaxed">
            Passionné par la conception de systèmes d’information élégants et cohérents.
            Ce portfolio reflète la maîtrise technique et la structure réfléchie des projets.
          </p>

          <div class="flex gap-5 pt-4">
            <a
              href="/cv.pdf"
              download
              class="px-8 py-3 rounded-xl bg-lime-400 text-slate-900 font-medium hover:bg-lime-300 transition shadow-lg"
            >
              Télécharger le CV
            </a>
            <RouterLink
              to="/projets"
              class="px-8 py-3 rounded-xl border border-slate-700 text-slate-50 hover:border-lime-400 hover:text-lime-400 transition"
            >
              Projets
            </RouterLink>
          </div>
        </div>

        <!-- Image -->
        <div class="flex justify-center">
          <div class="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-700">
            <img src="@/assets/profile.png" alt="Photo de Badis Saad" class="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION DÉTAIL / VISON -->
    <section class="max-w-5xl mx-auto px-6 pb-32">
      <div class="border-l-4 border-lime-400 pl-6">
        <h2 class="text-2xl font-semibold text-slate-50 mb-4">Démarche et vision</h2>
        <p class="text-slate-300 leading-relaxed">
          Mon objectif est d’élever chaque projet au rang d’architecture cohérente,
          avec un accent sur la lisibilité, la maintenabilité et l’élégance technique.
          Le fond sombre unifie l’ensemble de la page, tandis que les accents citron
          soulignent les éléments interactifs et importants.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>
