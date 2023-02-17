export const contentTableConfig = {
  title: '角色列表',
  btnName: '新建角色',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '角色权限', minWidth: '100' },
    { prop: 'createAt', label: '创建时间', minWidth: '170', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '170', slotName: 'updateAt' },
    { label: '操作', minWidth: '100', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
