<template>
  <div id="app">
    <div class="side-content">
      <!--<app-sidemenu/>-->
      <app-sidemenu2/>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideMenu from './components/partials/SideMenu.vue';
import SideMenu2 from './components/partials/SideMenu2.vue';
export default {
  name: 'App',
  components: {
    'app-sidemenu': SideMenu,
    'app-sidemenu2': SideMenu2
  }
}
</script>

<style>
body{
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
}

/*.side-content{
  background: lightskyblue;
    width: 250px;
    position: absolute;
    top: 0;
    bottom: 0;
    color: white;
}*/
.main-content{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin-left: 250px;
  background: ghostwhite;
}
</style>
