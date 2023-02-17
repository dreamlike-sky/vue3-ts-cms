<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import pageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import pageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import useStore from '@/stores'
import { menuMapLeafKeys } from '@/utils/map-menus'
import type { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  components: {
    pageSearch,
    pageContent,
    pageModal
  },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      // console.log(item)
      const leafKeys = menuMapLeafKeys(item.menuList)
      // nextTick 所指定的回调会在浏览器更新 DOM 完毕之后再执行
      nextTick(() => {
        // console.log(elTreeRef.value)
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const { pageModalRef, defaultInfo, handleNewData, handleEditData, isTitleName } = usePageModal(
      undefined,
      editCallback
    )

    const store = useStore()
    const menus = computed(() => store.$state.entireMenu)

    const otherInfo = ref({})
    // data1：传递给 data 属性的数组中该节点所对应的对象
    // data2：树目前的选中状态对象
    const handleCheckChange = (data1: any, data2: any) => {
      // console.log('data1:', data1)
      // console.log('data2:', data2)
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo,
      isTitleName,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :contentTableConfig="contentTableConfig"
      page-name="role"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    />
    <page-modal
      :modalConfig="modalConfig"
      page-name="role"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :title-name="isTitleName ? contentTableConfig.btnName : '修改'"
      :other-info="otherInfo"
    >
      <div class="menu-tree">
        <el-tree
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
          ref="elTreeRef"
        />
      </div>
    </page-modal>
  </div>
</template>

<style scoped lang="less">
.menu-tree {
  margin: 0 35px;
}
</style>
