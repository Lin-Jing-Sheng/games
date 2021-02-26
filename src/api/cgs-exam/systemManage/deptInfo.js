import request from '@/router/axios';
import { baseUrl } from '@/config/env';


//获得orgInfo的下拉框
export  const  getOrgInfoSelect = (params) => {
  return request({
    url: baseUrl + '/orgInfo/getTreeData',
    method: 'get',
    params:params
  })
}

export  const  add = (params) => {
  return request({
    url: baseUrl + '/deptInfo/add',
    method: 'post',
    data:params
  })
}


export  const  view = (id) => {
  return request({
    url: baseUrl + '/deptInfo/get?id='+id,
    method: 'get',
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/deptInfo/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (ids) => {
  return request({
    url: baseUrl + '/deptInfo/enable?ids='+ids,
    method: 'post',
  })
}




export  const  disable = (ids) => {
  return request({
    url: baseUrl + '/deptInfo/disable?ids='+ids,
    method: 'get',
  })
}

