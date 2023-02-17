import type { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'address',
      type: 'input',
      label: '商品地址',
      placeholder: '请输入商品地址'
    },
    {
      field: 'status',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { title: '下架', value: 0 },
        { title: '可用', value: 1 }
      ]
    },
    {
      field: 'createAt',
      type: 'datapicker',
      label: '创建时间',
      placeholder: '请选择创建时间范围',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'datetimerange'
      }
    }
  ],
  labelWidth: '70px',
  itemStyle: { padding: '10px 50px 10px 20px' },
  colLayout: { span: 8 }
}
