<template>
  <div>
    <NavBar />
    <div id="nav" class="container mx-auto p-7">
      <!-- <router-link to="/" class="text-black">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/citations">Works Cited Page</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>

// Responsive design!!!!

import NavBar from './components/NavBar.vue'

export default {
  name: 'Navigation',
  components: {
    NavBar,
  }
}
</script>

<style>

div {
  font-family: Cambria, Georgia, Times, 'Times New Roman', serif, Arial, Helvetica;
  /* font-family: "Open Sans"; */
  /* font-family: Arial, sans-serif; */
  
  text-align: center;
}


.times-text {
  font-family: Times New Roman;
  font-size: 25px;
}
</style>
