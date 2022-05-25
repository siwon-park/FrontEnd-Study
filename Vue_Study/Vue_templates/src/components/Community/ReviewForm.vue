<template>
<div>
  <form @submit.prevent="onSubmit">
    
    <div style="text-align: center;">
      <div style = "font-size:18px; text-align: right; margin-bottom: 25px; margin-right: 100px;">
        <button style="margin-right: 20px;" class="back-button" @click="goBack">뒤로가기</button>
        <button>{{ actionBtn }}</button>
      </div>
      <div class="d-flex justify-content-end">
        <select v-model="movie_id" style="width: 400px; margin-right: 10%;" class="form-select" aria-label="영화 제목을 선택하세요">
          <option value="0">영화 선택</option>
          <option value="22">캐리비안의 해적: 블랙펄의 저주</option>
          <option value="675353">수퍼 소닉 2</option>
          <option value="414906">더 배트맨</option>
        </select>
      </div>

      <div>
        <label for="title"></label>
        <input v-model="newReview.title" style="border: 1px solid rgb(146, 149, 151); height:40px; font-size:20px; margin-bottom: 20px; margin-top: 20px;" type="text" id="title" size="70" placeholder=" 제목을 입력해주세요" required/>
      </div>
      <div>
        <label for="content"></label>
        <textarea v-model="newReview.content" rows="15" cols="73" style="border: 1px solid rgb(146, 149, 151); font-size:20px;" type="text" id="content" placeholder=" 내용을 입력해주세요" required></textarea>
      </div>
    </div>
  </form>

    <button class="back-button" @click="goBack">
      뒤로가기
    </button>
</div>
</template>
<script>
import { mapActions } from 'vuex'
import router from '@/router'

  export default {
    name: 'ReviewForm',
    props: {
      review: Object,
      action: String,
    },
    data() {
      return {
        newReview: {
          title: this.review.title,
          content: this.review.content,
        },
        movie_id: 0,
        actionBtn: (this.action === "create") ? "등록" : "수정"
      }
    },

    methods: {
      ...mapActions(['createReview', 'updateReview', 'createMovieReview']),
      onSubmit() {
        if (this.action === 'create') {
          if (this.movie_id === 0) {
            this.createReview(this.newReview)
          } else {
            this.createMovieReview({movieId: this.movie_id, review:this.newReview})
          }
        } else if (this.action === 'update') {
          const payload = {
            id: this.review.id,
            ...this.newReview,
          }
          this.updateReview(payload)
        }
      },
      goBack() {
        router.push({ name: 'CommunityView' })
      }
    },
  }
</script>
<style scoped>
  button{
    background-color: #E92964;
    box-shadow: #BC41AB 4px 4px 0px;
    border-radius: 8px;
    transition: transform 200ms, box-shadow 200ms;
    color : #fff;
    width : 100px;
    height: 45px;
  }

  button:active{
    transform: translateY(4px) translateX(4px);
    box-shadow: #BC41AB 0px 0px 0px;
  }


</style>