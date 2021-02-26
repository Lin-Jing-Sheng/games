import request from '@/router/axios';
import {baseUrl} from '@/config/env';


export const view = (id) => {
  return request({
    url: baseUrl + '/theorySign/view?id=' + id,
    method: 'get',
  })
}

export const manSign = (flowCode) => {
  return request({
    url: baseUrl + '/theorySign/manSign',
    method: 'post',
    data:{flowCode}
  })
}

export const cancelSign = (params) => {
  return request({
    url: baseUrl + '/theorySign/cancelSign',
    method: 'post',
    data:params
  })
}

export const getSignInfo = (params) => {
  return request({
    url: baseUrl + '/theorySign/getSignInfo',
    method: 'post',
    data:params
  })
}

export const checkFace = (params) => {
  return request({
    url: baseUrl + '/theorySign/checkFace',
    method: 'post',
    data:params
  })
}


export const dealFinger = (params) => {
  return request({
    url: baseUrl + '/theorySign/dealFinger',
    method: 'post',
    data:params
  })
}