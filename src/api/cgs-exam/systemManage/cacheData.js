import request from '@/router/axios';
import { baseUrl } from '@/config/env';


//同步所有用户权限
export  const  syncUserAuth = () => {
  return request({
    url: baseUrl + '/cache/syncUserAuth',
    method: 'get',
  })
}

//同步所有系统参数
export  const  syncSysParam = () => {
  return request({
    url: baseUrl + '/cache/syncSysParam',
    method: 'get',
  })
}

//同步所有字典数据
export  const  syncDictInfo = () => {
  return request({
    url: baseUrl + '/cache/syncDictInfo',
    method: 'get',
  })
}

//同步所有考场参数数据
export  const  syncSiteParam = () => {
  return request({
    url: baseUrl + '/cache/syncSiteParam',
    method: 'get',
  })
}


//同步所有系统信息缓存
export  const  syncAppInfo = () => {
  return request({
    url: baseUrl + '/cache/syncAppInfo',
    method: 'get',
  })
}


