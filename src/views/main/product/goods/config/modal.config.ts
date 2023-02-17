import type { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价格',
      placeholder: '请输入原价格'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '新价格',
      placeholder: '请输入新价格'
    },
    {
      field: 'desc',
      type: 'input',
      label: '商品描述',
      placeholder: '请输入商品描述'
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
      field: 'imgUrl',
      type: 'input',
      label: '图片链接',
      placeholder: '请输入图片链接'
    },
    {
      field: 'inventoryCount',
      type: 'input',
      label: '库存',
      placeholder: '请输入库存'
    },
    {
      field: 'saleCount',
      type: 'input',
      label: '销量',
      placeholder: '请输入销量'
    },
    {
      field: 'favorCount',
      type: 'input',
      label: '收藏',
      placeholder: '请输入收藏数量'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入地址'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {
    padding: '0 50px 0 20px'
  }
}
