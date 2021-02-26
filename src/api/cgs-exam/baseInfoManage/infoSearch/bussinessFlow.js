import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看业务流水人详情
export const getFlowDetail = (params) => {
  return request({
    url: baseUrl+`/drive/getFlowDetail?id=${params}`,
    method: 'get',
   
  })
}

// 同步数据
export const syncFlow = (params) => {
    return request({
      url: baseUrl+`/drive/syncFlow?lsh=${params}`,
      method: 'get',
    })
  }

