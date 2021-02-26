import request from '@/router/axios';
import {baseUrl} from '@/config/env';


export const print = (id) => {
  return request({
    url: baseUrl + '/theoryResult/print?id=' + id,
    method: 'get',
  })
}


export const view = (id) => {
  return request({
    url: baseUrl + '/theoryResult/view?id=' + id,
    method: 'get',
  })
}

export const get = (params) => {
  return request({
    url: baseUrl + '/theoryResult/get',
    method: 'post',
    data:params
  })
}



export const cancel = (params) => {
  return request({
    url: baseUrl + '/theoryResult/cancelResult',
    method: 'post',
    data:params
  })
}

