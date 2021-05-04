<template>
  <div id="burger"
    :class="{ 'active' : isBurgerActive }"
    @click.prevent="toggle">
    <slot>
      <button type="button" class="burger-button" title="Menu">
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
      </button>
    </slot>
  </div>
</template>


<script>

export default {
  computed: {
    isBurgerActive() {
      return this.$store.state.isNavOpen
    }
  },
  methods: {
    toggle() {
      this.$store.commit('toggleNav')
    }
  }
}
</script>


<style>

.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}

.burger-button {
  outline: 0;
  position: relative;
  height: 48px;
  width: 48px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform .6s cubic-bezier(.165,.84,.44,1);
}

.burger-bar {
  background-color: #fcfcfd;
  position: absolute;
  top: 50%;
  right: 3px;
  left: 9px;
  height: 3px;
  width: 25px;
  margin-top: -1px;
  transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-9px);
  transform: translateY(-9px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(9px);
}

#burger.active .burger-button {
  outline: 0;
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #fafafa
  /* background-color: rgb(68, 155, 255); */
  /* background-color: #355C7D; */
}

#burger.active .burger-bar--1 {
  height: 6px;
  transform: rotate(45deg)
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  height: 6px;
  transform: rotate(-45deg)
}
</style>
