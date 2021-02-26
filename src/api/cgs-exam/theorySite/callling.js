import request from '@/router/axios';
import { baseUrl } from '@/config/env';


//获得siteInfo的下拉框
export  const  getSiteInfoSelect = (params) => {
  return request({
    url: baseUrl + '/siteInfo/getSelect',
    method: 'get',
    params:params
  })
}

export  const  call = (siteCode) => {
  return request({
    url: baseUrl + '/theoryCall/call?siteCode='+siteCode,
    method: 'get',
  })
}

export  const  getCallInterval = (siteCode) => {
  return request({
    url: baseUrl + '/siteParam/get?paramCode=CALL_TIME_INTERVAL&siteCode='+siteCode,
    method: 'get',
  })
}



