<template>
  <div>
    ChildB received: {{receivedData}}
  </div>
</template>

<script>
export default {
  name: 'ChildB',
  props: {
    receivedData: String,
  }
}
</script>

<style>

</style>