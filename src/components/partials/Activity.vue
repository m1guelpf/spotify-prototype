<template>
  <div class="flex items-center mb-6" data-activity-item>
      <div class="mr-2">
        <Avatar :src="avatar" :alt="name" online />
      </div>
      <div>
        <a href="#" v-text="name"></a> <span v-html="` ${message}`"></span>
      </div>
    </div>
</template>

<script>
import Avatar from './Avatar.vue';

export default {
  props: ['name', 'avatar', 'message'],
  components: {
    Avatar,
  },
};
</script>

<style lang="less">
[data-activity-item] a {
  @apply .text-brand-500 .border-b .border-transparent;

  &:hover {
    @apply .border-brand-500;
  }
}
</style>
