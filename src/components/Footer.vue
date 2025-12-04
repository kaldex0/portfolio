<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="footer-logo-icon">
              <span class="footer-logo-text">AD</span>
            </div>
            <span class="footer-logo-name">Alexandre Damman</span>
          </div>
          <p class="footer-description">
            Étudiant développeur passionné d'informatique et de développement. 
            Spécialisé en Python, développement mobile Flutter et gestion de bases de données.
          </p>
          <div class="footer-social">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              :title="social.name"
            >
              <component :is="social.icon" class="social-icon" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3 class="footer-section-title">Navigation</h3>
          <ul class="footer-nav-list">
            <li v-for="item in navItems" :key="item.name" class="footer-nav-item">
              <router-link 
                :to="item.path"
                class="footer-link"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h3 class="footer-section-title">Contact</h3>
          <ul class="footer-contact-list">
            <li class="footer-contact-item">
              <a href="mailto:alexandre.damman@etu.univ-littoral.fr" class="footer-link">
                alexandre.damman@etu.univ-littoral.fr
              </a>
            </li>
            <li class="footer-contact-item">
              <a href="tel:+33766215655" class="footer-link">
                +33 7 66 21 56 55
              </a>
            </li>
            <li class="footer-contact-item">
              <span class="footer-contact-text">
                Dunkerque, France
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p class="footer-copyright">
          © {{ currentYear }} Alexandre Portfolio. Tous droits réservés.
        </p>
        <div class="footer-legal">
          <router-link to="/legal" class="footer-link footer-legal-link">Mentions légales</router-link>
          <router-link to="/privacy" class="footer-link footer-legal-link">Politique de confidentialité</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Compétences', path: '/skills' },
  { name: 'Projets', path: '/projects' },
  { name: 'Expérience', path: '/experience' },
  { name: 'Contact', path: '/contact' }
]

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/kaldex0',
    icon: 'IconGitHub.png'
  },
  {
    name: 'Email',
    url: 'mailto:alexandre.damman@etu.univ-littoral.fr',
    icon: 'IconMail'
  }
]
</script>

<script lang="ts">
// Social Media Icons Components
const IconGitHub = {
  template: `
    <div style="width: 20px; height: 20px; background-color: #9ca3af; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #111827; font-weight: bold; font-size: 12px;">
      GH
    </div>
  `
}

const IconLinkedIn = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  `
}

const IconTwitter = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  `
}

const IconMail = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  `
}

export default {
  components: {
    IconGitHub,
    IconLinkedIn,
    IconTwitter,
    IconMail
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--secondary);
  border-top: 1px solid var(--border);
  color: var(--foreground);
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 2rem;
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.footer-logo-icon {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(to right, var(--primary), var(--primary-700));
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-logo-text {
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
}

.footer-logo-name {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--foreground);
}

.footer-description {
  color: var(--muted-foreground);
  max-width: 24rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--card);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted-foreground);
  transition: all 0.3s ease;
  transform: scale(1);
}

.social-link:hover {
  background-color: var(--primary);
  color: white;
  transform: scale(1.1);
}

.social-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af !important;
}

.social-link:hover .social-icon {
  color: white !important;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-section-title {
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 1rem;
}

.footer-nav-list,
.footer-contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-nav-item,
.footer-contact-item {
  margin: 0;
}

.footer-link {
  color: var(--muted-foreground);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--primary);
}

.footer-contact-text {
  color: var(--muted-foreground);
}

.footer-bottom {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-copyright {
  color: var(--muted-foreground);
  font-size: 0.875rem;
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.footer-legal-link {
  font-size: 0.875rem;
}
</style>