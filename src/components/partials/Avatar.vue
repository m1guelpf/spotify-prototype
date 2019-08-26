<template>
  <div class="relative">
    <img class="rounded-full w-10" :src="src" :alt="alt">
    <div v-if="online" class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-brand-500"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    online: Boolean,
  },
};
</script>
