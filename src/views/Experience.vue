<template>
  <div class="min-h-screen pt-20">
    <!-- Experience Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Mon Expérience
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Découvrez mon parcours professionnel et mes formations
          </p>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 transform md:-translate-x-0.5"></div>
            
            <div class="space-y-12">
              <div 
                v-for="(item, index) in timeline" 
                :key="index"
                class="relative flex items-center"
                :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
              >
                <!-- Timeline dot -->
                <div class="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-600 rounded-full transform -translate-x-1.5 md:-translate-x-1.5 z-10"></div>
                
                <!-- Content -->
                <div class="ml-12 md:ml-0 md:w-1/2" :class="index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'">
                  <div class="card p-6">
                    <div class="flex items-center space-x-2 mb-2">
                      <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                        {{ item.type }}
                      </span>
                      <span class="text-sm text-gray-500 dark:text-gray-400">
                        {{ item.period }}
                      </span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {{ item.title }}
                    </h3>
                    <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {{ item.company }}
                    </p>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                      {{ item.description }}
                    </p>
                    <div class="flex flex-wrap gap-4" v-if="item.skills">
                      <span 
                        v-for="skill in item.skills" 
                        :key="skill"
                        class="px-2 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>
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
const timeline = [
  {
    type: 'Expérience',
    title: 'Développeur stagiaire',
    company: 'YourFitness, Dunkerque',
    period: 'Avril - Juin 2025',
    description: 'Conception et développement d\'outils numériques pour optimiser la gestion interne et automatiser certaines tâches. Développement de l\'application Deep Pool (suivi entretien, calculs automatiques, rapports PDF, sauvegarde Drive) et logiciel de tri intelligent de PDF avec OCR et système de mots-clés.',
    skills: ['Python', 'Qt', 'Kivy', 'OCR', 'Automatisation', 'PDF']
  },
  {
    type: 'Expérience',
    title: 'Opérateur d\'attraction',
    company: 'Plopsaland',
    period: 'Juin - Septembre 2025',
    description: 'Opération des commandes des attractions en suivant les procédures techniques et sécuritaires. Accueil et information des visiteurs sur le fonctionnement des attractions. Veille au respect des consignes de sécurité pour garantir une expérience optimale.',
    skills: ['Sécurité', 'Accueil client', 'Maintenance de premier niveau', 'Travail d\'équipe']
  },
  {
    type: 'Formation',
    title: 'BUT Informatique Parcours A',
    company: 'Université du Littoral Côte d\'Opale, Calais',
    period: '2023 - 2025',
    description: 'Bachelor Universitaire de Technologie en Informatique. Formation complète en développement logiciel avec des projets pratiques : création d\'un jeu textuel en C, gamification d\'une salle de sport, et logiciel d\'entretien de piscine.',
    skills: ['Python', 'Java', 'C', 'SQL', 'PHP', 'HTML/CSS', 'SCRUM', 'AGILE', 'PERT', 'Flutter']
  },
  {
    type: 'Formation',
    title: 'Baccalauréat NSI / Mathématiques',
    company: 'Lycée Auguste Angellier, Dunkerque',
    period: '2020 - 2023',
    description: 'Formation scientifique avec spécialité Numérique et Sciences Informatiques. Acquisition des fondamentaux en programmation et mathématiques.',
    skills: ['Algorithmie', 'Programmation', 'Mathématiques', 'Logique']
  }
]
</script>