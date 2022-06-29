<template>
  <div>
    ChildA
    <button @click="childSubmitO()">O</button>
    <button @click="childSubmitX()">X</button>
  </div>
</template>

<script>
export default {
  name: 'ChildA',
  props: {
    givenData: String,
  },
  data() {
    return {
    }
  },
  methods: {
    childSubmitO() {
      this.$emit('child-input-submit', "O")
    },
    childSubmitX() {
      this.$emit('child-input-submit', "X")
    }
  }
}
</script>

<style>

</style>