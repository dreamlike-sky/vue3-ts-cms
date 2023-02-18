<script lang="ts">
import { defineComponent, ref } from 'vue'
import Editor from '@/base-ui/editor'

export default defineComponent({
  name: 'chat',
  components: {
    Editor
  },
  setup() {
    const htmlString = ref<string>('')
    return {
      htmlString
    }
  }
})
</script>

<template>
  <div class="chat">
    <editor v-modle:value="htmlString" />
  </div>
</template>

<style scoped lang="less"></style>
