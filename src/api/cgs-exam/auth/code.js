import request from '@/router/axios';
import { baseUrl } from '@/config/env';



//获取验证码
export const getCode = (account,type) => {
  return request({
    url: baseUrl + '/authCode/getCode',
    method: 'post',
    data: {
      account,
      type
    }
  })
}

//刷新验证码
export const refreshCode = (account) => {
  return request({
    url: baseUrl + '/authCode/refreshCode',
    method: 'post',
    data: {
      account
    }
  })
}

//校验验证码
export const checkCode = (params) => {
  return request({
    url: baseUrl + '/authCode/checkCode',
    method: 'post',
    data:params
  })
}



