<script>
import { defineComponent, reactive } from 'vue'
import View from '../chat/View.vue'

export default defineComponent({
  components: {
    View
  },
  setup() {
    const data = reactive({
      user: {},
      chat: [],
      input: '',
      displayName:''
    })
    return {
      data
    }
  },
})
</script>

<template>
  <div class="container">
    <View />
  </div>
</template>

<style scoped>
</style>