 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import axios from 'axios';
import { Action, State } from 'vuex-class';
@Component({
  components: {

  }

  // API https://api.dev.tracegrid.com/tracegrid_api/client
  // Authorization
  // Header 'Content-Type: application/json'
  // data '{"jsonrpc": "2.0","method": "object.list","params": {"with_archived": false,"without_virtual": false},"id": "0"}'
})
export default class Tracking extends Vue {
  @State('token') token;

  activeMap : number = 1; 
  body: any;

  constructor() {
    super();

  }

  created() {
    this.body = {"jsonrpc": "2.0","method": "object.list","params": {"with_archived": false,"without_virtual": false},"id": "0"}
    axios.get('https://api.dev.tracegrid.com/tracegrid_api/client', {
      headers: {
        'Authorization': this.token,
        'Content-Type': 'application/json'
      },
      params: {
        with_archived: false,
        without_virtual: false
      }
    })
    .then((response) => {
          console.log(response);
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
          <span class="tracking-bar-wrapper_inner-single">
            <input type="text" aria-label="search"/>
          </span>
          <span class="tracking-bar-wrapper_inner-single">
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
  width: 20vw;
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
            background-color: wheat;
          }
        }
      }
      &-active {
        background-color: wheat;
      }
    }
    &_inner {
      padding: 3px 10px;
      overflow-y: scroll;
      height: 86vh;
      max-height: 86vh;
      &-single {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>