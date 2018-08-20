<template>
  <div id="sideMenu">
      <h2> Concentrador </h2>
    <nav>
        <router-link to="#" v-on:click.native="setActive(0)" v-bind:class="{active: isActive[0]}">My Profile</router-link>
        <router-link to="#" v-on:click.native="setActive(1)" v-bind:class="{active: isActive[1]}"> Dashboard </router-link>
        <router-link to="#" v-on:click.native="setActive(2)" v-bind:class="{active: isActive[2]}"> Servers </router-link>
       <!-- <a href="#" v-on:click="setActive(3)" v-bind:class="{active: isActive[3]}"> Item 4 </a>-->
    </nav>

  </div>
</template>

<script>
export default {
    name: 'app-sidemenu',
    data() {
        return{
            lastActive: 0,
            isActive: [true, false, false]
        }  
    },
    methods: {
        setActive: function(index){
            this.$set(this.isActive, this.lastActive, false)
            this.$set(this.isActive, index, true)
            this.lastActive = index;
            console.log(this.isActive)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sideMenu{
    background: lightskyblue;
    width: 250px;
    position: absolute;
    top: 0;
    bottom: 0;
    color: white;
}

#sideMenu nav{
    padding-top: 50px;
}

#sideMenu nav a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 15px 30px;
    transition: all 0.3s ease-in-out;
    text-align: left;
}
a:hover{
    background: lightblue;
    border-left: 5px solid blue;
    padding: 15px 30px 15px 25px
}

a.active {
    background: lightblue;
    border-left: 5px solid blue;
    padding: 15px 30px 15px 25px
}

</style>
