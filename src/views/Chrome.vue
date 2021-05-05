<template>
  <div class="home">
    <Header label1="Google Chrome"/>
    <div class="space-y-10">
      <div>
        <img src="../assets/chrome.svg">
      </div>
      <div id="p1">
        <p>One of Sundar’s greatest accomplishments in the world of consumer technology is his conception of the idea to launch a web browser by the name of Chrome… Sundar realized that, since people had started to spend so much time on his computer in the browser (like we still do today), he could revolutionize the web industry by launching Google’s own web browser, Google Chrome.</p>
      </div>
      <div>
        <p>In his early years at Google, Sundar had been working on the toolbar, a way for users to have a search engine readily available to them while browsing the web (<a href="https://www.britannica.com/biography/Sundar-Pichai">Shepherd</a>). He realized that, since people had started to spend so much time on their computers in the browser (like we still do today), he could revolutionize the web industry by launching Google’s own web browser, Google Chrome.</p>
      </div>
      <div>
        <p>First, to get an idea of how early in development web browsing was during those years, let’s take a look at competing web browsers at the time. The best way to get on the web was through either Microsoft’s Internet Explorer, a main competitor in the so called “Browser Wars” that consistently boasted “new capabilities” against other browsers, or Mozilla Firefox, a newly released browser that “saw a rapid rise in popularity for a few years.” (<a href="https://smartbear.com/blog/history-of-web-browsers/">McPeak</a>). Web technologies were bleeding edge tech in the early 2000s, and that new improvements were constantly being made.</p>
        <!-- <ul class="list-disc">
          <li>Remember that, at the time, the only other available browsers were ones like Firefox and Internet explorer, and the user experience looked like this:</li>
          <img class="mx-auto" src="../assets/phoenix.png">
          <p>What web browsers used to look like before Google Chrome. Pretty clunky, right?</p>
        </ul> -->
      </div>
      <div>
        <p>In 2008, Google Chrome was introduced to the browser market (<a href="https://www.britannica.com/biography/Sundar-Pichai">Shepherd</a>). 
          Within Google, Sundar had been pivotal in the creation and development of the Google Chrome web browser. He had realized that, for Google to keep its competitive edge over other tech companies, they had to build their own web browser.</p>
        <!-- <ol class="list-decimal">
          <li>Google Chrome was faster, more secure and more stable, which meant it didn't crash as often.</li>
          <li>Second, Google Chrome was much more simple to use and less of a hassle to access the web.</li>
          <li>The product, Google Chrome, was also released to the public through an open source project called Chromium, which pretty much means, Sundar made it possible for other companies to gain access to Chrome’s innovations in web development, rather than keeping all of Google’s work to themselves. </li>
        </ol> -->
      </div>
      <div>
        <p>Google Chrome changed web browsing significantly in a couple different ways.</p>
        <p>1. For one, Google Chrome was faster, more secure and more stable. In his announcement of Google Chrome in 2008, Pichai said that “in Chrome, each tab runs in its own process,” which “makes the browser much more responsive” and “more stable” by preventing one tab crashing from crashing the whole browser. In addition, this improves security by limiting the power of the browser over your computer (Pichai). These huge leaps in improving the web experience for the common internet user meant that one could spend significantly less time to accomplish the same tasks on the web, by not having to worry about crashes, inefficiency or security.</p>
        <p>2. Second, Google Chrome introduced a “very simple user experience” and “simple streamlined look” (Pichai). Pichai explained that one of its main goals was to make users “[forget] that they are using the browser.” The result was one of the cleanest and easy-to-use browsers that eventually went on to dominate the browser market. The new user experience meant that more Americans could learn how to use web browsers and could use it more easily, which certainly contributed to an increase in web browser and internet usage and the overall dominance of the web industry in American technology.</p>
        <p>3. Finally, Google Chrome is a “fully open source” project, with the intent to “help drive the whole web platform forward” (Pichai). This means that the code base behind Chrome was released to the public, making it possible for other companies to gain access to Chrome’s innovations in web development and utilize them in their own services or contribute to it to make it even better. Today, many competitive web browsers are based on the Chromium project, such as the most recently released Internet Explorer and the Brave browser. </p>
      </div>
      <div>
        <p>Of course, we see today how much Sundar has impacted each and every one of us. In the US, Chrome consists of almost 60% of the web browser market share, and competing browsers are either based off of the Chromium project or are less performant.</p>
        <p>Sundar’s amazing work on changing how we, as tech consumers, use the web (which is where we spend the majority of our time when we are on our computers) is a great achievement from an Asian American that has shaped America’s identity by changing technology, and reveals how the Asian American impact is very much significant to American society as a whole.</p>
      </div>
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

p {
  @apply text-xl text-left pl-24 pr-24 leading-loose;
  font-family: Times New Roman;
  
}

ul > p {
  @apply text-center italic pt-4;
}

li {
  @apply text-xl text-left pl-5 leading-loose list-item;
  margin-left: 120px;
  margin-right: 120px;
  font-family: Times New Roman;
}

#subtopics > ol {
  @apply list-decimal;
}

div > img {
  @apply mx-auto max-h-16 w-auto;
}

a {
  @apply underline text-blue-600;
}

</style>