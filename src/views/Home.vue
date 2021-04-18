<template>
  <div class="home">
    <!-- <Header label1="Asian" label2="American" label3="Studies"/> -->
    <Header label1="The Asian" label2="American Impact"/>
    <div class="times-text">
      <p class="text-3xl">Key question: What is the impact of Asian Americans on American culture and society?</p>
    </div>
    <div class="h-48"> </div>
    <div id="pichai" class="container mx-auto p-7 " data-aos="fade-up">
      <img alt="Sundar Pichai" class="float-right max-w-2xl p-5 align-middle" src="../assets/pichai.jpg">
      <p>This is Sundary Pichai, one of the most influential Asian Americans in American business and technology.</p>
      <br><br>
      <p>In this project, we will aim to describe his important contributions to technology, like the development of Google Chrome, Google Drive, and Google Maps, and his pivotal steps in expanding Asian Americans' influence in the executive world.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eum dolorum, magni blanditiis ut officiis temporibus consequatur, numquam nisi possimus animi hic voluptate enim sapiente, quidem sequi deserunt velit ipsum.</p>
      <br>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
  }
}
</script>

<style scoped>

/* .home {
  background-color: rgb(39, 48, 56);
} */

#pichai {
  background-color: rgb(39, 48, 56);

}

#pichai > p {
  @apply leading-loose p-3 text-white;
  font-size: 23px;
}

</style>