<template>
  <div>
    <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
      <el-form-item prop="username">
        <el-input size="medium"  v-model="loginForm.username" auto-complete="off" :placeholder="$t('login.username')">
          <i slot="prefix" class="iconfont icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input size="medium" :type="passwordType" v-model="loginForm.password" auto-complete="off" :placeholder="$t('login.password')">
          <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <!-- <div v-if="dialogVisible" class="v-modal login-modal" @click="closeVe" /> -->

      <div>
        <!-- <el-form-item>
          <div v-if="dialogVisible" style="width:100%;margin-top:-240px;position:absolute;z-index=9999;display:block;position:absolute;">
            <Verify v-if="verifyMode == 0" @success="sucess" :imgSize="{ width: '100%', height: '230px' }" :barSize="{ width: '100%', height: '40px' }" explain="向右拖动滑块填充拼图" :vOffset="5" :showButton="false" @error="error" :type="4" imgUrl="/img/imgs/" :imgName="imgNames"></Verify>
            <Verify v-else @success="sucess" :defaultNum="5" :checkNum="3" :imgSize="{ width: '100%', height: '230px' }" :barSize="{ width: '100%', height: '40px' }" :showButton="false" @error="error" :type="5" imgUrl="/img/imgs/" :imgName="imgNames">
            </Verify>
          </div>
        </el-form-item> -->

        <div>
          <el-form-item>
            <el-button :disabled="cold" type="primary" size="medium" @click.native.prevent="handleLogin" class="login-submit" :loading="isload">
              {{ loginTitle }}</el-button>
          </el-form-item>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import website from "@/config/website";
import Verify from "@/components/vue2-verify";
import { getCode } from "@/api/cgs-exam/auth/code";

export default {
  name: "userlogin",
  components: { Verify },
  data() {
    return {
      isload: false, // 登录按钮是否在加载
      cold: false, // 登录按钮是否禁止
      loginTitle: "登录",
      // verifyMode: 0,
      errTimes: 0,
      // imgNames: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
      // tenantMode: website.tenantMode,
      // dialogVisible: false,
      totalTime: 10,
      loginForm: {
        username: "manager",
        password: "123",
        // type: ""
      },
      loginRules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          // { min: 1, message: "密码长度最少为6位", trigger: "blur" }
        ]
      },
      passwordType: "password" // 是否显示密码
    };
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters(["tagWel"])
  },
  props: [],
  methods: {
    //密码错误过多进行按钮锁定 计时
    // countDown() {
    //   this.cold = true;
    //   this.loginTitle = this.totalTime + "s后重试"; //这里解决60秒不见了的问题
    //   let clock = window.setInterval(() => {
    //     this.totalTime--;
    //     this.loginTitle = this.totalTime + "s后重试";
    //     if (this.totalTime < 0) {
    //       //当倒计时小于0时清除定时器
    //       window.clearInterval(clock);
    //       this.totalTime = 10;
    //       this.loginTitle = "登录";
    //       this.cold = false;
    //       this.dialogVisible = false;
    //       this.isload = false;
    //     }
    //   }, 1000);
    // },
    // error() {
    //   this.errTimes = this.errTimes + 1;
    //   if (this.errTimes > 2) {
    //     this.dialogVisible = false;
    //     //this.$alert("验证码输入错误");
    //     const h = this.$createElement;
    //     this.$notify({
    //       title: "提示",
    //       message: h(
    //         "i",
    //         { style: "color: teal" },
    //         "您已连续三次输错验证码，请于10秒之后重试！"
    //       )
    //     });
    //     this.countDown();
    //     this.errTimes = 0;
    //   }
    // },
    // closeVe() {
    //   this.isload = false;
    //   this.dialogVisible = false;
    //   this.cold = false;
    //   this.loginTitle = "登录";
    // },
    // blur() {
    //   this.dialogVisible = false;
    // },
    // sucess() {
    //   this.isload = false;
    //   this.dialogVisible = false;
    //   this.cold = false;
    //   this.loginTitle = "登录";
    //   this.handleLogin();
    // },
    // verify() {
    //   if (this.dialogVisible) {
    //     return;
    //   }
    //   this.$refs.loginForm.validate(valid => {
    //     if (valid) {
    //       this.isload = true;
    //       this.loginTitle = "正在进行安全检测";
    //       getCode(this.loginForm.username)
    //         .then(res => {
    //           var verifyMode = res.data.body.verifyMode;
    //           if (verifyMode != 2) {
    //             this.verifyMode = verifyMode;
    //             this.$store.state.verifyInfo = res.data.body;
    //             this.loginTitle = "请进行安全验证";
    //             this.dialogVisible = true;
    //             this.cold = true;
    //           } else {
    //             //这种情况无需验证
    //             var codeToken = res.data.body.codeToken;
    //             this.$store.state.verifyToken = codeToken;
    //             this.handleLogin();
    //           }
    //         })
    //         .catch(err => {
    //           this.$message.error(err.message);


    //           this.totalTime = 10;
    //           this.loginTitle = "登录";
    //           this.cold = false;
    //           this.dialogVisible = false;
    //           this.isload = false;
    //         });
    //     }
    //   });
    // },
    showPassword() {
      this.passwordType == ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    // 登录
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // const loading = this.$loading({
          //   lock: true,
          //   text: "登录中,请稍后。。。",
          //   spinner: "el-icon-loading"
          // });
          this.isload = true;
          this.loginTitle = "登录中...";

          var codeToken = '1234';
          this.loginForm.codeToken = codeToken;
          //前后端联调时候，注释掉下面这段代码，并在user.js中配置请求信息
          this.$router.push({ path: this.tagWel.value });
          // this.$store
          //   .dispatch("LoginByUsername", this.loginForm)
          //   .then(res => {
          //     this.isload = false;
          //     this.loginTitle = "登录";
          //     this.$router.push({ path: this.tagWel.value });
          //     // loading.close();
          //   })
          //   .catch(e => {
          //     // loading.close();
          //     this.isload = false;
          //     this.loginTitle = "登录";
          //     this.$alert(e.message);
          //   });
        }
      });
    }
  }
};
</script>

<style>
.verify-msg {
  color: black;
}
.login-modal {
  background: transparent !important;
  z-index: 0 !important;
}
</style>
