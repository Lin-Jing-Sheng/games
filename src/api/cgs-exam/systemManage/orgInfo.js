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
    url: baseUrl + '/orgInfo/add',
    method: 'post',
    data:params
  })
}


export  const  view = (id) => {
  return request({
    url: baseUrl + '/orgInfo/get?id='+id,
    method: 'get',
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/orgInfo/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (ids) => {
  return request({
    url: baseUrl + '/orgInfo/enable?ids='+ids,
    method: 'post',
  })
}




export  const  disable = (ids) => {
  return request({
    url: baseUrl + '/orgInfo/disable?ids='+ids,
    method: 'get',
  })
}

