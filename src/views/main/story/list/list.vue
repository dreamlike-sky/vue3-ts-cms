<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'list',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<template>
  <div class="list">
    <page-content :contentTableConfig="contentTableConfig" page-name="story" />
  </div>
</template>

<style scoped lang="less"></style>
