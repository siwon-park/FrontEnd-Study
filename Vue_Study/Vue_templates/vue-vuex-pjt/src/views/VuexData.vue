<template>
  <div>
    <h1>This is Sending Data Using Vuex</h1>
    <ChildA></ChildA>
    <ChildB></ChildB>
  </div>
</template>

<script>
import ChildA from '@/components/VuexData/ChildA.vue'
import ChildB from '@/components/VuexData/ChildB.vue'

export default {
  name: 'VuexData',
  components: {
    ChildA, ChildB
  }
}
</script>

<style>

</style>