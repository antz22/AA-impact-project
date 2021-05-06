<template>
  <div>
    <div class="website-container">
      <h1 class="overlay-text">{{ label }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    label: String,
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
}

</style>