<template>
  <div id="test">
    <b-nav vertical class="w-25">
      <b-nav-item to="/">Server Info</b-nav-item>
      <b-nav-item to="/newserver">Add/Delete Server</b-nav-item>
      <b-nav-item to="/status">Status</b-nav-item>
    </b-nav>

  </div>
</template>

<script>
export default {
  name: 'ServerInfo',
  data () {
    return {
      msg: 'Get Server Info'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
    text-align: left;
}
</style>
