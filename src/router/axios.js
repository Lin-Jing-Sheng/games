/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from 'axios'
import store from '@/store/';
import router from '@/router/router'
import { serialize } from '@/util/util'
import { getToken } from '@/util/auth'
import { Message } from 'element-ui'
import website from '@/config/website';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { Base64 } from 'js-base64';


if (website.isResponseIntercept) {
  axios.defaults.timeout = 10000;
  //返回其他状态吗
  axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500; // 默认的
  };
  //跨域请求，允许保存cookie
  axios.defaults.withCredentials = true;
  // NProgress Configuration
  NProgress.configure({
    showSpinner: false
  });



  //HTTPrequest拦截
  axios.interceptors.request.use(config => {
    //操作次数+1  用于控制token刷新
    var opTimes = store.state.common.opTimes;
    opTimes = opTimes+1;
    store.state.common.opTimes= opTimes;

    NProgress.start() // start progress bar
    const meta = (config.meta || {});
    const isToken = meta.isToken === false;
  //  config.headers['Authorization'] = `Basic ${Base64.encode(`${website.clientId}:${website.clientSecret}`)}`;
    if (getToken() && !isToken) {
      config.headers['accessToken'] = getToken() // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
    }
    //headers中配置serialize为true开启序列化
    if (config.method === 'post' && meta.isSerialize === true) {
      config.data = serialize(config.data);
    }
    return config
  }, error => {
    return Promise.reject(error)
  });


  //HTTPresponse拦截
  axios.interceptors.response.use(res => {
    NProgress.done();
    const status = res.status || 200;
    var statuCode = res.data.stateCode||200;
    const statusWhiteList = website.statusWhiteList || [];
    const message = res.data.retMsg || '系统异常请稍后再试';
    //如果在白名单里则自行catch逻辑处理

    if (statusWhiteList.includes(status)) {
      return Promise.reject(res);
    }

    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
      //如果是401则跳转到登录页面
      if (status === 401) {
        Message.error("请登录后再进行操作");
        console.log("status === 401");
        store.dispatch('FedLogOut').then(() =>{
          router.push({ path: '/login' })
        });
      }
      return Promise.reject(new Error(message))
    }
    else {
      if(statuCode == 200||statuCode == 102)
      {
        return res;
      }
      //系统正常但是内部权限没校验过
      else {
        //仅对权限进行异常处理
        if (statuCode == 401 || statuCode == 403|| statuCode == 102|| statuCode == 103) {
          store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }));
          return Promise.reject(new Error(message))
        }

        if(statuCode == 402){
          //权限不足  开发阶段先放过去
          store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }));
          return Promise.reject(new Error(message))
        }

        //500,101等系统校验不通过属于正常
        if(statuCode!=500||statuCode!=101){
          return Promise.reject(new Error(message))
        }
      }
    }
    return res;
  }, error => {
    NProgress.done();
    return Promise.reject(new Error(error));
  })
}
export default axios;
