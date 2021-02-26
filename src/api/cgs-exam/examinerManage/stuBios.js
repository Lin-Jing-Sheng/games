import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看考生详情
export const getStudentInfo = (params) => {
  return request({
    url: baseUrl + '/stuBiosignature/getStudentInfo',
    method: 'post',
    data: params
  })
}

export const inputFinger = (params) => {
  return request({
    url: baseUrl + '/stuBiosignature/inputFinger',
    method: 'post',
    data: params
  })
}


export const inputIris = (params) => {
  return request({
    url: baseUrl + '/stuBiosignature/inputIris',
    method: 'post',
    data: params
  })
}


