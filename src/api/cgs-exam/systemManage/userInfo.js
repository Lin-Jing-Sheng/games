import request from '@/router/axios';
import { baseUrl } from '@/config/env';


//获得用户的操作轨迹
export  const  listUserAudit = (id) => {
  return request({
    url: baseUrl + '/auditInfo/listUserAudit?userId='+id,
    method: 'get',
  })
}

export  const  saveFile = (params) => {
  return request({
    url: baseUrl + '/userInfo/saveFile',
    method: 'post',
    data:params,
    headers:{"Content-Type":"multipart/form-data"}
  })
}

//获得orgInfo的下拉框
export  const  getOrgInfoSelect = (params) => {
  return request({
    url: baseUrl + '/orgInfo/getTreeData',
    method: 'get',
    params:params
  })
}

//获得orgInfo的下拉框
export  const  getDeptSelect = (params) => {
  return request({
    url: baseUrl + '/deptInfo/getSelect',
    method: 'get',
    params:params
  })
}

//获得orgInfo的下拉框
export  const  getUserSelect = (deptId) => {
  return request({
    url: baseUrl + '/userInfo/getUserSelect?deptId='+deptId,
    method: 'get',
  })
}

export  const  add = (params) => {
  return request({
    url: baseUrl + '/userInfo/add',
    method: 'post',
    data:params
  })
}


export  const  view = (id) => {
  return request({
    url: baseUrl + '/userInfo/get?id='+id,
    method: 'get',
  })
}

export  const  initPwd = (id) => {
  return request({
    url: baseUrl + '/userInfo/initPwd?id='+id,
    method: 'get',
  })
}

export  const  initUser = (id) => {
  return request({
    url: baseUrl + '/userInfo/initUser?id='+id,
    method: 'get',
  })
}


export  const  update = (params) => {
  return request({
    url: baseUrl + '/userInfo/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (ids) => {
  return request({
    url: baseUrl + '/userInfo/enable?ids='+ids,
    method: 'post',
  })
}




export  const  disable = (ids) => {
  return request({
    url: baseUrl + '/userInfo/disable?ids='+ids,
    method: 'get',
  })
}
//获得orgInfo的下拉框
export  const  getUserInfoSelect = (state,deptId) => {
  return request({
   // url: baseUrl + '/userInfo/getSelect?state='+state+"&deptId="+deptId,
    url: baseUrl + '/userInfo/getSelect',
    method: 'get',
    params:{state,deptId}
  })
}
