<template>
  <div>
    <el-dialog :visible.sync="changePwdDialog" width="30%" title="修改密码" :close-on-click-modal="false" :show-close="false" :close-on-press-escape="false">
        <el-form status-icon :rules="formRules" ref="changePwdForm" :model="changePwdForm" label-width="180px"  >
            <el-form-item prop="password" label="当前密码：" >
                <el-input
                    style="width:200px"
                    size="medium"
                    v-model="changePwdForm.password"
                    auto-complete="off"
                    placeholder="请输入用户当前密码"
                    show-password
                >
                </el-input>
            </el-form-item>
            <el-form-item prop="newPassword" label="新密码：" >
                <el-input
                    style="width:200px"
                    size="medium"
                    v-model="changePwdForm.newPassword"
                    auto-complete="off"
                    placeholder="请输入新密码"
                    show-password
                    maxlength="10"
                >
                </el-input>
            </el-form-item>
            <el-form-item prop="reNewPassword" label="确认密码：" >
                <el-input
                    style="width:200px"
                    size="medium"
                    v-model="changePwdForm.reNewPassword"
                    auto-complete="off"
                    placeholder="请再次输入新密码"
                    show-password
                    maxlength="10"
                >
                </el-input>
            </el-form-item>
            <!-- <span style="color:red">* 您当前密码为初始密码或密码长时间未修改,请及时修改</span> -->
        </el-form>
        <span slot="footer">
            <el-button type="primary" @click="changePassword('changePwdForm')">提交</el-button>
        </span>

    </el-dialog>
  </div>
</template>
<script>

import { changePwd } from '@/api/cgs-exam/auth/user'
import sha256 from 'js-sha256'
export default {

  name: "Analyse",

  data() {
      //自定义校验规则两次密码是否输入一致
    const pwdIsSame = (rule, value, callback) => {
        if (value == "" ) {
            callback(new Error("请再次输入新密码！"));
        } else if(value!==this.changePwdForm.newPassword) {
            callback(new Error("两次输入密码不一致！"));
        }else {callback()}
    }
    const complexPwd=(rule, value, callback) => {
        let  pwdRegex=new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,10}')
        let str=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
          for(let i=0;i<9;i++){
            if(value.includes(`${i}${i}${i}`)){
              console.log(0)
              callback(new Error("密码不能有连续三位重复数字"));
            }
            if(i!=0&&i!=9){
              if(value.includes(`${i-1}${i}${i+1}`)) {console.log(1)
                callback(new Error("密码不能有连续三位数字"));
              }
            }
            else{
              if(value.includes(`012`||`789`)) {
                console.log(2)
                callback(new Error("密码不能有连续三位数字"));
              }
            }
            for(let i=0;i<str.length;i++){
              if(value.toLocaleLowerCase().includes(`${str[i]}${str[i]}${str[i]}`)){
                console.log(0)
                callback(new Error("密码不能有连续三位重复字母"));
              }
              if(i!=0&&i!=9){
                if(value.toLocaleLowerCase().includes(`${str[i-1]}${str[i]}${str[i+1]}`)) {console.log(1)
                  callback(new Error("密码不能有连续三位字母"));
                }
              }
              else {
                if (value.toLocaleLowerCase().includes(`abc` || `xyz`)) {
                  console.log(2)
                  callback(new Error("密码不能有连续三位字母"));
                }
              }
            }
          }
        // let isSeria3lNum=/\d{3}/
        // let isSeria3lStr=/[A-Za-z]{3}/
        let  isIncludeAccount=value.toLocaleLowerCase().includes(this.$store.state.user.userInfo.userCode.toLocaleLowerCase())
        if (value == "" ) {
            callback(new Error("请输入新密码！"));
            return
        }
        if(!pwdRegex.test(value)) {
            callback(new Error("新密码必须包含大,小写字母，数字和特殊字符且至少8位！"));
            return
        }
        // if(){
        //     callback(new Error("密码不能有连续三位数字"));
        //     return
        // }
        // if(isSeria3lStr.test(value)){
        //     callback(new Error("密码不能有连续三位字母"));
        //     return
        // }
        if(isIncludeAccount){
            callback(new Error("密码不能包含有您的账号"));
            return
        }
        callback()
    }
    return {
        changePwdForm: {
            userCode:this.$store.state.user.userInfo.userCode,
            password:'',
            newPassword:'',
            reNewPassword:''
        },
        changePwdDialog:false,
        formRules: {
            password: [{ required: true, trigger: "blur", message:'请输入原始密码！'}],
            newPassword: [{ required: true, trigger: "blur",validator:complexPwd}],
            reNewPassword: [{ required: true, trigger: "blur",  validator:pwdIsSame}],
        },

    };
  },
 computed:{

 },
  mounted() {
      if(this.$store.state.user.stateCode==102){
            this.changePwdDialog=true
        }
  },
  methods: {
    changePassword(changePwdForm){
        this.$refs[changePwdForm].validate((valid) => {
            if (valid) {
                changePwd(this.changePwdForm.userCode,sha256(this.changePwdForm.password),sha256(this.changePwdForm.reNewPassword))
                .then(resp=>{
                    this.$message.success(resp.data.retMsg)
                    this.changePwdDialog=false
                    this.$store.commit('SET_LOGIN_STATECODE','')
                })
            }
        })
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
