<template>
  <div class="min-h-screen pt-20">
    <!-- About Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            À propos de moi
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Développeur passionné avec plus de 5 ans d'expérience dans la création 
            d'applications web modernes et performantes.
          </p>
        </div>
      </div>
    </section>

    <!-- Personal Story -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Mon Parcours
            </h2>
            <div class="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Diplômé en informatique avec une spécialisation en développement web, 
                j'ai commencé ma carrière en tant que développeur junior avant de 
                me spécialiser dans les technologies front-end modernes.
              </p>
              <p>
                Au fil des années, j'ai développé une expertise approfondie en Vue.js, 
                React et TypeScript, tout en gardant une veille technologique constante 
                pour rester à jour avec les dernières innovations du secteur.
              </p>
              <p>
                Je suis particulièrement passionné par l'UX/UI et l'optimisation des 
                performances, car je crois fermement qu'une bonne expérience utilisateur 
                est la clé du succès d'un projet web.
              </p>
            </div>
          </div>
          <div class="card p-8">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Mes Valeurs
            </h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                  <span class="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">Qualité</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Code propre et maintenable</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                  <span class="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">Innovation</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Adoption des dernières technologies</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                  <span class="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">Collaboration</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Travail d'équipe et communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>