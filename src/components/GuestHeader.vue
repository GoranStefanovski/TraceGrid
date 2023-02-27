<template>
  <div class="guest_header">
      <div class="guest_header_wrapper">
        <div class="guest_header_wrapper-left">
          <h2>Logo</h2>
        </div>  
        <div class="guest_header_wrapper-right">
          <div class="guest_header_wrapper-right--auth">
              <h3>Loged IN</h3>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GuestHeader extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.guest_header {
  &_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7%;
  }
}
</style>
