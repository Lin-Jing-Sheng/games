import request from '@/router/axios';
import {baseUrl} from '@/config/env';


export const print = (id) => {
  return request({
    url: baseUrl + '/practicalResult/print?id=' + id,
    method: 'get',
  })
}



export const view = (id) => {
  return request({
    url: baseUrl + '/practicalResult/view?id=' + id,
    method: 'get',
  })
}

export const get = (params) => {
  return request({
    url: baseUrl + '/practicalResult/get',
    method: 'post',
    data:params
  })
}



export const cancel = (params) => {
  return request({
    url: baseUrl + '/practicalResult/cancelResult',
    method: 'post',
    data:params
  })
}



