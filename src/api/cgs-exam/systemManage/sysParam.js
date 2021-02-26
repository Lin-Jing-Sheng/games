import request from '@/router/axios';
import { baseUrl } from '@/config/env';

export  const  getAppInfoSelect = (params) => {
  return request({
    url: baseUrl + '/appInfo/getSelect?state=0',
    method: 'get',
    params:params
  })
}

export  const  getSysParamSelect = (params) => {
  return request({
    url: baseUrl + '/sysParam/getSelect',
    method: 'get',
    params:params
  })
}

export  const  add = (params) => {
  return request({
    url: baseUrl + '/sysParam/add',
    method: 'post',
    data:params
  })
}


export  const  view = (id) => {
  return request({
    url: baseUrl + '/sysParam/get?id='+id,
    method: 'get',
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/sysParam/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (ids) => {
  return request({
    url: baseUrl + '/sysParam/enable?ids='+ids,
    method: 'post',
  })
}




export  const  disable = (ids) => {
  return request({
    url: baseUrl + '/sysParam/disable?ids='+ids,
    method: 'get',
  })
}

