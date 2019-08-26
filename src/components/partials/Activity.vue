<template>
  <div class="flex items-center mb-6" data-activity-item>
      <div class="mr-2">
        <img class="rounded-full w-10" :src="avatar" :alt="name">
      </div>
      <div>
        <a href="#" v-text="name"></a> <span v-html="` ${message}`"></span>
      </div>
    </div>
</template>

<script>
export default {
  props: ['name', 'avatar', 'message'],
};
</script>

<style lang="less">
[data-activity-item] a {
  @apply .text-teal-500 .border-b .border-transparent;

  &:hover {
    @apply .border-teal-500;
  }
}
</style>
