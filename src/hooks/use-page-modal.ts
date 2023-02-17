import { ref } from 'vue'
import type pageModal from '@/components/page-modal'

type CallbackType = (item?: any) => void

export function usePageModal(newCallback?: CallbackType, editCallback?: CallbackType) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})
  const isTitleName = ref(false)
  const handleNewData = () => {
    defaultInfo.value = {}
    isTitleName.value = true
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // JavaScript语法：逻辑与，当前面的值有值的时候才会调用后面的函数
    newCallback && newCallback()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    isTitleName.value = false
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // console.log(item)
    editCallback && editCallback(item)
  }
  return {
    pageModalRef,
    defaultInfo,
    handleNewData,
    handleEditData,
    isTitleName
  }
}
