<template>
    <div class="guest_nav">
        <div class="guest_nav_wrapper">
            <span class="guest_nav_wrapper-inner">
                <ul>
                    <li>Map</li>
                    <li>Reports</li>
                </ul>
            </span>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  @Component
  export default class GuestNav extends Vue {
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
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
                & > li {
                    margin-right: 20px;
                }
            }
        }
    }
  }
  </style>
  