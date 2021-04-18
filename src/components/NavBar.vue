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
  height: 25rem;
}

.website-name {
  @apply bg-red-800 text-lg font-bold text-center text-white;
  font-size: 25px;
  position: absolute;
  top: 75px;
  left: 340px;
  transform: translate(-80%, -100%);

  border-radius: 4px;
  text-decoration: none;
  padding: 10px;
}

.routers {
  @apply text-lg font-bold text-center text-white;
  position: absolute;
  /* top: 10%; */
  top: 60px;
  right: 33px;
  transform: translate(-0%, -100%);
}

.routers a {
  @apply text-red-800;
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  background: white;
}

.routers a.router-link-exact-active {
  @apply bg-red-800;
  color: white;
}
</style>