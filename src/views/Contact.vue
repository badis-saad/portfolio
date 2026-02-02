<template>
  <main class="bg-slate-900 text-slate-50 min-h-screen flex justify-center px-6 py-20">
    <div class="w-full max-w-3xl space-y-16">

      <!-- SECTION INFOS DE CONTACT -->
      <section class="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center">
        <h1 class="text-2xl font-semibold mb-6">Contactez-moi</h1>

        <div class="flex flex-col md:flex-row md:justify-around gap-6">
          <!-- Email -->
          <div class="flex flex-col items-center">
            <p class="text-lime-400 font-medium">Email</p>
            <a href="mailto:badis.saad@proton.me" class="hover:text-lime-300 transition">badis.saad@proton.me</a>
          </div>

          <!-- LinkedIn -->
          <div class="flex flex-col items-center">
            <p class="text-lime-400 font-medium">LinkedIn</p>
            <a href="https://www.linkedin.com/in/badis-saad/" target="_blank" class="hover:text-lime-300 transition">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96zM3 8.98h3.96V21H3V8.98zM9.98 8.98h3.8v1.64h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.73 2.63 4.73 6.05V21h-3.96v-5.38c0-1.28-.02-2.93-1.79-2.93-1.79 0-2.06 1.4-2.06 2.84V21H9.98V8.98z"
                />
              </svg>
            </a>
          </div>

          <!-- GitHub -->
          <div class="flex flex-col items-center">
            <p class="text-lime-400 font-medium">GitHub</p>
            <a href="https://github.com/badis-saad" target="_blank" class="hover:text-lime-300 transition">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 0.5C5.73 0.5.75 5.7.75 12.3c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.34.8-4.04-1.7-4.04-1.7-.55-1.5-1.34-1.9-1.34-1.9-1.1-.8.08-.8.08-.8 1.22.1 1.86 1.3 1.86 1.3 1.08 1.9 2.83 1.4 3.52 1.1.1-.8.42-1.4.76-1.7-2.67-.3-5.47-1.4-5.47-6.2 0-1.4.47-2.6 1.24-3.5-.12-.3-.54-1.6.12-3.4 0 0 1.02-.3 3.34 1.3a11.3 11.3 0 0 1 6.08 0c2.32-1.6 3.34-1.3 3.34-1.3.66 1.8.24 3.1.12 3.4.77.9 1.24 2.1 1.24 3.5 0 4.8-2.8 5.9-5.48 6.2.44.4.82 1.1.82 2.3v3.4c0 .3.2.7.8.6 4.76-1.6 8.2-6.1 8.2-11.4C23.25 5.7 18.27.5 12 .5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- SECTION FORMULAIRE DE CONTACT -->
      <section class="bg-slate-800 border border-slate-700 rounded-2xl p-8">
        <h2 class="text-xl font-semibold mb-6 text-center">Envoyez-moi un message</h2>

        <form
          @submit.prevent="sendMail"
          class="flex flex-col gap-4"
        >
          <div class="flex flex-col md:flex-row gap-4">
            <input
              v-model="firstName"
              type="text"
              placeholder="Prénom"
              required
              class="flex-1 px-4 py-2 rounded-xl bg-slate-700 border border-slate-600 focus:border-lime-400 focus:outline-none"
            />
            <input
              v-model="lastName"
              type="text"
              placeholder="Nom"
              required
              class="flex-1 px-4 py-2 rounded-xl bg-slate-700 border border-slate-600 focus:border-lime-400 focus:outline-none"
            />
          </div>

          <input
            v-model="email"
            type="email"
            placeholder="Votre email"
            required
            class="w-full px-4 py-2 rounded-xl bg-slate-700 border border-slate-600 focus:border-lime-400 focus:outline-none"
          />

          <input
            v-model="subject"
            type="text"
            placeholder="Objet"
            required
            class="w-full px-4 py-2 rounded-xl bg-slate-700 border border-slate-600 focus:border-lime-400 focus:outline-none"
          />

          <textarea
            v-model="message"
            placeholder="Votre message"
            rows="6"
            required
            class="w-full px-4 py-2 rounded-xl bg-slate-700 border border-slate-600 focus:border-lime-400 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            class="px-6 py-3 rounded-xl bg-lime-400 text-slate-900 font-medium hover:bg-lime-300 transition"
          >
            Envoyer
          </button>
        </form>
      </section>

    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Formulaire
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

// Fonction pour ouvrir le mailto avec tous les champs
function sendMail() {
  const mailto = `mailto:badis.saad@proton.me?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(
    `Nom: ${lastName.value}\nPrénom: ${firstName.value}\nEmail: ${email.value}\n\nMessage:\n${message.value}`
  )}`
  window.location.href = mailto
}
</script>
