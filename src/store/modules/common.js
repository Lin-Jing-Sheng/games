import {
    setStore,
    getStore,
    removeStore
} from '@/util/store'
import website from '@/config/website';
const common = {

    state: {
        language: getStore({ name: 'language' }) || 'zh',
        isCollapse: false,
        isFullScren: true,
        isShade: true,
        screen: -1,
        isLock: getStore({ name: 'isLock' }) || false,
        showTag: true,
        showDebug: false,
        showCollapse: true,
        showSearch: true,
        showLock: false,
        showFullScren: true,
        showTheme: false,
        showMenu: false,
        showColor: false,
        showLogo:false,
        showLang:false,
        colorName: getStore({ name: 'colorName' }) || '#409EFF',
        themeName: getStore({ name: 'themeName' }) || 'theme-default',
        lockPasswd: getStore({ name: 'lockPasswd' }) || '',
        website: website,
        verifyInfo:{} ,//验证码信息
        // verifyToken:'',  //验证码验证成功后获得的token
        currentAccount:'',
        opTimes :0,   //操作次数
        ifCalling:getStore({ name: 'ifCalling' }) || false, //是否正在叫号
        timer:getStore({ name: 'timer' }) || '',//叫号定时器
        ifCalling2:getStore({ name: 'ifCalling2' }) || false, //是否正在叫号
        timer2:getStore({ name: 'timer2' }) || '',//叫号定时器
     },
    mutations: {
        SET_LANGUAGE: (state, language) => {
            state.language = language
            setStore({
                name: 'language',
                content: state.language
            })
        },
        SET_SHADE: (state, active) => {
            state.isShade = active;
        },
        SET_COLLAPSE: (state) => {
            state.isCollapse = !state.isCollapse;
        },
        SET_FULLSCREN: (state) => {
            state.isFullScren = !state.isFullScren;
        },
        SET_LOCK: (state) => {
            state.isLock = true;
            setStore({
                name: 'isLock',
                content: state.isLock,
                type: 'session'
            })
        },
        SET_SCREEN: (state, screen) => {
            state.screen = screen;
        },
        SET_COLOR_NAME: (state, colorName) => {
            state.colorName = colorName;
            setStore({
                name: 'colorName',
                content: state.colorName,
            })
        },
        SET_THEME_NAME: (state, themeName) => {
            state.themeName = themeName;
            setStore({
                name: 'themeName',
                content: state.themeName,
            })
        },
        SET_LOCK_PASSWD: (state, lockPasswd) => {
            state.lockPasswd = lockPasswd;
            setStore({
                name: 'lockPasswd',
                content: state.lockPasswd,
                type: 'session'
            })
        },
        CLEAR_LOCK: (state) => {
            state.isLock = false;
            state.lockPasswd = '';
            removeStore({
                name: 'lockPasswd',
                type: 'session'
            });
            removeStore({
                name: 'isLock',
                type: 'session'
            });
        },
        SET_IF_CALLING: (state, ifCalling) => {
            state.ifCalling = ifCalling;
            setStore({
                name: 'ifCalling',
                content: state.ifCalling,
                type: 'session'
            })
        },
        SET_TIMER: (state, timer) => {
            state.timer = timer;
            setStore({
                name: 'timer',
                content: state.timer,
                type: 'session'
            })
        },
        SET_IF_CALLING2: (state, ifCalling2) => {
            state.ifCalling2 = ifCalling2;
            setStore({
                name: 'ifCalling2',
                content: state.ifCalling2,
                type: 'session'
            })
        },
        SET_TIMER2: (state, timer2) => {
            state.timer2 = timer2;
            setStore({
                name: 'timer2',
                content: state.timer2,
                type: 'session'
            })
        },
    },
}
export default common