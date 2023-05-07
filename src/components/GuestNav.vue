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
   
   <div class="cm-e-menu">
            <ul>
                <li :class="['topmenu',{'guest_nav-link-active':$route.name == 'map'}]"><router-link class="one" to="/map"><img src="../assets/images/home-analytics.svg"/>Map</router-link></li>
                <li :class="['topmenu',{'guest_nav-link-active':$route.name == 'reports'}]"><router-link class="one" to="/reports"><img src="../assets/images/format-page-break.svg"/>Reports</router-link></li>
                <li class="topmenu">
                    <a>edit</a>
                </li>
                <li class="topmenu">
                    <a>Reports</a>
                </li>
                <li class="topmenu">
                    <a>settings ></a>
                    <ul class="submenu">
                        <li>
                            <a>font ></a>
                            <ul class="submenu">
                                <li><a>larger</a></li>
                                <li><a>smaller</a></li>
                                <li class="divider"></li>
                                <li><a>default</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>indentation ></a>
                            <ul class="submenu">
                                <li><a>+1 space</a></li>
                                <li><a>-1 space</a></li>
                                <li class="divider"></li>
                                <li><a>default</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
  </template>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
*{
  margin: 0; padding: 0;
  font-family: 'Roboto', sans-serif;
}
.cm-e-menu {
	background-color: white;
	position: relative;
	z-index: 1000;
	color: #fff;
	font-weight: 200;
  display: flex;
  align-items: flex-start;
	}
.cm-e-menu ul {
	margin: 0;
  padding: 0 2.5%;
}
.cm-e-menu li {
	position: relative;
	white-space: nowrap;
	cursor: pointer;
	text-transform: capitalize !important;
	list-style: none;

	-webkit-transition: background-color ease-in 300ms;
	-moz-transition: background-color ease-in 300ms;
	-ms-transition: background-color ease-in 300ms;
	-o-transition: background-color ease-in 300ms;
	transition: background-color ease-in 300ms;
  &:hover {
    color: lightblue;
    cursor: pointer;
  }
  & > a {
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
  }
}
.cm-e-menu li:hover {
	background-color: white;
	text-shadow: 0 10px 10px white;
}
.cm-e-menu ul li.topmenu {
	display: inline-table;
  font-weight: 400;
  padding: 0.5rem 0.5rem;
        min-width: 100px;
        font-weight: 400;
        color: #334053;
        &:hover {
          cursor: pointer;
        }
}
.cm-e-menu .topmenu ul {
	display:none;
	position: absolute;
	background-color: white;
}
.cm-e-menu li:hover > ul {
	display: table;
}
.cm-e-menu ul.submenu {
	top: 100%; left: 0;
	padding-top: .5em;
	padding-bottom: .5em;	
}
.cm-e-menu ul.submenu .submenu {
	top: -.5em; left: 100%;
	font-size: 1em
}
.cm-e-menu ul.submenu li {
	padding: .2em 1.5em;
	font-size: .9rem;
}
.cm-e-menu li.divider {
	padding: 0;
	border-top: 1px solid #343434;
	margin: .5rem auto .3rem;
	cursor: default;
}
.cm-e-menu li.divider:hover {
	background-color: transparent;
}

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
    &:hover {
        .submenu-4 {
          display: block;
        }
      }
    & > .submenu-4 {
      left: 50% !important;
      display: block;

      &:hover {
        display: block;
      }
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
            align-items: center;
            justify-content: space-between;
            padding: 0 4%;
            & > ul {
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                list-style: none;
                margin: 7px 0 7px 0;
                & > li > a {
                    color: rgba(0,0,0,0.65);
                    font-size: 0.9375rem;
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
  