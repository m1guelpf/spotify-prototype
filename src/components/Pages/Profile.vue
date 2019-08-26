<template>
  <div class="py-8 px-4">
    <div class="mb-10">
      <div class="flex flex-col items-center justify-center mb-4">
        <img class="rounded-full w-16 h-16 mb-2" :src="user.avatar" :alt="user.name">
        <p class="text-teal-800 font-semibold text-xl mb-2" v-text="user.name"></p>
        <div v-if="! user.self">
          <button v-if="! user.following" @click="user.following = true" class="rounded-full bg-teal-500 text-teal-100 border border-teal-500 py-2 px-8 uppercase text-sm tracking-widest font-bold focus:outline-none focus:shadow-outline">Follow</button>
          <button v-else @click="user.following = false" class="rounded-full border border-teal-500 text-teal-500 py-2 px-4 uppercase text-sm tracking-widest font-bold focus:outline-none focus:shadow-outline">Following</button>
        </div>
      </div>
      <div class="flex items-center justify-between max-w-sm mx-auto mb-6">
        <div class="text-center border-r flex-1">
          <span class="text-xl font-medium text-teal-800">40</span>
          <p class="text-teal-700 text-sm">Playlists</p>
        </div>
        <div class="text-center border-r flex-1">
          <span class="text-xl font-medium text-teal-800">139</span>
          <p class="text-teal-700 text-sm">Followers</p>
        </div>
        <div class="text-center flex-1">
          <span class="text-xl font-medium text-teal-800">920</span>
          <p class="text-teal-700 text-sm">Following</p>
        </div>
      </div>
      <Alert v-if="! user.self" href="#" :users="[this.$user, this.user]" :message="`${user.name} and you share 30 common artists! We've generated this playlist with songs you both like and some you might like.`" />
    </div>
    <CommentScroll class="mb-4 -mr-4" v-if="user.comments.length > 0" :comments="user.comments" :showUsers="false" />
    <div v-if="user.playlists.length > 0" class="bg-white flex flex-col px-4 pt-4 shadow-md mb-8" style="border-radius: 2rem;">
      <p class="text-xl text-teal-700 font-semibold text-center mb-4">Playlists</p>
      <div class="flex items-center items-stretch flex-wrap">
        <div v-for="(playlist, index) in user.playlists" class="flex flex-col w-32 overflow-hidden mr-4 mb-4" :key="index">
          <div class="w-full h-32 rounded-lg bg-center bg-no-repeat bg-cover mb-2" :style="`background-image: url('${playlist.cover}')`"></div>
          <p class="flex-1 text-center text-brand-700 font-medium" v-text="playlist.name"></p>
        </div>
      </div>
    </div>
    <Feed :feed="userFeed" :showOnline="false"></Feed>
  </div>
</template>

<script>
import CommentScroll from '../partials/CommentScroll.vue';
import Alert from '../partials/Alert.vue';
import Feed from './Feed.vue';

export default {
  props: {
    user: {
      type: Object,
      default() {
        return {
          name: this.$user.name,
          avatar: this.$user.avatar,
          self: true,
          following: false,
          playlists: [
            { cover: 'https://pl.scdn.co/images/pl/default/1f28895c4637dda6039f147e82531ff4a77e8146', name: 'Linkin Park - The Unreleased Stuff' },
            { cover: 'https://pl.scdn.co/images/pl/default/6ebf7cd1dd1d94bc26c0736ee64b414def91592e', name: 'Studio Ghibli Instrumental' },
            { cover: 'https://i.scdn.co/image/5ac4fa36e246ffd7138ade4efbc838da3ca95081', name: 'Half • Alive Discography' },
            { cover: 'https://i.scdn.co/image/4e974c036d7575df1aa726e77473fb357e9e7d0a', name: 'Relax' },
            { cover: 'https://i.scdn.co/image/eb1c54fc2683746d724899971ade1bfd130c5c76', name: 'Naval' },
            { cover: 'https://mosaic.scdn.co/300/5a0c73915586db4a6acf0a92eb7c503877f1c9a46f1aa2add0dea7c5f364ef21a1e0f879c8dae84881e3d1cdb4b55fc38737a97a9093068591b17f80d6b9f37838bb6f4eb8ffca96fe18b20b3d23f2f8', name: 'Music With Ana' },
          ],
          comments: [
            {
              song: { name: 'Querty', artist: 'Linkin Park' },
              content: 'I really like the energy on this song, especially from the second chorus, gets me every time!',
              timeAgo: 'just now',
            }, {
              song: { name: 'Chlorine', artist: 'Twenty One Pilots' },
              content: 'The intro of this song is really awesome and I think we should say it more.',
              timeAgo: '30 seconds ago',
            }, {
              song: { name: 'Hellboy', artist: 'Ryan Oakes' },
              content: 'Just listened distorted vocals at the start of the song for the fifth time, and they keep getting better.',
              timeAgo: '1 minute ago',
            }, {
              song: { name: 'Rookie of the Year', artist: 'Chris Webby' },
              content: 'The pitch change on the chorus made me loop this for an hour.',
              timeAgo: '3 minutes ago',
            }, {
              song: { name: 'How You Remind Me', artist: 'Nickelback' },
              content: 'Nothing better than Nickelback to remind ourselves of the 2000 decade!',
              timeAgo: '5 minutes ago',
            }, {
              song: { name: 'Crab Rave', artist: 'Noisestorm' },
              content: 'CRABS CRABS CRABS',
              timeAgo: '8 minutes ago',
            }, {
              song: { name: 'Fireflies', artist: 'Owl City' },
              content: 'After listening to the Megalovania remix, I find the original song very lacking.',
              timeAgo: '10 minutes ago',
            }, {
              song: { name: 'Intro III', artist: 'NF' },
              content: 'This is one of the best songs I have ever heard and no one can convince me otherwise.',
              timeAgo: '12 minutes ago',
            }, {
              song: { name: 'Dirty Laundry', artist: 'All Time Low' },
              content: 'Does anyone know what genre this song belongs to? Could be Emo, Punk or Alt 🤔',
              timeAgo: '18 minutes ago',
            }, {
              song: { name: 'Entre Poetas y Presos', artist: 'La Raíz' },
              content: 'I have said it before and I will say it again: peak poetry.',
              timeAgo: '20 minutes ago',
            },
          ],
          activity: [
            'just commented on <a href="#">High Hopes</a> by <a href="#">Panic! at the Disco</a>.',
            'just favourited <a href="#">Debris (Minutes to Midnight Demo)</a> by <a href="#">Linkin Park</a>.',
            'just saved the <a href="#">Songmash</a> playlist to their library.',
          ],
        };
      },
    },
  },
  computed: {
    userFeed() {
      return this.user.activity.map(message => ({ component: 'Activity', props: { avatar: this.user.avatar, name: this.user.name, message } }));
    },
  },
  components: {
    Alert,
    CommentScroll,
    Feed,
  },
};
</script>
