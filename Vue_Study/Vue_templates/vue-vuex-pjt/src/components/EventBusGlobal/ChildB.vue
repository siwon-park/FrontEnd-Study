<template>
  <div>
    ChildB received: {{receivedData}}
  </div>
</template>

<script>
import { EventBusGlobal } from '@/components/EventBusGlobal/EventBusGlobal'
export default {
  name: 'ChildB',
  data() {
    return {
      receivedData: '',
    }
  },
  created() {
    // on
    EventBusGlobal.$on('global-event-bus', received => {
      this.receivedData = received
    })
    // // once => event를 한번만 받아보고 싶을 때 사용
    // EventBusGlobal.$once('global-event-bus', received => {
    //   this.receivedData = received
    // })
    // // off => eventbus를 해제함
    // EventBusGlobal.$off('global-event-bus')
  }
}
</script>

<style>

</style>