import request from '@/router/axios';
import { baseUrl } from '@/config/env';


export  const  add = (params) => {
  return request({
    url: baseUrl + '/operationTask/add',
    method: 'post',
    data:params
  })
}


export  const  list = (params) => {
  return request({
    url: baseUrl + '/operationTask/list',
    method: 'post',
    data:params
  })
}


export  const  info = (id) => {
  return request({
    url: baseUrl + '/operationTask/info?id='+id,
    method: 'get'
  })
}


export  const  submitTask = (params) => {
  return request({
    url: baseUrl + '/operationTask/submitTask',
    method: 'post',
    data:params
  })
}

export  const  print = (id) => {
  return request({
    url: baseUrl + '/operationTask/print?id='+id,
    method: 'post'
  })
}


export  const  zip = (params) => {
  return request({
    url: baseUrl + '/operationTask/zip',
    method: 'post',
    data:params
  })
}