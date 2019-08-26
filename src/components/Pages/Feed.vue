<template>
  <div>
    <Alert v-if="showOnline" class="mt-4 mx-2" href="#" message='Four friends are currently listening to <a href="#">Panic! at the Disco</a>. Would you like to join them?' :users="[
      { avatar: 'https://avatars.io/twitter/codinghorror', name: 'Some Guy' },
      { avatar: 'https://avatars.io/twitter/m1guelpf', name: 'Miguel Piedrafita' },
      { avatar: 'https://avatars.io/twitter/TWmrjvs', name: 'mrjvs' },
      { avatar: 'https://avatars.io/twitter/JipFR', name: 'Jip' },
    ]" />
    <div class="p-4" ref="container"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import Alert from '../partials/Alert.vue';
import Activity from '../partials/Activity.vue';
import Banner from '../partials/Banner.vue';
import CommentScroll from '../partials/CommentScroll.vue';

export default {
  props: {
    showOnline: {
      type: Boolean,
      default: true,
    },
    feed: {
      type: Array[Object],
      default: () => ([
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/JipFR', name: 'Jip', message: 'just saved the <a href="#">Songmash</a> playlist to their library.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/m1guelpf', name: 'Miguel', message: 'just commented on <a href="#">High Hopes</a> by <a href="#">Panic! at the Disco</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/rdohms', name: 'Rafael Dohms', message: 'just favorited <a href="#">A-Six</a> by <a href="#">Linkin Park</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/mbrennanchina', name: 'Matthew Brennan', message: 'just favorited <a href="#">Rush</a> by <a href="#">The Score</a>.' } },
        {
          component: 'CommentScroll',
          class: ['mb-6', '-mr-4'],
          props: {
            comments: [
              {
                user: { avatar: 'https://avatars.io/twitter/m1guelpf', name: 'Miguel Piedrafita' }, song: { name: 'Querty', artist: 'Linkin Park' }, content: 'I really like the energy on this song, especially from the second chorus, gets me every time!', timeAgo: 'just now',
              },
              {
                user: { avatar: 'https://avatars.io/twitter/wongmjane', name: 'Jane Machun' }, song: { name: 'Chlorine', artist: 'Twenty One Pilots' }, content: 'The intro of this song is really awesome and I think we should say it more.', timeAgo: '30 seconds ago',
              },
              {
                user: { avatar: 'https://avatars.io/twitter/thekitze', name: 'Kitze' }, song: { name: 'Hellboy', artist: 'Ryan Oakes' }, content: 'Just listened distorted vocals at the start of the song for the fifth time, and they keep getting better.', timeAgo: '1 minute ago',
              },
              {
                user: { avatar: 'https://avatars.io/twitter/frankdejonge', name: 'Frank de Jonge' }, song: { name: 'Rookie of the Year', artist: 'Chris Webby' }, content: 'The pitch change on the chorus made me loop this for an hour.', timeAgo: '3 minutes ago',
              },
              {
                user: { avatar: 'https://avatars.io/twitter/rdohms', name: 'Rafael Dohms' }, song: { name: 'How You Remind Me', artist: 'Nickelback' }, content: 'Nothing better than Nickelback to remind ourselves of the 2000 decade!', timeAgo: '5 minutes ago',
              },
              {
                user: { avatar: 'https://avatars.io/twitter/eddiepalmans', name: 'Eddie Palmans' }, song: { name: 'Crab Rave', artist: 'Noisestorm' }, content: 'CRABS CRABS CRABS', timeAgo: '8 minutes ago',
              },
              {
                user: { avatar: 'https://avatars.io/twitter/lianakangas', name: 'Liana' }, song: { name: 'Fireflies', artist: 'Owl City' }, content: 'After listening to the Megalovania remix, I find the original song very lacking.', timeAgo: '10 minutes ago',
              },
              {
                user: { avatar: 'https://avatars.io/twitter/vanschneider', name: 'Tobias van Schneider' }, song: { name: 'Intro III', artist: 'NF' }, content: 'This is one of the best songs I have ever heard and no one can convince me otherwise.', timeAgo: '12 minutes ago',
              },
              {
                user: { avatar: 'https://avatars.io/twitter/nedwilliamson', name: 'Ned Williamson' }, song: { name: 'Dirty Laundry', artist: 'All Time Low' }, content: 'Does anyone know what genre this song belongs to? Could be Emo, Punk or Alt 🤔', timeAgo: '18 minutes ago',
              },
              {
                user: { avatar: 'https://avatars.io/twitter/thesmonroeshow', name: 'Dimitri Monroe' }, song: { name: 'Entre Poetas y Presos', artist: 'La Raíz' }, content: 'I have said it before and I will say it again: peak poetry.', timeAgo: '20 minutes ago',
              },
            ],
          },
        },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/Rainmaker1973', name: 'Massimo', message: 'just favorited <a href="#">in the dark</a> by <a href="#">Bring Me The Horizon</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/joshWComeau', name: 'Josh', message: 'just favorited <a href="#">Stars - Radio Edit</a> by <a href="#">Vicetone</a>.' } },
        {
          component: 'Banner',
          class: ['-mx-4', 'mb-6'],
          props: {
            href: '#', image: 'https://i.scdn.co/image/a2d5caf95ea7319853924a019ff35bcf7dab123c', album: 'Pray for the Wicked', artist: 'Panic! at the Disco',
          },
        },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/ArielSalvadorD1', name: 'Ariel Salvador', message: 'just favorited <a href="#">Leave Me Alone</a> by <a href="#">NF</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/ASpittel', name: 'Ali Spittel', message: 'just favorited <a href="#">I Think I&apos;m OKAY</a> by <a href="#">Machine Gun Kelly</a> &amp; <a href="#">YUNGBLUD</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/jamesivings', name: 'James Ivings', message: 'just favorited <a href="#">Everybody (Backstreet&apos;s Back)</a> by <a href="#">Backstreet Boys</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/thepatwalls', name: 'Pat Walls', message: 'just favorited <a href="#">MZRY</a> by <a href="#">Crown The Empire</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/fajarsiddiqFS', name: 'Fajar Siddiq', message: 'just favorited <a href="#">Wolf in Sheep&apos;s Clothing</a> by <a href="#">Set It Off</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/Ludovicus82', name: 'Ludo', message: 'just favorited <a href="#">Comeback Kid</a> by <a href="#">New Politics</a>.' } },
        { component: 'Alert', class: ['mb-6', '-mx-2'], props: { href: '#', message: 'You haven&apos;t listened to your <a href="#">Cinematic Rap</a> playlist in a year. Ready to revisit old memories?' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/BrentBeshore', name: 'Brent Beshore', message: 'just favorited <a href="#">Pure Gold</a> by <a href="#">half&bull;alive</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/managore', name: 'Daniel Linssen', message: 'just favorited <a href="#">Panic Station</a> by <a href="#">Muse</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/EmmaWedekind', name: 'Emma Wedekind', message: 'just favorited <a href="#">Part of Me</a> by <a href="#">Linkin Park</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/boop', name: 'Bhoka', message: 'just favorited <a href="#">Feeling So Fly</a> by <a href="#">TobyMac</a>.' } },
        {
          component: 'Banner',
          class: ['-mx-4', 'mb-6'],
          props: {
            href: '#', image: 'https://i.scdn.co/image/654173e97fe44927a71dda14032f3c5435adf5df', album: 'The Search', artist: 'NF',
          },
        },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/j_asminewang', name: 'Jasmine', message: 'just favorited <a href="#">Style</a> by <a href="#">Foster The People</a>.' } },
        { component: 'Activity', props: { avatar: 'https://avatars.io/twitter/louanben', name: 'Louan', message: 'just favorited <a href="#">Paid</a> by <a href="#">Chris Webby</a>.' } },
      ]),
    },
  },
  components: {
    Alert,
  },
  mounted() {
    const ActivityClass = Vue.extend(Activity);
    const CommentScrollClass = Vue.extend(CommentScroll);
    const BannerClass = Vue.extend(Banner);
    const AlertClass = Vue.extend(Alert);

    this.feed.map(item => Object.assign({ class: [], props: {} }, item)).forEach((item) => {
      let Component;

      switch (item.component) {
        case 'Activity':
          Component = ActivityClass;
          break;
        case 'CommentScroll':
          Component = CommentScrollClass;
          break;
        case 'Banner':
          Component = BannerClass;
          break;
        case 'Alert':
          Component = AlertClass;
          break;

        default:
          break;
      }

      const instance = new Component({
        propsData: item.props,
      });

      instance.$mount();

      instance.$el.classList.add(...item.class);

      this.$refs.container.appendChild(instance.$el);
    });
  },
};
</script>
