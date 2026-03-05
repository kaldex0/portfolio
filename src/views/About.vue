<template>
  <div class="min-h-screen pt-20">
    <!-- About Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container-custom">
        <div class="about-hero max-w-5xl mx-auto">
          <div class="hero-copy">
            <span class="hero-badge">Etudiant BUT Informatique</span>
            <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              A propos de moi
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Developpeur passionne par le web moderne, l'UX et la performance. Je conçois des
              experiences claires, rapides et utiles.
            </p>
            <div class="hero-actions">
              <div class="hero-chips">
                <span class="hero-chip">Front-end</span>
                <span class="hero-chip">Back-end</span>
                <span class="hero-chip">UX/UI</span>
              </div>
            </div>
          </div>
          <div class="hero-portrait">
            <div class="portrait-frame">
              <img
                src="/avatar-placeholder.png"
                alt="Portrait d'Alexandre Damman"
                class="portrait-image"
              />
            </div>
            <div class="hero-stats">
              <div v-for="item in stats" :key="item.label" class="stat-card">
                <span class="stat-value">{{ item.value }}</span>
                <span class="stat-label">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Story -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="about-grid">
          <div class="story-panel">
            <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Mon parcours
            </h2>
            <div class="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Etudiant en informatique avec une specialisation en developpement web, j'ai
                commence par des projets concrets pour apprendre vite et bien.
              </p>
              <p>
                Au fil des annees, j'ai consolide mes bases en Vue.js, React et TypeScript, tout
                en gardant une veille technologique active pour rester a jour.
              </p>
              <p>
                J'accorde une attention particuliere a l'UX et a l'optimisation des performances,
                car une experience fluide change tout.
              </p>
            </div>
            <div class="focus-grid">
              <div v-for="focus in focusAreas" :key="focus.title" class="focus-card">
                <h3 class="focus-title">{{ focus.title }}</h3>
                <p class="focus-text">{{ focus.description }}</p>
              </div>
            </div>
          </div>

          <div class="side-panel">
            <div class="card p-8 about-card">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                En bref
              </h3>
              <div class="space-y-4">
                <div v-for="item in highlights" :key="item.title" class="highlight-row">
                  <span class="highlight-dot">✓</span>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">{{ item.title }}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.detail }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card p-8 about-card">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Mes valeurs
              </h3>
              <div class="values-grid">
                <div v-for="value in values" :key="value.title" class="value-card">
                  <span class="value-title">{{ value.title }}</span>
                  <span class="value-text">{{ value.description }}</span>
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
const stats = [
  { label: 'Projets livrés', value: '12+' },
  { label: 'Technos clés', value: '8' },
  { label: 'Annees de pratique', value: '5+' }
]

const focusAreas = [
  {
    title: 'Interfaces utiles',
    description: 'Des parcours clairs, une hierarchie visuelle forte et des details soignes.'
  },
  {
    title: 'Performance',
    description: 'Des pages rapides, optimisees, avec des animations utiles et discretes.'
  }
]

const highlights = [
  {
    title: 'Polyvalent',
    detail: 'Front-end, back-end et bases de donnees pour livrer vite.'
  },
  {
    title: 'Oriente produit',
    detail: 'Je cherche toujours la valeur pour l utilisateur final.'
  },
  {
    title: 'Rigueur',
    detail: 'Code propre, tests, et documentation quand c est utile.'
  }
]

const values = [
  {
    title: 'Qualite',
    description: 'Code propre et maintenable.'
  },
  {
    title: 'Innovation',
    description: 'Veille et adoption des bonnes pratiques.'
  },
  {
    title: 'Collaboration',
    description: 'Communication simple et efficace.'
  }
]
</script>

<style scoped>
.about-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  align-items: center;
}

.hero-copy {
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

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero-chip {
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background-color: var(--card);
  color: var(--foreground);
  font-size: 0.85rem;
  font-weight: 500;
}

.hero-portrait {
  display: grid;
  gap: 1.25rem;
}

.portrait-frame {
  border-radius: 1.5rem;
  padding: 0.4rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-700));
}

.portrait-image {
  display: block;
  width: 100%;
  border-radius: 1.2rem;
  object-fit: cover;
  background-color: var(--card);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.stat-card {
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background-color: var(--card);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  align-items: flex-start;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--foreground);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--muted-foreground);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.story-panel {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.focus-grid {
  display: grid;
  gap: 1rem;
}

.focus-card {
  padding: 1.2rem 1.4rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background-color: var(--card);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.focus-title {
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.5rem;
}

.focus-text {
  color: var(--muted-foreground);
}

.side-panel {
  display: grid;
  gap: 1.5rem;
}

.about-card {
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.highlight-row {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.highlight-dot {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 999px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}

.values-grid {
  display: grid;
  gap: 1rem;
}

.value-card {
  padding: 0.9rem 1rem;
  border-radius: 0.9rem;
  border: 1px solid var(--border);
  background-color: var(--secondary);
  display: grid;
  gap: 0.35rem;
}

.value-title {
  font-weight: 600;
  color: var(--foreground);
}

.value-text {
  font-size: 0.9rem;
  color: var(--muted-foreground);
}

@media (prefers-reduced-motion: no-preference) {
  .hero-copy,
  .hero-portrait,
  .story-panel,
  .side-panel {
    animation: fadeUp 0.7s ease both;
  }

  .hero-portrait {
    animation-delay: 0.1s;
  }

  .side-panel {
    animation-delay: 0.15s;
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