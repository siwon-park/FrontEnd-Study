<template>
  <div>
    <div>
      <!-- 평점을 준 영화 목록에서 확인하여 등록하게 함 -->
      <h3>로그인 유저의 평점 등록</h3>
      {{ movieRate }} ???
      <div>
        <form @submit.prevent="rate_movie(score)">
          <label for="rate"></label>
          <input v-model="score" type="number">
          <button>평점 등록</button>
        </form>
      </div>
    </div>
    <div>
      <h3>로그인 유저의 평점 수정 및 삭제</h3>
      {{ movieRate }} ???
      <div>
        <form @submit.prevent="rerate_movie(score)">
          <label for="rate"></label>
          <input v-model="score" type="number">
          <button>평점 등록</button>
        </form>
      </div>
    </div>
    <hr>
    <div>
      <h3>영화 좋아요 등록 및 해제</h3>
      <!-- {{ movieDetail }} -->
      {{ likeCount }} {{movieLike}}
      <button @click="like_movie">좋아요</button>
    </div>
    <hr>
    <div>
      <h3>영화 위시리스트 등록 및 해제</h3>
      {{ movieDetail }}
      {{ wishCount }} {{ movieWish }}
      <button @click="wish_movie">위시리스트</button>
    </div>
    <hr>
    <div>
      <h3>추천 친구 조회(잘작동함)</h3>

    </div>
    <div>
      <h3>추천영화 1(좋아요 기반)</h3>
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "MovieTest",
  components: {

  },
  data() {
    return {
      score: 0,
    }
  },
  computed: {
    ...mapGetters(['recommendFriends', 'currentUser','movieReivews', 'recommendMovies', 'movieRate', 'movieLike' ,'movieDetail', 'movieWish']),
    likeCount() {
      return this.movieDetail.like_movie_users_count
    },
    wishCount() {
      return this.movieDetail.wish_lists_users_count
    }
  },
  methods:{
    ...mapActions(['fetchRecommendFriend', 'fetchMovieReviews', 'fetchRecommendMovie', 'rateMovie', 'likeMovie', 'fetchMovieDetail', 'wishMovie', 'reRateMovie']),
    // 영화 평점 생성
    rate_movie(score) {
      this.score = score
      this.rateMovie({movieId: 752623, rate_score: this.score})
      console.log(this.movieRate)
    },
    rerate_movie(score) {
      this.score = score
      this.reRateMovie({movieId: 752623, rateId: this.movieRate.id, rate_score: this.score})
      console.log(this.movieRate)
    },
    // 영화 좋아요 fetch call을 두번해야 정상 반영됨
    like_movie() {
      this.fetchMovieDetail(58)
      this.likeMovie(58)
      this.fetchMovieDetail(58)
    },
    // 영화 위시리스트 fetch call 두 번
    wish_movie() {
      this.fetchMovieDetail(58)
      this.wishMovie(58)
      this.fetchMovieDetail(58)
    },
  },
  created() {
    this.fetchMovieReviews(58) // 망자의 함 댓글 조회
    this.fetchRecommendMovie(28) // 액션 영화 추천
    this.fetchMovieDetail(58) // 망자의 함 데이터 가져옴
    this.fetchRecommendFriend(this.currentUser.id)
  }

}
</script>

<style>

</style>