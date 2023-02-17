<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { IBreadcrumb } from '../types'
export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="header-breadcrumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <!--  :to="{ path: item.path }" 没有跳转可以不要 -->
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="less"></style>
