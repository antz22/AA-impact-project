<template>
  <div>
    <div id="cited">
    </div>
    <WorksCitedComp />
  </div>
</template>

<script>
import WorksCitedComp from '@/components/WorksCitedComp.vue'

export default {
  name: 'Boi',
  components: {
    WorksCitedComp
  }
}
</script>

<style scoped>

.overlay-text {
  @apply text-xl;
  position: absolute;
  text-align: center;
  font-size: 30px;
}

</style>