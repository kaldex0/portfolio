<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  transition: background-color 0.2s;
}

main {
  flex: 1;
  background-color: var(--background);
  transition: background-color 0.2s;
}
</style>
