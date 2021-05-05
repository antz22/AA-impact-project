<template>
  <div class="home">
    <Header label1="Android" />
    <div class="space-y-10">
      <div>
        <img src="../assets/android.png">
      </div>
      <div id="p1">
        <p>Android’s operating system (OS) is the most used worldwide, with a whopping 71.93% global market share as of January 2021 (“<a href="https://gs.statcounter.com/os-market-share/mobile/worldwide">Mobile Operating System Market Share Worldwide</a>”). In the US, the number of Android smartphone users increased from 129.1 to 131.2 million over the past year (<a href="https://www.statista.com/statistics/232786/forecast-of-andrioid-users-in-the-us/">O’Dea</a>). The sheer number of Android devices in the US highlights how significant Pichai and his products are, and the 2.1 million unit increase in shipments shows that they are still relevant in the US. ("<a href="https://gs.statcounter.com/os-market-share/mobile/united-states-of-america">Mobile Operating System Market Share United States Of America</a>”). </p>
      </div>
      <div>
        <p>Granted, many of you will likely find it hard to see how Android has influenced the United States, as most of you are probably Apple iOS users - and you are correct to believe so, in a sense. Android’s market share in the US is only 38.33%, compared to Apple’s share at 61.47% ("<a href="https://gs.statcounter.com/os-market-share/mobile/united-states-of-america">Mobile Operating System Market Share United States Of America</a>”). However, this margin can be accredited to the affluence of the United States, which fosters a consumer culture that prioritizes fashion over function. Android phones focus more on functionality, making them more available to those of the middle and lower classes, evident by its dominant market shares in developing countries like India and Angola, which are 96.41% and 83.1%, respectively (<a href="https://gs.statcounter.com/os-market-share/mobile/angola">Mobile Angola</a>, <a href="https://gs.statcounter.com/os-market-share/mobile/india">Mobile India</a>). Android’s humongous global market share was in part due to Sundar Pichai’s marketing efforts for Android as a collaborative project throughout the organization of Google, and as a worldwide player that compromises with the competitors around it.</p>
      </div>
      <div id="graph">
        <img src="../assets/graph.png">
        <p>From <a href="https://www.statista.com/statistics/232786/forecast-of-andrioid-users-in-the-us/">"Android smartphone users in the United States 2014-2022"</a>, published by O'Dea</p>
      </div>
      <div id="p2">
        <p>Andy Rubin, the previous head of Android, “operated the unit in an insular way” (<a href="https://www.indiatoday.in/technology/news/story/sundar-pichai-brought-android-to-the-rest-of-google-says-android-boss-315225-2016-03-29">Gupta</a>) such that one employee remarked that his style “was responsible for the only shouting matches he’s witnessed in the upper ranks at the company” (<a href="https://www.bloomberg.com/news/articles/2014-06-24/googles-sundar-pichai-king-of-android-master-of-mobile-profile">Stone</a>). Sundar Pichai brought Android to a global level by fostering a more collaborative mindset between Android and its original equipment manufacturers (OEM’s), such as Motorola, who “never got any special treatment from the Android team” (<a href="https://www.indiatoday.in/technology/news/story/sundar-pichai-brought-android-to-the-rest-of-google-says-android-boss-315225-2016-03-29">Gupta</a>) under Rubin’s management.</p>
      </div>
      <div id="p3">
        <p>In 2014, after a startling announcement by Samsung at the Consumer Electronics Show in Las Vegas, Pichai convinced Samsung’s CEO, J.K. Shin, to remove Samsung’s Magazine UX software from their phones, as it hid Google products such as the Play Store. This negotiation allowed the two companies to “work together more closely on user experience than we ever have before,” according to Pichai (<a href="https://www.bloomberg.com/news/articles/2014-06-24/googles-sundar-pichai-king-of-android-master-of-mobile-profile">Stone</a>), thus illustrating how Pichai’s rise to Android’s leadership role resulted in a more cooperative relationship with its partners, whereas before, mediocre businesses allowed miscommunications to occur during projects (<a href="https://www.kiplinger.com/slideshow/investing/t057-s001-microsoft-s-15-biggest-flops-of-all-time/index.html">Moon</a>).</p>
      </div>
      <div id="p4">
        <p>Even when Samsung boasted about its own OS called Tizen and the possibility of decreasing their dependency on Android’s OS, Pichai responded in a level-headed manner, saying, “I view Tizen as a choice which people can have,” and “we need to make sure Android is the better choice” (<a href="https://www.bloomberg.com/news/articles/2014-06-24/googles-sundar-pichai-king-of-android-master-of-mobile-profile">Stone</a>).This impartial yet motivated response to Samsung’s boasting is different from how Rubin may have responded, as Rubin’s methodology involved “choosing a different company each year for early access to the newest version of the software” to foster “competition among phonemakers” (<a href="https://www.bloomberg.com/news/articles/2014-06-24/googles-sundar-pichai-king-of-android-master-of-mobile-profile">Stone</a>). This manipulative workstyle may have caused Rubin to either shut out or relegate Samsung to the background if he had managed Android during the Tizen situation, thus showing how Pichai’s differing cultural background allowed him to maintain a humble attitude when confronted with inconveniences. </p>
      </div>
      <div id="p5">
        <p>Sundar Pichai’s uniquely Asian views of observing the big picture, having a collective mindset, and finding win-win situations have transformed the business world today, and modernized the monopoly’s approach to maintaining business relationships.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Android',
  components: {
    Header,
  },

}
</script>

<style scoped>

p, li {
  @apply text-xl text-left pl-24 pr-24 leading-loose;
  font-family: Times New Roman;
  
}

a {
  @apply underline text-blue-600;
}

#graph > img {
  @apply mx-auto w-auto max-h-96;
}

#graph > p {
  @apply text-center italic;
}

div > img {
  @apply mx-auto max-h-16 w-auto;
}

</style>