<template>
  <div>
    <h1>회원가입</h1>
<!-- 
    <account-error-list v-if="authError"></account-error-list> -->

    <form @submit.prevent="signup(credentials)">
      <div>
        <label for="username">Username: </label>
        <input v-model="credentials.username" type="text" id="username" required/>
      </div>
      <div>
        <label for="password1">Password: </label>
        <input v-model="credentials.password1" type="password" id="password1" required />
      </div>
      <div>
        <label for="password2">Password Confirmation:</label>
        <input v-model="credentials.password2" type="password" id="password2" required />
      </div>
      <div>
        <label for="nickname">Nickname Confirmation:</label>
        <input v-model="credentials.nickname" type="text" id="nickname" required />
      </div>
      <div>
        <label for="region">Region Confirmation:</label>
        <input v-model="credentials.region" type="text" id="region" required />
      </div>
      <div>
        <label for="sex">Sex Confirmation:</label>
        <input v-model="credentials.sex" type="text" id="sex" required />
      </div>
      <div>
        <label for="birth_date">Birth_date Confirmation:</label>
        <input v-model="credentials.birth_date" type="date" id="birth_date" required />
      </div>
      <div>
        <button>Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  // import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'SignupView',
    // components: {
    //   AccountErrorList,
    // },
    data() {
      return {
        credentials: {
          username: '',
          password1: '',
          password2: '',
          nickname: '',
          region: '',
          sex: '',
          birth_date:'',
        }
      }
    },
    // computed: {
    //   ...mapGetters(['authError'])
    // },
    methods: {
      ...mapActions(['signup'])
    },
  }
</script>

<style>
</style>
