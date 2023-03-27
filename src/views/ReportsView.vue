 
<script lang="ts">
import axios from 'axios';
import { Action, State } from 'vuex-class';
import { Vue, Component} from 'vue-property-decorator';
@Component({
  components: {
  }
})
  export default class ReportsView extends Vue {
    token: any;
    drivers: any;
    constructor() {
      super();
      this.token = sessionStorage.getItem('user-token')
    }

    created() {
      const url = 'https://api.dev.tracegrid.com/tracegrid_api/client';
      const data = {jsonrpc:"2.0",method:"object.list",params:{with_archived:false,without_virtual:false},id:"d1a01959-1a58-472b-a1cf-2a1ce805651b"}

      axios.post(url, data, {
        headers: {
          'Authorization': `JWT ${this.token}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
      .then((response) => {
        console.log(response.data.result)
        this.drivers = JSON.parse(response.data.result);
        console.log(this.drivers)
      })
      .catch((error) => {
          console.log('Error in drivers list api')
      })
    }
}
</script>
<template>
  <div class="hello">
    <h4>Reports List</h4>
    <table id="customers">
      <tr>
        <th>Driver</th>
        <th>Is Active</th>
        <th>Country</th>
      </tr>
      <tr v-for="driver in drivers" :key="driver.id">
        <td>{{ driver.name }}</td>
        <td>{{ driver.distance_type == 1 ? 'Active' : 'Resting'}}</td>
        <td>Germany</td>
      </tr>
    </table>
  </div>
</template>  

<style scoped lang="scss">

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
}
</style>