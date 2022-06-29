<template>
  <div>
    <h1>This is Sending Data Using EventBusGlobal</h1>
    <ChildA></ChildA>
    <ChildB></ChildB>
  </div>
</template>

<script>
import ChildA from '@/components/EventBusGlobal/ChildA.vue'
import ChildB from '@/components/EventBusGlobal/ChildB.vue'

export default {
  name: 'EventBusGlobal',
  components: {
    ChildA, ChildB
  }
}
</script>

<style>

</style>