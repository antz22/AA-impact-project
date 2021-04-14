<template>
  <div>
    <NavBar />
    <div id="nav" class="container mx-auto">

      <router-link to="/" class="text-black">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/citations">Works Cited Page</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'Navigation',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #4077aa;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.times-text {
  font-family: Times New Roman;
}
</style>
