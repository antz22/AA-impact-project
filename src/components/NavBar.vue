<template>
  <div>
    <img alt="Header" class="cover-img object-cover w-full" src="../assets/header.png">
    <div class="website-name">
      <h1>Asian American Impact Project</h1>
    </div>
    <div class="routers">
      <router-link to="/"><span>Home</span></router-link> <span></span>
      <router-link to="/about"><span>About</span></router-link> <span></span>
      <router-link to="/citations"><span>Works Cited</span></router-link>
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
  filter: brightness(50%);
  opacity: 0.9;
  height: 25rem;
}


.routers {
  @apply text-xl font-bold text-center text-white;
  position: absolute;
  top: 60px;
  right: 33px;
  transform: translate(-0%, -100%);
}

.routers a {
  @apply font-extrabold;
  /* @apply text-red-800 transition duration-100; */
  /* font-weight: bold; */
  text-decoration: none;
  padding: 10px;
  /* border-radius: 4px; */
  /* background: white; */
}

.routers a > span:hover {
  text-decoration: underline;
  /* padding-bottom: 0.01px; */
  /* border-bottom: 2.3px solid #fff */
}


.routers a.router-link-exact-active {
  @apply bg-red-800 rounded;
  color: white;
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
</style>