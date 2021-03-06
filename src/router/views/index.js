import Layout from '@/page/index/'
export default [{
    path: '/common',
    component: Layout,
    redirect: '/common/index',
    children: [{
        path: 'index',
        name: '首页',
        meta: {
          i18n: 'dashboard'
        },
        component: () => import('@/views/common/index/analyse')
      }
    ]
  }, {
    path: '/test',
    component: Layout,
    redirect: '/test/index',
    children: [{
        path: 'index',
        name: '测试页',
        meta: {
          i18n: 'test'
        },
        // component: () =>
        //     import( /* webpackChunkName: "views" */ '@/views/util/test')
      }
    ]
  }, {
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [{
      path: 'index',
      name: '个人信息',
      meta: {
        i18n: 'info'
      },
      // component: () =>
      //     import( /* webpackChunkName: "views" */ '@/views/user/info')
    }]
  }, {
    //这里开始为业务模块路由
    path: '/systemManage',
    component: Layout,
    redirect: '/systemManage',
    children: [{
      path: '/user',
      name: '用户管理',
      meta: {
        i18n: 'info'
      },
      // component: () =>
      //     import( /* webpackChunkName: "views" */ '@/views/systemManage/user/index')
    }]
  },
]