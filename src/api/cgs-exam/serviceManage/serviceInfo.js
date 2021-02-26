import request from '@/router/axios';
import { baseUrl } from '@/config/env';



export  const  getServiceInfos = () => {
  return request({
    url: baseUrl + '/serviceInfo/serviceInfos',
    method: 'get'
  })
}



export  const  add = (params) => {
  return request({
    url: baseUrl + '/serviceInfo/add',
    method: 'post',
    data:params
  })
}


export  const  get = (id) => {
  return request({
    url: baseUrl + '/serviceInfo/get?id='+id,
    method: 'get'
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/serviceInfo/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (params) => {
  return request({
    url: baseUrl + '/serviceInfo/enable',
    method: 'post',
    data:params
  })
}




export  const  disable = (params) => {
  return request({
    url: baseUrl + '/serviceInfo/disable',
    method: 'post',
    data:params
  })
}