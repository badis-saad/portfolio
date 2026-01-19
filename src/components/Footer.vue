<template>
  <footer class="bg-slate-50 border-t border-slate-200">
    <div
      class="max-w-7xl mx-auto px-6 py-10
             flex flex-col md:flex-row
             items-center justify-between gap-6"
    >
      <!-- Crédit -->
      <p class="text-sm text-slate-500">
        © {{ year }} Badis Saad — Architecture des Systèmes d’Information
      </p>

      <!-- Liens + logos -->
      <div class="flex items-center gap-8">
        <!-- GitHub -->
        <a
          href="https://github.com/Badis-Saad"
          target="_blank"
          aria-label="GitHub"
          class="text-slate-500 hover:text-lime-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 fill-current"
          >
            <path
              d="M12 0.5C5.73 0.5.75 5.7.75 12.3c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.34.8-4.04-1.7-4.04-1.7-.55-1.5-1.34-1.9-1.34-1.9-1.1-.8.08-.8.08-.8 1.22.1 1.86 1.3 1.86 1.3 1.08 1.9 2.83 1.4 3.52 1.1.1-.8.42-1.4.76-1.7-2.67-.3-5.47-1.4-5.47-6.2 0-1.4.47-2.6 1.24-3.5-.12-.3-.54-1.6.12-3.4 0 0 1.02-.3 3.34 1.3a11.3 11.3 0 0 1 6.08 0c2.32-1.6 3.34-1.3 3.34-1.3.66 1.8.24 3.1.12 3.4.77.9 1.24 2.1 1.24 3.5 0 4.8-2.8 5.9-5.48 6.2.44.4.82 1.1.82 2.3v3.4c0 .3.2.7.8.6 4.76-1.6 8.2-6.1 8.2-11.4C23.25 5.7 18.27.5 12 .5z"
            />
          </svg>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com"
          target="_blank"
          aria-label="LinkedIn"
          class="text-slate-500 hover:text-lime-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 fill-current"
          >
            <path
              d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96zM3 8.98h3.96V21H3V8.98zM9.98 8.98h3.8v1.64h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.73 2.63 4.73 6.05V21h-3.96v-5.38c0-1.28-.02-2.93-1.79-2.93-1.79 0-2.06 1.4-2.06 2.84V21H9.98V8.98z"
            />
          </svg>
        </a>

        <!-- Contact -->
        <RouterLink
          to="/contact"
          aria-label="Contact"
          class="text-slate-500 hover:text-lime-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 fill-current"
          >
            <path
              d="M2 6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6zm2 0 8 5 8-5H4zm16 12V8l-8 5-8-5v10h16z"
            />
          </svg>
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
