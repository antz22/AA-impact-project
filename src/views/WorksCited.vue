<template>
  <div>
    <!-- <Header label1="Works" label2="Cited" /> -->
    <Header label1="Works Cited"/>
    <div id="cited">
      <div class="container mx-auto max-w-7xl">
        <h1 class="text-5xl font-extrabold times-text pb-10">Sources</h1>
        <hr>
        <div class="text-lg leading-loose text-black times-text p-10">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis atque unde ducimus nisi quae, optio hic id, alias sit odit, numquam laudantium? Doloremque laboriosam distinctio neque, sit assumenda expedita ipsum?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Boi',
  components: {
    Header
  }
}
</script>

<style scoped>

#cited {
  
}

</style>
