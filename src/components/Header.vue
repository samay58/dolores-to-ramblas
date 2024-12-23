<template>
  <header>
    <h1>
      WORDLE
      <IconAnimation />
    </h1>
  </header>
</template>

<script setup lang="ts">
import IconAnimation from './IconAnimation.vue'
</script>

<style scoped>
header {
  border-bottom: 1px solid var(--color-tone-4);
}

h1 {
  margin: 0;
  padding: 0;
  color: var(--color-tone-1);
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> 