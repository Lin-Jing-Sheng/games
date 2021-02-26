import request from '@/router/axios';
import {baseUrl} from '@/config/env';


export const view = (id) => {
  return request({
    url: baseUrl + '/warnInfo/view?id=' + id,
    method: 'get',
  })
}

export const sure = (params) => {
  return request({
    url: baseUrl + '/warnInfo/sure',
    method: 'post',
    data:params
  })
}


