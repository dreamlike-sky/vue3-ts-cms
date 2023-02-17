<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

export default defineComponent({
  props: {
    language: {
      type: String,
      default: 'html'
    },
    code: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const highlightedCode = ref<string>('')

    watchEffect(() => {
      highlightedCode.value = hljs.highlight(props.code, { language: props.language }).value
    })

    return {
      highlightedCode
    }
  }
})
</script>
<template>
  <div class="project-tree">
    <pre class="bg">
      <code :class="'language'+language" v-html="highlightedCode" />
    </pre>
  </div>
</template>
<style scoped lang="less">
.bg {
  padding-left: 10px;
  margin: 0;
  text-align: left;
  background: #f0f0f0;
}
</style>
