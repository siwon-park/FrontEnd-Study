<template>
  <div class="HomeView">
    <!-- 로그인 시 안녕하세요 ???님을 추가하는 게 나아보임 -->
    <h1>현재 상영작</h1>
    <div class="container-fluid">
      <Flicking
        class="slide"
        :options="{ circular: true }"
        :plugins="plugins"
      >
      <MainMovieCard v-for="mainMovie in mainMovies"
      :key="mainMovie.id"
      :mainMovie="mainMovie"></MainMovieCard>
      </Flicking>
    </div>
    <h1>{{this.recommend_movie_genre}} 추천 영화</h1>
    {{this.movieList}}
    <div>
      <div class="d-flex justify-content-evenly align-items-center">
        <button class="btn btn-primary" @click="sortBtn(1, '인기순')">인기순</button>
        <button class="btn btn-primary" @click="sortBtn(2, '최신순')">최신순</button>
        <button class="btn btn-primary" @click="sortBtn(3, '개봉 예정순')">개봉 예정순</button>
        <button class="btn btn-primary" @click="sortBtn(4, '리뷰 많은순')">리뷰 많은순</button>
        <button class="btn btn-primary" @click="sortBtn(5, '평점순')">평점순</button>
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
            장르순
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="sortBtn(12, '모험')">모험</a></li>
            <li><a class="dropdown-item" @click="sortBtn(14, '판타지')">판타지</a></li>
            <li><a class="dropdown-item" @click="sortBtn(16, '애니메이션')">애니메이션</a></li>
            <li><a class="dropdown-item" @click="sortBtn(18, '드라마')">드라마</a></li>
            <li><a class="dropdown-item" @click="sortBtn(27, '공포')">공포</a></li>
            <li><a class="dropdown-item" @click="sortBtn(28, '액션')">액션</a></li>
            <li><a class="dropdown-item" @click="sortBtn(35, '코미디')">코미디</a></li>
            <li><a class="dropdown-item" @click="sortBtn(36, '역사')">역사</a></li>
            <li><a class="dropdown-item" @click="sortBtn(37, '서부')">서부</a></li>
            <li><a class="dropdown-item" @click="sortBtn(53, '스릴러')">스릴러</a></li>
            <li><a class="dropdown-item" @click="sortBtn(80, '범죄')">범죄</a></li>
            <li><a class="dropdown-item" @click="sortBtn(99, '다큐멘터리')">다큐멘터리</a></li>
            <li><a class="dropdown-item" @click="sortBtn(878, 'SF')">SF</a></li>
            <li><a class="dropdown-item" @click="sortBtn(9648, '미스터리')">미스터리</a></li>
            <li><a class="dropdown-item" @click="sortBtn(10402, '음악')">음악</a></li>
            <li><a class="dropdown-item" @click="sortBtn(10749, '로맨스')">로맨스</a></li>
            <li><a class="dropdown-item" @click="sortBtn(10751, '가족')">가족</a></li>
            <li><a class="dropdown-item" @click="sortBtn(10752, '전쟁')">전쟁</a></li>
            <li><a class="dropdown-item" @click="sortBtn(10770, 'TV 영화')">TV 영화</a></li>
          </ul>
        </div>          
      </div>
    </div>
    <!-- 서브 무비  -->
    <v-app>
      <v-main>
        <v-container fluid>
          <div class="row row-cols-4 row-cols-md-5 gy-3">
            <SubMovieCard v-for="subMovie in subMovies"
            :key="subMovie.id"
            :subMovie="subMovie"
            ></SubMovieCard>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking'
import { Fade, Perspective, AutoPlay } from '@egjs/flicking-plugins'
import { mapActions, mapGetters } from 'vuex'
import MainMovieCard from '@/components/Movies/MainMovieCard.vue'
import SubMovieCard from '@/components/Movies/SubMovieCard.vue'

export default {
  name: 'HomeView',
  components: {
    Flicking: Flicking,
    MainMovieCard,
    SubMovieCard,
  },
  computed: {
    ...mapGetters(['mainMovies', 'subMovies', 'currentUser', 'movieList']),
  },
  methods: {
    ...mapActions(['main_movie_load', 'sub_movie_load', 'fetchPersonalMovieList']),
    sortBtn(v, genre_pick) {
      this.sub_movie_load(v)
      this.recommend_movie_genre = genre_pick
    },
  },
  data() {
    return {
      movie_gerne: "",
      plugins: [new Fade(), new Perspective({ rotate: -1 }), new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })],
      recommend_movie_genre: '인기순'
    }
  },
  created() {
    this.main_movie_load()
    this.sub_movie_load(1)
    this.fetchPersonalMovieList(this.currentUser.id)
  },
}
</script>

<style scoped>
 @import "@egjs/vue-flicking/dist/flicking.css";
</style>