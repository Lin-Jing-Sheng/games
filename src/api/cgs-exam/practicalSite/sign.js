import request from '@/router/axios';
import {baseUrl} from '@/config/env';


export const view = (id) => {
  return request({
    url: baseUrl + '/practicalSign/view?id=' + id,
    method: 'get',
  })
}

export const manSign = (flowCode) => {
  return request({
    url: baseUrl + '/practicalSign/manSign',
    method: 'post',
    data:{flowCode}
  })
}

export const cancelSign = (params) => {
  return request({
    url: baseUrl + '/practicalSign/cancelSign',
    method: 'post',
    data:params
  })
}

export const getSignInfo = (params) => {
  return request({
    url: baseUrl + '/practicalSign/getSignInfo',
    method: 'post',
    data:params
  })
}

export const checkFace = (params) => {
  return request({
    url: baseUrl + '/practicalSign/checkFace',
    method: 'post',
    data:params
  })
}


export const dealFinger = (params) => {
  return request({
    url: baseUrl + '/practicalSign/dealFinger',
    method: 'post',
    data:params
  })
}
