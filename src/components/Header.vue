<template>
  <div>
    <div class="website-container">
      <br><br>
      <div v-if="label2 === ''">
        <h1 class="overlay-text">{{ label1 }}</h1>
      </div>
      <div v-else-if="label3 === ''">
        <h1 class="overlay-text">{{ label1 }} <br><br><br><br> {{ label2 }}</h1>
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
}

.website-container {
  @apply text-xl font-bold text-center text-white;
  position: absolute;
  top: 235px; 
  left: 50%;
  transform: translate(-50%, -50%); 
  font-size: 80px;

  /* @apply bg-red-800  bg-opacity-80 pt-5 pb-12 pl-20 pr-20;
  box-sizing: border-box;
  width: 50rem;
  border: 8px solid; 
  border-color: rgba(105, 29, 29, var(--tw-bg-opacity)); 
  border-radius: 4px; */
  /* padding: 20px; */
  /* line-height: 25px; */

  /* @apply bg-red-900  bg-opacity-80 pt-2 pb-16 pl-20 pr-20; */
  @apply pt-2 pb-16 pl-20 pr-20;
  box-sizing: border-box;
  width: 75rem;
  /* border: 5px solid; 
  border-color: white; 
  border-radius: 4px; */
  /* padding: 20px; */
  line-height: 25px;
}

</style>