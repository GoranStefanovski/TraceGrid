<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {

  constructor() {
    super();
  }
}
</script>

<template>
   <section class="contact-section">
  <div class="container">
    <div class="row">
      <div class="col-md-6 contact-section_image">
      </div>
      <div class="col-md-6">
        <h2>Contact Us</h2>
        <p>Feel free to get in touch with us. We'd love to hear from you!</p>
        <ul>
          <li><i class="fa fa-map-marker"></i>123 Main Street, Anytown USA</li>
          <li><i class="fa fa-phone"></i>(123) 456-7890</li>
          <li><i class="fa fa-envelope"></i>info@example.com</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</template>

 
  <style lang="scss" scoped>
  .contact-section {
  padding: 50px 0;
  text-align: center;
  &_image {
    background: url('../assets/images/Tracegridlogo.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-md-6 {
  flex-basis: 50%;
  padding: 20px;
}

.col-md-6 img {
  max-width: 100%;
}

h2 {
  font-size: 36px;
  margin-bottom: 30px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 30px 0 0 0;
  text-align: center;
}

li {
  font-size: 18px;
  margin-bottom: 10px;
}

i {
  margin-right: 10px;
}
</style>
  