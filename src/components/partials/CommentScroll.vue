<template>
  <div>
    <p class="text-xl font-semibold text-teal-700 mb-2">Recent Comments</p>
    <div class="flex items-center items-stretch overflow-x-auto flex-no-wrap pb-2">
      <div v-for="(comment, index) in comments" class="bg-white shadow-md p-4 max-w-xs rounded-lg mr-4 flex-0 flex flex-col" :key="index">
        <div class="mb-2 flex items-center">
          <img v-if="showUsers" class="rounded-full w-5 h-5 mr-1" :src="comment.user.avatar" :alt="comment.user.name">
          <p v-if="showUsers" class="text-xs text-teal-600" v-html="`${comment.user.name} &bull; ${comment.timeAgo}`"></p>
        </div>
        <p class="text-teal-700 leading-relaxed flex-1" v-text="comment.content"></p>
        <div class="flex items-center justify-between">
          <p class="text-teal-600 font-semibold text-sm" v-html="`${comment.song.name} &dash; ${comment.song.artist}`"></p>
          <p v-if="! showUsers" class="ml-1 text-teal-400 font-medium text-xs text-right" v-html="comment.timeAgo"></p>
        </div>
      </div>
      <div class="bg-transparent w-1 h-full -ml-2">&nbsp;</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: Array[Object],
    showUsers: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
