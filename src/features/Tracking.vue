 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import axios from 'axios';
import DriverOptions from './DriverOptions.vue';
import ClickOutside from 'v-click-outside';

@Component({
  components: {
    DriverOptions,
  },
  directives: {
      ClickOutside: ClickOutside.directive
  }
})
export default class Tracking extends Vue {

  searchQuery: any = '';
  activeMap : number = 1; 
  body: any;
  drivers: any;
  input: any;
  token: any;
  openOptions: number = 0;
  options: Array<any>;
  constructor() {
    super();
    this.token = sessionStorage.getItem('user-token')
    this.drivers = [];
    this.options = [
        { name: 'See More Details', action: "see-details" },
        { name: 'Example No1', action: "see-tours" },
        { name: 'Example No2', action: "example" }
    ]
  }

  created() {
    this.activeMap = 1
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
        console.log('Error in drivers list api')
    })
  }

  setMapActive(map) {
    this.activeMap = map;
    this.$emit('setActiveMap', map);
  }

  filteredList() {
    return this.drivers.filter((driver) =>
      driver.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

    toggleEntryOptions(index) {
        this.openOptions === index + 1 ? this.openOptions = 0 : this.openOptions = index + 1;
        console.log('ocdekiii')
    }

    closeOptions() {
        this.openOptions = 0;
    }

    getDriverOnClick() {
      console.log('HEREE')
      this.openOptions = 0;
    }

    getPrevoursTours() {
      console.log('PREVOURS TOUR')
      this.openOptions = 0;
    }

    getMoreDetails(prop) {
      console.log('MORE DETAILS')
      this.openOptions = 0;
      this.$emit('see-details-id', prop)
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
            <input type="text" v-model="searchQuery" placeholder="Search..." />
          </div>
          <ul>
            <li v-for="driver in filteredList()"  :key="driver.id" class="tracking-bar-wrapper_inner-single">
              <span class="tracking-bar-wrapper_inner-single tracking-bar_info-left">
                <input :value="driver.id" type="checkbox" />
                <p>{{ driver.name }}</p>
              </span>
              <span>
                <img v-if="driver.distance_type == 1" src="../assets/images/DriverInfo/engine.svg" />
                <img v-else src="../assets/images/DriverInfo/driver-resting.svg" />
                <driver-options @example="getDriverOnClick" @see-tours="getPrevoursTours" @see-details="getMoreDetails(driver)" v-click-outside="closeOptions" :index="driver.id" v-if="(openOptions == driver.id + 1)" :items="options">
                </driver-options>
                <img src="../assets/images/driver-menu.svg" @mouseenter="toggleEntryOptions(driver.id)"/>
              </span>
            </li>  
            <span class="item error" v-if="searchQuery&&!filteredList().length">
              <p>No results found!</p>
            </span>
          </ul>          
        </div>
    </div>
  </div>
</template>  

<style scoped lang="scss">
.tracking-bar {
  width: 20vw;
  position: absolute;
  border-radius: 10px;

  z-index: 33;
  background-color: white;
  &-wrapper {
    &_menu {
      border-bottom: 1px solid #dee2e6;
      & > ul {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        list-style: none;
        padding: 0;
        margin: 0;
        & > li {
          border: 1px solid transparent;
          border-top-left-radius: 0.2rem;
          border-top-right-radius: 0.2rem;
          width: 100%;
          padding: 0.5rem 1rem;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #495057;
          font-weight: 500;
          cursor: pointer;
          &:hover {
            border-color: #e9ecef #e9ecef #dee2e6;
          }
        }
      }
      &-active {
        color: #495057;
        background-color: #f8f8f8;
        border-color: 0.3px solid gainsboro;
      }
    }
    &_inner {
      padding: 3px 10px;
      overflow-y: scroll;
      height: max-content;
      max-height: 83vh;
      & > ul {
        padding-left: 0;
        & > li:hover {
        border-top: 0.7px solid #495057;
        border-bottom: 0.7px solid #495057;
        border-radius: 3px;
      }
      }
      &-search {
        padding: 10px 0;
        & > input {
          width: 88%;
          height: 20px;
          padding: 3px 10px;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da; 
        }
      }
      &-single {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > span {
          display: flex;
          align-items: center;
          justify-content: center;
          & > img {
            margin-right: 5px;
            width: 24px;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  &_info {
    &-left {
      & > p {
        margin-left: 5px;
      }
    }
  } 
}
</style>