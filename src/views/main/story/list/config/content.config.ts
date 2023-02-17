export const contentTableConfig = {
  title: '故事列表',
  btnName: '新建故事',
  propList: [
    { prop: 'name', label: '故事标题', minWidth: '100' },
    { prop: 'content', label: '我的故事', minWidth: '500' },
    { prop: 'createAt', label: '创建时间', minWidth: '170', slotName: 'createAt' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
