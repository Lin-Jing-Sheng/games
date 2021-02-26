import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查询全部任务代码
export const queryTaskLogs = (params) => {
  return request({
    url: baseUrl+'/task/queryTaskLogs',
    method: 'post',
    data:params
  })
}

