import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查询全部任务代码
export const queryTaskLogs = (params) => {
  return request({
    url: baseUrl+'/task/addTaskInfo',
    method: 'post',
    data:params
  })
}

