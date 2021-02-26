import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看教练员详情
export const getCoachDetail = (params) => {
  return request({
    url: baseUrl+`/drvSchool/getCoachDetail?id=${params}`,
    method: 'get',
   
  })
}
