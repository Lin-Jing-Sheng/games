import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看体检详情
export const getHosInfoDetail = (params) => {
  return request({
    url: baseUrl+`/hos/getHosInfoDetail?id=${params}`,
    method: 'get',
   
  })
}

// 同步数据
export const syncHosInfo = (params) => {
    return request({
      url: baseUrl+`hos/syncHosInfo?sfzmhm=${params}`,
      method: 'get',
    })
  }

