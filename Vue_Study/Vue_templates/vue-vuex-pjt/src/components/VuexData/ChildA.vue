<template>
  <div>
    ChildA
    <button @click="sendDataToVuexO()">O</button>
    <button @click="sendDataToVuexX()">X</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ChildA',
  methods: {
    ...mapMutations(['SET_DATA']),
    sendDataToVuexO() {
      this.SET_DATA("O")
    },
    sendDataToVuexX() {
      this.SET_DATA("X")
    },
  }
}
</script>

<style>

</style>