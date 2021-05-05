<template>
  <div class="home">
    <Header label1="Tech CEO" />
    <div class="space-y-10">
      <div>
        <img src="../assets/ceo.svg">
      </div>
      <div id="p1">
        <p>Though Sundar has contributed greatly to American society through innovations such as Chrome and through his work with Android, the sheer position he holds is very impactful to the Asian American community. Being the CEO of Google, Pichai provides hope for the Asian American community that faces discrimination in leadership positions.</p>
      </div>
      <div id="p2">
        <p>According to Karthick Ramakrishnan, associate dean of public policy at UC Riverside, and Jennifer Lee, professor of sociology at Columbia University, “[Asians] may be hired in large numbers by tech companies, but Asian Americans are the group least likely to be promoted into managerial and executive ranks. Whites are twice as likely as Asians to hold executive positions.” Since the discrimination Asian Americans face lies in obtaining executive jobs, the “model minority” myth is able to thrive: the generalization is that many Asians get jobs, so they do not face any discrimination, when in reality the prejudice they face is beneath the surface.</p>
      </div>
      <div id="p3">
        <p>Sundar Pichai’s rise to the top of Google and Alphabet therefore counters the general trend of injustice that plagues his community. He has worked on supporting legislation that promotes the place of immigrants in the US, an example being his support for the DREAMers Act in Congress, a bill which if passed would have allowed legal status to undocumented immigrants brought to the US as youth. Vocalizations of solidarity from Pichai have impact in society due to his position. </p>
      </div>
      <div id="p4">
        <p>It is a common argument that Asian Americans, especially immigrants, lack the ability to effectively communicate to their counterparts in the workplace, due to accents, cultural barriers, etc. However, many times Asian Americans are not presented with the same opportunities as others to display their abilities. For example, 51% of Asians had led a meeting in the workplace compared to 68% of their white counterparts (<a href="https://www.latimes.com/opinion/op-ed/la-oe-ramakrishnan-lee-asian-american-executives-20171019-story.html">Jennifer Lee and Ramkrishnan</a>). Leading a meeting is an essential part of being considered for higher positions.</p>
      </div>
      <div>
        <p>Pichai once again provides hope for Asian Americans, delegitimizing the argument against the minority presented above, as he himself has an accent and is clearly still able to communicate efficiently and effectively. His CEO position provides hope to other immigrants with barriers between them and America’s majority white workforce, showing them that they can make an impact regardless of matters such as an accent. </p>
      </div>
      <div>
        <p>His unprecedented progress in the executive world as an Asian American has also greatly influenced the ambitions of Asian Americans, as you can see in this fun introduction to one of his interviews at the Google headquarters.</p>
        <p id="caption">Watch the first minute or so, it's pretty happy :) </p>
        <iframe class="mx-auto pt-8" width="500" height="400" src="https://www.youtube.com/embed/H_8UBv5bZo0">
          </iframe> 
      </div>
      <div>
        <p>Sundar does not only deal with technology as the CEO of Google. He has also said that “it’s the job of the CEO to be chief ethics officer, given the scale at which technology impacts society” (<a href="https://www.cnn.com/2019/12/04/tech/sundar-pichai-alphabet-ceo/index.html">Yurieff</a>). This could not be more true, as Pichai is constantly asked about monitoring hate speech, conspiracy theories, and more. In an interview with the New York Times, he said, “What is the difference between freedom of speech on something where you feel you’re being discriminated against by another group, versus hate speech?...Should people be able to say that they don’t believe climate change is real? Or that vaccines don’t work? It’s just a genuinely hard problem” (<a href="https://www.nytimes.com/2018/11/08/business/sundar-pichai-google-corner-office.html">Gelles</a>). Seeing as Google is largely responsible for a huge portion of information in American society, Pichai’s mantle as CEO plays a pivotal role in how the nation functions.</p>
      </div>
      <div>
        <p>Through his CEO position and ability to take executive action, Pichai has impacted many aspects of American culture on top of creating hope and inspiration for the Asian American minority in America. </p>
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

@media (min-width: 0px) {
  p, li {
    @apply pl-12 pr-12;
  }
  
}

@media (min-width: 700px) {
  p, li {
    @apply pl-24 pr-24;
  }
  
}

p, li {
  @apply text-xl text-left leading-loose;
  font-family: Times New Roman;
  
}

#caption {
  @apply text-center object-center pt-10 italic;
}

div > img {
  @apply w-auto max-h-16 mx-auto;
}

a {
  @apply underline text-blue-600;
}

</style>>
