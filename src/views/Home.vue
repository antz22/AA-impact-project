<template>
  <div class="home">
    <Header label1="THE ASIAN AMERICAN IMPACT"/>
    <div id="q">
      <p>Key question: What is the impact of Asian Americans on American culture and society?</p>
    </div>
    <div class="h-48"> </div>
    <div id="quote">
      <div id="pichai" class="p-4 w-screen flex" data-aos="fade-up" data-aos-duration="1300">
        <div class="p-5">
          <p>“The progress of one generation becomes the foundational premise of the next, and it takes a new set of people to realize all the possibilities.”</p>
          <div id="citation">
            <p>Quoted from his <a class="underline text-blue-300" href="https://youtu.be/gEDChDOM1_U">commencement speech</a> to the class of 2020</p>
          </div>
        </div>
        <img alt="Sundar Pichai" src="../assets/pichai.jpg">
      </div>
    </div>
    <div class="h-24"> </div>
    <div id="bio">

      <div>
        <p style="font-size: 24px;text-align:center;">Meet Sundar Pichai - the CEO of Google and its parent company, Alphabet.</p>
        <br>
      </div>

      <hr>

      <div>
        <h1>Early Childhood</h1>
        <p>Pichai Sundararajan, better known as Sundar Pichai, was born July 12, 1972 in Madras, Tamil Nadu, India. As a young boy, Sundar was interested in technology. He had a strong memory, which was evident in his talent of being able to memorize all the phone numbers he encountered.</p>
      </div>

      <hr>

      <div>
        <h1>Career Development</h1>
        <p>He earned a degree in metallurgy (or material science) at IIT Kharagpur in 1993, and got a scholarship to go to Stanford University where he earned a masters degree in materials science in 1995. He then earned an MBA (2002) from UPenn to gain skills in business. In 2004, Sundar became the product management head at Google. He worked on the Google Toolbar, which let users easily access the search engine from web browsers more easily (the search bar at the top of your browser)</p>
      </div>

      <hr>

      <div>
        <h1>Today</h1>
        <p>After that, he worked on Google products such as Google Chrome, Android, and Chrome OS. In 2015, Sundar was named CEO of google, and in 2019 he became CEO of alphabet.</p>
      </div>

      <hr>
      <br>

      <div>
        <p style="margin-top: 20px">Now that you know a little bit about Sundar Pichai, go ahead and explore the rest of the site, and please, enjoy :).</p>
      </div>

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

@media (min-width: 0px) {
  #pichai > div > p {
    @apply align-text-bottom text-black flex;
  }
  #pichai > img {
    display: none;
  }
  
}

@media (min-width: 600px) {
  #pichai > div > p {
    @apply p-3;
  }
  #pichai > img {
    @apply h-64;
    display: block;
    width: 500px;
  }
}

@media (min-width: 1000px) {
  #pichai > div > p {
    @apply p-3;
  }
  #pichai > img {
    /* @apply h-auto; */
    height: 450px;
    width: 700px;
  }
  
}

#pichai {
  background-color: rgb(50, 97, 138);
}

#pichai > img {
  /* @apply max-w-2xl w-96 p-8 align-middle; */
  @apply p-8 align-middle;
}

#pichai > div {
  /* @apply p-5; */

}

#pichai > div > p {
  @apply leading-loose text-white;
  font-size: 30px;
  
}

#citation {
  @apply text-white;
  margin-top: 40px;
  font-size: 20px;
}

#bio > div > p {
  @apply text-xl text-center sm:pl-48 sm:pr-48 pl-3 pr-3 leading-loose;
  font-family: Times New Roman;
}

#bio > div > h1 {
  @apply text-4xl text-center pl-24 pr-24 pt-10 pb-10 leading-loose;
  font-family: Times New Roman;
}

#bio > div {
  @apply pb-12;
}

#q {
  @apply text-3xl;
  font-family: Times New Roman;
}

.home {
  @apply mb-16;
}

#bio > hr {
  @apply mx-auto;
  /* border: 0.1px solid rgb(255, 120, 120); */
  border: 0.3px solid rgb(225, 247, 255);
  width: 90%;
}

</style>
