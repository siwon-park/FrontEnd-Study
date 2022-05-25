<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <div>
          <v-row>
            <v-col cols="12" sm="4">
              <v-img
              :src="`https://image.tmdb.org/t/p/original${subMovieDetail.poster_path}`"
              class="card-img"
              height=100%
              width="400"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="8">
              <v-card-text class="d-flex justify-content-left align-items-baseline mx-1">
                <div>
                  <h2>
                    {{subMovieDetail.title}}
                  </h2>
                  <h6>
                    개봉일: {{subMovieDetail.release_date}}
                  </h6>
                </div>
                <div>
                  <v-btn
                    icon
                    color="yellow accent-4"
                    dark
                    x-large
                  >
                    <v-icon>mdi-star-circle</v-icon>
                  </v-btn>
                  {{subMovieDetail.vote_average}}
                </div>
              </v-card-text>
                <p class="btn btn-primary mx-1" v-for="genre in subMovieDetail.genre_check" :key="genre.id">
                  {{genre.name}}
                </p>
              <v-card-text>
                <h3>줄거리</h3>
                <hr>
                {{subMovieDetail.overview}}
              </v-card-text>
              <v-card-text>
                <h3>관련 리뷰글</h3>
                <hr>
                <ul>
                  <li v-if="review_count === 0">관련 리뷰가 없습니다.</li>
                  <div v-if="review_count !== 0">
                    <li 
                    v-for="review in subMovieReviews.write_movie_review"
                    :key="review.id">
                    <router-link :to="{ name: 'review', params: {reviewId: review.id } }">
                      {{ review.title }}
                    </router-link>
                    </li>
                  </div>

    <!-- path: '/reviews/:reviewId',
    name: 'review',
    component: ReviewDetailView -->
                </ul>
              </v-card-text>
            </v-col>
          </v-row>
          <br>
          <br>
          <v-row>
            <h3>유사 장르 추천 영화</h3>
            <hr>
            <div class="d-flex justify-content-around align-items-center">
              <div class="block">
                <v-img
                :src="`https://image.tmdb.org/t/p/original${subMovieRelated[0].poster_path}`"
                class="fill image"
                ></v-img>
              </div>
              <div class="block">
                <v-img
                :src="`https://image.tmdb.org/t/p/original${subMovieRelated[1].poster_path}`"
                class="fill image"
                ></v-img>
              </div>
              <div class="block">
                <v-img
                :src="`https://image.tmdb.org/t/p/original${subMovieRelated[2].poster_path}`"
                class="fill image"
                ></v-img>
              </div>
            </div>
              {{subMovieDetail}}
              <!-- {{subMovieReviews}} -->
              <!-- {{subMovieRelated}} -->
          </v-row>
          <v-row>
            <br>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
export default {
  name:"SubMovieDetail",
  props: {
    subMovieDetail: {
      type: Object,
    },
    subMovieReviews: {
      type: Object,
    },
    subMovieRelated: {
      type: Array,
    }
  },
  computed: {
    review_count() {
      return this.subMovieReviews.write_movie_review?.length
    }
  }
  // 비동기 호출로 이 컴포넌트에서 리뷰를 부르면 안 되고 부모에서 불러온 후 넘겨줘야함
  // 또한 부모도 컴퓨티드 속성으로 created됐을 때 리뷰를 불러오게 실행하는 것이 아니라
  // 버튼을 눌렀을 때 해당 영화 id에 해당하는 리뷰를 받고 자식에게 넘겨주는 것이다.
  // computed: {
  //   ...mapGetters(['movieReivews']),
  // },
  // methods: {
  //   ...mapActions(['fetchMovieReviews',]),
  // },
  // created() {
  //   this.fetchMovieReviews(this.subMovieDetail.id)
  // },
}
</script>

<style scoped>
.block .fill {
  object-fit: cover;
  height: 350px;
  width: 250px;
}
</style>