import type { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '类别名称',
      placeholder: '请输入类别名称'
    },
    {
      field: 'createAt',
      type: 'datapicker',
      label: '创建时间',
      placeholder: '请选择创建时间范围',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '70px',
  itemStyle: { padding: '10px 50px 10px 20px' },
  colLayout: { span: 8 }
}
