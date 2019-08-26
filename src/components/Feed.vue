<template>
  <div>
    <Online />
    <div class="p-4">
      <Activity avatar="https://avatars.io/twitter/JipFR" name="Jip" message='just saved the <a href="#">Songmash</a> playlist to their library.' />
      <Activity avatar="https://avatars.io/twitter/m1guelpf" name="Miguel" message='just commented on <a href="#">High Hopes</a> by <a href="#">Panic! at the Disco</a>.' />
      <Activity avatar="https://avatars.io/twitter/rdohms" name="Rafael Dohms" message='just favorited <a href="#">A-Six</a> by <a href="#">Linkin Park</a>.' />
      <Activity avatar="https://avatars.io/twitter/mbrennanchina" name="Matthew Brennan" message='just favorited <a href="#">Rush</a> by <a href="#">The Score</a>.' />
      <Activity avatar="https://avatars.io/twitter/Rainmaker1973" name="Massimo" message='just favorited <a href="#">in the dark</a> by <a href="#">Bring Me The Horizon</a>.' />
      <Activity avatar="https://avatars.io/twitter/joshWComeau" name="Josh" message='just favorited <a href="#">Stars - Radio Edit</a> by <a href="#">Vicetone</a>.' />
      <a href="#" class="px-4 py-10 bg-center bg-no-repeat bg-cover -mx-4 mb-6 text-brand-100 flex items-center justify-between" style="background-image: radial-gradient(circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,.5) 0%, rgba(95,209,249,.5) 100.2% ), url('https://i.scdn.co/image/a2d5caf95ea7319853924a019ff35bcf7dab123c');">
        <div>
          <p class="text-sm font-bold uppercase">Out now</p>
          <p class="text-2xl font-semibold">Pray for the Wicked</p>
          <p class="">by <a href="#" class="border-b border-transparent hover:border-brand-100">Panic! at the Disco</a></p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
      <Activity avatar="https://avatars.io/twitter/ArielSalvadorD1" name="Ariel Salvador" message='just favorited <a href="#">Leave Me Alone</a> by <a href="#">NF</a>.' />
      <Activity avatar="https://avatars.io/twitter/ASpittel" name="Ali Spittel" message='just favorited <a href="#">I Think I&apos;m OKAY</a> by <a href="#">Machine Gun Kelly</a> &amp; <a href="#">YUNGBLUD</a>.' />
      <Activity avatar="https://avatars.io/twitter/jamesivings" name="James Ivings" message='just favorited <a href="#">Everybody (Backstreet&apos;s Back)</a> by <a href="#">Backstreet Boys</a>.' />
      <Activity avatar="https://avatars.io/twitter/thepatwalls" name="Pat Walls" message='just favorited <a href="#">MZRY</a> by <a href="#">Crown The Empire</a>.' />
      <Activity avatar="https://avatars.io/twitter/fajarsiddiqFS" name="Fajar Siddiq" message='just favorited <a href="#">Wolf in Sheep&apos;s Clothing</a> by <a href="#">Set It Off</a>.' />
      <Activity avatar="https://avatars.io/twitter/Ludovicus82" name="Ludo" message='just favorited <a href="#">Comeback Kid</a> by <a href="#">New Politics</a>.' />
      <Activity avatar="https://avatars.io/twitter/BrentBeshore" name="Brent Beshore" message='just favorited <a href="#">Pure Gold</a> by <a href="#">half&bull;alive</a>.' />
      <Activity avatar="https://avatars.io/twitter/managore" name="Daniel Linssen" message='just favorited <a href="#">Panic Station</a> by <a href="#">Muse</a>.' />
      <Activity avatar="https://avatars.io/twitter/EmmaWedekind" name="Emma Wedekind" message='just favorited <a href="#">Part of Me</a> by <a href="#">Linkin Park</a>.' />
      <Activity avatar="https://avatars.io/twitter/boop" name="Bhoka" message='just favorited <a href="#">Feeling So Fly</a> by <a href="#">TobyMac</a>.' />
      <Activity avatar="https://avatars.io/twitter/mwichary" name="Marcin Wichary" message='just favorited <a href="#">Anarchist</a> by <a href="#">YUNGBLUD</a>.' />
      <Activity avatar="https://avatars.io/twitter/j_asminewang" name="Jasmine" message='just favorited <a href="#">Style</a> by <a href="#">Foster The People</a>.' />
      <Activity avatar="https://avatars.io/twitter/louanben" name="Louan" message='just favorited <a href="#">Paid</a> by <a href="#">Chris Webby</a>.' />
    </div>
  </div>
</template>

<script>
import Online from './Online.vue';
import Activity from './partials/Activity.vue';

export default {
  components: {
    Online,
    Activity,
  },
};
</script>
