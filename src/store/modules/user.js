import {setToken,removeToken} from '@/util/auth'
import {setStore, getStore} from '@/util/store'
import {isURL,validatenull} from '@/util/validate'
import {deepClone} from '@/util/util'
import webiste from '@/config/website'
import {refreshToken,loginByUsername,logout,getMenu} from '@/api/cgs-exam/auth/user'
import routerData from '@/router/routes-data'
var sha256 = require('js-sha256')

function addPath(ele, first) {
  const menu = webiste.menu;
  const propsConfig = menu.props;
  const propsDefault = {
    label: propsConfig.label || 'name',
    path: propsConfig.path || 'path',
    icon: propsConfig.icon || 'icon',
    children: propsConfig.children || 'children'
  }
  const icon = ele[propsDefault.icon];
  ele[propsDefault.icon] = validatenull(icon) ? menu.iconDefault : icon;
  const isChild = ele[propsDefault.children] && ele[propsDefault.children].length !== 0;
  if (!isChild) ele[propsDefault.children] = [];
  if (!isChild && first && !isURL(ele[propsDefault.path])) {
    ele[propsDefault.path] = ele[propsDefault.path] + '/index'
  } else {
    ele[propsDefault.children].forEach(child => {
      addPath(child);
    })
  }
}
const user = {
  state: {
    userInfo: getStore({
      name: 'userInfo'
    }) || [],
    permission: getStore({
      name: 'permission'
    }) || {},
    roles: [],
    menu: getStore({
      name: 'menu'
    }) || [],
    menuAll: [],
    token: getStore({
      name: 'token'
    }) || '',
    stateCode: getStore({
      name: 'stateCode'
    }) || '',
    currentAccount:''
  },
  actions: {
    //根据用户名登录
    LoginByUsername({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        var sha256Pasword = sha256(userInfo.password);
        //在这里进行表单提交登录的校验和token，cookie发放的操作
        loginByUsername(userInfo.username, sha256Pasword, userInfo.codeToken).then(res => {
          const data = res.data.body;
          const stateCode = res.data.stateCode;
          commit('SET_LOGIN_STATECODE', stateCode)
          commit('SET_TOKEN', data.token);
          commit('SET_USERIFNO', data);
          commit('DEL_ALL_TAG', 1);
          commit('CLEAR_LOCK', 2);
          resolve();
        }).catch(error => {
          reject(error);
        })
      })
    },

    //根据手机号登录
    LoginByPhone({commit }, userInfo) {
      return new Promise((resolve) => {
        loginByUsername(userInfo.phone, userInfo.code).then(res => {
          const data = res.data.data;
          commit('SET_TOKEN', data);
          commit('DEL_ALL_TAG');
          commit('CLEAR_LOCK');
          resolve();
        })
      })
    },
    //刷新token
    RefreshToken({state, commit }) {
      return new Promise((resolve, reject) => {
        // commit('SET_TOKEN', state.token);
        var userInfo = state.userInfo;
        var rToken = userInfo.refreshToken;
        refreshToken(rToken).then(res => {
          const data = res.data.body.token;
          commit('SET_TOKEN', data);
          resolve(data);
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_MENU', [])
          commit('SET_ROLES', [])
          commit('DEL_ALL_TAG');
          commit('CLEAR_LOCK');
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    //无网络注销session
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_MENU', [])
        commit('SET_ROLES', [])
        commit('DEL_ALL_TAG');
        commit('CLEAR_LOCK');
        removeToken()
        resolve()
      })
    },
    //获取系统侧边栏菜单
    GetMenu({
      commit
    }) {
      return new Promise(resolve => {
        // getMenu().then((res) => {
        //   const data = res.data.body
        //   let menu = deepClone(data);
        //   menu.forEach(item => {
        //     addPath(item, true);
        //   })
        //   commit('SET_MENU', data)
        //   resolve(menu)
        // })
        const data = routerData
        let menu = deepClone(data);
        menu.forEach(item => {
          addPath(item, true);
        })
        commit('SET_MENU', data)
        resolve(menu)
        
      })
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token)
      state.token = token;
      setStore({
        name: 'token',
        content: state.token,
        type: 'session'
      })
    },
    SET_USERIFNO: (state, userInfo) => {
      state.userInfo = userInfo;
      setStore({
        name: 'userInfo',
        content: state.userInfo
      })
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
      setStore({
        name: 'menu',
        content: state.menu,
        type: 'session'
      })
    },
    SET_MENU_ALL: (state, menuAll) => {
      state.menuAll = menuAll;
    },
    SET_LOGIN_STATECODE: (state, stateCode) => {
      state.stateCode = stateCode
      setStore({
        name: 'stateCode',
        content: state.stateCode,
        type: 'session'
      })
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSION: (state, permission) => {
      let result = [];

      function getCode(list) {
        list.forEach(ele => {
          if (typeof (ele) === 'object') {
            const chiildren = ele.children;
            const code = ele.code;
            if (chiildren) {
              getCode(chiildren)
            } else {
              result.push(code);
            }
          }

        })
      }
      getCode(permission);
      state.permission = {};
      result.forEach(ele => {
        state.permission[ele] = true;
      });
      setStore({
        name: 'permission',
        content: state.permission,
        type: 'session'
      })
    }
  }

}
export default user
