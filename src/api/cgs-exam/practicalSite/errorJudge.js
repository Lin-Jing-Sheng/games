import request from '@/router/axios';
import { baseUrl } from '@/config/env';


export  const  addErrorJudge = (params) => {
  return request({
    url: baseUrl + `/misjudgment/add`,
    method: 'post',
    data:params
  })
}

export  const  get = (params) => {
  return request({
    url: baseUrl + `/misjudgment/get?id=${params}`,
    method: 'get',
  })
}
export  const  getTodayExam = (params) => {
  return request({
    url: baseUrl + `/practicalResult/getTodayExam`,
    method: 'get',
    params:params
  })
}

export  const  apply = (params) => {
  return request({
    url: baseUrl + `/misjudgment/apply`,
    method: 'post',
    data:params
  })
}
