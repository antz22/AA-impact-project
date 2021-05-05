<template>
  <div>
    <div class="website-container">
      <div v-if="label2 === ''">
        <h1 class="overlay-text">{{ label1 }}</h1>
      </div>
      <div v-else-if="label3 === ''">
        <!-- <h1 class="overlay-text">{{ label1 }} <br><br><br><br> {{ label2 }}</h1> -->
        <h1 class="overlay-text">{{ label1 }} {{ label2 }}</h1>
      </div>
      <div v-else>
        <h1 class="overlay-text">{{ label1 }} <br><br><br><br> {{ label2 }} <br><br><br><br> {{ label3 }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    label1: String,
    label2: {
      default: "",
      type: String,
    },
    label3: {
      default: "",
      type: String,
    }
  }

}
</script>

<style>

.overlay-text {
  @apply overflow-auto flex;
}

.website-container {
  @apply text-xl font-bold text-center text-white overflow-auto flex;
  position: absolute;
  top: 235px; 
  left: 50%;
  transform: translate(-50%, -50%); 
  font-size: 80px;

  @apply w-full mx-auto justify-center;
  box-sizing: border-box;
  line-height: 100px;
  /* width: 44rem; */
}

</style>