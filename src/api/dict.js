import request from '@/router/axios';
import { baseUrl } from '@/config/env';


//根据字典表类型查询所有字典值
export  const  getDictByType = (typeCode) => {
  return request({
    url: baseUrl + '/dictInfo/getDictByType?typeCode='+typeCode,
    method: 'get'
  })
}

//根据字典表类型查询所有字典值 并转换为下拉框
export  const  getDictSelectByType = (typeCode) => {
    return request({
      url: baseUrl + '/dictInfo/getDictSelectByType?typeCode='+typeCode,
      method: 'get'
    })
  }

//根据字典表类型和字典code查询字典值
//param1: typeCode   类型code
//param2: dictValue   字典值
export  const  getDictNameByValue = (params) => {
    return request({
      url: baseUrl + '/dictInfo/getDictNameByValue',
      data: params
    })
  }
