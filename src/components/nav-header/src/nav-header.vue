<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import userInfo from '@/components/nav-header/src/user-info.vue'
import headerBreadcrumb from '@/base-ui/breadcrumb'
import loginStore from '@/stores/login/login'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    userInfo,
    headerBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑的数据：[{name: , path: }]
    const store = loginStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.$state.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>
<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="isFold ? 'Expand' : 'Fold'"></component>
    </el-icon>
    <div class="content">
      <header-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>
<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 25px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 15px;
  }
}
</style>
