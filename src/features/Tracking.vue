 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import axios from 'axios';
import DriverOptions from './DriverOptions.vue';
import ClickOutside from 'v-click-outside';
import VehicleList from '@/components/VehicleSearch/VehicleList.vue';
import Events from '../components/VehicleSearch/Events.vue'
@Component({
  components: {
    DriverOptions,
    VehicleList,
    Events
  },
  directives: {
      ClickOutside: ClickOutside.directive
  }
})
export default class Tracking extends Vue {

  searchOption: number = 1;
  activeMap : number = 1; 

  constructor() {
    super();
  }

  created() {
  }

  openSearchOption(prop) {
    this.searchOption = prop;
    this.activeMap = prop;
    this.$emit('setActiveMap', prop);
  }
}

</script>
<template>
  <div class="tracking-bar">
    <div class="tracking-bar-wrapper">
        <div class="tracking-bar-wrapper_menu">
          <ul>
            <li @click="openSearchOption(1)" :class="[{'tracking-bar-wrapper_menu-active': this.activeMap == 1}]">Objects</li>
            <li @click="openSearchOption(3)" :class="[{'tracking-bar-wrapper_menu-active': this.activeMap == 3}]">Events</li>
            <li @click="openSearchOption(2)" :class="[{'tracking-bar-wrapper_menu-active': this.activeMap == 2}]">History</li>
          </ul>
        </div>
        <vehicle-list v-if="searchOption == 1"></vehicle-list>
        <events v-if="searchOption == 3"></events>
    </div>
  </div>
</template>  

<style scoped lang="scss">
.tracking-bar {
  width: 20vw;
  position: absolute;
  border-radius: 10px;
  box-shadow: 0px 6px 10px 0 rgb(0 0 0 / 5%);

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
          justify-content: flex-end;
          width: 100%;
          &:first-child {
            justify-content: flex-start;
          }
          & > img {
            margin-right: 5px;
            width: 24px;
            &:hover {
              cursor: pointer;
            }
          }
        }
        & > input {
          &:hover {
            cursor: pointer;
          }
        }
      }
      &-controls {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex: 1;
        & > button {
          background: #ced4da;
          cursor: pointer;
          padding: 3px 6px;
          border-radius: 3px;
        }
      }
    }
  }
  &_info {
    &-left {
      cursor: pointer;
      & > p {
        margin-left: 5px;
      }
      & > input {
        width: 20px;
        height: 20px;
      }
    }
  } 
}
</style>