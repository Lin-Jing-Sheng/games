import request from '@/router/axios';
import {baseUrl} from '@/config/env';


export const view = (id) => {
  return request({
    url: baseUrl + '/warnObject/view?id=' + id,
    method: 'get',
  })
}


export const add = (params) => {
  return request({
    url: baseUrl + '/warnObject/add ',
    method: 'post',
    data: params
  })
}

export const edit = (params) => {
  return request({
    url: baseUrl + '/warnObject/edit',
    method: 'post',
    data: params
  })
}

export  const  enable = (params) => {
  return request({
    url: baseUrl + '/warnObject/enable',
    method: 'post',
    data:params
  })
}




export  const  disable = (params) => {
  return request({
    url: baseUrl + '/warnObject/disable',
    method: 'post',
    data:params
  })
}
