<template>
  <div>
    ChildA
    <button @click="eventBusGlobalO()">O</button>
    <button @click="eventBusGlobalX()">X</button>
  </div>
</template>

<script>
import { EventBusGlobal } from '@/components/EventBusGlobal/EventBusGlobal'

export default {
  name: 'ChildA',
  methods: {
    eventBusGlobalO() {
      EventBusGlobal.$emit('global-event-bus', "O")
    },
    eventBusGlobalX() {
      EventBusGlobal.$emit('global-event-bus', "X")
    },
  }
}
</script>

<style>

</style>