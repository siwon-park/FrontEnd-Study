<template>
<v-app>
  <v-main>
    <v-container fluid>
      {{ currentUser }}
      <div>
        <h1>
        {{ currentUser.username }}님의 프로필 정보
        </h1>
      </div>
      <v-row>
        <!-- 프로필 사진 -->
        <v-col cols="12" sm="4">
          <div class="box">
            <img src="@/assets/logo.png" alt="????" class="profile">
          </div>
        </v-col>
        <!-- 프로필 정보 -->
        <v-col cols="12" sm="8">
          <h3>이름: {{ currentUser.username }}</h3>
          <h3>팔로워 수: {{ currentUser.followings.length }}</h3>
          <h3>생년월일: {{ currentUser.birth_date }}</h3>
          <h3>성별: {{ currentUser.sex }}</h3>
          <h3>지역: {{ currentUser.region }}</h3>
          <h3>싫어하는 장르: {{hateGenres.hate_genres_count}}</h3>
          <div class="d-flex justify-content-space">
            <div v-for="h_genre in hateGenres.hate_genres"
            :key="h_genre.id">
            <span>{{h_genre.name}}</span>
            </div>
          </div>
          <router-link to="/profile/edit">프로필 수정하러 가기</router-link>
        </v-col>
      </v-row>
      <br>
      <v-row>
        <div>
          <h3>좋아요를 누른 영화 목록</h3>
            <hr>
            <div class="container-fluid">
              <Flicking
              :options="{ circular: true }"
              :plugins="plugins"
              >
              <PersonalMovie v-for="movie in movieList.like_movies"
              :key="movie.id"
              :movie="movie"></PersonalMovie>
              <div slot="viewport" class="flicking-pagination"></div>
              <span slot="viewport" class="flicking-arrow-prev is-circle"></span>
              <span slot="viewport" class="flicking-arrow-next is-circle"></span>
              </Flicking>
            </div>
        </div>
      </v-row>
      <br>
      <v-row>
        <div>
          <h3>위시리스트 영화 목록</h3>
            <hr>
            <div class="container-fluid">
              <Flicking
              :options="{ circular: true }"
              >
              <PersonalMovie v-for="movie in movieList.wish_moives"
              :key="movie.id"
              :movie="movie"></PersonalMovie>
              </Flicking>
            </div>
        </div>
      </v-row>
      <br>
      <v-row>
        <h3>평점을 준 영화 목록</h3>
        <!-- {{movieList.user_rated_movie}} -->
          <hr>
          <div class="container-fluid">
            <Flicking
            :options="{ circular: true }"
            >
            <PersonalMovie v-for="movie in movieList.user_rated_movie"
            :key="movie.id"
            :movie="movie"></PersonalMovie>
            </Flicking>
          </div>
      </v-row>
      <v-row>
        <h3>싫어하는 장르 선택</h3>
        <v-card flat>
          <v-card-text>
            <v-container fluid >
              <v-row>
                <v-col
                  cols="12"
                  sm="3"
                  md="3"
                >
                  <v-checkbox
                    @click="genreInput(12)"
                    label="모험"
                    color="red"
                    value="12"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(14)"
                    label="판타지"
                    color="red"
                    value="14"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(16)"
                    label="애니메이션"
                    color="red darken-3"
                    value="16"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(18)"
                    label="드라마"
                    color="indigo"
                    value="18"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(27)"
                    label="공포"
                    color="indigo darken-3"
                    value="27"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="3"
                  md="3"
                >
                  <v-checkbox
                    @click="genreInput(28)"
                    label="액션"
                    color="orange"
                    value="28"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(35)"
                    label="코미디"
                    color="orange"
                    value="35"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(36)"
                    label="역사"
                    color="orange darken-3"
                    value="36"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(37)"
                    label="서부"
                    color="primary"
                    value="37"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(53)"
                    label="스릴러"
                    color="secondary"
                    value="53"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="3"
                  md="3"
                >
                  <v-checkbox
                    @click="genreInput(80)"
                    label="범죄"
                    color="success"
                    value="80"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(99)"
                    label="다큐멘터리"
                    color="success"
                    value="99"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(9648)"
                    label="미스터리"
                    color="info"
                    value="9648"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(10402)"
                    label="음악"
                    color="warning"
                    value="10402"
                    hide-details
                    checked
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(10749)"
                    label="로맨스"
                    color="error"
                    value="10749"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="3"
                  md="3"
                >
                  <v-checkbox
                    @click="genreInput(10751)"
                    label="가족"
                    color="success"
                    value="10751"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(10752)"
                    label="전쟁"
                    color="success"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    @click="genreInput(10770)"
                    label="TV 영화"
                    color="info"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking'
import { mapActions, mapGetters } from 'vuex'
import PersonalMovie from './PersonalMovie.vue'
import { Arrow } from "@egjs/flicking-plugins";


export default {
  name: "ProfilePage",
  components: {
    Flicking,
    PersonalMovie,
  },
  data() {
    return {
      userId: this.$route.params.userId,
      plugins: [new Arrow()]
    }
  },
  computed: {
    ...mapGetters(['currentUser','movieList', 'hateGenres',]),
  },
  methods: {
    ...mapActions(['fetchCurrentUser', 'fetchPersonalMovieList', 'fetchHateGenre', 'hateGenresPick',]),
    genreInput(value) {
      this.hateGenresPick({userId:this.currentUser.id, genreId:value})
    },
  },
  mounted() {
    this.fetchCurrentUser()
    this.fetchPersonalMovieList(this.currentUser.id)
    this.fetchHateGenre(this.currentUser.id)
  },
}
</script>

<style scoped>
@import "@egjs/flicking-plugins/dist/arrow.css";
.profile {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: solid;
    border-color: gray;
}
</style>