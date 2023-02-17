export const contentTableConfig = {
  title: '菜单列表',
  btnName: '新建菜单',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '60' },
    { prop: 'url', label: '链接', minWidth: '100' },
    { prop: 'icon', label: '图标', minWidth: '100' },
    { prop: 'sort', label: '排序', minWidth: '60' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    { prop: 'createAt', label: '创建时间', minWidth: '170', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '170', slotName: 'updateAt' },
    { label: '操作', minWidth: '100', slotName: 'handler' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
