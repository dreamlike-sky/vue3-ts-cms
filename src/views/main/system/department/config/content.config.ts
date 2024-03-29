export const contentTableConfig = {
  title: '部门列表',
  btnName: '新建部门',
  propList: [
    { prop: 'name', label: '部门名称', minWidth: '100' },
    { prop: 'leader', label: '部门领导', minWidth: '100' },
    { prop: 'parentId', label: '上级部门', minWidth: '120' },
    { prop: 'createAt', label: '创建时间', minWidth: '170', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '170', slotName: 'updateAt' },
    { label: '操作', minWidth: '100', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
