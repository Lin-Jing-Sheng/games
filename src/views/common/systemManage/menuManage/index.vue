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
                <el-form-item label="菜单名称：" size="medium">
                  <el-cascader  v-model="queryParm.id"
                    :options="menuList1"
                    filterable
                    :show-all-levels="false"
                    :props="{ checkStrictly: true ,emitPath:false,value:'id'}"
                    clearable
                    ref="orgSelectTree"
                    ></el-cascader>
                </el-form-item>
              </el-col>

              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-form-item label="菜单状态：" size="medium">
                  <el-select v-model="queryParm.state" placeholder="请选择" clearable>
                    <el-option key="0" label="有效" value="0" />
                    <el-option key="1" label="无效" value="1" />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xl="4" :lg="7" :md="8" :sm="10" :xs="10">
                <el-button type="primary" size="medium" style="float: left" icon="el-icon-search" @click="toQuery" v-if="$buttonPrvgs('S_MENU_MANAGE.ENABLE')">搜索</el-button>
                <el-button size="medium" style="float: left" icon="el-icon-delete" @click="clearSearch">清空</el-button>
              </el-col>
            </el-row>
          </div>
        </el-collapse-transition>

        <el-row :gutter="20" class="row-span">
          <el-col :xl="20" :lg="12" :md="24" :sm="24" :xs="24">
            <el-button class="filter-item" type="primary" icon="el-icon-plus" size="medium" @click="add" v-if="$buttonPrvgs('S_MENU_MANAGE.ADD')">新增</el-button>
            <el-button class="filter-item" type="info" icon="el-icon-edit" size="medium" @click="edit" v-if="$buttonPrvgs('S_MENU_MANAGE.EDIT')">编辑</el-button>
            <el-button class="filter-item" type="success" plain icon="el-icon-check" size="medium" @click="recover" v-if="$buttonPrvgs('S_MENU_MANAGE.ENABLE')">启用</el-button>
            <el-button class="filter-item" type="info" plain icon="el-icon-close" size="medium" @click="stop" v-if="$buttonPrvgs('S_MENU_MANAGE.DISABLE')">禁用</el-button>
            <el-button class="filter-item" type="primary" plain icon="el-icon-search" size="medium" @click="view" v-if="$buttonPrvgs('S_MENU_MANAGE.VIEW')">查看</el-button>
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
          <el-col :xl="4" :lg="7" :md="8" :sm="10" :xs="10" style="text-align: right">
            <el-tooltip class="item" effect="dark" content="刷新" placement="top">
              <el-button icon="el-icon-refresh" circle size="medium" @click="toQuery"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="显隐" placement="top">
              <el-button icon="el-icon-menu" circle size="medium" @click="colDialog = !colDialog"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="隐藏/展示搜索" placement="top">
              <el-button icon="el-icon-search" circle size="medium" @click="showSearchFlag = !showSearchFlag">
              </el-button>
            </el-tooltip>
          </el-col>
        </el-row>
      </el-form>

      <el-divider />
      <!--表格渲染-->
      <el-table ref="multipleTable" v-loading="loading" :data="tableData" highlight-current-row size border row-key="gndm" default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" @row-click="clickRow"  @cell-dblclick="dbClickRow" max-height="640" height="500" :header-cell-style="{
          fontSize: '14px',
          fontWeight: 900,
          color: '#000',
          background: '#F3F3F3'
        }" style="width: 100%">
        <el-table-column align="center" type="selection" width="50" />
        <el-table-column align="center" prop="appName" v-if="showCol.appName.value" :label="showCol.appName.label" />
        <el-table-column align="center" sortable prop="menuCode" v-if="showCol.menuCode.value" :label="showCol.menuCode.label"/>
        <el-table-column align="center" prop="menuName" v-if="showCol.menuName.value" :label="showCol.menuName.label" />
        <el-table-column align="center" prop="menuIcon" v-if="showCol.menuIcon.value" :label="showCol.menuIcon.label">
          <template slot-scope="scope">
            <i :class="scope.row.menuIcon"></i>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="menuUrl" v-if="showCol.menuUrl.value" :label="showCol.menuUrl.label" />
        <el-table-column align="center" prop="parentMenuCode" v-if="showCol.parentMenuCode.value" :label="showCol.parentMenuCode.label" />
        <el-table-column align="center" sortable prop="parentMenuName" v-if="showCol.parentMenuName.value" :label="showCol.parentMenuName.label" />
        <el-table-column align="center" sortable prop="state" v-if="showCol.state.value" :label="showCol.state.label" >
          <template slot-scope="scope">
            <span v-if="scope.row.state == '0'" style="color:blue;">有效</span>
            <span v-else-if="scope.row.state == '1'" style="color:red;">无效</span>
          </template>
        </el-table-column>
        <el-table-column align="center" sortable prop="orderNum" v-if="showCol.orderNum.value" :label="showCol.orderNum.label" />
        <el-table-column align="center" sortable prop="remark" v-if="showCol.remark.value" :label="showCol.remark.label" />
        <el-table-column align="center" sortable prop="inputTime" v-if="showCol.inputTime.value" :label="showCol.inputTime.label" />
        <el-table-column align="center" sortable prop="updateTime" v-if="showCol.updateTime.value" :label="showCol.updateTime.label" />
      </el-table>
      <!--分页组件-->
      <div style="text-align: right">
        <el-pagination :total="total" :current-page="page + 1" :page-sizes="[10, 20, 50, 100, 500]" :page-size="size" style="margin-top: 8px"
          layout="total, sizes, prev, pager, next, jumper" @size-change="sizeChange" @current-change="pageChange" @prev-click="prevPage"
          @next-click="nextPage" />
      </div>
    </basic-container>

    <!-- 新增对话框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="50%" @close="clearDialog" :close-on-press-escape="false" :close-on-click-modal="false">
      <div>
        <el-form label-position="right" label-width="200px" :model="dialogFrom" ref="dialogFrom" :rules="rules">
          <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="应用系统：" size="medium" prop="appId">
                <el-select v-model="dialogFrom.appId" placeholder="请选择" clearable filterable @change="selectApp2" style="width: 200px">
                  <el-option v-for="item in appInfos" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>



          <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <el-form-item label="菜单图标：" size="medium" prop="menuIcon">
              <el-popover v-model="iconBox" placement="bottom-start" title="点击选择功能图标" width="340" trigger="click">
                <div>
                  <i :class="item.iconName" class="icons" v-for="item in icons" :key="item.iconId" @click="selectIcon(item)"></i>
                </div>
                <el-input slot="reference" placeholder="请输入功能图标" class="filter-item" clearable style="width: 200px"
                v-model="dialogFrom.menuIcon" />
              </el-popover>
            </el-form-item>
          </el-col>

          <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="权限模块：" size="medium">
                <el-cascader  v-model="dialogFrom.prvgId"
                        :options="group2"
                        filterable
                        :show-all-levels="false"
                        :props="{ checkStrictly: true ,emitPath:false,value:'id'}"
                        clearable
                        ref="orgSelectTree"
                        style="width: 200px"
                        ></el-cascader>
              </el-form-item>
          </el-col>

          <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <el-form-item label="菜单路径：" size="medium" prop="menuUrl">
              <el-input placeholder="请输入菜单路径" class="filter-item" clearable style="width: 200px" v-model="dialogFrom.menuUrl" />
            </el-form-item>
          </el-col>


          <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <el-form-item label="上级菜单：" size="medium" prop="menuParent">
              <el-cascader  v-model="dialogFrom.menuParent"
                      :options="menuList2"
                      filterable
                      :show-all-levels="false"
                      :props="{ checkStrictly: true ,emitPath:false,value:'id'}"
                      clearable
                      ref="orgSelectTree"
                      style="width: 200px"
                      ></el-cascader>
            </el-form-item>
          </el-col>

          <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <el-form-item label="打开方式：" size="medium"  prop="openType">
              <el-select v-model="dialogFrom.openType" placeholder="请选择" clearable style="width: 200px">
                  <el-option key="0" label="tab页" value="1" />
                  <el-option key="1" label="窗口" value="2" />
              </el-select>
            </el-form-item>
          </el-col>


          <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <el-form-item label="菜单代码：" size="medium" prop="menuCode">
              <el-input placeholder="请输入菜单代码" class="filter-item" clearable style="width: 200px" v-model="dialogFrom.menuCode" />
            </el-form-item>
          </el-col>

          <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <el-form-item label="排序号：" size="medium" prop="orderNum">
              <el-input placeholder="请输入排序号" class="filter-item" clearable style="width: 200px" v-model="dialogFrom.orderNum"/>
            </el-form-item>
          </el-col>

          <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <el-form-item label="菜单名称：" size="medium" prop="menuName">
              <el-input placeholder="请输入菜单名称" class="filter-item" clearable style="width: 200px" v-model="dialogFrom.menuName" />
            </el-form-item>
          </el-col>

          <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <el-form-item label="备注信息：" size="medium" prop="remark">
              <el-input placeholder="请输入备注信息" class="filter-item" clearable rows="3" style="width: 200px" v-model="dialogFrom.remark" type="textarea"
                show-word-limit maxlength="120" />
            </el-form-item>
          </el-col>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" v-if="isAdd" @click="addDone">保存</el-button>
        <el-button type="primary" v-if="isEdit" @click="editDone">保存</el-button>
        <el-button @click="dialogVisible = false">取 消
        </el-button>
      </span>
    </el-dialog>

    <!-- 查看 -->
    <el-dialog title="菜单详情" :visible.sync="viewDialog" width="55%">
      <div>
        <el-form label-position="right" label-width="200px">
          <el-row>
            <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
              <el-form-item label="应用系统：" size="medium">
                  {{dialogFrom.appName}}
              </el-form-item>
            </el-col>

            <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="菜单图标：" size="medium">

                <template>
                  <i :class="dialogFrom.menuIcon"></i>
                </template>
              </el-form-item>
            </el-col>

            <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="菜单代码：" size="medium">
                {{dialogFrom.menuCode}}
              </el-form-item>
            </el-col>

            <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="菜单路径：" size="medium">
                {{dialogFrom.menuUrl}}
              </el-form-item>
            </el-col>

            <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="菜单名称：" size="medium">
                {{dialogFrom.menuName}}
              </el-form-item>
            </el-col>

             <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="打开方式：" size="medium">
               {{dialogFrom.openType=='1'?'tab页面':'窗口'}}
              </el-form-item>
            </el-col>

            <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="上级菜单代码：" size="medium">
                {{dialogFrom.parentMenuCode}}
              </el-form-item>
            </el-col>

             <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="排序号：" size="medium">
                {{dialogFrom.orderNum}}
              </el-form-item>
            </el-col>

            <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="上级菜单名称：" size="medium">
                {{dialogFrom.parentMenuName}}
              </el-form-item>
            </el-col>

             <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="创建时间：" size="medium">
                {{dialogFrom.inputTime}}
              </el-form-item>
            </el-col>


            <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="菜单状态：" size="medium">
                {{dialogFrom.state=='0'?'有效':'已注销'}}
              </el-form-item>
            </el-col>

            <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
              <el-form-item label="更新时间：" size="medium">
                {{dialogFrom.updateTime}}
              </el-form-item>
            </el-col>

            <el-col :xl="20" :lg="20" :md="20" :sm="20" :xs="20">
              <el-form-item label="备注信息：" size="medium">
                {{dialogFrom.remark}}
              </el-form-item>
            </el-col>

          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="viewDialog = false">关闭</el-button>
      </span>
    </el-dialog>

    <!-- 显隐对话框-->
    <el-dialog title="显隐" :visible.sync="colDialog" width="35%">
      <div>
        <el-form label-position="right" label-width="200px">
          <el-checkbox v-for="(col, index) in showCol" :key="index" v-model="col.value">{{ col.label }}
          </el-checkbox>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import initData from "@/mixins/initData";
//import { driverInfo } from "@/api/baseInfo/schoolDriver";
// // import { timingSafeEqual } from "crypto";
import { jsonData } from "./data/json";
import { baseUrl } from "@/config/env";
import {icons} from "@/const/icons";
import {clearJson} from "@/util/util";
import {
  getAppInfoSelect,
  getMenuSelect,
  getPrvgInfoSelect,
  add,
  view,
  detail,
  update,
  enable,
  disable
} from "@/api/cgs-exam/systemManage/menuInfo";
export default {
  name: "coach",
  mixins: [initData],
  data() {
    return {
      menuList1: [],//页面菜单列表
      menuList2:[],//编辑或对话框里的菜单列表
      group2: [],//权限
      icons:icons,
      iconBox:false,
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
      viewDialog: false,
      rules: jsonData.rules,
      appInfos:[],
      appName:'name'
    };
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
    this.getAppInfoSelect()
  },

  updated() {
    //this.initNonroadData();
    //this.tableData = jsonData.tableData;
  },
  computed: {
    dialogTitle: function () {
      if (this.isEdit) {
        return "菜单编辑";
      }
      if (this.isAdd) {
        return "菜单新增";
      }
    },
  },
  methods: {
    numValid(val){
      this[val]=this[val].replace(/[^0-9]/g,'');
    },
     // 获取系统数据列表,根据appId的值来判断是否加载对应系统的页面菜单
    getAppInfoSelect(){
      getAppInfoSelect()
      .then(res => {
        this.appInfos = res.data.body;
        if(this.queryParm.appId!=undefined) {
          this.getMenuSelect1()
        }
      })
      .catch(err => {
        this.appInfos = [];
      });
    },

    getMenuSelect1(){
      let param = {appId:this.queryParm.appId};
      getMenuSelect(param)
      .then(res => {
        this.menuList1 = res.data.body;
      })
      .catch(err => {
        this.menuList1 = [];
      });
    },

    getMenuSelect2(){
      let param = {appId:this.dialogFrom.appId};
      getMenuSelect(param)
        .then(res => {
          this.menuList2 = res.data.body;
        })
        .catch(err => {
          this.menuList2 = [];
        });
    },

    selectApp(){
      this.getMenuSelect1()
    },

    selectApp2(id){
      this.getMenuSelect2()
      this.initPrvgInfoSelect(id);
    },

    dbClickRow(row){
      this.getDetail(row.id);
    },

    selectIcon(item){
      this.dialogFrom.menuIcon=item.iconName
      this.iconBox=false
    },

    initPrvgInfoSelect(id){
      let param = {appId:id};
      getPrvgInfoSelect(param)
      .then(res => {
        this.group2 = res.data.body;
      })
      .catch(err => {
        this.group2 = [];
      });
    },
    view() {
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
      this.getDetail(id);
    },
    getDetail(id){
      detail(id)
        .then(res => {
          this.dialogFrom = res.data.body;
          this.viewDialog = true;
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    },
    colseView() {
      this.viewDialog = false;
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
            msg = "无法禁用已禁用的菜单,请重新勾选";
            break;
          }
        }
      }

      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }
      this.$confirm("是否禁用选中的菜单", "提示", {
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
            msg = "无法启用已启用的菜单,请重新勾选";
            break;
          }
        }
      }

      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }
      this.$confirm("是否启用选中的菜单", "提示", {
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
          this.initPrvgInfoSelect(this.dialogFrom.appId)
          this.getMenuSelect2()
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
              this.dialogVisible = false;
              this.init();
              this.clearDialog();

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
      this.url = baseUrl+"/menu/list";
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
  },
};
</script>

<style>
.icons {
  font-size:20px;
  margin:6px;
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
</style>
