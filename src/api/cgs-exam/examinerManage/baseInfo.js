import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看考生详情
export const getStuInfoDetail = (params) => {
  return request({
    url: baseUrl+`/drvSchool/getStuInfoDetail?id=${params}`,
    method: 'get',
   
  })
}

//同步数据
export const syncStuInfoByFlowCode = (params) => {
  return request({
    url: baseUrl+`/drvSchool/syncStuInfoByFlowCode?flowcode=${params}`,
    method: 'get',
   
  })
}
