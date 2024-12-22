<template>
  <div class="icon-container">
    <DotLottiePlayer
      src="/connect.json"
      autoplay
      loop
      :style="{ width: '24px', height: '24px' }"
      class="lottie-icon"
    />
  </div>
</template>

<script setup lang="ts">
import { DotLottiePlayer } from '@dotlottie/vue-player'
import '@dotlottie/vue-player/dist/index.css'
</script>

<style scoped>
.icon-container {
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  vertical-align: middle;
}

.lottie-icon {
  opacity: 0.9;
}
</style> 