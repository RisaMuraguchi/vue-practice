<script setup>
import { defineProps } from "vue";
import Avatar from "vue-boring-avatars";

const props = defineProps({
  data: Object
})
</script>

<template>
  <div class="kaiwa line" ref="scrollWindow">
    <section v-for="chat in data.chat" :key="chat" class="item">
      <div>
        <div class="name">
          {{ chat.displayName }}
        </div>
        <div class="fukidasi left">
          <Avatar :name="chat.uid" variant="beam" /> {{ chat.message }}
        </div>
      </div>
    </section>
  </div>
</template>