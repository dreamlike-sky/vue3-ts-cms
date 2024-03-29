export const contentTableConfig = {
  title: '用户列表',
  btnName: '新建用户',
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号码', minWidth: '120' },
    { prop: 'enable', label: '状态', minWidth: '75', slotName: 'status' },
    { prop: 'createAt', label: '创建时间', minWidth: '170', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '170', slotName: 'updateAt' },
    { label: '操作', minWidth: '100', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
