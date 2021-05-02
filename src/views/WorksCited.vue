<template>
  <div>
    <!-- <Header label1="Works" label2="Cited" /> -->
    <Header label1="Works Cited"/>
    <div id="cited">
      <div class="citedd mx-auto container max-w-5xl">
        <h1 class="text-5xl font-extrabold times-text pb-10">Sources</h1>
        <hr>
        <div class="sources text-lg text-black times-text p-10">
          <p>Bohn, Dieter. "Chasing the Next Billion with Sundar Pichai." Edited by Michael 
     Zelenko. The Verge, 29 May 2015,</p>
          <p class="pl-16">www.theverge.com/a/sundars-google/sundar-pichai-interview-google-io-2015. Accessed 20 Apr. 2021. </p>
          <p>Gibbs, Nancy. "Sundar Pichai | TIME100 Talks." Youtube, uploaded by TIME, 26 
     Sept. 2020, </p>
          <p class="pl-16">www.youtube.com/watch?v=LevhGftFz9U. </p>
          <p>"Google CEO Sundar Pichai." Hosted by Poppy Harlow. Boss Files with Poppy 
     Harlow, hosted by Poppy Harlow. </p>
          <p class="pl-16">Apple Podcats, Apple, podcasts.apple.com/us/ 
     podcast/google-ceo-sundar-pichai/id1201282406?i=1000441698736. Accessed 21 
     Apr. 2021. </p>
          <p>Grill, Prabhjote. "10 Ways Sundar Pichai Forged His Mark at Google in 15 Years." 
     Business Insider India, 4 Dec. 2019, </p>
          <p class="pl-16">www.businessinsider.in/thelife/ 
     personalities/news/10-ways-sunder-pichai-forged-his-mark-at-google-in-15-years/ 
     articleshow/72360619.cms. Accessed 20 Apr. 2021. </p>
          <p>Pichai, Sundar. "Google CEO Sundar Pichai's I/O 2017 Keynote." Youtube, uploaded 
     by Recode, 17 May 2017,</p>
          <p class="pl-16">www.youtube.com/watch?v=vWLcyFtni6U. </p>
          <p>Pichai, Sundar. "Sundar Pichai full speech at IIT Kharagpur 2017 | Sundar Pichai 
     at KGP | Latest Speech." Youtube, uploaded by </p>
          <p class="pl-16">BiscootTV, 10 Jan 2017, 
     https://www.youtube.com/watch?v=-yLlMk41sro. </p>
          <p>Schwab, Klaus. "An Insight, An Idea with Sundar Pichai | DAVOS 2020." 
     Youtube, uploaded by World Economic Forum, 22 Jan </p>
          <p class="pl-16">2020, 
     https://www.youtube.com/watch?v=7sncuRJtWQI. </p>
          <p>Shepherd, Melinda C. "Sundar Pichai." Britannica, www.britannica.com/biography/ 
     Sundar-Pichai. Accessed 20 Apr. 2021. </p>
          <p>"Sundar Pichai on Managing Google through the Pandemic." Hosted by Nilay Patel 
     and Dieter Bohn, performance by Sundar </p>
          <p class="pl-16"> Pichai. Google Podcasts, 
     podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vdmVyZ2VjYXN0/ 
     episode/MzNjZjNmMTAtMGJiNi0xMWVhLTljOTgtOGYwMWNlMDM3ODky. Accessed 20 Apr. 
     2021. </p>
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

.sources {
  line-height: 2.5;
}

.sources > p {
  /* @apply ; */
  text-align: left;

}

.citedd {
  /* left: 50%;
  transform: translateX(50%); */
}

</style>
