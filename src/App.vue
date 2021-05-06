<template>
  <div>
    <NavBar />
    <router-view class="mt-14"/>
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
  text-align: center;
}

.times-text {
  font-family: Times New Roman;
  font-size: 25px;
}

</style>
