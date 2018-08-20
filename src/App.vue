<template>
  <div id="app">
    <app-sidemenu/>
    <router-view></router-view>
  </div>
</template>

<script>
import SideMenu from './components/partials/SideMenu.vue';
export default {
  name: 'App',
  components: {
    'app-sidemenu': SideMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
