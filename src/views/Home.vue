<template>
  <div class="home">
    <Header label1="THE ASIAN" label2="AMERICAN IMPACT"/>
    <div id="q">
      <p>Key question: What is the impact of Asian Americans on American culture and society?</p>
    </div>
    <div class="h-48"> </div>
    <div id="quote">
      <div id="pichai" class="p-4 flex w-full " data-aos="fade-up" data-aos-duration="1300">
        <img alt="Sundar Pichai" class="float-right max-w-2xl p-8 align-middle h-full" src="../assets/pichai.jpg">
        <div class="p-5">
          <p>“The progress of one generation becomes the foundational premise of the next, and it takes a new set of people to realize all the possibilities.”</p>
          <div id="citation">
            <p>Quoted from his <a class="underline text-blue-300" href="https://youtu.be/gEDChDOM1_U">commencement speech</a> to the class of 2020</p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-32"> </div>
    <div id="bio">

      <div class="text-center" style="font-size: 20px">
        <p>Meet Sundar Pichai - the CEO of Google and its parent company, Alphabet.</p>
      </div>

      <h1>Early Childhood</h1>
      <p>Pichai Sundararajan, better known as Sundar Pichai, was born July 12, 1972 in Madras, Tamil Nadu, India.</p>
      <p>As a young boy, Sundar was interested in technology. He had a strong memory, which was evident in his talent of being able to memorize all the phone numbers he encountered.</p>

      <h1>Career Development</h1>
      <p>He earned a degree in metallurgy (or material science) at IIT Kharagpur in 1993, and got a scholarship to go to Stanford University where he earned a masters degree in materials science in 1995. He then earned an MBA (2002) from UPenn to gain skills in business.</p>
      <p>In 2004, Sundar became the product management head at Google. He worked on the Google Toolbar, which let users easily access the search engine from web browsers more easily (the search bar at the top of your browser)</p>

      <h1>Today</h1>
      <p>After that, he worked on Google products such as Google Chrome, Android, and Chrome OS. In 2015, Sundar was named CEO of google, and in 2019 he became CEO of alphabet.</p>

      <br>
      <p>Now that you know a little bit about Sundar Pichai, go ahead and explore the rest of the site, and please, enjoy :).</p>

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

<style>

#pichai {
  background-color: rgb(50, 97, 138);

}

#pichai > div > p {
  @apply leading-loose p-3 text-white;
  font-size: 30px;
  
}

#citation {
  @apply text-white mt-28;
  font-size: 20px;
}

#bio > p {
  @apply text-xl text-left pl-24 pr-24 leading-loose;
  font-family: Times New Roman;
}

#bio > h1 {
  @apply text-4xl text-center pl-24 pr-24 pt-5 pb-5 leading-loose;
  font-family: Times New Roman;
}

#q {
  @apply text-3xl;
  font-family: Times New Roman;
}

.home {
  @apply mb-16;
}

</style>
