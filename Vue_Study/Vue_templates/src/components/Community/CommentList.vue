<template>
  <div class="comment-list">
    <CommentListForm></CommentListForm>
    <ul>
      <CommentListItem 
        v-for="comment in comments" 
        :comment="comment" 
        :key="comment.id">
      </CommentListItem>        
    </ul>

    
  </div>
</template>

<script>
import CommentListItem from '@/components/Community/CommentListItem.vue'
import CommentListForm from '@/components/Community/CommentListForm.vue'

export default {
  name: 'CommentList',
  components: { CommentListForm, CommentListItem },
  props: { 
    comments: Array
  },
}
</script>

<style>
</style>