<template>
  <main class="app-container">
    <Calculadora />
    <footer class="app-footer">
      <p>Feito com Vue.js 3 — EBAC Frontend</p>
    </footer>
  </main>
</template>

<script setup>
import Calculadora from './components/Calculadora.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
  box-sizing: border-box;
}

.app-footer {
  margin-top: 32px;
  text-align: center;
}

.app-footer p {
  font-size: 0.8rem;
  color: rgba(148, 163, 184, 0.5);
  margin: 0;
}
</style>
