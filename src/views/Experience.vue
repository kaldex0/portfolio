<template>
  <div class="min-h-screen pt-20">
    <!-- Experience Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container-custom">
        <div class="experience-hero max-w-5xl mx-auto">
          <div class="experience-hero-copy">
            <span class="hero-badge">Parcours 2020 - 2025</span>
            <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Mon experience
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Un parcours fait de projets concrets, d apprentissage continu et de missions utiles.
            </p>
            <div class="hero-stats">
              <div v-for="stat in stats" :key="stat.label" class="stat-card">
                <span class="stat-value">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
          <div class="experience-hero-panel">
            <div class="panel-card">
              <p class="panel-title">Focus</p>
              <ul class="panel-list">
                <li v-for="point in focusPoints" :key="point" class="panel-item">
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="experience-layout">
          <div class="experience-summary">
            <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white">
              En un coup d oeil
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              Experience terrain, formation solide et projets concrets.
            </p>
            <div class="summary-grid">
              <div v-for="item in summaryCards" :key="item.label" class="summary-card">
                <span class="summary-value">{{ item.value }}</span>
                <span class="summary-label">{{ item.label }}</span>
              </div>
            </div>
          </div>

          <div class="timeline-list">
            <div v-for="item in timeline" :key="item.title" class="timeline-card">
              <div class="timeline-header">
                <span class="timeline-type">{{ item.type }}</span>
                <span class="timeline-period">{{ item.period }}</span>
              </div>
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-company">{{ item.company }}</p>
              <p class="timeline-description">{{ item.description }}</p>
              <div class="timeline-skills" v-if="item.skills">
                <span v-for="skill in item.skills" :key="skill" class="timeline-skill">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { label: 'Experiences', value: '2' },
  { label: 'Formations', value: '2' },
  { label: 'Competences cle', value: '12+' }
]

const focusPoints = [
  'Developpement d outils utiles',
  'UX et performance',
  'Automatisation et qualite'
]

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

const summaryCards = [
  { label: 'Positions', value: timeline.filter(item => item.type === 'Expérience').length },
  { label: 'Formations', value: timeline.filter(item => item.type === 'Formation').length },
  { label: 'Etapes', value: timeline.length }
]
</script>

<style scoped>
.experience-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  align-items: center;
}

.experience-hero-copy {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-badge {
  align-self: flex-start;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background-color: var(--secondary);
  color: var(--foreground);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.hero-stats {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.stat-card {
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background-color: var(--card);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 0.4rem;
}

.stat-value {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--foreground);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--muted-foreground);
}

.experience-hero-panel {
  display: grid;
}

.panel-card {
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(15, 23, 42, 0.02));
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 1rem;
}

[data-theme="dark"] .panel-card {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.18), rgba(15, 23, 42, 0.4));
}

.panel-title {
  font-weight: 600;
  color: var(--foreground);
}

.panel-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
}

.panel-item {
  color: var(--muted-foreground);
}

.experience-layout {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: start;
}

.experience-summary {
  display: grid;
  gap: 1.5rem;
}

.summary-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.summary-card {
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background-color: var(--card);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 0.4rem;
}

.summary-value {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--foreground);
}

.summary-label {
  color: var(--muted-foreground);
  font-size: 0.85rem;
}

.timeline-list {
  display: grid;
  gap: 1.5rem;
}

.timeline-card {
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  background-color: var(--card);
  padding: 1.5rem;
  display: grid;
  gap: 0.9rem;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.timeline-type {
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background-color: var(--secondary);
  color: var(--foreground);
  font-size: 0.85rem;
  font-weight: 600;
}

.timeline-period {
  font-size: 0.85rem;
  color: var(--muted-foreground);
}

.timeline-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--foreground);
}

.timeline-company {
  color: var(--primary);
  font-weight: 600;
}

.timeline-description {
  color: var(--muted-foreground);
  line-height: 1.6;
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.timeline-skill {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background-color: var(--secondary);
  color: var(--foreground);
  font-size: 0.8rem;
}

@media (prefers-reduced-motion: no-preference) {
  .experience-hero-copy,
  .experience-hero-panel,
  .experience-layout {
    animation: fadeUp 0.7s ease both;
  }

  .experience-hero-panel {
    animation-delay: 0.1s;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>