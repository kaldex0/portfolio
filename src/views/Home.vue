<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <!-- Profile Image -->
        <div class="hero-image">
          <div class="hero-avatar">
            <img 
              src="/avatar-placeholder.png" 
              alt="Alexandre Damman" 
              class="hero-avatar-image"
            />
          </div>
        </div>

        <!-- Main Content -->
        <div class="hero-title">
          <span class="hero-greeting">
            Bonjour, je suis
          </span>
          <span class="hero-name">
            Alexandre Damman
          </span>
          <span class="hero-role">
            Étudiant Développeur
          </span>
        </div>

        <p class="hero-description">
            Passionné d'informatique et de développement, j'aime créer des outils modernes et efficaces. 
            Je transforme vos idées en solutions digitales innovantes.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-buttons">
          <router-link to="/projects" class="btn-primary">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-right: 0.5rem;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            Voir mes projets
          </router-link>
          
          <router-link to="/contact" class="btn-secondary">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-right: 0.5rem;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Me contacter
          </router-link>
        </div>
      </div>
    </section>

    <!-- Skills Preview Section -->
    <section class="section">
      <div class="container">
        <div class="text-center mb-6">
          <h2 class="section-title">
            Mes Compétences
          </h2>
          <p class="section-description">
            Technologies et outils que je maîtrise pour créer des solutions web performantes
          </p>
        </div>

        <div class="skills-grid">
          <div 
            v-for="skill in skills" 
            :key="skill.name"
            class="skill-item"
          >
            <div 
              class="skill-icon"
              :style="{ backgroundColor: skill.color }"
            >
              {{ skill.icon }}
            </div>
            <span class="skill-name">
              {{ skill.name }}
            </span>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link to="/skills" class="btn-primary">
            Voir toutes mes compétences
          </router-link>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="section section-bg">
      <div class="container">
        <div class="text-center mb-6">
          <h2 class="section-title">
            Projets Récents
          </h2>
          <p class="section-description">
            Découvrez quelques-unes de mes réalisations les plus récentes
          </p>
        </div>

        <div class="projects-grid">
          <div 
            v-for="project in featuredProjects" 
            :key="project.title"
            class="card project-card"
          >
            <div class="project-image">
              🚀
            </div>
            <h3 class="project-title">
              {{ project.title }}
            </h3>
            <p class="project-description">
              {{ project.description }}
            </p>
            <div class="project-tags">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="project-tag"
              >
                {{ tech }}
              </span>
            </div>
            <a :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link">
              Voir sur GitHub
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-left: 0.25rem;">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link to="/projects" class="btn-primary">
            Voir tous mes projets
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const skills = [
  { name: 'Python', icon: 'PY', color: '#3776AB' },
  { name: 'PostgreSQL', icon: 'PG', color: '#336791' },
  { name: 'GitHub', icon: 'GH', color: '#181717' },
  { name: 'Flutter', icon: 'FL', color: '#02569B' },
  { name: 'PHP', icon: 'PHP', color: '#777BB4' },
  { name: 'Dart', icon: 'DT', color: '#0175C2' }
]

const featuredProjects = [
  {
    title: 'Pool Analyser',
    description: 'Logiciel d\'analyse de piscine développé en Python. Outil permettant l\'analyse et le monitoring des paramètres chimiques de piscine avec interface utilisateur intuitive.',
    technologies: ['Python', 'Data Analysis', 'GUI', 'Monitoring'],
    github: 'https://github.com/kaldex0/pool_analyser'
  },
  {
    title: 'SAE C12 IHM Python',
    description: 'Interface graphique développée en Python pour le projet SAE C12. Application avec interface utilisateur moderne et fonctionnalités avancées de gestion.',
    technologies: ['Python', 'Interface Graphique', 'SAE', 'POO'],
    github: 'https://github.com/kaldex0/sae-c12-ihm-python'
  },
  {
    title: 'Projet Symfony',
    description: 'Application web développée avec le framework Symfony. Projet illustrant les bonnes pratiques de développement web avec PHP et architecture MVC.',
    technologies: ['PHP', 'Symfony', 'Web Development', 'MVC'],
    github: 'https://github.com/kaldex0/symfony'
  }
]

onMounted(() => {
  // Add scroll reveal animation
  const observeElements = () => {
    const elements = document.querySelectorAll('.fade-in-up')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    elements.forEach(el => observer.observe(el))
  }

  // Delay to ensure DOM is ready
  setTimeout(observeElements, 100)
})
</script>