<template>
  <div>
    ChildB received: {{childData}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ChildB',
  computed: {
    ...mapGetters(['childData',])
  }
}
</script>

<style>

</style>