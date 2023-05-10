<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class GuestFooter extends Vue {
  @Prop({type: Boolean, default: false}) isMarginTop;

  constructor() {
    super(); 
  }
 
  mounted() {
  }

}
</script>

<template>
  <footer>
    <div :class="['container-fluid guest_footer', {
      'guest_footer--margin-top':isMarginTop
    }]">
      <div class="row guest_footer_wrapper">
        <div class="container">
          <div class="col-md-3">
            <h2>About Us</h2>
            <p>We are a GPS tracking company that provides real-time vehicle tracking solutions to businesses and individuals.</p>
          </div>
          <div class="col-md-3">
            <h2>Contact Us</h2>
            <p>123 Main Street<br>
            Anytown, USA 12345<br>
            Phone: 555-555-5555<br>
            Email: info@yourcompany.com</p>
          </div>
          <div class="col-md-3">
            <h2>Follow Us</h2>
            <p>Stay connected with us on social media for the latest news and updates.</p>
            <ul class="social-icons">
              <li><a target="_blank" href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
              <li><a target="_blank" href="https://twitter.com/home"><i class="fa fa-twitter"></i></a></li>
              <li><a target="_blank" href="https://instagram.com"><i class="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <span>&copy; 2023 TraceGrid. All Rights Reserved. </span>
      </div>
    </div>
  </footer>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.guest_footer {
  background: #f2f2f2;
  margin: 0;
  padding: 80px 0 30px 0;
  &--margin-top {
    padding: 30px 0 !important;
    margin-top: 50px;
  }
  &_wrapper {
    padding: 0;
    margin: 0;
    & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
    & > span {
      padding: 30px 0 0 0;
      font-weight: bold;
      font-size: 12px;
    }
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
  footer {
  background: #f2f2f2;
  padding: 50px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.row {
  display: flex;
  justify-content: space-between;
}

.col-md-4 {
  width: 30%;
}

h2{
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

.social-icons {
  margin-top: 20px;
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icons li {
  margin-right: 20px;
}

.social-icons a {
  color: #333;
  font-size: 24px;
  transition: color 0.2s;
}

.social-icons a:hover {
  color: #007bff;
}
}
</style>
