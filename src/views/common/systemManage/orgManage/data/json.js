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
      label: "车管所"
    }]
  }],
 
  showCol: {
    orgCode: {
      value: true,
      label: '机构代码'
    },
    orgName: {
      value: true,
      label: '机构名称'
    },
    orgShortName: {
      value: true,
      label: '简称'
    },
    orgParentName: {
      value: true,
      label: '上级机构名称'
    },
    state: {
      value: true,
      label: '机构状态'
    },
    remark: {
      value: true,
      label: '备注信息'
    },
    orderNum: {
      value: true,
      label: '排序号'
    }
  },
  activeName: 'first',
  dialogFrom: {
    orgParent: '',
    orgCode: '',
    orgName: '',
    orgShortName: '',
    remark: ''
  },
  rules: {
    orgParent: [
      { required: true, message: "请选择上级机构", trigger: "blur" }
    ],
    orgCode: [
      { required: true, message: "请输入机构编号", trigger: "blur" }
    ],
    orgName: [
      { required: true, message: "请输入机构名称", trigger: "blur" }
    ],
    orgShortName: [
      { required: true, message: "请输入机构简称", trigger: "blur" }
    ],
    orderNum:[
      { required: true, message: "请输入排序号", trigger: "blur" }
    ]
  } 

}
