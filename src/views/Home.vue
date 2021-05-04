<template>
  <div class="home">
    <!-- <Header label1="Asian" label2="American" label3="Studies"/> -->
    <Header label1="THE ASIAN" label2="AMERICAN IMPACT"/>
    <div class="times-text">
      <p class="text-3xl">Key question: What is the impact of Asian Americans on American culture and society?</p>
    </div>
    <div class="h-48"> </div>
    <div id="pichai" class="p-4 flex w-full " data-aos="fade-up" data-aos-duration="1300">
      <img alt="Sundar Pichai" class="float-right max-w-2xl p-8 align-middle h-full" src="../assets/pichai.jpg">
      <div class="text p-5">
        <p>This is Sundary Pichai, one of the most influential Asian Americans in American business and technology.</p>
        <br>
        <p>In this project, we will aim to describe his important contributions to technology, like the development of Google Chrome, Google Drive, and Google Maps, and his pivotal steps in expanding Asian Americans' influence in the executive world.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eum dolorum, magni blanditiis ut officiis temporibus consequatur, numquam nisi possimus animi hic voluptate enim sapiente, quidem sequi deserunt velit ipsum.</p>
        <br>
      </div>
    </div>
     <!-- <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe>  -->
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

<style>

/* .home {
  background-color: rgb(39, 48, 56);
} */

#pichai {
  background-color: rgb(50, 97, 138);

}

#pichai > .text > p {
  @apply leading-loose p-3 text-white;
  font-size: 18px;
  
}

p {
  /* @apply text-left pl-32 text-xl; */

}

.home {
  @apply mb-16;
}

</style>
