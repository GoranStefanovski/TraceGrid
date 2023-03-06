<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MapIcon from 'vue-material-design-icons/Map.vue';
import mdiListStatus from 'vue-material-design-icons/ListStatus.vue';

@Component({
    components: {
        MapIcon,
        mdiListStatus
    }
})
export default class GuestNav extends Vue {
}
</script>

<template>
    <div class="guest_nav">
        <div class="guest_nav_wrapper">
            <span class="guest_nav_wrapper-inner">
                <ul>
                    <li><router-link to="/map"><Map-icon />Map</router-link></li>
                    <li><router-link to="/reports"><mdiListStatus/>Reports</router-link></li>
                </ul>
            </span>
        </div>
    </div>
  </template>

<style scoped lang="scss">
  .guest_nav {
    &_wrapper {
        &-inner {
            display: flex;
            width: 90%;
            margin: 0 auto;
            & > ul {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                list-style: none;
                & > li > a {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                    padding: 9px 5px;
                    &:hover {
                        border-radius: 10px;
                        background: gainsboro;
                    }
                }
            }
        }
    }
  }
  </style>
  