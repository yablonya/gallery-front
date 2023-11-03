<template>
  <div class="home">
    <img src="/photo_negr.jpg" alt="nigger">
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@keyframes scaleAnimation {
  0% {
    //transform: scale(1);
    translate: 500px 0;
  }
  25% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
    translate: -500px 0;
  }
  75% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
    translate: 500px 0;
  }
}

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  img {
    width: 500px;
    height: auto;
    animation: scaleAnimation 1s infinite;
  }
}
</style>