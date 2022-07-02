<script setup>
  window.onload = function() {
    document.querySelector('.loading').remove()
  };
</script>
<template>
  <div class="overflow-auto loading">
      <div class="dot-wave">
        <div class="dot-wave__dot"></div>
        <div class="dot-wave__dot"></div>
        <div class="dot-wave__dot"></div>
        <div class="dot-wave__dot"></div>
      </div>
  </div>
  <router-view></router-view>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    background: var(--bg-color);
    width: 100vw;
    height: 100vh;
    font-family: 'Fredoka One', arial;
    color: #fff
  }
</style>
