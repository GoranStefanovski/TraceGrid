 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import BoxBanner from '@/features/BoxBanner.vue';

@Component({
  components: {
    BoxBanner
  }
})
  export default class GuestDefaultPage extends Vue {
    featuresInfo: Array<any>;
    pricingInfo: Array<any>;

    constructor() {
      super();
      this.featuresInfo = [
        {
          id: 0,
          title: 'Real-time GPS tracking',
          desc: 'Track your vehicles in real-time with our advanced GPS tracking technology. Get instant updates on location, speed, and more from anywhere, at any time.'
        },
        {
          id: 1,
          title: 'Efficient fleet management',
          desc: 'Streamline your fleet management with our GPS tracking solution. Monitor driver behavior, optimize routes, and reduce fuel costs to increase efficiency and profitability.'
        },
        {
          id: 2,
          title: 'Customizable GPS solutions',
          desc: 'Our GPS tracking solutions are fully customizable to meet your unique business needs. From asset tracking to employee safety, we have the tools to help you succeed.'
        },
      ]
      this.pricingInfo = [
        {
          id: 0,
          name: 'Starter',
          price: '19.99$/month',
          accessOne: 'Real-time tracking',
          accessTwo: 'Basic reporting',
          accessThree: 'Up to 5 vehicles',
        },
        {
          id: 0,
          name: 'Business',
          price: '49.99$/month',
          accessOne: 'Real-time tracking',
          accessTwo: 'Advanced reporting',
          accessThree: 'Up to 20 vehicles',
        },
        {
          id: 0,
          name: 'Enterprise',
          price: '99.99$/month',
          accessOne: 'Real-time tracking',
          accessTwo: 'Custom reporting',
          accessThree: 'Unlimited vehicles',
        },
      ]
    }
    mounted(){
    }
}
</script>
<template>
  <div class="default_page"> 
     <div class="default_page-header">
      <div class="col-lg-12">
        <div class="container default_page-header-wrap">
          <span>
          <h1 class="default_page-header--title">Keep Your Vehicles Safe and Secure</h1>
          <router-link to="/login" class="default_page-header--subtitle">Get Started</router-link>
          </span>
          <img class="default_page-header--image" src="../assets/images/Tracking.jpg" alt="Trace Grid"/>
        </div>
      </div>
    </div>
    <div class="container-fluid default_page-section" style="padding: 0">
      <div class="container">
        <div class="default_page-info">
          <h1>Why is TraceGrid the best web-based vehicle GPS tracker?</h1>
          <p><span>Everyone says they’re different. We prove it!</span> There are many myths that web-based vehicle tracking cannot work, that it's not precise and you should go with installed hardware. But hey, we are more than X years on the market, have thousands of happy customers with fleet sizes from 2 to several hundreds of vehicles. During that time we carefully listened to our users and created features that overleap standard hardware GPS trackers.
            The ultimate vehicle tracking tool for your fleet. If you are convinced that you need an installed GPS tracker we support all major brands too - it's all about the platform, and TraceGrid wins.
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid default_page-section" style="padding: 0">
      <box-banner :infos="featuresInfo" infoName="features" title="Features:"></box-banner>
    </div>
    <div class="container-fluid bg-image-section">
      <span class="bg-image"></span>
    </div>
    <div class="container-fluid default_page-section" style="padding: 0">
      <box-banner :infos="pricingInfo" :isBgWhite="true" infoName="pricing" title="Pricing Packages:"></box-banner>
    </div>
  </div>
</template>  

<style scoped lang="scss">
.default_page {
  &-header {
    background: #f2f2f2;
    text-align: left;
    padding: 60px 0;
    &-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &--title {
      margin: 0;
      line-height: 1.8rem;
      font-size: 2.2rem;
    }
    &--subtitle {
      padding-top: 10px;
      line-height: 3.5rem;
      font-size: 1.5rem;
      &:hover {
        cursor: pointer;
        color: lightblue;
      }
    }
    &--image {
      width: 40%;
      height: 300px;
    }
  }
  &-section {
    background: white;
    text-align: left;
  }
  &-info {
    padding: 60px 0;
  
    & > p {
      font-size: 1.1rem;
    line-height: 1.3rem;
    width: 80%;
      & > span {
        font-weight: bolder;
      }
    }
  }
}

.bg-image-section {
  width: 98%;
  position: relative;
  height: 600px;
}

.bg-image {
  background: url('../assets/images/homepage_image.jpg');
  position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
      background-size: cover;
			z-index: -1;

}
</style>