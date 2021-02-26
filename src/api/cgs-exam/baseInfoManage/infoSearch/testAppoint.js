import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看预约记录详情
export const getPreasignDetail = (param) => {
  return request({
    url: baseUrl+`/drive/getPreasignDetail?id=${param}`,
    method: 'get',
   
  })
}

// 同步数据
export const syncPreasign = (params) => {
    return request({
      url: baseUrl+`/drive/syncPreasign?lsh=${params}`,
      method: 'get',
    })
}

