/**
 * 全局配置文件
 * 首页的菜单选项需要去 @/store/modules/common.js中修改
 */


export default {
  title: "深圳市机动车驾驶人考试业务监管系统",
  indexTitle: '考试业务管理系统',
  clientId: 'EXAM', // 客户端id
  clientSecret: 'exam_secret', // 客户端密钥
  logo: "EXAM",
  key: 'Exam', //配置主键,目前用于存储123as
  lockPage: '/lock',
  tokenTime: 600, //刷新token时间 秒
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [],
  //配置首页不可关闭
  isFirstPage: true,
  //是否开启路由拦截
  // isRouterIntercept: true,
  //是否开启response&request拦截
  isResponseIntercept: true,
  fistPage: {
    label: "首页",
    value: "/common/index",
    params: {},
    query: {},
    meta: {
      i18n: 'dashboard'
    },
    group: [],
    close: true
  },
  //配置菜单的属性
  menu: {
    iconDefault: 'iconfont icon-caidan',
    props: {
      label: 'name',
      path: 'path',
      icon: 'source',
      children: 'children'
    }
  }
}
