export const jsonData = {
  queryParm: {
    
  },
  group1: [{
    value: "1",
    label: "市公安局",
    children: [{
      value: "2",
      label: "交警"
    }, {
      value: "3",
      label: "车管所",
      children: [{value: "6",
      label: "考试科"}]
    }]
  }], 
  showCol: {
    deptName: {
      value: true,
      label: '部门名称'
    },
    orgName: {
      value: true,
      label: '所属机构名称'
    },
    state: {
      value: true,
      label: '部门状态'
    },
    remark: {
      value: true,
      label: '备注信息'
    },
    inputTime: {
      value: true,
      label: '创建时间'
    },
    updateTime: {
      value: true,
      label: '更新时间'
    }
  },
  activeName: 'first',
  dialogFrom: {
  },
  rules: {
    orgId: [
      { required: true, message: "请选择所属机构", trigger: "blur" }
    ],
    deptName: [
      { required: true, message: "请输入部门名称", trigger: "blur" }
    ]  
  } 
}
