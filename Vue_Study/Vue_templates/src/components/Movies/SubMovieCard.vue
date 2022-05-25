<template>
  <div class="col-mb-6">
    <v-hover v-slot="{ hover }">
      <v-card
        class="mx-auto"
        color="grey lighten-4"
        max-width="400"
        max-height="500"
      >
      <!-- 이미지 -->
        <v-img
          :src="`https://image.tmdb.org/t/p/original${subMovie.poster_path}`"
          class="card-img"
          height="400"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal text-h2 white--text"
              style="height: 100%;"
            > <!-- height 100%는 이미지 호버 시 올라올 높이-->
            <!-- 평점 -->
              <v-btn @click="rate_movie">
                <v-rating
                  v-model="rating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  hover
                ></v-rating>
              </v-btn>
            </div>
          </v-expand-transition>
        </v-img>
        <v-card-text
          class="pt-6"
          style="position: relative;"
        >

          <!-- <h3 class="text-h4 font-weight-light orange--text mb-2">
            <h4>{{ subMovie.title }}</h4>
          </h3> -->
          <v-dialog
            v-model="dialog"
            width="1000px"
          >
            <template v-slot:activator="{ on, attrs }">
              <div class="d-flex justify-content-around">
                <!-- 다이얼로그 온 버튼 -->
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  fab
                  small
                  @click="getSubMovieRelatedData"
                >
                <v-icon>mdi-comment-alert</v-icon>
                </v-btn>
                <!-- 하트 -->
                <v-btn
                  color="pink accent-2"
                  class="white--text"
                  fab
                  small
                  right
                  top
                  @click=like_movie
                > <!-- fab 속성은 동그라미 -->
                <v-icon>mdi-heart</v-icon>
                </v-btn>
                <!-- 위시리스트 -->
                <v-btn
                  color="light-green darken-3"
                  class="white--text"
                  fab
                  small
                  right
                  top
                  @click="wish_movie"
                > <!-- fab 속성은 동그라미 -->
                <v-icon>mdi-cart-heart</v-icon>
                </v-btn>
              </div>
            </template>
            <v-card
            height="800">
              <v-toolbar
                dark
                color="primary"
              >
                <v-toolbar-title>영화 상세정보</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                <!-- x버튼 -->
                  <v-btn
                    icon
                    dark
                    @click="dialog = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <SubMovieDetail
              :subMovieDetail="subMovie"
              :subMovieReviews="movieReivews"
              :subMovieRelated="recommendMovies"></SubMovieDetail>
            </v-card>
          </v-dialog>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import _ from 'lodash'
import SubMovieDetail from '@/components/Movies/SubMovieDetail.vue'
export default {
  name: "SubMovieCard",
  props: {
    subMovie: {
      type: Object,
    },
    likesubMovie: {
      type: Object,
    },
  },
  components: {
    SubMovieDetail,
  },
  data() {
    return {
      dialog: false,
      rating: 0,
    }
  },
  computed: {
    ...mapGetters(['movieReivews', 'recommendMovies', 'movieLike', 'movieWish', 'currentUser', 'movieList', 'movieRate']),
    likeCount() {
      return this.subMovie.like_movie_users_count
    },
    wishCount() {
      return this.subMovie.wish_lists_users_count
    },
  },
  methods: {
    ...mapActions(['fetchMovieReviews', 'fetchRecommendMovie', 'likeMovie', 'wishMovie', 'fetchPersonalMovieList', 'rateMovie']),
    // 랜덤 장르 픽해서 장르 id를 전달하고 영화를 추천 받음
    getSubMovieRelatedData() {
      const genre_arr = []
      for (const genre_data of this.subMovie.genre_check) {
        genre_arr.push(genre_data.id)
      }
      const random_genre_pick = _.sample(genre_arr)
      this.fetchMovieReviews(this.subMovie.id)
      this.fetchRecommendMovie(random_genre_pick)
    },
    // 좋아요를 누름
    like_movie() {
      this.fetchPersonalMovieList(this.currentUser.id)
      this.likeMovie(this.subMovie.id)
      this.fetchPersonalMovieList(this.currentUser.id)
    },
    // 위시리스트를 누름
    wish_movie() {
      this.fetchPersonalMovieList(this.currentUser.id)
      this.wishMovie(this.subMovie.id)
      this.fetchPersonalMovieList(this.currentUser.id)
    },
    // 영화를 평가함
    rate_movie() {
      console.log(this.rating)
      this.rateMovie({movieId: 752623, rate_score: this.rating})
      console.log(this.movieRate)
    },
  },
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
}
.card-img {
  object-fit: cover;
}
</style>