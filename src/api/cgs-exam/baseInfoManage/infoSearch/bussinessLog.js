import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看业务日志人详情
export const getLogDetail = (params) => {
  return request({
    url: baseUrl+`/drive/getLogDetail?id=${params}`,
    method: 'get',
   
  })
}

// 同步数据
export const syncLog = (params) => {
    return request({
      url: baseUrl+`/drive/syncLog?lsh=${params}`,
      method: 'get',
    })
}

