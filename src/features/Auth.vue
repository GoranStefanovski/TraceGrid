<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { Action, State } from 'vuex-class';

@Component
export default class Auth extends Vue {
  @Prop({type: String, default: 'Login'}) title
  @Action('setToken') setToken;
  @State('token') token;
  
  login: {};
  errorMessage: String =  '';
  rememberMe: Boolean = false;
  constructor() {
    super();

    this.login = {
      username:  '',
      password: ''
    }
  }
  mounted() {
    
  }

  LogIn() {
    axios.post('https://api.dev.tracegrid.com/auth', this.login)
        .then(response => {
          this.setToken(response.data.access_token);
          sessionStorage.setItem('user-token', response.data.access_token) // store the token in localstorage
          this.$router.push('/map');
        })
        .catch(error => {
          this.errorMessage = 'Username or Password Invalid'
          console.log(error)
        });
  }
  signUp() {
    console.log('Sign Up')
  }
  forgotPassword() {
    console.log('Forgot Password')
  }
}
</script>

<template>
    <div class="main-auth">
        <div class="main-auth-wrap">
            <div class="main-auth-inner">
              <div class="main-auth-inner_header" @click="$router.push('/')">
              </div>
              <div class="main-auth-inner_body">
                <div class="main-auth-inner_title">
                  <h2>{{ title }} <br> <span>{{ errorMessage }}</span></h2>
                </div>
                <div class="main-auth-inner_input">
                  <label for="Username">Username</label>
                  <input v-model="login.username" name="Username" type="text" required/>
                </div>
                <div class="main-auth-inner_input">
                  <label for="Password">Password</label>
                  <input v-model="login.password" name="Password" type="password" required/>
                </div>
                <div class="main-auth-inner_input">
                  <label for="Company">Company</label>
                  <input name="Company" type="text" required/>
                </div>
                <div class="main-auth-inner_button">
                  <button @click="LogIn()">Submit</button>
                  <span class="main-auth-inner_button-extras">
                    <!-- <span @click="forgotPassword()">Forgot Password?</span> -->
                    <!-- <span @click="signUp()">Sign Up</span> -->
                  </span>
                </div>
              </div>
            </div>  
        </div> 
    </div>
  </template>
  
 
  <style lang="scss" scoped>
  .main-auth {
    position: fixed;
    z-index: 1500;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #e6e6e6;
    margin: 0 !important;
    padding-top: 4.375rem;
    color: #121212;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    &-wrap {
      border-radius: 5px;
      box-shadow: 0 0 5px 0 rgb(43 43 43 / 10%), 0 11px 6px -7px rgb(43 43 43 / 10%);
      border: none;
      margin-bottom: 30px;
      transition: all 0.3s ease-in-out;
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 360px;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      overflow: hidden;
    }
    &-inner {
      &_header {
        background-image: url('../assets/images/Tracegridlogo.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        height: 130px;
        -o-object-fit: cover;
        object-fit: cover;
        margin: 0 auto;
        padding-top: 1rem;
        border-bottom: 1px solid #e6e6e6;
        cursor: pointer;
      }
      &_title {
        text-align: left;
        & > h2 > span {
          color: rgb(232, 78, 78);
          font-size: 14px;
        }
      }
      &_body {
        padding: 0 10% 10% 10%;
      }
      &_input {
        display: grid;
        text-align: left;
        padding: 10px 0;
        & > label {
          font-size: 20px;
          margin-bottom: 5px;
        }
        & > input {
          border: none;
          border-bottom: 1px solid black;
          border-right: 1px solid black;
          height: 120%;
        }
      }
      &_button {
        padding-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-extras {
          display: grid;
          text-align: right;
          cursor: pointer;
        }
        & > button {
          width: 40%;
          height: 40px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  </style>
  