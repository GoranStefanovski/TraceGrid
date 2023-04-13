<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import axios from 'axios';
import GuestNav from './GuestNav.vue';

@Component({
  components: {
    GuestNav
  }
})
export default class GuestHeader extends Vue {
  

  constructor() {
    super(); 
  }
 
  mounted() {
  }

}
</script>

<template>
  <div class="guest_header">
      <div class="guest_header_wrapper">
        <div class="guest_header_wrapper-left" @click="$router.push('/')">
        </div>  
        <div class="guest_header_wrapper-right">
          <div class="guest_header_wrapper-right--auth">
              <h3>Log In</h3>
          </div>
        </div>
      </div>
      <guest-nav></guest-nav>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.guest_header {
  &_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4%;
    &-left {
      background-image: url('../assets/images/Tracegridlogo.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 7%;
      height: 50px;
      object-fit: cover;
      cursor: pointer
    }
  }
}
</style>
