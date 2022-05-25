<template>
  <v-app>
    <div style="margin-left: 25%; margin-right: 25%;">
      <ul>
        <div class="d-flex justify-content-end" style="font-size: 18px;">
          <router-link to="/new" class="article">New Article →<i class="arrow"></i></router-link>
        </div>
        <li v-for="review in reviews" :key="review.id">
          <div>
            <div class="oneline" style="margin-bottom: 10px;">
              <div>No.{{ review.id }} </div>
              <div v-if="review.write_review_movie">{{ review.write_review_movie.title }}</div>
            </div>

            <div>
              <div class="d-flex justify-content-between">
                <router-link class="router"
              :to="{ name: 'review', params: {reviewId: review.id } }"> 
                <p class="title" style="margin-top: 5px;">{{ review.title }} </p>
              </router-link>
                <div>
                  <p class="heart icon">💟{{ review.like_count }}</p>
                  <p class="comment icon">💬{{ review.comment_count }}</p>
                </div>
              </div>

              <div class="write d-flex justify-content-between">
                <div>
                  <p style="margin-top: 10px; font-size: 17px;">{{ review.write_review_user.username }}</p>
                </div>
                <div style = "font-size: 13px; color:grey;" >
                  <p style="margin-bottom: 0px; ">created : {{ review.created_at }}</p>
                  <p>updated : {{ review.created_at }}</p>
                </div>
              </div>
            </div>
          </div>
          <hr>
        </li>
      </ul>
    </div>
  </v-app>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ReviewListView',
    computed: {
      ...mapGetters(['reviews'])
    },
    methods: {
      ...mapActions(['fetchReviews'])
    },
    created() {
      this.fetchReviews()
    },
  }
</script>

<style scoped>

  /* li:nth-child(odd){
    background-color: rgb(230, 230, 230);
  }

  li:nth-child(even){
    background-color: #fff;
  } */
  
  .write{
    display: inline;
  }

  ul{
    list-style: none;
  }

  p{
    margin-bottom: 10px;
  }
  .oneline div{
    display: inline;
    color: #e92964;
    font-size: 17px;
    font-weight: bolder;
    
  }
  .title{
    font-weight: bold;
  }

  .v-application .title{
    font-size: 23px !important;
  }

  .router{
    color:black;
  }

  .router:link {
    text-decoration: none;
    display: inline-block;
    position: relative;
    color: #fff;
  }

  .router:link::after{
    content: '';
    width: 100%;
    height: 1px;
    /* 밑줄 색상 */
    background-color: #e92964;
    border-radius: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .25s ease;
  }

  .router:link:hover::after{
    transform: scaleX(1);
  }

  .icon{
    display: inline-block;
    animation: float 3.5s ease-in-out infinite;
  }
  .heart{
    animation-delay: 0s;
  }
  .comment{
    animation-delay: 0.8s;
  }

  .article{
    display: flex;
    align-items: center;
    color: #000;
    background-color: none;
    border: none;
    padding: 12px 18px;
    position: relative;
    text-decoration: none;
  }

  .article::before{
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%)translateX(calc(100% + 4px));
    width: 45px;
    height: 45px;
    background:#e92964;
    border-radius: 50px;
    transition: transform .25s .25s cubic-bezier(0, 0, .5, 2), width .25s cubic-bezier(0, 0, .5, 2);
    z-index: -1;
  }

  .article:hover::before{
    width: 100%;
    transform: translateY(-50%) translateX(-18px);
    transition: transform .25s cubic-bezier(0, 0, .5, 2), width .25s .25s cubic-bezier(0, 0, .5, 2);
  }

  .article i{
    margin-left: 5px;
    transition: transform .25s .4s cubic-bezier(0, 0, .5, 2);
  }

  .article:hover{
    transform: translateX(3px);
  }

  @keyframes float{
    0%{
      transform: translateY(0);
    }
    50%{
      transform: translateY(-7px);
    }
    100%{
      transform: translateY(0);
    }
  }


</style>
