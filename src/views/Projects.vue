<template>
  <div class="min-h-screen pt-20">
    <!--  {
    title: 'SAE C12 IHM Python',
    description: 'Interface graphique développée en Python pour le projet SAE C12. Application avec interface utilisateur moderne et fonctionnalités avancées de gestion.',
    technologies: ['Python', 'Tkinter/PyQt', 'Interface Graphique', 'POO'],
    icon: '🖥️',
    github: 'https://github.com/kaldex0/sae-c12-ihm-python'
  }ts Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Mes Projets
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Découvrez mes réalisations et projets personnels
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" class="card p-6">
            <div class="aspect-video bg-gradient-to-br from-primary-500 to-accent-600 rounded-lg mb-6 flex items-center justify-center">
              <span class="text-white text-4xl">{{ project.icon }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex space-x-4">
              <a :href="project.github" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium inline-flex items-center">
                Voir sur GitHub
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'SAE C12 IHM Python',
    description: 'Interface graphique développée en Python pour le projet SAE C12. Application avec interface utilisateur moderne et fonctionnalités avancées de gestion.',
    technologies: ['Python', 'Tkinter/PyQt', 'Interface Graphique', 'POO'],
    icon: '�',
    github: 'https://github.com/kaldex0/sae-c12-ihm-python'
  },
  {
    title: 'Pool Analyser',
    description: 'Logiciel d\'analyse de piscine développé en Python. Outil permettant l\'analyse et le monitoring des paramètres chimiques de piscine.',
    technologies: ['Python', 'Data Analysis', 'Monitoring', 'GUI'],
    icon: '🏊‍♂️',
    github: 'https://github.com/kaldex0/pool_analyser'
  },
  {
    title: 'Projet Symfony',
    description: 'Application web développée avec le framework Symfony. Projet illustrant les bonnes pratiques de développement web avec PHP.',
    technologies: ['PHP', 'Symfony', 'Twig', 'Doctrine'],
    icon: '�',
    github: 'https://github.com/kaldex0/symfony'
  },
  {
    title: 'Application Flutter',
    description: 'Application mobile développée avec Flutter. Interface moderne et responsive pour une expérience utilisateur optimale sur mobile.',
    technologies: ['Flutter', 'Dart', 'Mobile App', 'Responsive Design'],
    icon: '📱',
    github: 'https://github.com/kaldex0/projet_flutter'
  }
]
</script>