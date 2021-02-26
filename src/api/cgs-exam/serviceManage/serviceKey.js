import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查询密钥列表
export const serviceKeyList = (param) => {
  return request({
    url: baseUrl+'/serviceKey/list',
    method: 'post',
    data:param
  })
}

// 获取用户列表
export const userInfoList = (param) => {
    return request({
        url: baseUrl+'/userInfo/list',
        method: 'post',
        data:param
    })
}

// 获取加密算法列表
export const algList = (param) => {
    return request({
        url: baseUrl+'/serviceKey/alg/list',
        method: 'post',
        data:param
    })
}

// 新增一条服务秘钥
export const add = (param) => {
    return request({
        url: baseUrl+'/serviceKey/add',
        method: 'post',
        data:param
    })
}

// 修改一条服务秘钥
export const update = (param) => {
    return request({
        url: baseUrl+'/serviceKey/update',
        method: 'post',
        data:param
    })
}

// 重置服务秘钥key
export const resetKey = (param) => {
    return request({
        url: baseUrl+'/serviceKey/resetKey',
        method: 'post',
        data:param
    })
}

// 批量启用服务秘钥key
export const setValid = (param) => {
    return request({
        url: baseUrl+'/serviceKey/setValid',
        method: 'post',
        data:param
    })
}

// 批量禁用服务秘钥key
export const setInvalid = (param) => {
    return request({
        url: baseUrl+'/serviceKey/setInvalid',
        method: 'post',
        data:param
    })
}

// 单条下载秘钥key
export const downLoadFile = (id) => {
    return request({
        url: baseUrl+'/serviceKey/download',
        method: 'get',
        headers: {
          'Content-Type': 'application/json; application/octet-stream'
        },
        responseType: 'blob',
        params: {
          id
        }
    })
}
