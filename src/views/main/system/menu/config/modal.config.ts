import type { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '菜单名称',
      placeholder: '请输入菜单名称'
    },
    {
      field: 'type',
      type: 'input',
      label: '类型',
      placeholder: '请输入类型'
    },
    {
      field: 'url',
      type: 'input',
      label: '链接',
      placeholder: '请输入链接'
    },
    {
      field: 'sort',
      type: 'input',
      label: '排序',
      placeholder: '请输入排序'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '上级菜单',
      placeholder: '请选择上级菜单',
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {
    padding: '0 50px 0 20px'
  }
}
