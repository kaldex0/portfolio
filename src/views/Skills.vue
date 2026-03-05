<template>
  <div class="min-h-screen pt-20">
    <!-- Skills Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container-custom">
        <div class="skills-hero max-w-5xl mx-auto">
          <div class="skills-hero-copy">
            <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Mes Competences
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Technologies et outils que je maitrise pour creer des solutions web performantes.
            </p>
            <div class="skills-hero-tags">
              <span class="hero-chip">Front-end</span>
              <span class="hero-chip">Back-end</span>
              <span class="hero-chip">DevOps</span>
            </div>
          </div>
          <div class="skills-hero-cards">
            <div v-for="card in summaryCards" :key="card.label" class="summary-card">
              <span class="summary-value">{{ card.value }}</span>
              <span class="summary-label">{{ card.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Categories -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="skills-grid">
          <div v-for="category in skillCategories" :key="category.title" class="category-card">
            <div class="category-header">
              <div>
                <h2 class="text-2xl font-display font-bold text-gray-900 dark:text-white">
                  {{ category.title }}
                </h2>
                <p class="category-subtitle">{{ category.skills.length }} competences</p>
              </div>
              <span class="category-badge">Niveau moyen {{ averageLevel }}%</span>
            </div>
            <div class="category-skills">
              <div v-for="skill in category.skills" :key="skill.name" class="skill-card">
                <div class="skill-top">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-meter">
                  <span class="skill-fill" :style="{ width: skill.level + '%' }"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Auto evaluation UE -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="auto-eval">
          <div class="auto-eval-header">
            <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white">
              Auto evaluation des UE
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              Notes issues de mon relevé. Les valeurs "~" indiquent des notes non definitives.
            </p>
          </div>
          <div class="auto-eval-grid">
            <div class="auto-eval-competences">
              <div class="competences-header">
                <h3 class="semester-title">Auto evaluation</h3>
                <span class="semester-subtitle">Competences cle</span>
              </div>
              <div class="competences-cards">
                <div v-for="competence in autoEvalCompetences" :key="competence.code" class="competence-card">
                  <div>
                    <p class="competence-code">{{ competence.code }}</p>
                    <p class="competence-label">{{ competence.label }}</p>
                  </div>
                  <div class="competence-score">
                    <span class="competence-value">{{ competence.score }}</span>
                    <span class="competence-max">/10</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-for="semester in ueSemesters" :key="semester.name" class="semester-card">
              <div class="semester-header">
                <h3 class="semester-title">{{ semester.name }}</h3>
                <span class="semester-subtitle">{{ semester.year }}</span>
              </div>
              <div class="semester-ues">
                <div v-for="ue in semester.ues" :key="ue.code" class="auto-eval-card">
                  <div class="auto-eval-top">
                    <div>
                      <h4 class="auto-eval-title">{{ ue.title }}</h4>
                      <p class="auto-eval-code">{{ ue.code }}</p>
                    </div>
                    <div class="auto-eval-score">
                      <span class="auto-eval-value">{{ ue.average }}</span>
                      <span class="auto-eval-label">/20</span>
                    </div>
                  </div>
                  <div class="auto-eval-modules">
                    <div v-for="module in ue.modules" :key="module.code" class="auto-eval-module">
                      <div>
                        <p class="module-title">{{ module.title }}</p>
                        <p class="module-code">{{ module.code }}</p>
                      </div>
                      <div class="module-note" :class="{ pending: module.note === '~' }">
                        {{ module.note }}
                      </div>
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

const totalSkills = skillCategories.reduce((total, category) => total + category.skills.length, 0)
const averageLevel = Math.round(
  skillCategories
    .flatMap(category => category.skills.map(skill => skill.level))
    .reduce((sum, level) => sum + level, 0) / totalSkills
)

const summaryCards = [
  { label: 'Competences', value: totalSkills },
  { label: 'Categories', value: skillCategories.length },
  { label: 'Niveau moyen', value: `${averageLevel}%` }
]

const autoEvalCompetences = [
  { code: 'C1', label: 'Realiser', score: '5' },
  { code: 'C2', label: 'Optimiser', score: '4' },
  { code: 'C6', label: 'Collaborer', score: '4.5' }
]

const ueSemesters = [
  {
    name: 'Semestre 5',
    year: '2025',
    ues: [
      {
        code: 'UE5.1A',
        title: 'C1 - Realiser',
        average: '12.79',
        modules: [
          { code: 'R5.A.04', title: 'Qualite algorithmique', note: '11.50' },
          { code: 'R5.A.05', title: 'Programmation avancee', note: '13.50' },
          { code: 'R5.A.06', title: 'Sensibilisation a la prog. multimedia', note: '13.95' },
          { code: 'R5.A.07', title: 'Automatisation de la chaine de prod', note: '16.00' },
          { code: 'R5.A.08', title: 'Qualite de developpement', note: '17.50' },
          { code: 'R5.A.09', title: 'Virtualisation avancee', note: '15.50' },
          { code: 'R5.A.10', title: 'Nouveaux paradigmes de bdd', note: '03.50' },
          { code: 'R5.A.13', title: 'Economie durable et numerique', note: '16.50' },
          { code: 'R5.A.14', title: 'Anglais', note: '16.00' },
          { code: 'S5.A.01', title: 'Developpement avance', note: '13.22' }
        ]
      },
      {
        code: 'UE5.2',
        title: 'C2 - Optimiser',
        average: '11.15',
        modules: [
          { code: 'R5.A.04', title: 'Qualite algorithmique', note: '11.50' },
          { code: 'R5.A.05', title: 'Programmation avancee', note: '13.50' },
          { code: 'R5.A.06', title: 'Sensibilisation a la prog. multimedia', note: '13.95' },
          { code: 'R5.A.08', title: 'Qualite de developpement', note: '17.50' },
          { code: 'R5.A.09', title: 'Virtualisation avancee', note: '15.50' },
          { code: 'R5.A.10', title: 'Nouveaux paradigmes de bdd', note: '03.50' },
          { code: 'R5.A.11', title: 'Methodes d optimisation', note: '07.25' },
          { code: 'R5.A.12', title: 'Modelisations mathematiques', note: '10.75' },
          { code: 'R5.A.14', title: 'Anglais', note: '16.00' },
          { code: 'S5.A.01', title: 'Developpement avance', note: '10.40' }
        ]
      },
      {
        code: 'UE5.6A',
        title: 'C6 - Collaborer',
        average: '11.61',
        modules: [
          { code: 'R5.01', title: 'Initiation au management', note: '14.00' },
          { code: 'R5.02', title: 'Projet personnel et professionnel', note: '14.00' },
          { code: 'R5.03', title: 'Politique de communication', note: '07.70' },
          { code: 'R5.A.06', title: 'Sensibilisation a la prog. multimedia', note: '13.95' },
          { code: 'R5.A.07', title: 'Automatisation de la chaine de prod', note: '16.00' },
          { code: 'R5.A.13', title: 'Economie durable et numerique', note: '16.50' },
          { code: 'R5.A.14', title: 'Anglais', note: '16.00' },
          { code: 'S5.A.01', title: 'Developpement avance', note: '09.12' }
        ]
      }
    ]
  }
]
</script>

<style scoped>
.skills-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  align-items: center;
}

.skills-hero-copy {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skills-hero-tags {
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

.skills-hero-cards {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.summary-card {
  padding: 1.2rem 1.4rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background-color: var(--card);
  display: grid;
  gap: 0.4rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.summary-value {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--foreground);
}

.summary-label {
  font-size: 0.9rem;
  color: var(--muted-foreground);
}

.skills-grid {
  display: grid;
  gap: 2rem;
}

.category-card {
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  background-color: var(--card);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

.category-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.category-subtitle {
  color: var(--muted-foreground);
}

.category-badge {
  align-self: flex-start;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background-color: var(--secondary);
  color: var(--foreground);
  font-size: 0.8rem;
  font-weight: 600;
}

.category-skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.skill-card {
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background-color: var(--secondary);
  display: grid;
  gap: 0.7rem;
}

.skill-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-weight: 600;
  color: var(--foreground);
}

.skill-level {
  font-size: 0.85rem;
  color: var(--muted-foreground);
}

.skill-meter {
  position: relative;
  height: 8px;
  border-radius: 999px;
  background-color: var(--card);
  overflow: hidden;
}

.skill-fill {
  position: absolute;
  inset: 0;
  width: 0;
  background: linear-gradient(90deg, var(--primary), var(--primary-700));
  border-radius: 999px;
  transition: width 0.4s ease;
}

@media (min-width: 768px) {
  .category-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.auto-eval {
  display: grid;
  gap: 2rem;
}

.auto-eval-header {
  display: grid;
  gap: 0.5rem;
}

.auto-eval-grid {
  display: grid;
  gap: 2rem;
}

.auto-eval-competences {
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  background-color: var(--card);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

.competences-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.competences-cards {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.competence-card {
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.competence-code {
  font-weight: 700;
  color: var(--foreground);
}

.competence-label {
  font-size: 0.85rem;
  color: var(--muted-foreground);
}

.competence-score {
  display: flex;
  align-items: baseline;
  gap: 0.2rem;
  font-weight: 700;
  color: var(--foreground);
}

.competence-value {
  font-size: 1.4rem;
}

.competence-max {
  font-size: 0.85rem;
  color: var(--muted-foreground);
}

.semester-card {
  display: grid;
  gap: 1.5rem;
}

.semester-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.semester-title {
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--foreground);
}

.semester-subtitle {
  color: var(--muted-foreground);
}

.semester-ues {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.auto-eval-card {
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  background-color: var(--card);
  padding: 1.5rem;
  display: grid;
  gap: 1.2rem;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

.auto-eval-top {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.auto-eval-title {
  font-weight: 600;
  color: var(--foreground);
  font-size: 1.1rem;
}

.auto-eval-code {
  color: var(--muted-foreground);
  font-size: 0.85rem;
}

.auto-eval-score {
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;
  font-weight: 700;
  color: var(--foreground);
}

.auto-eval-value {
  font-size: 1.6rem;
}

.auto-eval-label {
  font-size: 0.85rem;
  color: var(--muted-foreground);
}

.auto-eval-modules {
  display: grid;
  gap: 0.75rem;
}

.auto-eval-module {
  padding: 0.75rem 0.9rem;
  border-radius: 0.9rem;
  background-color: var(--secondary);
  border: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.module-title {
  font-weight: 500;
  color: var(--foreground);
}

.module-code {
  font-size: 0.8rem;
  color: var(--muted-foreground);
}

.module-note {
  font-weight: 600;
  color: var(--foreground);
}

.module-note.pending {
  color: var(--muted-foreground);
}
</style>