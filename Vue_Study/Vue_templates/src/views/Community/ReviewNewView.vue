<template>
  <div style="margin-left: 25%; margin-right: 25%;">
    <h1 class="title" style="margin-top: 74px; font-size: 50px; font-weight: bold;margin-bottom: 35px; text-align:center;">Community Club 글쓰기</h1>
    <ReviewForm :review="review" action="create"></ReviewForm>
  </div>
</template>

<script>
  import ReviewForm from '@/components/Community/ReviewForm.vue'
  export default {
    name: 'ReviewNewView',
    components: { ReviewForm },
    data() {
      return {
        review: {
          pk: null,
          title: '',
          content: '',
        }
      }
    },
  }
</script>

<style scoped>
  .title{

    text-shadow: red 0 0, cyan 0 0;
    transition: text-shadow 200ms;

  } 
   .title:hover{
    text-shadow: red -4px 0 0, cyan 4px 0 0;
  }

  /* 다른데다가 써먹자..
  .title{
    transform: skewY(-4edge);
    color: #564a5f;
    text-shadow: #bfbaff 4px 4px, #ffdef7 8px 8px;

  } */
</style>
