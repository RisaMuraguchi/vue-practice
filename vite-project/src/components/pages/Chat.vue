<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
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
    チャット用ページ
  </div>
</template>

<style scoped>
</style>