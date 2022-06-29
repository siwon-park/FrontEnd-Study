<template>
  <div>
    <h1>This is Sending Data Using EventBusPropsEmit</h1>
    <ChildA :givenData=parentData @child-input-submit="parentGetData"></ChildA>
    <ChildB :receivedData=parentData></ChildB>
  </div>
</template>

<script>
import ChildA from '@/components/EventBusPropsEmit/ChildA.vue'
import ChildB from '@/components/EventBusPropsEmit/ChildB.vue'

export default {
  name: 'EventBusPropsEmit',
  components: {
    ChildA, ChildB
  },
  data() {
    return {
      parentData: '',
    }
  },
  methods: {
    parentGetData(inputData) {
      this.parentData = inputData
    }
  }
}
</script>

<style>

</style>