<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/use-page-search'
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()
    const { defaultInfo, pageModalRef, handleNewData, handleEditData, isTitleName } = usePageModal()
    return {
      contentTableConfig,
      searchFormConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      isTitleName
    }
  }
})
</script>

<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      :contentTableConfig="contentTableConfig"
      page-name="goods"
      ref="pageContentRef"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :preview-teleported="true"
        />
      </template>
      <template #oldPrice="scope">
        {{ '¥' + scope.row.oldPrice }}
      </template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      page-name="goods"
      :title-name="isTitleName ? contentTableConfig.btnName : '修改'"
    />
  </div>
</template>

<style scoped lang="less"></style>
