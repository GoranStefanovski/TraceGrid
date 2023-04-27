 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component({
  components: {
  }
})
  export default class GuestDefaultPage extends Vue {
    constructor() {
      super();
    }
    mounted(){
    }
}
</script>
<template>
  <div class="default_page"> 
    <div class="container">
      <div class="col-lg-12">
        <div class="default_page-header">
          <h1>GPS vehicle tracking and sensor monitoring</h1>
          <p>The ultimate vehicle tracking tool for your fleet.</p>
        </div>
      </div>
    </div>
    <div class="container-fluid default_page-section">
      <div class="container">
        <div class="default_page-info">
          <h2>Why is TraceGrid the best web-based vehicle GPS tracker?</h2>
          <p><span>Everyone says they’re different. We prove it!</span> There are many myths that web-based vehicle tracking cannot work, that it's not precise and you should go with installed hardware. But hey, we are more than X years on the market, have thousands of happy customers with fleet sizes from 2 to several hundreds of vehicles. During that time we carefully listened to our users and created features that overleap standard hardware GPS trackers.
            The ultimate vehicle tracking tool for your fleet. If you are convinced that you need an installed GPS tracker we support all major brands too - it's all about the platform, and TraceGrid wins.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>  

<style scoped lang="scss">
.default_page {
  &-header {
    text-align: left;
  }
  &-section {
    text-align: left;
    background: #F7F4E9;
  }
  &-info {
    padding: 2rem 0;
    & > p {
      width: 50%;
      & > span {
        font-weight: bolder;
      }
    }
  }
}
</style>