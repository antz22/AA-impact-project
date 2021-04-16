<template>
  <div>
    <img alt="Header" class="cover-img object-cover w-full" src="../assets/header.png">
    <div class="website-name">
      <h1>Asian American Impact Project</h1>
    </div>
    <div class="routers">
      <router-link to="/" class="text-black">Home</router-link> <span></span>
      <router-link to="/about">About</router-link> <span></span>
      <router-link to="/citations">Works Cited</router-link>
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

.cover-img {
  filter: brightness(58%);
  opacity: 0.9;
  height: 29rem;
}

.website-name {
  @apply text-lg font-extrabold text-center text-white;
  font-size: 25px;
  position: absolute;
  top: 75px;
  left: 25%;
  transform: translate(-80%, -100%);

  background: crimson;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px;
}

.routers {
  @apply text-lg font-bold text-center text-white;
  position: absolute;
  /* top: 10%; */
  top: 60px;
  left: 79%;
  transform: translate(-30%, -100%);
}

.routers a {
  font-weight: bold;
  color: crimson;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  background: white;
}

.routers a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>