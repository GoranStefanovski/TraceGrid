<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MapIcon from 'vue-material-design-icons/Map.vue';
import mdiListStatus from 'vue-material-design-icons/ListStatus.vue';
import MultiLevelMenu from '@/features/MultiLevelMenu.vue';
@Component({
    components: {
        MapIcon,
        mdiListStatus,
        MultiLevelMenu
    }
})
export default class GuestNav extends Vue {
    // submenu: Array<any>;

    constructor() {
        super();
        // this.submenu = [
        //   {
        //     title: 'Sub Men 1',
        //     link: 'Subb'
        //   },
        //   {
        //     title: 'Sub Men 1',
        //     link: 'Subb'
        //   },
        //   {
        //     title: 'Sub Men 1',
        //     link: 'Subb'
        //   },
        //   {
        //     title: 'Sub Men 1',
        //     link: 'Subb',
        //     levelTwo: [
        //     {
        //       option: 'Here'
        //     },
        //     {
        //       option: 'Here'
        //     },
        //     {
        //       option: 'Here'
        //     },
        //   ]
        //   },
        //   {
        //     title: 'Sub Men 1',
        //     link: 'Subb'
        //   },
        // ]
    }

    created() {
    }
}
</script>

<template>
    <div class="guest_nav">
        <div class="guest_nav_wrapper">
            <span class="guest_nav_wrapper-inner">
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li :class="[{'guest_nav-link-active':$route.name == 'map'}]"><router-link to="/map"><img src="../assets/images/home-analytics.svg"/>Map</router-link></li>
                <li :class="[{'guest_nav-link-active':$route.name == 'reports'}]"><router-link to="/reports"><img src="../assets/images/format-page-break.svg"/>Reports</router-link></li>
                <li class="guest_nav-dropdown submenu"><router-link to="">Dropdown »</router-link>
                  <ul class="submenu-2">
                    <li><router-link to="">Dropdown 1</router-link></li>
                    <li><router-link to="">Dropdown 2</router-link></li>
                    <li><router-link to="">Dropdown 3</router-link></li>
                    <li><router-link to="">Dropdown 4</router-link></li>
                  </ul>
              </li>
              <!-- <multi-level-menu :submenu="submenu"></multi-level-menu> -->
              <li class="guest_nav-dropdown submenu"><router-link to="">Submenu »</router-link>
                  <ul class="submenu-2">
                    <li><router-link to="">Sub-submenu 1</router-link></li>
                    <li><router-link to="">Sub-submenu 1</router-link></li>
                    <li><router-link to="" class="submenu-3">Sub-submenu 1 »</router-link>
                      <ul class="submenu-2 submenu-4">
                        <li><router-link to="">Sub-submenu 1</router-link></li>
                        <li><router-link to="">Sub-submenu 1</router-link></li>
                        <li><router-link to="">Sub-submenu 1</router-link></li>
                        <li><router-link to="">Sub-submenu 1</router-link></li>
                      </ul>
                    </li>
                    <li><router-link to="">Sub-submenu 1</router-link></li>
                  </ul>
              </li>
              </ul>
            </span>
        </div>
    </div>
  </template>

<style scoped lang="scss">

  .dropdown-menu li:hover > .submenu-2 {
    display: block;
  }


  .submenu-2 {
      background: white;
      list-style: none;
      position: absolute;
      padding: 0;
      box-shadow: 2px 2px 7px lightblue;
      display: none;
      padding: 7px 8px;
        padding: 0.5rem 1.5rem;
        min-width: 100px;
        font-weight: 400;
        color: #334053;
        text-align: inherit;
        white-space: nowrap;
        border: 0;
        & > li {
          padding: 15px 0;
          font-size: .875rem;
        }
  }
  .submenu-4 {
    background: white;
      list-style: none;
      position: absolute;
      padding: 0;
      box-shadow: 2px 2px 7px lightblue;
      display: none;
      padding: 7px 8px;
        padding: 0.5rem 1.5rem;
        min-width: 100px;
        font-weight: 400;
        color: #334053;
        text-align: inherit;
        white-space: nowrap;
        border: 0;
        & > li {
          padding: 15px 0;
          font-size: .875rem;
        }
    left: 100%;
    &:hover {
      display: block;
    }
  }
  .submenu-3 {
    & > .submenu-4 {
      left: 50% !important;
    }
  }
  .submenu {
    z-index: 555;
      & > li {
        &:hover {
          background: #F8F8F8;
          cursor: pointer;
        }
      }
    }

  .guest_nav {
    &_wrapper {
    box-shadow: 0px 6px 10px 0 rgb(0 0 0 / 5%);

        &-inner {
            display: flex;
            padding: 0 10%;
            margin: 0 auto;
            & > ul {
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                list-style: none;
                margin: 7px 0 7px 0;
                & > li > a {
                    color: rgba(0,0,0,0.65);
                    font-size: .9375rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    margin-right: 15px;
                    padding: 9px 5px;
                    & > img {
                      background: darkgray;
                      padding: 3px;
                      border-radius: 17px;
                      display: inline-block;
                      line-height: 24px;
                      height: 18px;
                      width: 18px;
                      background-color: #e9ecef;
                      text-align: center;
                      border-radius: 50%;
                      margin-right: 10px;
                      font-size: 13px;
                      opacity: 0.85;
                    }
                    &:hover {
                        color: black;
                    }
                }
            }
        }
    }
    &-link-active {
      & > a {
        color: #1976d2;
      }
    }
  }
  </style>
  