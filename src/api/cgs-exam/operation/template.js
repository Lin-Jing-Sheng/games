import request from '@/router/axios';
import { baseUrl } from '@/config/env';


export  const  add = (params) => {
  return request({
    url: baseUrl + '/operationTemp/add',
    method: 'post',
    data:params
  })
}

export  const  getSelect = (state) => {
  return request({
    url: baseUrl + '/operationTemp/getSelect?state='+state,
    method: 'get'
  })
}


export  const  info = (id) => {
  return request({
    url: baseUrl + '/operationTemp/info?id='+id,
    method: 'get'
  })
}


export  const  update = (params) => {
  return request({
    url: baseUrl + '/operationTemp/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (params) => {
  return request({
    url: baseUrl + '/operationTemp/enable',
    method: 'post',
    data:params
  })
}




export  const  disable = (params) => {
  return request({
    url: baseUrl + '/operationTemp/disable',
    method: 'post',
    data:params
  })
}