<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
// import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: { 
    NavBar 
  },
  // methods: {
  //   ...mapActions(['fetchCurrentUser'])
  // },
  // created() {
  //   this.fetchCurrentUser()
  // }
}
</script>

<style>
  * {
    font-family: 'IBM Plex Sans KR', sans-serif;
  }
</style>