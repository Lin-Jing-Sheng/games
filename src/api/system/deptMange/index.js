import request from '@/router/axios';
import { baseUrl } from '@/config/env';

// 获取部门列表
export const fetchDpetList = (params) => {
  return request({
    url: baseUrl + '/orgInfo/getTreeData',
    method: 'get',
    params:params
  })
}

// 根据id获取部门详情
export const fetchDeptDetail = (id) => {
  return request({
    url: baseUrl + '/deptInfo/get?id='+id,
    method: 'get',
  })
}

// 获取部门数据
export const fetchDeptData = (params) => {
  // return request({
  //   url: baseUrl + '/deptInfo/get',
  //   method: 'get',
  //   params: params
  // })
  return request({
    url: '/deptData.json',
  })
}

// 新增保存
export const addSave = (params) => {
  return request({
    url: baseUrl + '/deptInfo/add',
    method: 'post',
    data:params
  })
}

// 修改保存
export const updateSave = (params) => {
  return request({
    url: baseUrl + '/deptInfo/add',
    method: 'post',
    data:params
  })
}

