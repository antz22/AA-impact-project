<template>
  <div>
    <img alt="Header" class="object-cover w-full cover-img" src="../assets/header.png">
    <div class="website-name">
      <h1>Asian American Impact Project</h1>
    </div>

    <div class="routers invisible md:visible">
      <router-link to="/"><span>Home</span></router-link> <span></span>
      <router-link to="/citations"><span>Works Cited</span></router-link>
      <span class="pl-2">Pichai →</span>
      <span class="pl-12"></span>
    </div>

    <div id="sidebar">
      <div id="hamborg">
        <Burger />
      </div>
      <SideBar>
        <ul class="sidebar-panel-nav">
          <li>
            <router-link to="/chrome"><p class="inline-block">Google Chrome</p><img src="../assets/chrome.svg"></router-link>
          </li>
          <li>
            <router-link to="/android"><p class="inline-block">Android</p><img src="../assets/android.png"></router-link>
          </li>
          <li>
            <router-link to="/ceo"><p class="inline-block">Tech CEO</p><img src="../assets/ceo.svg"></router-link>
          </li>
          <div class="md:invisible sm:visible">
            <li>
              <router-link to="/"><p class="inline-block">Home</p></router-link>
            </li>
            <li>
              <router-link to="/citations"><p class="inline-block">Works Cited</p></router-link>
            </li>
          </div>
        </ul>
      </SideBar>
    </div>
  </div>
</template>

<script>


import SideBar from '@/components/SideBar.vue'
import Burger from '@/components/Burger.vue';


export default {
  name: 'Navigation',
  components: {
    SideBar,
    Burger,
  },
  data() {
    return {
      showMenu: false,
    }
  },
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
  text-decoration: none;
  padding: 10px;
}

.routers a > span:hover {
  text-decoration: underline;
}

.routers a.router-link-exact-active {
  @apply bg-red-800 rounded;
  color: white;
}

.website-name {
  @apply bg-red-800 text-lg font-bold text-center text-white sm:w-3/5;
  font-size: 25px;
  width: 385px;
  position: absolute;
  top: 70px;
  left: 340px;
  transform: translate(-80%, -100%);

  border-radius: 4px;
  text-decoration: none;
  padding: 10px;
}

/* for menu burger */

#hamborg {
  @apply absolute text-center object-none object-center w-12 h-12 transition duration-300 hover:bg-red-800 hover:bg-opacity-50;
  border-radius: 4px;
  top: 70px;
  right: 28px;
  transform: translate(-0%, -100%);
}

ul.sidebar-panel-nav,
ul.sidebar-panel-nav > div {
  list-style-type: none;
  padding-top: 1em;
  text-align: left;
}

ul.sidebar-panel-nav > li > a,
ul.sidebar-panel-nav > div > li > a {
  @apply text-gray-400 hover:text-white transition duration-300;
  text-decoration: none;
  font-size: 1.8rem;
  display: block;
  padding-bottom: 1.0em;
  padding-left: 0.8em;
  top: 50%;
  transform: translate(0%, 50%);
}

ul.sidebar-panel-nav > li > a > img {
  @apply inline-block pl-2;
  width: 50px;
  height: 50px;
}


.btn-menu {
  @apply focus:outline-none focus:border-transparent focus:ring-blue-200;
  outline: none;

}
</style>
