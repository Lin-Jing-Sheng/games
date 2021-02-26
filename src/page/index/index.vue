<template>
  <div class="avue-contail"
       :class="{'avue--collapse':isCollapse}">
    <div class="avue-header">
      <!-- 顶部导航栏 -->
      <top />
    </div>

    <div class="avue-layout">
      <div class="avue-left">
        <!-- 左侧导航栏 -->
        <sidebar />
      </div>
      <div class="avue-main">
        <!-- 顶部标签卡 -->
        <tags />
        <!-- 主体视图层 -->
        <el-scrollbar style="height:100%">
          <keep-alive>
            <router-view class="avue-view"
                         v-if="$route.meta.keepAlive" />
          </keep-alive>
          <router-view class="avue-view"
                       v-if="!$route.meta.keepAlive" />
        </el-scrollbar>

      </div>
    </div>
    <!--
     <el-footer class="avue-footer">
       
      <img src="/svg/logo.svg"
           alt=""
           class="logo">
      <p class="copyright">© 2018 Avue designed by smallwei</p>
      
    </el-footer> 
     -->
    <div class="avue-shade"
         @click="showCollapse"></div>
        
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tags from "./tags";
import top from "./top/";
import sidebar from "./sidebar/";
import admin from "@/util/admin";
import { validatenull } from "@/util/validate";
import { calcDate } from "@/util/date.js";
import { getStore } from "@/util/store.js";
import website from '@/config/website';

export default {
  components: {
    top,
    tags,
    sidebar
  },
  name: "index",
  data() {
    return {
      //刷新token锁
      refreshLock: false,
      //刷新token的时间
      refreshTime: ""
    };
  },
  created() {
    //实时检测刷新token
    this.refreshToken();
  },
  mounted() {
    this.init();
  },
  computed: mapGetters(["isLock", "isCollapse", "website"]),
  props: [],
  methods: {
    showCollapse() {
      this.$store.commit("SET_COLLAPSE");
    },
    // 屏幕检测
    init() {
      this.$store.commit("SET_SCREEN", admin.getScreen());
      window.onresize = () => {
        setTimeout(() => {
          this.$store.commit("SET_SCREEN", admin.getScreen());
        }, 0);
      };
    },
    // 10分钟检测一次token 在web通用配置中设置  定时任务10秒一次
    refreshToken() {
      this.refreshTime = setInterval(() => {
        const token = getStore({
          name: "token",
          debug: true
        });

        var opTimes = this.$store.state.common.opTimes;   
        if(opTimes<1){
          return false;
        }
        const date = calcDate(token.datetime, new Date().getTime());
        if (validatenull(date)) return;
        if ((date.seconds >= website.tokenTime) && !this.refreshLock) {
          this.refreshLock = true;
          this.$store
            .dispatch("RefreshToken")
            .then(() => {
              this.refreshLock = false;
              this.$store.state.common.opTimes=0;
            })
            .catch(() => {
              this.refreshLock = false;
            });
        }
      }, 600000);
    }
  }
};
</script>
<style>
@import "../../styles/css/table.css";
.input-div {
  float: left;
  margin-left: 15px;
}
.el-dialog__header {
  background-color: #f8f8f8;
  border-bottom: 1px solid #dcdfe6;
}

</style>