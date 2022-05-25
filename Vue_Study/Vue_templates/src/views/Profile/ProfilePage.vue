<template>
<div class="row py-5 px-4">
  <!-- 프로필 부분 -->
  <div class="col-sm-8">
    <div class="col">
      <div class="bg-white shadow rounded overflow-hidden">
        <div class="px-4 pt-0 pb-4 cover">
          <div class="media pb-4 align-items-end profile-head">
            <div class="profile mr-3">
              <!-- 프로필 이미지 -->
              <img src="@/assets/logo.png" alt="..." width="130" class="rounded mb-2 img-thumbnail">
            </div>
            <div class="media-body mb-5 text-white">
              <h4 class="mt-0 mb-0">{{currentUser.username}}</h4>
              <p class="small mb-4"><i class="fas fa-map-marker-alt mr-2"></i>{{currentUser.region}}</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between text-center bg-light p-2">
          <div>
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">215</h5>
                <small class="text-muted"><i class="fas fa-image mr-1"></i>Photos</small>
              </li>
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">745</h5>
                <small class="text-muted"> <i class="fas fa-user mr-1"></i>Followers</small>
              </li>
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">340</h5>
                <small class="text-muted"> <i class="fas fa-user mr-1"></i>Following</small>
              </li>
            </ul>
          </div>
          <div>
            <router-link to="/profile/edit">프로필 수정하러 가기</router-link>
          </div>
        </div>
        <div class="px-3 py-3">
          <h5 class="mb-0">About</h5>
          <div class="p-4 rounded shadow-sm bg-light">
            <p class="font-italic mb-0">생년월일: {{ currentUser.birth_date }}</p>
            <p class="font-italic mb-0">성별: {{ currentUser.sex }}</p>
            <p class="font-italic mb-0">싫어하는 장르: {{ currentUser.hate_genres_count}}</p>
            <div class="d-flex justify-content-space">
              <div v-for="h_genre in hateGenres.hate_genres"
              :key="h_genre.id">
              <span>{{h_genre.name}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 영화 정보 -->
        <div class="py-4 px-4">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h5 class="mb-0">{{ sortRet }} 영화</h5>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle text-white" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                {{currentUser.username}} 님의 영화정보
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a class="dropdown-item" @click="sortBtn('like_movies', '좋아요를 누른')">좋아요를 누른 영화</a></li>
                <li><a class="dropdown-item" @click="sortBtn(2, '좋아요 기반 추천')">좋아요 기반 추천 영화</a></li>
                <li><a class="dropdown-item" @click="sortBtn(3, '평점 기반 추천')">평점 기반 추천 영화</a></li>
                <li><a class="dropdown-item" @click="sortBtn('wish_moives', '위시리스트')">위시리스트 영화</a></li>
                <li><a class="dropdown-item" @click="sortBtn('user_rated_movie', '평점을 준')">평점을 준 영화</a></li>
              </ul>
            </div>
          </div>
          <!-- 영화 출력 -->
          <div class="p-4 rounded shadow-sm bg-light">
            <div class="row">
              <div v-if="rcmdToggle === 1" class="container-fluid">
                <Flicking
                :options="{ circular: true }"
                :plugins="plugins"
                >
                <PersonalMovie v-for="movie in movieList[this.keyvalue]"
                :key="movie.id"
                :movie="movie"></PersonalMovie>
                <div slot="viewport" class="flicking-pagination"></div>
                <span slot="viewport" class="flicking-arrow-prev is-circle"></span>
                <span slot="viewport" class="flicking-arrow-next is-circle"></span>
                </Flicking>
              </div>
              <div v-if="rcmdToggle === 2" class="container-fluid">
                <Flicking
                :options="{ circular: true }"
                :plugins="plugins"
                >
                <PersonalMovie v-for="movie in likeRecommendMovies"
                :key="movie.id"
                :movie="movie"></PersonalMovie>
                <div slot="viewport" class="flicking-pagination"></div>
                <span slot="viewport" class="flicking-arrow-prev is-circle"></span>
                <span slot="viewport" class="flicking-arrow-next is-circle"></span>
                </Flicking>
              </div>
              <div v-if="rcmdToggle === 3" class="container-fluid">
                <Flicking
                :options="{ circular: true }"
                :plugins="plugins"
                >
                <PersonalMovie v-for="movie in rateRecommendMovies"
                :key="movie.id"
                :movie="movie"></PersonalMovie>
                <div slot="viewport" class="flicking-pagination"></div>
                <span slot="viewport" class="flicking-arrow-prev is-circle"></span>
                <span slot="viewport" class="flicking-arrow-next is-circle"></span>
                </Flicking>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 친구 추천 부분 -->
  <div class="col-sm-4">
    <div class="col">
      <div class="bg-white shadow rounded overflow-hidden">
        <center>
          <h3>추천 친구 목록</h3>
          {{this.recommendFriends}}
        </center>
        <div>
          <div v-if="recommendFriends !== ''">
            <RecommendFriendList
            v-for="friend in recommendFriends"
            :key="friend.id"
            :friend="friend"></RecommendFriendList>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking'
import { Arrow } from "@egjs/flicking-plugins";
import { mapActions, mapGetters } from 'vuex'
import PersonalMovie from './PersonalMovie.vue'
import RecommendFriendList from './RecommendFriendList.vue'

export default {
  name: "ProfilePage",

  components: {
    Flicking,
    PersonalMovie,
    RecommendFriendList,
  },

  data() {
    return {
      userId: this.$route.params.userId,
      plugins: [new Arrow()],
      sortRet: '좋아요를 누른',
      keyvalue: 'like_movies',
      rcmdToggle: 1,
    }
  },

  computed: {
    ...mapGetters(['currentUser','movieList', 'hateGenres', 'likeRecommendMovies', 'rateRecommendMovies', 'recommendFriends']),
  },

  methods: {
    ...mapActions(['fetchCurrentUser', 'fetchPersonalMovieList', 'fetchHateGenre', 'hateGenresPick', 'fetchRateRecommendMovies', 'fetchLikeRecommendMovies','fetchRecommendFriend' ]),
    
    genreInput(value) {
      this.hateGenresPick({userId:this.currentUser.id, genreId:value})
    },

    sortBtn(kv, srt) {
      if (kv === 2) {
          this.rcmdToggle = 2
        } else if (kv === 3) {
          this.rcmdToggle = 3
        } else {
          this.keyvalue = kv
          this.rcmdToggle = 1
        }
      this.sortRet = srt
    },

  },

  created() {
    this.fetchCurrentUser()
    this.fetchPersonalMovieList(this.currentUser.id)
    this.fetchHateGenre(this.currentUser.id)
    this.fetchLikeRecommendMovies(this.currentUser.id)
    this.fetchRateRecommendMovies(this.currentUser.id)
    this.fetchRecommendFriend(this.currentUser.id)
  },
}
</script>

<style scoped>
@import "@egjs/flicking-plugins/dist/arrow.css";
.my-block {
  background-color: black;
}

.profile-head {
    transform: translateY(3rem)
}

.cover {
    background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
    background-size: cover;
    background-repeat: no-repeat
}

body {
    background: #654ea3;
    background: linear-gradient(to right, #e96443, #904e95);
    min-height: 100vh;
    overflow-x:hidden;
}

.is-circle {
  background-color:darkgray;
}

</style>