import request from '@/router/axios';
import { baseUrl } from '@/config/env';


//获得appinfo的下拉框
export  const  getAppInfoSelect = (params) => {
  return request({
    url: baseUrl + '/appInfo/getSelect?state=0',
    method: 'get',
    params:params
  })
}

//获得prvgInfo的下拉框
export  const  getPrvgInfoSelect = (params) => {
  return request({
    url: baseUrl + '/prvgInfo/getTreeData',
    method: 'get',
    params:params
  })
}

export  const  add = (params) => {
  return request({
    url: baseUrl + '/prvgInfo/add',
    method: 'post',
    data:params
  })
}


export  const  view = (id) => {
  return request({
    url: baseUrl + '/prvgInfo/get?id='+id,
    method: 'get',
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/prvgInfo/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (ids) => {
  return request({
    url: baseUrl + '/prvgInfo/enable?ids='+ids,
    method: 'post',
  })
}




export  const  disable = (ids) => {
  return request({
    url: baseUrl + '/prvgInfo/disable?ids='+ids,
    method: 'get',
  })
}

