<template>
  <main class="bg-slate-900 text-slate-50 min-h-screen">
    <!-- HERO -->
    <section class="max-w-7xl mx-auto px-6 py-28">
      <div class="grid md:grid-cols-2 gap-20 items-center">

        <!-- Texte -->
        <div class="space-y-8">
          <p class="uppercase tracking-widest text-lime-400 font-medium">Portfolio Personnel</p>

          <h1 class="text-4xl md:text-5xl font-semibold leading-tight">
            Étudiant en informatique orienté systèmes d’information<br />
            <span class="text-slate-300">en étude</span>
          </h1>

          <p class="text-slate-300 max-w-xl leading-relaxed">
            Étudiant en BUT Informatique et en L3 Management Technologies et Sciences, je construis un profil à l’interface entre développement, analyse fonctionnelle et gestion de projet SI. Ce portfolio présente les projets qui reflètent le mieux ma manière de travailler : comprendre un besoin, structurer une solution et contribuer à des réalisations cohérentes, utiles et bien pensées.
          </p>

          <div class="flex gap-5 pt-4 flex-wrap">
            <a
              :href="cvFile"
              download
              class="px-8 py-3 rounded-xl bg-lime-400 text-slate-900 font-medium hover:bg-lime-300 transition shadow-lg"
            >
              Télécharger le CV
            </a>
            <RouterLink
              to="/projects"
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
          J’accorde une grande importance à la clarté, à la cohérence et à la compréhension du besoin. J’aime travailler sur des projets où la technique sert une logique plus large : organisation, usage, collaboration et structuration du système d’information. L’univers citron de ce portfolio reflète cette recherche d’identité visuelle, de lisibilité et de cohérence d’ensemble.
        </p>
      </div>
    </section>
    <section class="max-w-5xl mx-auto px-6 pb-32">
      <div class="border-l-4 border-lime-400 pl-6">
        <h2 class="text-2xl font-semibold text-slate-50 mb-4">À propos de moi</h2>
        <p class="text-slate-300 leading-relaxed">
        Je suis étudiant à Montpellier, actuellement en BUT Informatique parcours intégration d’applications et management du système d’information, ainsi qu’en L3 Management Technologies et Sciences. Je m’intéresse particulièrement aux métiers situés à l’interface entre les besoins métiers, les outils et les projets : AMOA, analyse fonctionnelle, coordination et systèmes d’information. J’aime comprendre comment un projet s’organise, comment une solution se structure et comment une équipe transforme une idée en réalisation concrète.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import cvFile from '@/assets/SAAD-Badis-CV.pdf'
</script>
