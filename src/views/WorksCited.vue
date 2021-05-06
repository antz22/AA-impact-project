<template>
  <div>
    <Header label="Works Cited"/>
    <div>
      <div class="citedd mx-auto container max-w-5xl">
        <h1 class="text-5xl font-extrabold times-text pb-10">Sources</h1>
        <hr>
        <div class="sources text-lg text-black times-text p-10">
          <p>"Desktop Browser Market Share United States Of America." <span>StatCounter</span>, Apr. 2021, gs.statcounter.com/browser-market-share/desktop/united-states-of-america. Accessed 4 May 2021.</p>

          <p>Gelles, David. "Sundar Pichai of Google: 'Technology Doesn't Solve Humanity's Problems.'" <span>The New York Times</span>, New York Times Company, 8 Nov. 2018, www.nytimes.com/2018/11/08/business/sundar-pichai-google-corner-office.html. Accessed 4 May 2021.</p>

          <p>Gupta, Sahil Mohan. "Sundar Pichai Brought Android to the Rest of Google, Says Android Boss." <span>India Today</span>, Mar. 2016, www.indiatoday.in/technology/news/story/sundar-pichai-brought-android-to-the-rest-of-google-says-android-boss-315225-2016-03-29. Accessed 3 May 2021.</p>

          <p>McPeak, Alex. "A Brief History of Web Browsers and How They Work." <span>Smart Bear</span>, 24 Jan. 2018, smartbear.com/blog/history-of-web-browsers/. Accessed 4 May 2021.</p>

          <p>"Mobile Operating System Market Share Angola." <span>Stats Counter Global Stats</span>, gs.statcounter.com/os-market-share/mobile/angola. Accessed 3 May 2021.</p>

          <p>"Mobile Operating System Market Share India." <span>Stats Counter Global Stats</span>, gs.statcounter.com/os-market-share/mobile/india. Accessed 3 May 2021.</p>

          <p>"Mobile Operating System Market Share United States of America." <span>Stat Counter Global Stats</span>, gs.statcounter.com/os-market-share/mobile/united-states-of-america. Accessed 3 May 2021.</p>

          <p>"Mobile Operating System Market Share Worldwide." <span>Stat Counter Global Stats</span>, gs.statcounter.com/os-market-share/mobile/worldwide. Accessed 3 May 2021.</p>

          <p>Moon, Brad. "Microsoft's 15 Biggest Flops." <span>Kiplinger</span>, 27 Mar. 2018, www.kiplinger.com/slideshow/investing/t057-s001-microsoft-s-15-biggest-flops-of-all-time/index.html. Accessed 3 May 2021.</p>

          <p>O'Dea, S. "Number of Android Smartphone Users in the United States from 2014 to 2022." <span>Statista</span>, 1 Mar. 2021, www.statista.com/statistics/232786/forecast-of-andrioid-users-in-the-us/#statisticContainer. Accessed 3 May 2021.</p>

          <p>Pichai, Sundar. "Shah Rukh Khan with Sundar Pichai | Happy New Year Film | Talks at Google." YouTube, uploaded by Talks at Google, 1 Oct. 2014, www.youtube.com/watch?v=H_8UBv5bZo0. Accessed 4 May 2021.</p>

          <p>Pichai, Sundar. "Sundar Pichai at Google Chrome announcement in 2008." <span>Youtube</span>, uploaded by Bals HD, Apr 7 2018, https://youtu.be/qkoVX8t9GiE.</p>

          <p>Pichai, Sundar. "Sundar Pichai Commencement Speech | Dear Class Of 2020." <span>Youtube</span>, uploaded by YouTube Originals, 7 June 2020, https://www.youtube.com/watch?v=gEDChDOM1_U.</p>

          <p>Ramakrishnan, Karthick, and Jennifer Lee. "Op-Ed: Despite What You Might Have Heard, Asian American CEOs Are the Exception, Not the Norm." <span>Los Angeles Times</span>, 19 Oct. 2017, www.latimes.com/opinion/op-ed/la-oe-ramakrishnan-lee-asian-american-executives-20171019-story.html. Accessed 4 May 2021.</p>

          <p>Shepherd, Melinda C. "Sundar Pichai." <span>Britannica</span>, www.britannica.com/biography/Sundar-Pichai. Accessed 20 Apr. 2021.</p>

          <p>Stone, Brad. "Google's Sundar Pichai Is the Most Powerful Man in Mobile." <span>Bloomberg</span>, 27 June 2014, www.bloomberg.com/news/articles/2014-06-24/googles-sundar-pichai-king-of-android-master-of-mobile-profile. Accessed 3 May 2021.</p>

          <p>"What Is the Dream Act and Who Are the Dreamers?" <span>ADL</span>, www.adl.org/education/educator-resources/lesson-plans/what-is-the-dream-act-and-who-are-the-dreamers. Accessed 4 May 2021.</p>

          <p>Yurieff, Kaya. "Sundar Pichai Didn't Have a Computer Growing Up. Now He's CEO of Alphabet and Google." <span>CNN Business</span>, Cable News Network, 4 Dec. 2019, www.cnn.com/2019/12/04/tech/sundar-pichai-alphabet-ceo/index.html. Accessed 4 May 2021.</p>

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
.sources {
  line-height: 2.5;
  padding-left: 64px;
  text-indent: -64px;
}

.sources > p {
  text-align: left;
}

.sources > p > span {
  @apply italic;
}

</style>
