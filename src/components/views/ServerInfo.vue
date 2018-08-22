<template>
  <div>
    <h1>{{ msg }}</h1>
    <b-form>
      <b-form-group 
          id="domain"
          label="Server Domain:"
          label-for="domain-dropdown">
          <b-form-select id="domain-dropdown"
              :options="domains"
              required
              v-model="form.domain"
              v-on:input="onDomainChange">
          </b-form-select>
      </b-form-group>
      <b-form-group 
          id="ipaddress"
          label="IP Address:"
          label-for="ipaddress-dropdown">
          <b-form-select id="ipaddress-dropdown"
              :options="ipaddresses"
              required
              v-model="form.ipaddress"
              v-on:input="showTable=false">
          </b-form-select>
      </b-form-group>
      <b-form-group 
          id="hostname"
          label="Host Name:"
          label-for="hostname-dropdown">
          <b-form-select id="hostname-dropdown"
              :options="hostnames"
              required
              v-model="form.hostname"
              v-on:input="showTable=false">
          </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="info" v-on:click="showServerInfo">Show Server</b-button>  
    </b-form>
    <b-table striped hover :items="items" :fields="fields" v-if="showTable"></b-table>
  </div>
</template>

<script>
export default {
  name: 'ServerInfo',
  data () {
    return {
      msg: 'Get Server Info',
      allSelected: null,
      showTable: false,

      domains: [
        {text: 'Select One', value: null}
      ],
      hostnames: [
        {text: 'Select One', value: null}
      ],
      ipaddresses: [
        {text: 'Select One', value: null}
      ],
      //Estas variables guardarán los valores seleccionados por el usuario (v-model)
      form: {
        domain: null,
        ipaddress: null,
        hostname: null
      },
      //Table
      fields: ['domain', 'ipAddress', 'hostName'],
      items: []
    }
  },
  methods: {
    showServerInfo: function(){
      if(this.form.domain!=null && this.form.ipaddress!=null && this.form.hostname!=null){
        this.items.length = 0;
        this.items.push({domain: this.form.domain, ipAddress: this.form.ipaddress, hostName: this.form.hostname});
        this.showTable = true;
      }
    },
    loadDomains: function(){
      this.domains.push('Domain1');
      this.domains.push('Domain2');
      this.domains.push('Domain3');
    },
    onDomainChange: function(){
      //Call API and get IP's and hostnames for the selected domain
      //API.getIPsByDomain();
      //API.getHostsByDomain();
      console.log("domain changed");
      console.log("clearing arrays");
      console.log(this.form.domain);
      this.showTable = false;
      this.ipaddresses.length = 1;
      this.form.ipaddress = null;
      this.hostnames.length = 1;
      this.form.hostname = null;
      
      this.ipaddresses.push('192.168.1.1');
      this.ipaddresses.push('192.168.1.2');
      this.ipaddresses.push('192.168.1.3');

      this.hostnames.push('Hostname 1');
      this.hostnames.push('Hostname 2');
      this.hostnames.push('Hostname 3');
    },
  },
  mounted: function(){
    console.log('Loading domains...')
    this.loadDomains();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
