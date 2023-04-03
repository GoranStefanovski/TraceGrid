<script lang="ts">
  import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
  import { throttle } from 'lodash-es';


  @Component({
    directives: {
    }
  })
  export default class SkModal extends Vue {
    constructor() {
      super();
    }

    mounted() {
  
    }

    created() {
      
    }

    destroyed() {
    }

    hasFooterSlot() {
      return !!this.$slots.footer;
    }

  }
</script>

<template>

<div className='sk-modal'>
    <div className='sk-modal__inner'>
      <h1>Aasdkjhasdkjahsdkjah</h1>
  </div>
  </div>

</template>


<style scoped>
@import '../assets/sass/components/_modal.scss';
</style>