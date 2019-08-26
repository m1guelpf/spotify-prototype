<template>
  <div class="flex items-center justify-between bg-white p-4 shadow">
    <router-link to="/">
      <h1 class="text-teal-500 text-2xl font-bold">Spotify</h1>
    </router-link>
    <router-link to="/profile" class="flex items-center">
      <img class="rounded-full w-10 h-10 mr-2" :src="$user.avatar">
      <router-link to="/profile" class="text-sm text-teal-900 border-b border-transparent hover:border-brand-500 mr-2" v-text="$user.name"></router-link>
      <svg class="text-teal-900 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </router-link>
  </div>
</template>
