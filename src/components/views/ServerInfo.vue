<template>
  <div>
    <h1>{{ msg }}</h1>
    <b-form>
      <b-form-group 
          label-for="domain-dropdown">
          <b-form-input id="server-input"
              required
              v-model="server"
              autocomplete="off"
              placeholder="Enter the Server's Host Name or IP Address."
              style="width: 500px">
          </b-form-input>
      </b-form-group>
      <p style="color:red" v-if="!serverFound"> No matches found </p>
      <b-button type="submit" variant="success" v-on:click="showServer(server)">Show Server</b-button>
      <br>
    </b-form><br><br>

    <b-table striped hover 
        :items="items" 
        :fields="fields" 
        v-if="showTable"
        @row-clicked="showServerDetail($event)">
    </b-table>

    <div>
      <!-- Modal Component -->
      <b-modal 
        ref="myModalRef" 
        hide-footer
        centered>
        <div class="d-block text-center">
          <div v-for="(field, index) in serverDetail.field" v-bind:key="index">
            <div v-if="typeof serverDetail.value[index] !== 'object'">
              <p align="left">
                <b > {{field}}: </b>
                <span> {{serverDetail.value[index]}} </span> 
              </p>
            </div>
            <div v-else v-for="(key, value, index) in serverDetail.value[index]" v-bind:key = "index">
                <p align= "left" v-if="typeof key !== 'object'"> 
                <b> {{value}}: </b> <span> {{key}} </span> </p>
              </div>
          </div>
        </div>
        <b-btn class="mt-3" variant="outline-danger" block @click="hideServerDetail">Close</b-btn>
      </b-modal>
    </div>
</div>
</template>

<script>
import getServerService from '../../services/getServerService';
export default {
  name: 'ServerInfo',
  data () {
    return {
      msg: 'Get Server Info',

      server: '', //Holds the data typed by the user
      serverFound: true,

      serverDetail: {
        field: '',
        value: ''
      },
      
      //Table
      showTable: false,
      fields: ['hostName', 'ipAddress', 'domain', 'operatingSystemClass'],
      items: []
    }
  },
  methods: {
    showServer: async function(server){
      this.items.length=0;
      this.showTable=false;
<<<<<<< HEAD
      this.serverFound = true;

      if(server.length == 0) {return;}

      if(server.indexOf('.') !== -1) {
      //check correct IP format
      var serverInfo = await getServerService.getServerByIp(server);
      } else {
        var serverInfo = await getServerService.getServerByHostName(server);
=======

      if(server.indexOf('.') !== -1) {
        //check correct IP format
        var serverInfo = await getServerService.getServerByIp(server);
      } else {
        var serverInfo = await getServerService.getServerByHostName(server);
      }

      for (var i=0; i<serverInfo.data.count; i++){
        var serv = serverInfo.data.rows[i]
        this.items.push(
          { hostName: serv.hostname, 
            ipAddress: serv.ip_addresses[0].nameIP, 
            domain: serv.domain.nameDomain,
            operatingSystemClass: serv.os_class.nameOSclass
          });
      }

      if (serverInfo.data.count>0) {
        this.showTable=true;
        this.serverFound = true;
      } else{
        this.serverFound = false;
>>>>>>> a8ed605c085e57f0de29f2172d139f317cc5dc42
      }

      for (var i=0; i<serverInfo.data.count; i++){
        var serv = serverInfo.data.rows[i]
        this.items.push(
          { hostName: serv.hostname, 
            ipAddress: serv.ip_addresses[0].nameIP, 
            domain: serv.domain.nameDomain,
            operatingSystemClass: serv.os_class.nameOSclass
          });
      }

      (serverInfo.data.count>0) ? this.showTable = true : this.serverFound = false;
    },
    showServerDetail: async function(event){
      console.log(event.hostName);
      var serverInfo = await getServerService.getServerByHostName(event.hostName);
      var servDetail = serverInfo.data.rows[0]; //There can only be one element (searching by exact hostName)
      this.serverDetail.field = Object.keys(servDetail);
      this.serverDetail.value = Object.values(servDetail);
      this.$refs.myModalRef.show();

<<<<<<< HEAD
      /*console.log(this.serverDetail);
      console.log(this.serverDetail.field);
      console.log(this.serverDetail.value);
      console.log(Object.keys(this.serverDetail.value));
      console.log(Object.values(this.serverDetail.value));*/
=======
      console.log(this.serverDetail);
      console.log(this.serverDetail.field);
      console.log(this.serverDetail.value);
      console.log(Object.keys(this.serverDetail.value));
      console.log(Object.values(this.serverDetail.value));
>>>>>>> a8ed605c085e57f0de29f2172d139f317cc5dc42
    },
    hideServerDetail: function(){
      this.$refs.myModalRef.hide();
    }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#server-input{
  margin: 0 auto;
}
</style>
