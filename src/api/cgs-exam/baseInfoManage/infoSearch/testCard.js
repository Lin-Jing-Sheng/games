import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看驾驶证人详情
export const getExamCardDetail = (param) => {
  return request({
    url: baseUrl+`/drive/getExamCardDetail?id=${param}`,
    method: 'get',
  })
}

// 同步数据
export const syncExamCard = (params) => {
    return request({
      url: baseUrl+`/drive/syncExamCard?sfzmhm=${params}`,
      method: 'get',
    })
}

