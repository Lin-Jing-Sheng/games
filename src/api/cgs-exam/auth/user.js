import request from '@/router/axios';
import {baseUrl} from '@/config/env';
export const loginByUsername = (userCode, password,verifyCode) => {
  return request({
    //请求后端的url
    url: baseUrl +'/login/login',
    method: 'post',
    data: {
      userCode,
      password,verifyCode
    }
  })
}


export const logout = () => request({
  url: baseUrl + 'login/logOut ',
  method: 'get'
})


export const refreshToken = (refreshToken) => request({
  url: baseUrl + '/login/getToken?refreshToken='+refreshToken,
  method: 'get'
})

export const changePwd = (userCode,password,newPassword) => request({
  url: baseUrl + 'userInfo/changePwd',
  method: 'post',
  data:{
    userCode,
    password,
    newPassword
  }
})

export const findBackPwd = (params) => request({
  url: baseUrl + `/login/findBackPwd?userCode=${params.userCode}&phone=${params.phone}`,
  method: 'get',
})


export const getMenu = () => request({
  url: baseUrl+'/login/getMenu',
  method: 'get'
});
