<template>
  <div class="home">
    <!-- <Header label1="Asian" label2="American" label3="Studies"/> -->
    <Header label1="Asian American" label2="Studies"/>
    <div class="times-text">
      <p>Key question: What is the impact of Asian Americans on American culture and society?</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
