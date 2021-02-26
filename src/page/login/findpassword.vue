<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="userCode">
      <el-input size="medium" @keyup.enter.native="handleFind" v-model="loginForm.userCode" auto-complete="off" placeholder="请输入用户名" maxlength="11">
        <i slot="prefix" class="iconfont  icon-user" style="margin-top:6px;"></i>
      </el-input>
    </el-form-item>

    <el-form-item prop="phone">
      <el-input size="medium" @keyup.enter.native="handleFind" v-model="loginForm.phone" auto-complete="off" placeholder="请输入手机号后四位">
        <i slot="prefix" class="el-icon-mobile-phone" style="margin-top:6px;"></i>
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button size="medium" type="primary" @click.native.prevent="handleFind" class="login-submit">确认</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {findBackPwd} from '@/api/cgs-exam/auth/user'
import { isvalidatemobile } from "@/util/validate";
import { mapGetters } from "vuex";
export default {
  name: "findpassword",
  data() {
    const validatePhone = (rule, value, callback) => {
      if (value == "" || value.length != 4) {
        callback("请输入手机号后四位");
      } else {
        callback();
      }

      /*
      if (isvalidatemobile(value)[0]) {
        callback(new Error(isvalidatemobile(value)[1]));
      } else {
        callback();
      }
      */
    };
    const validateCode = (rule, value, callback) => {
      if (value.length != 6) {
        callback(new Error("请输入6位数的验证码"));
      } else {
        callback();
      }
    };
    const validateName = (rule, value, callback) => {
      if (value.length <6||value.length >11) {
        callback(new Error("请输入6到11位的用户名"));
      } else {
        callback();
      }
    };
    return {
      msgText: "",
      msgTime: "",
      msgKey: false,
      loginForm: {
        userCode: "",
        phone: "",
      },
      loginRules: {
        phone: [{ required: true, trigger: "blur", validator: validatePhone }],
        code: [{ required: true, trigger: "blur", validator: validateCode }],
        userCode: [
          { required: true, trigger: "blur", validator: validateName },
        ],
      },
      passwordType: "password",
    };
  },
  created() {
    this.msgText = this.config.MSGINIT;
    this.msgTime = this.config.MSGTIME;
  },
  mounted() {},
  computed: {
    ...mapGetters(["tagWel"]),
    config() {
      return {
        MSGINIT: this.$t("login.msgText"),
        MSGSCUCCESS: this.$t("login.msgSuccess"),
        MSGTIME: 60,
      };
    },
  },
  props: [],
  methods: {
    showPassword() {
      this.passwordType == ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleSend() {
      if (this.msgKey) return;
      this.msgText = this.msgTime + this.config.MSGSCUCCESS;
      this.msgKey = true;
      const time = setInterval(() => {
        this.msgTime--;
        this.msgText = this.msgTime + this.config.MSGSCUCCESS;
        if (this.msgTime == 0) {
          this.msgTime = this.config.MSGTIME;
          this.msgText = this.config.MSGINIT;
          this.msgKey = false;
          clearInterval(time);
        }
      }, 1000);
    },
    handleFind() {
      if (this.findflag) {
        return;
      }
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          
            findBackPwd(this.loginForm).then(resp=>{
              this.$message.success(resp.data.retMsg)
            })
            // this.$parent.activeName = "user";
            // this.$parent.title = "登录";

          

          /*
              function (close) {
              this.$parent.activeName = "user";
              this.$parent.title = "登录";
            }*/
        }
      });
    },
  },
};
</script>

<style>
.msg-text {
  display: block;
  width: 60px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}
.msg-text.display {
  color: #ccc;
}
</style>
