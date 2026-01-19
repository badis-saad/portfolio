<!-- CVSection.vue -->
<template>
  <div class="cv-section p-4 border border-gray-300 rounded-lg shadow-md bg-white">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">Mon CV</h2>
      <div class="space-x-2">
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          @click="downloadCV"
        >
          Download
        </button>
        <button
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          @click="previewCV"
        >
          Prévisualiser
        </button>
      </div>
    </div>

    <!-- Placeholder CV aperçu -->
    <div class="cv-preview border border-gray-200 rounded p-4 bg-gray-50 text-gray-600">
      Aperçu du CV ici...
    </div>
  </div>
</template>

<script setup>
const downloadCV = () => {
  // Placeholder : futur téléchargement
  alert('Téléchargement du CV');
};

const previewCV = () => {
  // Placeholder : futur aperçu
  alert('Prévisualisation du CV');
};
</script>

<style scoped>
.cv-section {
  font-family: 'Inter', sans-serif;
}
.cv-preview {
  min-height: 150px;
}
</style>
