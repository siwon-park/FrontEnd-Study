<template>
  <!-- 재귀 컴포넌트 -->
  <div :style="nodeMargin">
    <b-alter show class="d-flex justify-content-between mb-1">
      {{ node.label}}
      <span class="fas fa-angle-right"></span>
    </b-alter>
    <div v-if="hasChildren" class="text-align-left">
      <ul>
        <TreeNode
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        :spacing="spacing + 10"></TreeNode>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    node: {
      type: Object,
      required: true,
    },
    spacing: {
      type: Number,
      default:0
    },
  },
  // data(){
  //   return {
  //     spacing: 0,
  //   }
  // },
  computed: {
    hasChildren() {
      const {children} = this.node
      return children && children.length > 0
    },
    nodeMargin() {
      return {
        'margin-left': `${this.spacing}px`
      }
    },
  }
}
</script>

<style>

</style>