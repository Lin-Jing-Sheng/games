import request from '@/router/axios';
import { baseUrl } from '@/config/env';

export  const  examAnalyze = (params) => {
  return request({
    url: baseUrl + '/examAnalyze/analyze',
    method: 'post',
    data:params
  })
}




