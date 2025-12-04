<template>
  <header class="nav-header">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        Alexandre Damman
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="nav-menu">
        <router-link 
          v-for="item in navigation" 
          :key="item.name"
          :to="item.href"
          class="nav-link"
          :class="{ active: $route.path === item.href }"
        >
          {{ item.name }}
        </router-link>
      </nav>

      <!-- Dark Mode Toggle & Mobile Menu Button -->
      <div class="flex items-center" style="gap: 1rem;">
        <DarkModeToggle />
        <button 
          @click="toggleMobileMenu"
          class="mobile-menu-button"
          aria-label="Toggle menu"
        >
          <span v-if="!isMobileMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-menu" :class="{ active: isMobileMenuOpen }">
      <ul class="mobile-nav-menu">
        <li v-for="item in navigation" :key="item.name">
          <router-link 
            :to="item.href"
            class="mobile-nav-link"
            :class="{ active: $route.path === item.href }"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DarkModeToggle from './DarkModeToggle.vue'

const isMobileMenuOpen = ref(false)

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Compétences', href: '/skills' },
  { name: 'Projets', href: '/projects' },
  { name: 'Expérience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>