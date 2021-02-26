import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看打证记录详情
export const getExamGroupDetail = (id) => {
  return request({
    url: baseUrl+`/drive/getExamGroupDetail?id=${id}`,
    method: 'get',
   
  })
}

// 同步数据
export const syncExamGroup = (params) => {
    return request({
      url: baseUrl+`/drive/syncExamGroup?ksrq=${params}`,
      method: 'get',
    })
}

