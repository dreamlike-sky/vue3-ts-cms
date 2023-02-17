<script lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
// import useStore from '@/stores'
export default defineComponent({
  setup() {
    // const store = useStore()
    return {
      // store
    }
  }
})
</script>

<template>
  <div class="app">
    <!-- <h1>{{ store.name }}</h1> -->
    <RouterView />
  </div>
</template>

<style lang="less" scoped>
.app {
  height: 100%;
}
</style>
