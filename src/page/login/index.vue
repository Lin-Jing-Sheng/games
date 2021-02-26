<template>
  <div class="login-container" >
    <top-color v-show="false"></top-color>

    <div class="login-weaper animated bounceInDown">
      <div class="login_title">
        <img src="img/logo_03.png" width="88" height="90" /><span
          class="title_font"
          >深圳市机动车驾驶人考试业务监管系统</span
        >
      </div>
      <div class="login-left">
      </div>
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">
            {{ title }}
          </h4>
          <userLogin></userLogin>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userLogin from "./userlogin";
import codeLogin from "./codelogin";
import thirdLogin from "./thirdlogin";
import findPassword from "./findpassword";
import { mapGetters } from "vuex";
import { dateFormat } from "@/util/date";
import { validatenull } from "@/util/validate";
import topLang from "@/page/index/top/top-lang";
import topColor from "@/page/index/top/top-color";
export default {
  name: "login",
  components: {
    userLogin,
    codeLogin,
    thirdLogin,
    findPassword,
    topLang,
    topColor,
  },
  data() {
    return {
      title: "登录",
    };
  },
  watch: {
    // $route() {
    //   const params = this.$route.query;
    //   this.socialForm.state = params.state;
    //   this.socialForm.code = params.code;
    //   if (!validatenull(this.socialForm.state)) {
    //     const loading = this.$loading({
    //       lock: true,
    //       text: `${
    //         this.socialForm.state === "WX" ? "微信" : "QQ"
    //       }登录中,请稍后。。。`,
    //       spinner: "el-icon-loading",
    //     });
    //     setTimeout(() => {
    //       loading.close();
    //     }, 2000);
    //   }
    // },
  },
  created() {
    
  },
  mounted() {},
  computed: {
    ...mapGetters(["website"]),
  },
  props: [],
  methods: {

  },
};
</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>