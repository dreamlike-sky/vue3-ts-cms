import type { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色权限',
      placeholder: '请输入角色权限'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {
    padding: '0 50px 0 20px'
  }
}
