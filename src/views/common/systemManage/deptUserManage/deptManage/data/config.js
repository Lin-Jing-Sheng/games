export default {
  activeName: 'first',

  // 状态
  deptState: [
    {
      value: '1',
      label: '正常'
    },{
      value: '0',
      label: '无效'
    }
  ],
  // 表格的配置
  colSet: {
    deptCode: {
      isShow: true,
      label: '部门代码'
    },
    deptName: {
      isShow: true,
      label: '部门名称'
    },
    parentDept: {
      isShow: true,
      label: '父部门'
    },
    deptType: {
      isShow: true,
      label: '部门类别'
    },
    state: {
      isShow: true,
      label: '状态'
    },
    remark: {
      isShow: true,
      label: '备注'
    },
    sortId: {
      isShow: true,
      label: '排序'
    }
  },
  // 验证规则
  rules: {
    deptName: [
      { required: true, message: "请输入部门名称", trigger: "blur" }
    ],
    deptType: [
      { required: true, message: "请选择部门类型", trigger: "blur" }
    ],
    state: [
      { required: true, message: "请选择状态", trigger: "blur" }
    ]
  } 
}
