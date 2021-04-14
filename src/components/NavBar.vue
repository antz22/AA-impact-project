<template>
  <div>
    <h1 class="overlay-text">Works <br><br><br><br><br> Cited</h1>
    <img alt="Header" class="object-cover h-96 w-full" src="../assets/header.png">
    <div class="routers">
      <router-link to="/" class="text-black">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/citations">Works Cited Page</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    props: {
      label: String
    }
    
  }
</script>

<style scoped>

.overlay-text {
  @apply text-xl font-bold text-center object-top text-white;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 150px;
}

.routers {
  @apply text-lg font-bold text-center object-right-top text-white;
  position: absolute;
  top: 8%;
  left: 80%;
  transform: translate(-50%, -100%);
}

</style>