 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import Auth from '@/features/Auth.vue';
@Component({
  components: {
    Auth
  }
})
export default class Login extends Vue {

    constructor() {
      super();
    }
    mounted(){
        
    }
}
</script>
<template>
  <div class="hello">
    <Auth></Auth>
  </div>
</template>  

<style scoped lang="scss">
.hello > ul {
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    color: black;
    margin: 10px 20px;
    list-style: none;
  }
}
</style>