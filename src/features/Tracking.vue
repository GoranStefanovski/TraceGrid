 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import axios from 'axios';
import { Action, State } from 'vuex-class';
import { ref } from "vue";
@Component({
  components: {

  }

  // API https://api.dev.tracegrid.com/tracegrid_api/client
  // Authorization
  // Header 'Content-Type: application/json'
  // data '{"jsonrpc": "2.0","method": "object.list","params": {"with_archived": false,"without_virtual": false},"id": "0"}'
})
export default class Tracking extends Vue {

  activeMap : number = 1; 
  body: any;
  drivers: Array<any>;
  input: any;
  token: any;
  constructor() {
    super();
    this.drivers = ['Goran', 'Stefan', 'Bozidar', 'Aleksandra'];
    this.token = sessionStorage.getItem('user-token')
  }

  created() {
    const url = 'https://api.dev.tracegrid.com/tracegrid_api/client';
    const data = {jsonrpc:"2.0",method:"object.list",params:{with_archived:false,without_virtual:false},id:"0"}

    axios.post(url, data, {
      headers: {
        'Authorization': `JWT ${this.token}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
    }

  setMapActive(map) {
    this.activeMap = map;
    this.$emit('setActiveMap', map);
  }
}

</script>
<template>
  <div class="tracking-bar">
    <div class="tracking-bar-wrapper">
        <div class="tracking-bar-wrapper_menu">
          <ul>
            <li @click="setMapActive(1)" :class="[{'tracking-bar-wrapper_menu-active': this.activeMap == 1}]">Objects</li>
            <li>Events</li>
            <li @click="setMapActive(2)" :class="[{'tracking-bar-wrapper_menu-active': this.activeMap == 2}]">History</li>
          </ul>
        </div>
        <div class="tracking-bar-wrapper_inner">
          <div class="tracking-bar-wrapper_inner-search">
            <input type="text" aria-label="search" placeholder="Search..."/>
          </div>
          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>          <span class="tracking-bar-wrapper_inner-single">
            <input type="checkbox" />
            <h3>Honda CRX</h3>
            <p>active</p>
          </span>
        </div>
    </div>
  </div>
</template>  

<style scoped lang="scss">
.tracking-bar {
  width: 16vw;
  position: absolute;
  z-index: 33;
  background-color: white;
  &-wrapper {
    &_menu {
      & > ul {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        list-style: none;
        padding: 0;
        margin: 0;
        & > li {
          border: 0.7px solid black;
          width: 100%;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          &:hover {
            background-color: gainsboro;
          }
        }
      }
      &-active {
        background-color: gainsboro;
      }
    }
    &_inner {
      padding: 3px 10px;
      overflow-y: scroll;
      height: max-content;
      max-height: 83vh;
      &-search {
        margin: 10px 0;
        & > input {
          width: 98%;
          height: 20px;
        }
      }
      &-single {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>