<template>
  <div class="app-container">
    <basic-container>
      <el-form ref="form" label-width="120px">
        <el-collapse-transition>
          <div v-show="showSearchFlag" class="transition-box">
            <el-row :gutter="20" class="row-span">
              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-form-item label="应用系统：" size="medium">
                  <el-select v-model="queryParm.appId" placeholder="请选择" clearable filterable @change="selectApp">
                    <el-option v-for="item in appInfos" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-form-item label="角色名称：" size="medium">
                  <el-select v-model="queryParm.id" placeholder="请选择" clearable filterable @change="selectApp1">
                    <el-option v-for="item in roleInfos1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-form-item label="角色状态：" size="medium">
                  <el-select v-model="queryParm.state" placeholder="请选择" clearable>
                    <el-option key="0" label="正常" value="0" />
                    <el-option key="1" label="无效" value="1" />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xl="4" :lg="7" :md="8" :sm="10" :xs="10">
                <el-button type="primary" size="medium" style="float:left" icon="el-icon-search" @click="toQuery" v-if="$buttonPrvgs('S_ROLE_MANAGE.SELECT')">搜索</el-button>
                <el-button size="medium" style="float:left" icon="el-icon-delete" @click="clearSearch">清空</el-button>
              </el-col>
            </el-row>
          </div>
        </el-collapse-transition>

        <el-row :gutter="20" class="row-span">
          <el-col :xl="20" :lg="24" :md="24" :sm="24" :xs="24">
            <el-button class="filter-item" type="primary" icon="el-icon-plus" size="medium" @click="add" v-if="$buttonPrvgs('S_ROLE_MANAGE.ADD')">新增</el-button>

            <el-button class="filter-item" type="info" icon="el-icon-edit" size="medium" @click="edit" v-if="$buttonPrvgs('S_ROLE_MANAGE.EDIT')">编辑</el-button>

            <el-button class="filter-item" type="success" plain icon="el-icon-check" size="medium" @click="recover" v-if="$buttonPrvgs('S_ROLE_MANAGE.ENABLE')">启用</el-button>

            <el-button class="filter-item" type="info" plain icon="el-icon-close" size="medium" @click="stop" v-if="$buttonPrvgs('S_ROLE_MANAGE.DISABLE')">禁用</el-button>

            <el-button class="filter-item" type="primary" plain icon="el-icon-paperclip" size="medium" @click="privilege" v-if="$buttonPrvgs('S_ROLE_MANAGE.PRIVILEGE')">模块授权</el-button>

            <el-button class="filter-item" type="primary" plain icon="el-icon-user" size="medium" @click="groupManaga" v-if="$buttonPrvgs('S_ROLE_MANAGE.GROUPMANAGE')">成员管理</el-button>
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
              <el-button icon="el-icon-search" circle size="medium" @click="showSearchFlag=!showSearchFlag"></el-button>
            </el-tooltip>
          </el-col>
        </el-row>
      </el-form>

      <el-divider />
      <!--表格渲染-->
      <el-table ref="multipleTable" v-loading="loading" :data="tableData" highlight-current-row size border @row-click="clickRow" @cell-dblclick="view" max-height="640"
        height="500" :header-cell-style="{fontSize:'14px',fontWeight:900,color:'#000',background:'#F3F3F3',}" style="width: 100%;">
        <el-table-column align="center" type="selection" width="50" />
        <el-table-column align="center" prop="appName" v-if="showCol.appName.value" label="应用系统" />
        <el-table-column align="center" prop="appShortName" v-if="showCol.appShortName.value" label="系统简称" />
        <el-table-column align="center" sortable prop="roleCode" v-if="showCol.roleCode.value" label="角色代码" />
        <el-table-column align="center" prop="roleName" v-if="showCol.roleName.value" label="角色名称" />
        <el-table-column align="center" prop="state" v-if="showCol.state.value" label="角色状态" >
          <template slot-scope="scope">
            <span v-if="scope.row.state == '0'" style="color:blue;">有效</span>
            <span v-else-if="scope.row.state == '1'" style="color:red;">无效</span>
          </template>
        </el-table-column>
        <el-table-column align="center" sortable prop="inputTime" v-if="showCol.inputTime.value" label="创建时间" />
        <el-table-column align="center" sortable prop="updateTime" v-if="showCol.updateTime.value" label="更新时间" />
        <el-table-column align="center" prop="remark" v-if="showCol.remark.value" label="备注信息" />
      </el-table>
      <!--分页组件-->
      <div style="text-align: right">
        <el-pagination :total="total" :current-page="page+1" :page-sizes="[10, 20, 50, 100,500]" :page-size="size" style="margin-top: 8px;"
          layout="total, sizes, prev, pager, next, jumper" @size-change="sizeChange" @current-change="pageChange" @prev-click="prevPage"
          @next-click="nextPage" />
      </div>
    </basic-container>

    <!--模块授权对话框-->
    <el-dialog title="角色授权" :visible.sync="shouquan" width="36%" class="div-display">
      <!-- <el-table :data="shouquaninfo"  row-key="id" @selection-change="selections" tree-prop="{children:'children',hasChildren:'hasChildren'}"
       show-checkbox ref="multipleTable">
        <el-table-column  type="selection" :reserve-selection="true" ></el-table-column>
        <el-table-column prop="label" label="模块名称" ></el-table-column>
        <el-table-column prop="label" label="模块名称" ></el-table-column>
        <el-table-column prop="label" label="备注" ></el-table-column>
        <el-table-column prop="label" label="添加时间" ></el-table-column>
        <el-table-column prop="id" label="模块代码" ></el-table-column>
        <el-table-column prop="label" label="开发着" ></el-table-column>
        <el-table-column prop="label" label="权限角色" ></el-table-column>
      </el-table> -->
      <div style="height:500px">
        <el-scrollbar style="height:100%">
          <div>
            <el-form label-position="right" label-width="200px">
              <el-row>
                <el-col :xl="10" :lg="24" :md="24" :sm="24" :xs="24">
                  <el-form-item label="当前角色：" size="medium">
                    {{dialogFrom.roleName}}
                  </el-form-item>
                </el-col>
                <el-col :xl="10" :lg="24" :md="24" :sm="24" :xs="24">
                  <el-form-item label="角色代码：" size="medium">
                    {{dialogFrom.roleCode}}
                  </el-form-item>
                </el-col>
              </el-row>

            </el-form>
          </div>
          <el-divider content-position="left">{{dialogFrom.appName}}</el-divider>
          <div>
            <div class="custom-tree-container">
              <el-tree  
              :data="privgFuncs" 
              ref="prvgFuncTree"
              node-key="id" 
             
              :expand-on-click-node="true" 
              show-checkbox
              :default-checked-keys="defaultCheckIds" 
              :filter-node-method="filterNode"
              >
                <div class="custom-tree-node" slot-scope="{ node,data }" :class="{'leaf-class':node.isLeaf==true}">
                  <p>{{ node.label }}</p>
                  <div style="margin-left:20px; display:block"  v-if="node.isLeaf" @click="getCurrentNode(node,data)">
                   <!--  <el-checkbox label="增加"  size="medium" ></el-checkbox>
                    <el-checkbox label="删除"  size="medium" ></el-checkbox>
                    <el-checkbox label="修改"  size="medium" ></el-checkbox>
                    <el-checkbox label="查询"  size="medium" ></el-checkbox> -->
                  </div>
                </div>
              </el-tree>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveRolePrvg">保存</el-button>
        <el-button @click="shouquan = false">取消</el-button>
      </span>
    </el-dialog>

    <!-- 新增对话框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="35%" @closed="clearDialog" :close-on-press-escape="false" :close-on-click-modal="false">
      <div>
        <el-form label-position="right" label-width="200px" :model="dialogFrom" ref="dialogFrom" :rules="rules">
          <el-form-item label="应用系统：" size="medium" prop="appId" v-if="isAdd">
            <el-select v-model="dialogFrom.appId" placeholder="请选择" clearable filterable @change="selectApp1"  style="width: 200px">
                <el-option v-for="item in appInfos" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>

          <el-form-item label="角色代码：" size="medium" prop="roleCode">
            <el-input placeholder="请输入角色代码" class="filter-item" clearable style="width: 200px" v-model="dialogFrom.roleCode" />
          </el-form-item>

          <el-form-item label="角色名称：" size="medium" prop="roleName">
            <el-input placeholder="请输入角色名称" class="filter-item" clearable style="width: 200px" v-model="dialogFrom.roleName" />
          </el-form-item>

          <el-form-item label="备注信息：" size="medium" prop="remark">
            <el-input placeholder="请输入备注信息" class="filter-item" clearable rows="6" style="width: 300px;" v-model="dialogFrom.remark" type="textarea"
              show-word-limit maxlength="120" />
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" v-if="isAdd" @click="addDone">保存</el-button>
        <el-button type="primary" v-if="isEdit" @click="editDone">保存</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 组员分配对话框 -->
    <el-dialog title="成员管理" :visible.sync="assignDialogFlag" width="35%" >
      <div>
        <div style="text-align:center">
          <span style="font-size:20px;font-weight:300">{{roleName}}</span>
        </div>
        <div style="margin-top:30px;text-align:center">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="inUserList"
            filterable
            :titles="['未分配用户', '已分配用户']"
            :data="allUserList"
            ref="transfer"
            
          >
          </el-transfer>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveAssign">保存</el-button>
        <el-button @click="assignDialogFlag = false">取 消</el-button>
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
import {mapAction} from "vuex"
import { jsonData } from "./data/json";
import { baseUrl } from "@/config/env";
import {clearJson} from "@/util/util";

import {
  getAppInfoSelect,
  getRoleInfoSelect,
  getPrvgFuncTree,
  getPrvgFuncByRoleId,
  getUserByRole,
  assign,
  add,
  grant,
  view,
  update,
  enable,
  disable
} from "@/api/cgs-exam/systemManage/roleInfo";
export default {
  name: "coach",
  mixins: [initData],
  data() {
    return {
      queryParm: jsonData.queryParm,
      showCol: jsonData.showCol,
      dialogFrom: jsonData.dialogFrom,
      groupPeoples: jsonData.groupPeoples,
      showSearchFlag: true,
      dialogVisible: false,
      activeName: "first",
      group: jsonData.group,
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
      rules: jsonData.rules,
      appInfos:[],
      roleInfos1:[],
      roleInfos2:[],
      shouquan:false,
      //shouquaninfo:jsonData.shouquaninfo.quanxian,
      privgFuncs:[],
      defaultCheckIds:[],
      roleId:0,
      roleName:'',
      assignDialogFlag:false,
      inUserList:[],
      allUserList:[],
      leftTree:[],
      prvgTreeLeafNode:[],
      isLeaf:true
    };
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
    this.getAppInfoSelect()
  },

  mounted() {
    //this.initNonroadData();
  },
  computed: {
    dialogTitle: function () {
      if (this.isEdit) {
        return "角色信息编辑";
      }
      if (this.isAdd) {
        return "角色信息新增";
      }
    },
  },
  methods: {
    // ...mapAction(['GetMenu']),
    getAppInfoSelect(){
      getAppInfoSelect()
      .then(res => {
        this.appInfos = res.data.body;
        if(this.queryParm.appId) {
          this.initRoleInfoSelect1(this.queryParm.appId);
        } 
      })
      .catch(err => {
        this.appInfos = [];
      });
    },

    selectApp(id){
      this.initRoleInfoSelect1(id);
    },
    selectApp1(id){
      this.initRoleInfoSelect2(id);
    },

    initRoleInfoSelect1(id){
      let param = {appId:id};
      getRoleInfoSelect(param)
      .then(res => {
        this.roleInfos1 = res.data.body;       
      })
      .catch(err => {
        this.roleInfos1 = [];
      });
    },

    initRoleInfoSelect2(id){
      let param = {appId:id};
      getRoleInfoSelect(param)
      .then(res => {
        this.roleInfos2 = res.data.body;       
      })
      .catch(err => {
        this.roleInfos2 = [];
      });
    },
    groupManaga() {
      //this.$alert("成员管理!");
      var selectRows = this.$refs.multipleTable.selection;
      var msg = "";
      if (selectRows.length == 0) {
        msg = "请勾选一行数据";
      } else if (selectRows.length > 1) {
        msg = "只允许勾选一行数据";
      }else if(selectRows[0].state=='1'){
        msg = "数据无效时无法操作";
      }
      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }
      this.roleName =  selectRows[0].roleName;
      let id = selectRows[0].id;
      getUserByRole(id)
        .then(res => {
          let inList=[];
          let data = res.data.body;
          data.assigned.forEach(obj=>{
              inList.push(obj.key);
          });
          this.assignDialogFlag = true;
          this.allUserList = data.all;
          this.inUserList = inList;
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    },
    saveAssign(){
        //this.$alert("saveAssign");
        console.log("inList:"+this.inUserList);
        let param={
          roleId:this.$refs.multipleTable.selection[0].id,
          userIds:this.inUserList.join(",")
        };
        assign(param)
          .then(res => {
                this.$message.success(res.data.retMsg);
                this.assignDialogFlag = false;
          })
          .catch(err => {
            this.$message.error(err.message);
          });
    },
    getCurrentNode(node,data){
      console.log(data)
      console.log(node)
    },
    check(data,state){
      console.log(data)
    },
    view() {
      this.showView = true;
    },
    colseView() {
      this.showView = false;
    },
    selections(){
       this.$nextTick(()=>{
       
        that.shouquaninfo.forEach(item=>{
        console.log(item)
        if(item.id!=="1"&&item.id!="2"){
          that.$refs.table.toggleRowSelection(item)
          console.log(that.$refs.table.toggleRowSelection(item))
        }
      })
      })
    },
    privilege() { 
      //  this.$alert("模块授权!");
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
      this.initPrvgFuncTree(selectRows[0].appId);
      this.initRolePrvgFunc(selectRows[0].id);
      this.defaultCheckIds=[];
      this.shouquan = true;
      this.roleId = selectRows[0].id;
      this.dialogFrom = selectRows[0];
    },
    // 处理系统功能树，children的数组
    handelePrvgTree(data){
      this.leftTree=data
     data.forEach((item,index)=>{
       if(item.children&&item.children.length>0){
        this.handelePrvgTree(item.children);
       }
       else{
         if(item.ifLeaf&&item.ifLeaf==true){
          this.prvgTreeLeafNode.push(item);
         }
       }
     })
    },
    // 过滤掉叶子结点
    filterNode(value,data){debugger
      return data.isLeaf==this.isLeaf?false:true
    },
    initPrvgFuncTree(id){
      getPrvgFuncTree(id)
      .then(res => {
        this.privgFuncs = res.data.body; 
        this.$refs.prvgFuncTree.filter(this.isLeaf)
        this.handelePrvgTree(this.privgFuncs)
      })
      .catch(err => {
        this.privgFuncs = [];
      });
    },
    initRolePrvgFunc(id){
      getPrvgFuncByRoleId(id)
      .then(res => {
        this.defaultCheckIds = res.data.body;       
      })
      .catch(err => {
        this.defaultCheckIds = [];
      });
    },
    saveRolePrvg(){
      var funcIds =[];

       // console.log(JSON.stringify(this.$refs["prvgFuncTree"].getCheckedNodes()));
         //this.shouquan = false; 
      this.$refs["prvgFuncTree"].getCheckedNodes().forEach(obj => {
        if(obj.ifLeaf){
          funcIds.push(obj.id);
        }
      });
      console.log(funcIds);
      let param={};
      param.roleId = this.roleId;
      param.funcIds = funcIds.join(",");
      grant(param)
        .then(res => {
              this.$message.success(res.data.retMsg);
              this.shouquan = false;
              this.roleId=0;
              
        })
        .catch(err => {
          this.roleId=0;
          this.$message.error(err.message);
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
            msg = "无法禁用已禁用的角色,请重新勾选";
            break;
          }
        }
      }

      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }
      this.$confirm("是否禁用选中的角色", "提示", {
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
            msg = "无法启用已启用的角色,请重新勾选";
            break;
          }
        }
      }

      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }
      this.$confirm("是否启用选中的角色", "提示", {
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
          var params = this.dialogFrom;
          params.inputUser=1;
          add(params)
            .then(res => {
              this.$message.success(res.data.retMsg);
              this.clearDialog();
              this.dialogVisible = false;
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
          var params = this.dialogFrom;
          update(params)
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
     this.url = baseUrl+"/roleInfo/list";
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
      this.$refs.dialogFrom.resetFields();
    },
    clickRow(row){
      this.$refs.multipleTable.toggleRowSelection(row);
    }
  },
};
</script>

<style lang="scss">
.custom-tree-node{
  flex:1;
  display:flex;
  align-items: center;
  justify-content: space-between;
  font-size:14px;
  padding-right:8px;
}
.leaf-class{
  
}


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
/*
  去掉原有高度
*/
.el-tree-node__content{
  height: auto;
}
</style>