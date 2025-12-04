<template>
  <div class="min-h-screen pt-20">
    <!-- Skills Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Mes Compétences
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Technologies et outils que je maîtrise pour créer des solutions web performantes
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Categories -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="space-y-16">
          <div v-for="category in skillCategories" :key="category.title" class="skill-category">
            <h2 class="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 text-center">
              {{ category.title }}
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-900 dark:text-white">{{ skill.name }}</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div 
                    class="skill-progress" 
                    :style="{ width: skill.level + '%' }"
                  ></div>
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
const skillCategories = [
  {
    title: 'Développement Front-End',
    skills: [
      { name: 'Vue.js', level: 95 },
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 90 },
      { name: 'TailwindCSS', level: 92 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5/CSS3', level: 98 }
    ]
  },
  {
    title: 'Développement Back-End',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Express.js', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'API REST', level: 90 }
    ]
  },
  {
    title: 'Outils & DevOps',
    skills: [
      { name: 'Git/GitHub', level: 92 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 72 },
      { name: 'Webpack/Vite', level: 85 },
      { name: 'Jest/Testing', level: 80 }
    ]
  }
]
</script>