<template>
  <div class="app-container">
    <basic-container>
      <el-form ref="form" label-width="120px">
        <el-collapse-transition>
          <div v-show="showSearchFlag" class="transition-box">
            <el-row :gutter="20" class="row-span">
              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-form-item label="组织机构：" size="medium">
                   <el-cascader  v-model="queryParm.orgId"
                    :options="group1"
                    filterable
                    :show-all-levels="false"
                    :props="{ checkStrictly: true ,emitPath:false,value:'id'}"
                    clearable
                    ref="orgSelectTree"
                    @change="selectOrg"
                    ></el-cascader>
                </el-form-item>
              </el-col>


              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-form-item label="所属部门：" size="medium">
                  <el-select v-model="queryParm.deptId" placeholder="请选择" clearable filterable>
                    <el-option v-for="item in deptInfos" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-form-item label="用户名称：" size="medium">
                  <el-select v-model="queryParm.id" placeholder="请选择" clearable filterable >
                    <el-option v-for="item in userInfos" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>


              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-form-item label="用户状态：" size="medium">
                  <el-select v-model="queryParm.state" placeholder="请选择" clearable>
                    <el-option key="0" label="正常" value="0" />
                    <el-option key="1" label="无效" value="1" />
                  </el-select>
                </el-form-item>
              </el-col>


              <el-col :xl="4" :lg="7" :md="8" :sm="10" :xs="10">
                <el-button
                  type="primary"
                  size="medium"
                  style="float:left"
                  icon="el-icon-search"
                  @click="toQuery"
                  v-if="$buttonPrvgs('S_USER_MANAGE.SELECT')"
                >搜索</el-button>
                <el-button
                  size="medium"
                  style="float:left"
                  icon="el-icon-delete"
                  @click="clearSearch"
                >清空</el-button>
              </el-col>
            </el-row>
          </div>
        </el-collapse-transition>

        <el-row :gutter="20" class="row-span">
          <el-col :xl="20" :lg="24" :md="24"
 :sm="24" :xs="24">
            <el-button
              class="filter-item"
              type="primary"
              icon="el-icon-plus"
              size="medium"
              @click="add"
              v-if="$buttonPrvgs('S_USER_MANAGE.ADD')"
            >新增</el-button>

            <el-button
              class="filter-item"
              type="info"
              icon="el-icon-edit"
              size="medium"
              @click="edit"
              v-if="$buttonPrvgs('S_USER_MANAGE.EDIT')"
            >编辑</el-button>

            <el-button
              class="filter-item"
              type="success"
              plain
              icon="el-icon-check"
              size="medium"
              @click="recover"
              v-if="$buttonPrvgs('S_USER_MANAGE.ENABLE')"
            >恢复</el-button>


            <el-button
              class="filter-item"
              type="info"
              plain
              icon="el-icon-close"
              size="medium"
              @click="stop"
              v-if="$buttonPrvgs('S_USER_MANAGE.DISABLE')"
            >注销</el-button>

            <el-button
              class="filter-item"
              type="success"
              plain
              icon="el-icon-s-open"
              size="medium"
              @click="initUser"
              v-if="$buttonPrvgs('S_USER_MANAGE.INITUSER')"
            >初始化</el-button>

             <el-button
              class="filter-item"
              type="success"
              plain
              icon="el-icon--refresh-left"
              size="medium"
              @click="initPwd"
              v-if="$buttonPrvgs('S_USER_MANAGE.INITPWD')"
            >重置密码</el-button>
<!--
            <el-button
              class="filter-item"
              type="primary"
              plain
              icon="el-icon-search"
              size="medium"
              @click="view"
            >查看</el-button>

            -->
          </el-col>
          <el-col :xl="4" :lg="7" :md="8" :sm="10" :xs="10" style="text-align:right">
            <el-tooltip class="item" effect="dark" content="刷新" placement="top">
              <el-button icon="el-icon-refresh" circle size="medium" @click="toQuery"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="显隐" placement="top">
              <el-button icon="el-icon-menu" circle size="medium" @click="colDialog=!colDialog"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="隐藏/展示搜索" placement="top">
              <el-button
                icon="el-icon-search"
                circle
                size="medium"
                @click="showSearchFlag=!showSearchFlag"
              ></el-button>
            </el-tooltip>
          </el-col>
        </el-row>
      </el-form>

      <el-divider />
      <!--表格渲染-->
      <el-table
        ref="multipleTable"
        v-loading="loading"
        :data="tableData"
        highlight-current-row
        size
        border
        @row-click="clickRow"
        @cell-dblclick="view"
        max-height="640"
        height="500"
        :header-cell-style="{fontSize:'14px',fontWeight:900,color:'#000',background:'#F3F3F3',}"
        style="width: 100%;"
      >
        <el-table-column align="center" type="selection" width="50" />
        <el-table-column align="center" sortable prop="userCode" v-if="showCol.userCode.value" :label="showCol.userCode.label" />
        <el-table-column align="center" sortable prop="userName" v-if="showCol.userName.value" :label="showCol.userName.label"  />
        <el-table-column align="center" prop="orgName" v-if="showCol.orgName.value" :label="showCol.orgName.label" />
        <el-table-column align="center" prop="deptName" v-if="showCol.deptName.value" :label="showCol.deptName.label"  />
        <el-table-column align="center" sortable prop="userState" v-if="showCol.userState.value" :label="showCol.userState.label"  >
          <template slot-scope="scope">
            <span v-if="scope.row.userState == '0'" style="color:blue;">正常</span>
            <span v-else-if="scope.row.userState == '1'" style="color:red;">注销</span>
            <span v-else-if="scope.row.userState == '2'" style="color:gray;">初始化</span>
            <span v-else-if="scope.row.userState == '3'" style="color:green;">重置密码</span>
          </template>
        </el-table-column>
        <el-table-column align="center" sortable prop="loginType" v-if="showCol.loginType.value" :label="showCol.loginType.label" >
          <template slot-scope="scope">
            <span v-if="scope.row.loginType == '1'" >常规登录</span>
            <span v-else-if="scope.row.loginType == '2'">PKI登录</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="accExpiryDate" v-if="showCol.accExpiryDate.value" :label="showCol.accExpiryDate.label"  />
        <el-table-column align="center" prop="pwdExpiryDate" v-if="showCol.pwdExpiryDate.value" :label="showCol.pwdExpiryDate.label"  />
        <el-table-column align="center" prop="remark" v-if="showCol.remark.value" :label="showCol.remark.label"  />


      </el-table>
      <!--分页组件-->
      <div style="text-align: right">
        <el-pagination
          :total="total"
          :current-page="page+1"
          :page-sizes="[10, 20, 50, 100,500]"
          :page-size="size"
          style="margin-top: 8px;"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="sizeChange"
          @current-change="pageChange"
          @prev-click="prevPage"
          @next-click="nextPage"
        />
      </div>
    </basic-container>

   <!-- 新增对话框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="55%" @closed="clearDialog" :close-on-press-escape="false" :close-on-click-modal="false">
      <div>
        <el-form label-position="right" label-width="200px" :model="dialogFrom" ref="dialogFrom" :rules="rules">
         <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-form-item label="组织机构：" size="medium">
              <el-cascader  v-model="dialogFrom.orgId"
              :options="group1"
              filterable
              :show-all-levels="false"
              :props="{ checkStrictly: true ,emitPath:false,value:'id'}"
              clearable
              ref="orgSelectTree"
              @change="selectOrg"
              style="width: 200px"
              ></el-cascader>
          </el-form-item>
        </el-col>
          <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-form-item label="登录方式：" size="medium" prop="loginType">
            <el-select v-model="dialogFrom.loginType" placeholder="请选择" clearable style="width: 200px">
              <el-option key="1" label="常规登录" value="1" />
              <el-option key="2" label="PKI登录" value="2" />
            </el-select>
          </el-form-item>
        </el-col>

          <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-form-item label="所属部门：" size="medium" prop="deptId">
            <el-select v-model="dialogFrom.deptId" placeholder="请选择" clearable filterable style="width: 200px">
              <el-option v-for="item in deptInfos" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
         </el-col>

        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-form-item label="是否人像识别：" size="medium" prop="ifFace">
            <el-select v-model="dialogFrom.ifFace" placeholder="请选择" clearable style="width: 200px">
              <el-option key="0" label="是" value="0" />
              <el-option key="1" label="否" value="1" />
            </el-select>
          </el-form-item>
          </el-col>

        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-form-item label="用户代码：" size="medium" prop="userCode">
            <el-input
              placeholder="请输入用户代码"
              class="filter-item"
              clearable
              style="width: 200px"
              v-model="dialogFrom.userCode"
            />
          </el-form-item>
        </el-col>

        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-form-item label="用户照片：" size="medium">
            <el-upload style="width: 300px"
            class="upload-demo"
            name="file"
            ref="uploadFile"
            action=""
            :on-change="changeImage"
            :on-remove="removeImage"
            accept="image/jpeg,image/jpg,image/png"
            :auto-upload="false"
            :file-list="fileList"
            :limit="1"
            :data="fileData"
            >
              <el-button size="small" type="primary">选择图片</el-button>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过1M</div>
            </el-upload>
          </el-form-item>
        </el-col>

        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-form-item label="用户名称：" size="medium" prop="userName">
            <el-input
              placeholder="请输入用户名称"
              class="filter-item"
              clearable
              style="width: 200px"
              v-model="dialogFrom.userName"
            />
          </el-form-item>
        </el-col>

        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
           <el-form-item label="是否推送登录短信：" size="medium" prop="ifMsg">
            <el-select v-model="dialogFrom.ifMsg" placeholder="请选择" clearable style="width: 200px">
              <el-option key="0" label="是" value="0" />
              <el-option key="1" label="否" value="1" />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-form-item label="身份证号码：" size="medium" prop="userIdCard">
            <el-input
              placeholder="请输入身份证号码"
              class="filter-item"
              clearable
              style="width: 200px"
              v-model="dialogFrom.userIdCard"
            />
          </el-form-item>
        </el-col>

        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-form-item label="是否限定登录IP：" size="medium" prop="ifIpLimit">
            <el-select v-model="dialogFrom.ifIpLimit" placeholder="请选择" clearable style="width: 200px">
              <el-option key="0" label="是" value="0" />
              <el-option key="1" label="否" value="1" />
            </el-select>
          </el-form-item>
        </el-col>


        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-form-item label="手机号码：" size="medium" prop="userPhone">
            <el-input
              placeholder="请输入手机号码"
              class="filter-item"
              clearable
              style="width: 200px"
              v-model="dialogFrom.userPhone"
            />
          </el-form-item>
        </el-col>

        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-form-item label="限制IP地址" size="medium" prop="ipAddr">
            <el-input
              placeholder="请输入限制IP地址"
              class="filter-item"
              clearable
              style="width: 200px"
              v-model="dialogFrom.ipAddr"
            />
          </el-form-item>
        </el-col>

        <el-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
          <el-form-item label="备注信息：" size="medium" >
            <el-input
              placeholder="请输入备注信息"
              class="filter-item"
              clearable
              rows="4"
              style="width: 200px;"
              v-model="dialogFrom.remark"
              type="textarea"
              show-word-limit
              maxlength="120"
            />
          </el-form-item>
        </el-col>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" v-if="isAdd" @click="addDone">保存</el-button>
        <el-button type="primary" v-if="isEdit" @click="editDone">保存</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>

       <!-- 查看 -->
    <el-dialog title="用户详情查看" :visible.sync="viewDialog" width="55%">
      <div>
        <el-tabs v-model="activeName">
          <el-tab-pane label="基础信息" name="first">
            <el-form label-position="right" label-width="200px">
              <el-row>
                <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
                    <el-form-item label="照片：" size="medium">
                    <el-image
                      style="width:200px;height:200px;"
                      :src="dialogFrom.userPhotoStr!=null?'data:image/jpeg;base64,'+dialogFrom.userPhotoStr:'/img/imgs/img1.jpg'"
                    >
                    </el-image>
                    </el-form-item>
                </el-col>

                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="身份证号码：" size="medium">
                    {{dialogFrom.userIdCard}}
                  </el-form-item>
                </el-col>

                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="登录方式：" size="medium">
                    {{dialogFrom.loginType=='1'?'常规登录':'PKI登录'}}
                  </el-form-item>
                </el-col>

                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="是否人脸识别：" size="medium">
                    {{dialogFrom.ifFace=='1'?'是':'否'}}
                  </el-form-item>
                </el-col>

                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="是否推送短信：" size="medium">
                    {{dialogFrom.ifMsg=='0'?'是':'否'}}
                  </el-form-item>
                </el-col>

                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="组织机构：" size="medium">
                      {{dialogFrom.orgName}}
                  </el-form-item>
                </el-col>
                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="账号有效期止：" size="medium">
                    {{dialogFrom.accExpiryDate}}
                  </el-form-item>
                </el-col>

                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="所属部门：" size="medium">
                    {{dialogFrom.deptName}}
                  </el-form-item>
                </el-col>


                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="密码有效期止：" size="medium">
                    {{dialogFrom.pwdExpiryDate}}
                  </el-form-item>
                </el-col>


                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="用户代码：" size="medium">
                    {{dialogFrom.userCode}}
                  </el-form-item>
                </el-col>


                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="是否限定登录IP地址：" size="medium">
                    {{dialogFrom.ifIpLimit=='0'?'是':'否'}}
                  </el-form-item>
                </el-col>

                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="用户名称：" size="medium">
                    {{dialogFrom.userName}}
                  </el-form-item>
                </el-col>



                <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
                  <el-form-item label="限定登录IP地址：" size="medium">
                    {{dialogFrom.ipAddr}}
                  </el-form-item>
                </el-col>


                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                  <el-form-item label="手机号码：" size="medium">
                    {{dialogFrom.userPhone}}
                  </el-form-item>
                </el-col>



                <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
                  <el-form-item label="备注信息：" size="medium">
                    {{dialogFrom.remark}}
                  </el-form-item>
                </el-col>


              </el-row>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="操作轨迹" name="two">
            <el-timeline style="margin-left: 50px;">
              <el-timeline-item v-for="(item,index) in auditInfo"
              placement="top"
              :key="index"
              :timestamp="item.reqTime"
              >
              {{item.serviceName}}
              </el-timeline-item>
            </el-timeline>
          </el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="viewDialog = false">关闭</el-button>
      </span>
    </el-dialog>



    <!-- 显隐对话框-->
    <el-dialog title="显隐" :visible.sync="colDialog" width="35%">
      <div>
        <el-form label-position="right" label-width="200px">
          <el-checkbox v-for="(col,index) in showCol" :key="index" v-model="col.value">{{col.label}}</el-checkbox>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import initData from "@/mixins/initData";
import axios from 'axios';
//import { driverInfo } from "@/api/baseInfo/schoolDriver";
// // import { timingSafeEqual } from "crypto";
import { jsonData } from "./data/json";
import { baseUrl } from "@/config/env";
import {clearJson} from "@/util/util";

import {
  saveFile,
  getOrgInfoSelect,
  getDeptSelect,
  getUserSelect,
  add,
  view,
  update,
  enable,
  disable,
  initPwd,
  initUser,
  listUserAudit
} from "@/api/cgs-exam/systemManage/userInfo";
export default {
  name: "coach",
  mixins: [initData],
  data() {
    return {
      auditInfo:[],
      viewDialog:false,
      queryParm: {},
      showCol: jsonData.showCol,
      dialogFrom: jsonData.dialogFrom,
      showSearchFlag: true,
      dialogVisible: false,
      activeName: "first",
      colDialog: false,
      isAdd: true,
      isEdit: false,
      total: 110,
      page: 0,
      size: 10,
      fslx: "",
      peoples: [],
      groups: [],
      showView: false,
      rules:jsonData.rules,
      //viewPeopleList: jsonData.viewPeopleList,
      group1:[],
      deptInfos:[],
      userInfos:[],
      fileList:[],
      uploadFile:null,
      fileData:{},
      fileAction:""
    };

  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
    this.initOrgInfoSelect();
    this.initDeptInfo(0);
    this.initUserSelect(0);
  },

  mounted() {
    //this.initNonroadData();
  },
  computed: {
    dialogTitle: function() {
      if (this.isEdit) {
        return "用户信息编辑";
      }
      if (this.isAdd) {
        return "用户信息新增";
      }
    }
  },
  methods: {

    changeImage(file,fileList){
      //console.log("changeImage",file);
      this.uploadFile = file;
    },
    initUserSelect(deptId){
        getUserSelect(deptId)
        .then(res => {
          this.userInfos = res.data.body;
        })
        .catch(err => {
          this.userInfos = [];
        });
    },
    removeImage(){

    },
    initOrgInfoSelect(){
      let params = {state:0};
      getOrgInfoSelect(params)
      .then(res => {
        this.group1 = res.data.body;
      })
      .catch(err => {
        this.group1 = [];
      });
    },
    selectOrg(id){
      this.$refs.orgSelectTree.toggleDropDownVisible();
      this.initDeptInfo(id);
    },
    initDeptInfo(id){
      let params = {};
      params.state=0;
      if(id!=0){
        params.orgId = id;
      }
      getDeptSelect(params)
      .then(res => {
        this.deptInfos = res.data.body;
      })
      .catch(err => {
        this.deptInfos = [];
      });
    },
    selectDept(){

    },
    initPwd(){
      var selectRows = this.$refs.multipleTable.selection;
      var msg = "";
      if (selectRows.length == 0) {
        msg = "请勾选一行数据";
      } else if (selectRows.length > 1) {
        msg = "只允许勾选一行数据";
      }else if(selectRows[0].state=='1'){
        msg = "数据无效时重置密码";
      }

      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }
      var userName = selectRows[0].userName;
      this.$confirm("请确认是否重置["+userName+"]的用户密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info"
      }).then(() => {
          var id = selectRows[0].id;
          initPwd(id)
            .then(res => {
                this.$message.success(res.data.retMsg);
                this.$refs.multipleTable.clearSelection;
                this.init();
            })
            .catch(err => {
              this.$message.error(err.message);
            });
      });

    },
    view(row) {
      var id = row.id;
      var param = {
        id: id
      };
      view(id)
        .then(res => {
          this.dialogFrom = res.data.body;
          this.viewDialog = true;

        })
        .catch(err => {
          this.$message.error(err.message);
        });
      listUserAudit(id)
        .then(res => {
          this.auditInfo= res.data.body;
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    },
    colseView() {
      this.showView = false;
    },
    initUser(){
      var selectRows = this.$refs.multipleTable.selection;
      var msg = "";
      if (selectRows.length == 0) {
        msg = "请勾选一行数据";
      } else if (selectRows.length > 1) {
        msg = "只允许勾选一行数据";
      }else if(selectRows[0].state=='1'){
        msg = "数据无效时无法编辑";
      }
      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }
      var userName = selectRows[0].userName;
      this.$confirm("请确认是否初始化用户["+userName+"]", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info"
      }).then(() => {
        var id = selectRows[0].id;
        initUser(id)
          .then(res => {
              this.$message.success(res.data.retMsg);
              this.$refs.multipleTable.clearSelection;
              this.init();
          })
          .catch(err => {
            this.$message.error(err.message);
          });
      });

    },
     stop() {
      var selectRows = this.$refs.multipleTable.selection;
      var msg = "";
      if (selectRows.length == 0) {
        msg = "请勾选数据";
      } else {
        for (var i = 0; i < selectRows.length; i++) {
          var row = selectRows[i];
          var status = row.state;
          if (status == 1) {
            msg = "无法禁用已禁用的用户,请重新勾选";
            break;
          }
        }
      }

      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }
      this.$confirm("是否禁用选中的用户", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info"
      }).then(() => {
        var ids = [];
        for (var i = 0; i < selectRows.length; i++) {
          var row = selectRows[i];

          var id = row.id;
          ids.push(id);
        }
        disable(ids)
          .then(res => {
            this.$message.success(res.data.retMsg);
            this.$refs.multipleTable.clearSelection;
            this.init();
          })
          .catch(err => {
            this.$message.error(err.message);
          });
      });
    },
    recover() {
      var selectRows = this.$refs.multipleTable.selection;
      var msg = "";
      if (selectRows.length == 0) {
        msg = "请勾选数据";
      } else {
        for (var i = 0; i < selectRows.length; i++) {
          var row = selectRows[i];
          var status = row.state;
          if (status == 0) {
            msg = "无法启用已启用的用户,请重新勾选";
            break;
          }
        }
      }

      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }
      this.$confirm("是否启用选中的用户", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info"
      }).then(() => {
        var ids = [];
        for (var i = 0; i < selectRows.length; i++) {
          var row = selectRows[i];

          var id = row.id;
          ids.push(id);
        }
        enable(ids)
          .then(res => {
            this.$message.success(res.data.retMsg);
            this.$refs.multipleTable.clearSelection;
            this.init();
          })
          .catch(err => {
            this.$message.error(err.message);
          });
      });
    },
    add() {
      this.dialogVisible = true;

      this.isAdd = true;
      this.isEdit = false;
     // this.clearDialog();
    },
    edit() {
      var selectRows = this.$refs.multipleTable.selection;
      var msg = "";
      if (selectRows.length == 0) {
        msg = "请勾选一行数据";
      } else if (selectRows.length > 1) {
        msg = "只允许勾选一行数据";
      }else if(selectRows[0].state=='1'){
        msg = "数据无效时无法编辑";
      }
      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }

      var id = selectRows[0].id;
      var param = {
        id: id
      };
      view(id)
        .then(res => {
          this.dialogFrom = res.data.body;
          this.dialogVisible = true;
          this.isAdd = false;
          this.isEdit = true;
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    },
    addDone() {
      this.$refs["dialogFrom"].validate(valid => {
        if (valid) {
          if(this.dialogFrom.ifFace=='0' && this.uploadFile==null){
            this.$message.error("请上传人员照片");
            return false;
          }
          if(this.dialogFrom.ifIpLimit=='0' && (this.dialogFrom.ipAddr==null || this.dialogFrom.ipAddr=='')){
            this.$message.error("请输入限定IP");
            return false;
          }
          if(this.dialogFrom.userCode.length<6 || this.dialogFrom.userCode.length>11){
            this.$message.error("账号长度必须在6-11位");
            return false;
          }
          var formData = new FormData;
          if(this.uploadFile!=null){

              if(this.uploadFile.raw.size>1024*1024){
                this.$message.error("照片大小不能超过1M");
                return false;
              }
              formData.append("file",this.uploadFile.raw);
          }

          for(var key in this.dialogFrom){
              if(this.dialogFrom[key]!=null){
                formData.append(key,this.dialogFrom[key]);
              }else{
                formData.append(key,"");
              }

          }
         // var params = this.dialogFrom;
         // params.inputUser=1;
          add(formData)
            .then(res => {
              this.$message.success(res.data.retMsg);
              this.clearDialog();
              this.dialogVisible = false;
              this.fileList=[];
              this.uploadFile=null;
              this.init();
              //this.initPrvgInfoSelect();
            })
            .catch(err => {
              this.$message.error(err.message);
            });
        } else {
          return false;
        }
      });
    },
    editDone() {
       this.$refs["dialogFrom"].validate(valid => {
        if (valid) {
          //var params = this.dialogFrom;
           var formData = new FormData;
          if(this.uploadFile!=null){
              formData.append("file",this.uploadFile.raw);
          }

          for(var key in this.dialogFrom){
              formData.append(key,this.dialogFrom[key]);
          }
          update(formData)
            .then(res => {
              this.$message.success(res.data.retMsg);
              this.clearDialog();
              this.dialogVisible = false;
              this.init();
             // this.initPrvgInfoSelect();
            })
            .catch(err => {
              this.$message.error(err.message);
            });
        } else {
          return false;
        }
      });
    },
    beforeInit() {
      this.url = baseUrl+"/userInfo/list";
      //this.params = { page: this.page, deptId: this.deptId };
      this.params = this.queryParm;
      this.params.pageNo = this.page;
      this.params.pageSize = this.size;
      return true;
    },
    clearSearch() {
      this.queryParm = {

      };
    },
    clearDialog() {
      //打开对话框后清理
      clearJson(this.dialogFrom);
      this.$refs["dialogFrom"].resetFields();
    },
    clickRow(row){
      this.$refs.multipleTable.toggleRowSelection(row);
    }

  }
};
</script>

<style>
.input-div {
  float: left;
  margin-left: 15px;
}
.row-span {
  margin-top: 5px;
}

.col-left {
  span: 10;
  text-align: right;
}

.col-right {
  span: 14;
  text-align: left;
}

.add-diaglog-height {
  height: 500px;
}
.view-diaglog-height {
  height: 300px;
  padding-top: 30px;
}
</style>
