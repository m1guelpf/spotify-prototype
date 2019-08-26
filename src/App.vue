<template>
  <div class="flex flex-col">
    <Header />
    <router-view class="flex-1 mb-8" />
    <Navigation class="fixed bottom-0 w-full" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Header,
    Navigation,
  },
};
</script>
