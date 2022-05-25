<template>
  <div>
    <h1>{{ profile.username }}님의 프로필 정보</h1>
    {{profile}}
    <p>
      {{this.profile.followings}}
      <!-- {{followers}} -->
      <button @click="followBtn">{{ followState }}</button>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "PersonalProfile",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['profile', 'followers', 'currentUser']),
    followState() {
      if (this.profile.followings?.length === 0) {
        return "팔로우"
      }
      for (const userId of this.profile.followings) {
        if (userId === this.currentUser.id) {
          return "언팔로우"
        }
      }
      return "팔로우"
    }
  },
  methods: {
    ...mapActions(['fetchProfile', 'followUser',]),
    followBtn() {
      this.fetchProfile(this.profile.id)
      this.followUser(this.profile.id)
      this.fetchProfile(this.profile.id)
    },
  },
  created() {
    this.fetchProfile(8)
  }
}
</script>

<style>

</style>