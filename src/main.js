import Vue from 'vue';
import axios from './router/axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router/router';
import './permission'; // 权限
import './error'; // 日志
import store from './store';
import * as urls from '@/config/env';
import Element from 'element-ui';
import i18n from './lang' // Internationalization
import './styles/common.scss';
import fullScreenImg from "@/components/fullScreenImg"

import basicContainer from './components/basic-container/main'
import print from '../public/cdn/print/print'
import buttonPrvgs from '@/util/buttonPrvgs'

Vue.use(print)

//syc添加（配置全局请求）
Vue.prototype.$http = axios;

Vue.use(router)
Vue.use(VueAxios, axios)
Vue.prototype.$buttonPrvgs=buttonPrvgs


//框架属性自定义全局设置
Element.Dialog.props.closeOnClickModal.default = false;
Element.Dialog.props.closeOnPressEscape.default = false;
Element.DatePicker.mixins[0].props.valueFormat.default = 'yyyy-MM-ddTHH:mm:ss.00Z';
Element.TimePicker.mixins[0].props.valueFormat.default = 'timestamp';


Vue.use(Element, {
    i18n: (key, value) => i18n.t(key, value)
})
Vue.use(window.AVUE, {
    i18n: (key, value) => i18n.t(key, value)
})

//注册全局容器
Vue.component('basicContainer', basicContainer)
Vue.component('fullScreenImg',fullScreenImg)
// 加载相关url地址
Object.keys(urls).forEach(key => {
    Vue.prototype[key] = urls[key];
})

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
    
}).$mount('#app')