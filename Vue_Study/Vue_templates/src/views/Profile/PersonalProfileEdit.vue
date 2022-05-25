<template>
  <div>
    <h1>
    This is Profile Page
    </h1>
    <!-- 1. {{ this.profileData.username }} -->
    <br>
    <form @submit.prevent="updateRequest()">
      <div>
        <div>
          <label for="username">이름: </label>
          <input v-model="currentUser.username" type="text" id="username">
        </div>
        <div>
          <label for="sex">성별: </label>
          <input v-model="currentUser.sex"  type="text" id="sex">
        </div>
        <div>
          <label for="region">지역: </label>
          <input v-model="currentUser.region" type="text" id="region">
        </div>
      </div>
      <button>프로필 수정하기</button>
    </form>
    <!--  /accounts/password/change/ -->
    <p><router-link to="/password/change">비밀번호 변경</router-link></p> 
    <button @click="goBack">뒤로가기</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import router from '@/router'

export default {
  name: "PersonalProfileEdit",
  data() {
    return {
      profileData: {
        username:'',
        region: '',
        sex: '',
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser',])
  },
  methods: {
    ...mapActions(['fetchCurrentUser', 'updateProfile']),
    updateRequest() {
      this.updateProfile({username: this.currentUser.username, sex: this.currentUser.sex, region: this.currentUser.region})
    },
    goBack() {
      router.push({ name: 'ProfilePage' }) 
    },
  },
  created() {
    // this.fetchCurrentUser() // 테스트
    // this.profileData = this.currentUser
  },
}
</script>

<style>

</style>