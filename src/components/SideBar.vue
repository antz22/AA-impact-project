<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
      <transition name="slide">
        <div v-if="isPanelOpen"
          class="sidebar-panel" @click="closeSidebarPanel">
          <span>Web Quest...</span>
          <slot></slot>
        </div>
      </transition>
      <!-- <div v-if="isPanelOpen">
        <div id="webquest" data-aos="fade-up">
          <ol style="list-style-type:decimal">
            <li>What is the US desktop browser market share of Google Chrome? Approximately what percentage of US residents use the Internet? Consider Chrome’s impact on Americans and American technology based on these statistics.</li>
            <li>After reading through Sundar Pichai’s work on Chrome, how do you think his contributions to web technology have impacted your web browsing experience)? What might have been different with your experience today if Chrome (and the Chromium project) did not exist?</li>
            <li>How has Sundar’s humble upbringing influenced his approach to managing and expanding Android?</li>
            <li>In what ways does Sundar Pichai match/support the ‘model minority’ myth? In what ways does he break from it? </li>
            <li>Through Sundar Pichai’s CEO position, how has he influenced others both in the U.S. and around the world?</li>
          </ol>
        </div>
      </div> -->
  </div>
</template>


<script>

// start anew... figure out vuex state management - it's like a way for storing global variables

export default {
  name: "SideBar",
  methods: {
    closeSidebarPanel() {
      this.$store.commit('toggleNav')
    }

  },
  computed: {
    isPanelOpen() {
      return this.$store.state.isNavOpen
    }
  },
}
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}


.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s
}

.sidebar-backdrop {
  background-color: rgba(0,0,0,.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #7d3535;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 320px;
}

.sidebar-panel > span {
  @apply text-gray-100 hover:text-white transition duration-300;
  text-decoration: none;
  font-size: 2.0rem;
  display: block;
  padding-bottom: 1.0em;
  left: 50%;
  top: 50%;
  transform: translate(0%, 50%);

}

#webquest {
  @apply text-left rounded-md border-gray-50 border-2 text-gray-100; 
  background-color: #7d3535;
  position: absolute;
  font-size: 1.5rem;
  right: 09%;
  top: 10%;
  width: 60vw;
}

#webquest > ol > li {
  @apply p-4 ml-12 mt-6 mb-6;
}

</style>
