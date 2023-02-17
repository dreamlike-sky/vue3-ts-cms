<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <!-- <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card> -->
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<style scoped lang="less">
.box-card {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}
.item {
  margin-bottom: 10px;
}
</style>
