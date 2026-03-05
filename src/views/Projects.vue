<template>
  <div class="min-h-screen pt-20">
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container-custom">
        <div class="projects-hero max-w-5xl mx-auto">
          <div class="projects-hero-copy">
            <span class="hero-badge">Selection 2025</span>
            <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Mes projets
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Un mix de projets académiques et personnels, pensés pour etre utiles,
              rapides et maintenables.
            </p>
            <div class="hero-metrics">
              <div class="metric-card">
                <span class="metric-value">{{ projects.length }}</span>
                <span class="metric-label">Projets</span>
              </div>
              <div class="metric-card">
                <span class="metric-value">{{ totalTech }}</span>
                <span class="metric-label">Technos</span>
              </div>
            </div>
          </div>
          <div class="projects-hero-panel">
            <div class="panel-card">
              <p class="panel-title">Domaines preferes</p>
              <div class="panel-tags">
                <span class="panel-tag">Interfaces</span>
                <span class="panel-tag">Automatisation</span>
                <span class="panel-tag">Data</span>
                <span class="panel-tag">Mobile</span>
              </div>
              <p class="panel-note">Code propre, documentation utile, et scope clair.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.title" class="project-card">
            <div class="project-cover">
              <div class="project-icon">{{ project.icon }}</div>
              <div class="project-meta">
                <span class="project-year">{{ project.year }}</span>
                <span class="project-type">{{ project.type }}</span>
              </div>
            </div>
            <div class="project-body">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span v-for="tech in project.technologies" :key="tech" class="project-tag">
                  {{ tech }}
                </span>
              </div>
              <div class="project-actions">
                <a
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link"
                >
                  Voir le code
                  <svg class="link-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <span class="project-status">{{ project.status }}</span>
              </div>
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
    description: 'Interface graphique en Python pour le projet SAE C12, avec une UI soignee et des flux de gestion clairs.',
    technologies: ['Python', 'Tkinter/PyQt', 'Interface Graphique', 'POO'],
    icon: '🖥️',
    year: '2024',
    type: 'Projet SAE',
    status: 'Termine',
    github: 'https://github.com/kaldex0/sae-c12-ihm-python'
  },
  {
    title: 'Pool Analyser',
    description: 'Logiciel d analyse de piscine avec suivi des parametres et automatisation de calculs.',
    technologies: ['Python', 'Data Analysis', 'Monitoring', 'GUI'],
    icon: '🏊‍♂️',
    year: '2025',
    type: 'Projet perso',
    status: 'Actif',
    github: 'https://github.com/kaldex0/pool_analyser'
  },
  {
    title: 'Projet Symfony',
    description: 'Application web en PHP/Symfony avec une architecture MVC propre et des templates Twig.',
    technologies: ['PHP', 'Symfony', 'Twig', 'Doctrine'],
    icon: '🧩',
    year: '2024',
    type: 'Projet acad.',
    status: 'Termine',
    github: 'https://github.com/kaldex0/symfony'
  },
  {
    title: 'Application Flutter',
    description: 'Application mobile responsive avec une interface moderne et un parcours utilisateur fluide.',
    technologies: ['Flutter', 'Dart', 'Mobile App', 'Responsive Design'],
    icon: '📱',
    year: '2025',
    type: 'Mobile',
    status: 'Termine',
    github: 'https://github.com/kaldex0/projet_flutter'
  }
]

const totalTech = new Set(projects.flatMap(project => project.technologies)).size
</script>

<style scoped>
.projects-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  align-items: center;
}

.projects-hero-copy {
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

.hero-metrics {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.metric-card {
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background-color: var(--card);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 0.4rem;
}

.metric-value {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--foreground);
}

.metric-label {
  font-size: 0.9rem;
  color: var(--muted-foreground);
}

.projects-hero-panel {
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

.panel-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.panel-tag {
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background-color: var(--card);
  font-size: 0.8rem;
  color: var(--foreground);
}

.panel-note {
  font-size: 0.9rem;
  color: var(--muted-foreground);
}

.projects-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.project-card {
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  overflow: hidden;
  background-color: var(--card);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  display: grid;
  grid-template-rows: auto 1fr;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 45px rgba(15, 23, 42, 0.12);
}

.project-cover {
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--primary-100), var(--primary-300));
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

[data-theme="dark"] .project-cover {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.25), rgba(30, 64, 175, 0.25));
}

.project-icon {
  font-size: 2rem;
}

.project-meta {
  display: grid;
  gap: 0.3rem;
  text-align: right;
}

.project-year {
  font-weight: 600;
  color: var(--foreground);
}

.project-type {
  font-size: 0.85rem;
  color: var(--muted-foreground);
}

.project-body {
  padding: 1.5rem;
  display: grid;
  gap: 1rem;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--foreground);
}

.project-description {
  color: var(--muted-foreground);
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background-color: var(--secondary);
  color: var(--foreground);
  font-size: 0.8rem;
}

.project-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--foreground);
  font-weight: 600;
  text-decoration: none;
}

.project-link:hover {
  color: var(--primary);
}

.link-icon {
  width: 1rem;
  height: 1rem;
}

.project-status {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  font-size: 0.8rem;
  color: var(--muted-foreground);
}

@media (prefers-reduced-motion: no-preference) {
  .projects-hero-copy,
  .projects-hero-panel,
  .projects-grid {
    animation: fadeUp 0.7s ease both;
  }

  .projects-hero-panel {
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