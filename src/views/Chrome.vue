<template>
  <div class="home">
    <div id="intro">
      <Header label1="Google Chrome"/>
      <p>One of Sundar’s greatest accomplishments in the world of consumer technology is his conception of the idea to launch a web browser by the name of Chrome… </p>
      <p>In his early years at Google, Sundar had been working on the toolbar, a way for users to have a search engine readily available to them while browsing the web. Here’s a picture of what it looked like:</p>
      <p>Sundar realized that, since people had started to spend so much time on his computer in the browser (like we still do today), he could revolutionize the web industry by launching Google’s own web browser, Google Chrome.</p>
      <ul style="list-style-type:disc">
        <li>Remember that, at the time, the only other available browsers were ones like Firefox and Internet explorer, and the user experience looked like this:</li>
        <img class="mx-auto" src="../assets/phoenix.png">
      </ul>
    </div>
    <div id="subtopics">
      <h1>Since its release in 2008 (CITE), Google Chrome changed web browsing in a couple different ways.</h1>
      <ol style="list-style-type:decimal">
        <li>Google Chrome was faster, more secure and more stable, which meant it didn't crash as often.</li>
        <li>Second, Google Chrome was much more simple to use and less of a hassle to access the web.</li>
        <li>The product, Google Chrome, was also released to the public through an open source project called Chromium, which pretty much means, Sundar made it possible for other companies to gain access to Chrome’s innovations in web development, rather than keeping all of Google’s work to themselves. </li>
      </ol>
    </div>
    <div id="conc">
      <p>Of course, we see today how much Sundar has impacted each and every one of us — how many devices do you have in your house? How many of them use google chrome? Likely all of them — Chrome has ___ % of the market share, and the competing browsers are either based off of Google Chrome or are slower.</p>
      <p>Sundar’s amazing work on changing how we, as tech consumers, use the web (which is where we spend the majority of our time when we are on our computers) is a great achievement from an Asian American that has shaped America’s identity by changing technology, and reveals how the Asian American impact is very much significant to American society as a whole.</p>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Chrome',
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

</style>