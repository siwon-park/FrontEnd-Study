<template>
  <div>
    <header>
      <h1>Hacker News</h1>
      <hr>
    </header>
    <div v-for="(item, $index) in list" :key="$index">
     <h3>{{$index}}. {{ item.title }}</h3>
     <h6>{{ item.points }} points by {{ item.author }} | {{ item.num_comments }} comments</h6>
    </div>

    <InfiniteLoading @infinite="infiniteHandler"></InfiniteLoading>
  </div>
</template>

<script>
// npm install vue-infinite-loading -S
import InfiniteLoading from 'vue-infinite-loading'
import axios from 'axios'
const API_KEY = '//hn.algolia.com/api/v1/search_by_date?tags=story'

export default {
  name: "HomeView",
  
  components: {
    InfiniteLoading,
  },

  data() {
    return {
      page: 1,
      list: [],
    }
  },

  methods: {
    infiniteHandler($state) {
      // 원본 코드
      // axios.get(api, {
      //   params: {
      //     page: this.page,
      //   },
      // })
      // .then(({ data }) => {
      //   if (data.hits.length) {
      //     this.page += 1;
      //     this.list.push(...data.hits)
      //     $state.loaded()
      //   } else {
      //     $state.complete()
      //   }
      // })
      // 배운 스타일에 맞게 리팩토링한 코드
      axios({
        url: API_KEY,
        method: 'get',
        params: {
          page: this.page,
        },
      })
      .then(res => {
        if (res.data.hits.length) {
          this.page += 1
          this.list.push(...res.data.hits)
          $state.loaded()
        } else {
          $state.complete()
        }
      })
      .catch(err => {
        console.error(err)
      })
    }
  },

}
</script>

<style>

</style>