import request from '@/router/axios';
import { baseUrl } from '@/config/env';

export  const  view = (id) => {
  return request({
    url: baseUrl + '/checkInfo/view?id='+id,
    method: 'get'
  })
}

export  const  pass = (param) => {
  return request({
    url: baseUrl + '/checkInfo/pass',
    method: 'post',
    data:param
  })
}


export  const  nopass = (param) => {
  return request({
    url: baseUrl + '/checkInfo/nopass',
    method: 'post',
    data:param
  })
}


