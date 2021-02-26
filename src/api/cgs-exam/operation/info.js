import request from '@/router/axios';
import { baseUrl } from '@/config/env';


export  const  add = (params) => {
  return request({
    url: baseUrl + '/operationInfo/add',
    method: 'post',
    data:params
  })
}

export  const  info = (id) => {
  return request({
    url: baseUrl + '/operationInfo/info?id='+id,
    method: 'get'
  })
}

export  const  pass = (params) => {
  return request({
    url: baseUrl + '/operationInfo/pass',
    method: 'post',
    data:params
  })
}

export  const  noPass = (params) => {
  return request({
    url: baseUrl + '/operationInfo/noPass',
    method: 'post',
    data:params
  })
}

export  const  passOne = (params) => {
  return request({
    url: baseUrl + '/operationInfo/passOne',
    method: 'post',
    data:params
  })
}

export  const  nopassOne = (params) => {
  return request({
    url: baseUrl + '/operationInfo/nopassOne',
    method: 'post',
    data:params
  })
}


export  const  update = (params) => {
  return request({
    url: baseUrl + '/operationInfo/update',
    method: 'post',
    data:params
  })
}


export  const  print = (id) => {
  return request({
    url: baseUrl + '/operationInfo/print?id='+id,
    method: 'post'
  })
}



export  const  zip = (params) => {
  return request({
    url: baseUrl + '/operationInfo/zip',
    method: 'post',
    data:params
  })
}