<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/use-page-search'
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import useStore from '@/stores'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'department',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()

    const store = useStore()
    const modalConfigRef = computed(() => {
      const parentIdItem = modalConfig.formItems?.find((item) => item.field === 'parentId')
      parentIdItem!.options = store.$state.entireDepartment.map((item) => {
        return {
          title: item.name,
          value: item.id
        }
      })
      return modalConfig
    })
    const { pageModalRef, defaultInfo, handleNewData, handleEditData, isTitleName } = usePageModal()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      pageModalRef,
      modalConfigRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      isTitleName
    }
  }
})
</script>

<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      :contentTableConfig="contentTableConfig"
      page-name="department"
      ref="pageContentRef"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    />
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      page-name="department"
      :title-name="isTitleName ? contentTableConfig.btnName : '修改'"
    />
  </div>
</template>

<style scoped lang="less"></style>
