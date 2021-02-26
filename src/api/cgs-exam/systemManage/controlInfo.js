import request from '@/router/axios';
import { baseUrl } from '@/config/env';



export  const  add = (params) => {
  return request({
    url: baseUrl + '/controlInfo/add',
    method: 'post',
    data:params
  })
}


export  const  view = (id) => {
  return request({
    url: baseUrl + '/controlInfo/get?id='+id,
    method: 'get'
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/controlInfo/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (params) => {
  return request({
    url: baseUrl + '/controlInfo/enable',
    method: 'post',
    data:params
  })
}




export  const  disable = (params) => {
  return request({
    url: baseUrl + '/controlInfo/disable',
    method: 'post',
    data:params
  })
}

export  const  getControlOfApp = (appId) => {
  return request({
    url: baseUrl + '/controlInfo/getControlOfApp',
    method: 'post',
    data:{appId}
  })
}