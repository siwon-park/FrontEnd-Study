<template>
  <div>
    <form @submit.prevent="changeSubmit(passwordData.newpassword1, passwordData.newpassword2)">
      <div>
        <div>
          <label for="newpassword1">새 비밀번호: </label>
          <input v-model="passwordData.newpassword1" type="password" id="password1">
        </div>
        <div>
          <label for="newpassword2">새 비밀번호 확인: </label>
          <input v-model="passwordData.newpassword2" type="password" id="password2">
        </div>
      </div>
      <button>비밀번호 변경</button>
    </form>

    <div>
    <button @click="goBack">뒤로가기</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'

export default {
  name: "PasswordChange",
  data() {
    return {
      passwordData: {
        password1: '',
        password2: '',
      }
    }
  },
  methods: {
    ...mapActions(['changePassword']),
    changeSubmit(p1, p2) {
      this.changePassword({password1: p1, password2: p2})
    },
    goBack() {
      router.push({ name: 'PersonalProfileEdit' }) 
    },
  }
}
</script>

<style>

</style>