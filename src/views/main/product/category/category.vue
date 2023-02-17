<script lang="ts">
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/use-page-search'
import pageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'category',
  components: {
    pageSearch,
    pageContent,
    pageModal
  },
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()
    const { defaultInfo, pageModalRef, handleNewData, handleEditData, isTitleName } = usePageModal()
    return {
      searchFormConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      contentTableConfig,
      modalConfig,
      defaultInfo,
      pageModalRef,
      handleNewData,
      handleEditData,
      isTitleName
    }
  }
})
</script>

<template>
  <div class="category">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      page-name="category"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    />
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      page-name="category"
      :title-name="isTitleName ? contentTableConfig.btnName : '修改'"
    />
  </div>
</template>

<style scoped lang="less"></style>
