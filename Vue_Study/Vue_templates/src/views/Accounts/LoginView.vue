<template>
    <div class="vue-tempalte">
      <form @submit.prevent="login(credentials)">
        <h3>Login In</h3>
        <div class="form-group">
          <label for="username">username: </label>
          <input class="form-control form-control-lg" v-model="credentials.username" type="text" id="username" required />
        </div>
        <div class="form-group">
          <label for="password">password: </label>
          <input class="form-control form-control-lg" v-model="credentials.password" type="password" id="password" required />
        </div>
        <button class="btn btn-dark btn-lg btn-block">로그인</button>
        <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/">Forgot password ?</router-link>
          <!-- <router-link to="/forgot-password">Forgot password ?</router-link> -->
        </p>
        <div class="social-icons">
          <ul>
            <li><a href="#"><i class="fa fa-google"></i></a></li>
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          </ul>
        </div>
      </form>
      <router-link class="nav-link" to="/signup">회원가입</router-link>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  // import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'LoginView',
    components: {
      // AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password: '',
        }
      }
    },
  // computed: {
  //     ...mapGetters(['authError'])
  //   },
    methods: {
      ...mapActions(['login'])
    },
  }
</script>

<style scoped>
  @import '@/assets/styles/login.css';
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>