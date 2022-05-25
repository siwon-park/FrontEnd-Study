<template>
<!-- 네브바에 stick-top을 넣을지 말지 결정 : 고정 버튼 없다면 있는게 나을 듯 함-->
  <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top py-2">
    <div class="container-fluid">
      <!-- 이미지 연결 -->
      <router-link class="navbar-brand" to="/">
        <img id="navbar-logo" src="@/assets/logo.png" alt="netflix_logo" width="50px" height="50px">
      </router-link>

      <!--햄버거 버튼-->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

        <ul class="navbar-nav pe-3">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/community">Community</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>

          <li v-if="this.loginState === 'Login'" class="nav-item">
            <router-link class="nav-link" to="/login">{{this.loginState}}</router-link>
          </li>

          <li v-if="this.loginState === 'Logout'" class="nav-item">
            <router-link @click.native="logout" class="nav-link" to="#">{{this.loginState}}</router-link>
          </li>

          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle show" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="true">Settings</a>
            <ul class="dropdown-menu show" aria-labelledby="dropdown01" data-bs-popper="static">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>

        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  data() {
    return {
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn',]),
    loginState() {
      return (this.isLoggedIn) ? "Logout" : "Login"
    }
  },

}
</script>

<style scoped>
  /* .nav-item{} */

</style>