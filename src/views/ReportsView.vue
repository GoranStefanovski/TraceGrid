 
<script lang="ts">
import axios from 'axios';
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
      this.drivers = [];
      this.token = sessionStorage.getItem('user-token')
    }

    created() {
      this.fetchData();
    }

    async fetchData() {
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
        this.drivers = JSON.parse(response.data.result);
      })
      .catch((error) => {
          console.log('Error in drivers list api', error)
      })
    }
}
</script>
<template>
  <div class="container reports_view">
      <h4>Reports List</h4>
      <table id="customers" class="col-lg-12 col-md-12 col-sm-12">
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

.reports_view {
  & > h4 {
    text-align: left;
    font-size: 18px;
    color: #495057;
  }
}

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  margin: 0 auto;
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
  text-align: center;
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
}
#customers  {
  & > tr > td {
    &:hover {
      cursor: pointer;
    }
  } 
}
</style>