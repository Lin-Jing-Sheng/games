<template>
  <div class="app-container">
    <basic-container>
      <el-form ref="form" label-width="120px">
        <el-collapse-transition>
          <div v-show="showSearchFlag" class="transition-box">
            <el-row :gutter="20" class="row-span">
              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-form-item label="组织机构：" size="medium">
                   <el-cascader  v-model="queryParm.id"
                    :options="group1"
                    filterable
                    :show-all-levels="false"
                    :props="{ checkStrictly: true ,emitPath:false,value:'id'}"
                    clearable 
                    ref="orgSelectTree"
                    ></el-cascader>
                </el-form-item>
              </el-col>

              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-form-item label="机构状态：" size="medium">
                  <el-select v-model="queryParm.state" placeholder="请选择" clearable>
                    <el-option key="0" label="有效" value="0" />
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
                  v-if="$buttonPrvgs('S_ORG_MANAGE.SELECT')"
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
          <el-col :xl="20" :lg="24" :md="24" :sm="24" :xs="24">
            <el-button
              class="filter-item"
              type="primary"
              icon="el-icon-plus"
              size="medium"
              @click="add"
              v-if="$buttonPrvgs('S_ORG_MANAGE.ADD')"
            >新增</el-button>

            <el-button
              class="filter-item"
              type="info"
              icon="el-icon-edit"
              size="medium"
              @click="edit"
              v-if="$buttonPrvgs('S_ORG_MANAGE.EDIT')"
            >编辑</el-button>

            <el-button
              class="filter-item"
              type="success"
              plain
              icon="el-icon-check"
              size="medium"
              @click="recover"
              v-if="$buttonPrvgs('S_ORG_MANAGE.ENABLE')"
            >启用</el-button>

            <el-button
              class="filter-item"
              type="info"
              plain
              icon="el-icon-close"
              size="medium"
              @click="stop"
              v-if="$buttonPrvgs('S_ORG_MANAGE.DISABLE')"
            >禁用</el-button>
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
        @row-click="clickRow"
        highlight-current-row
        size
        border
        row-key="id"
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        @cell-dblclick="view"
        max-height="640"
        height="500"
        :header-cell-style="{fontSize:'14px',fontWeight:900,color:'#000',background:'#F3F3F3',}"
        style="width: 100%;"
      >
        <el-table-column align="center" type="selection" width="50" />
        <el-table-column align="center" prop="orgCode" v-if="showCol.orgCode.value" :label="showCol.orgCode.label" />
        <el-table-column align="center" prop="orgName" v-if="showCol.orgName.value" :label="showCol.orgName.label" />
        <el-table-column align="center" prop="orgShortName" v-if="showCol.orgShortName.value" :label="showCol.orgShortName.label" />
        <el-table-column align="center" prop="orgParentName" v-if="showCol.orgParentName.value" :label="showCol.orgParentName.label" />
        <el-table-column align="center" prop="orderNum" v-if="showCol.orderNum.value" :label="showCol.orderNum.label" />
        <el-table-column align="center" prop="state" v-if="showCol.state.value" :label="showCol.state.label" >
          <template slot-scope="scope">
            <span v-if="scope.row.state == '0'" style="color:blue;">有效</span>
            <span v-else-if="scope.row.state == '1'" style="color:red;">无效</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="remark" v-if="showCol.remark.value" :label="showCol.remark.label" />
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
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="35%"  @closed="clearDialog" :close-on-press-escape="false" :close-on-click-modal="false">
      <div>
        <el-form label-position="right" label-width="200px" :model="dialogFrom" ref="dialogFrom" :rules="rules">
          <el-form-item label="上级机构：" size="medium" >
            <el-cascader  v-model="dialogFrom.orgParent"
                    :options="group1"
                    filterable
                    :show-all-levels="false"
                    :props="{ checkStrictly: true ,emitPath:false,value:'id'}"
                    clearable 
                    ref="orgSelectTree"
                    style="width: 200px"
                    ></el-cascader>
          </el-form-item>	

          <el-form-item label="机构代码：" size="medium" prop="orgCode">
            <el-input
              placeholder="请输入机构代码"
              class="filter-item"
              clearable
              style="width: 200px"
              v-model="dialogFrom.orgCode"
            />
          </el-form-item>

          <el-form-item label="机构名称：" size="medium" prop="orgName">
            <el-input
              placeholder="请输入机构名称："
              class="filter-item"
              clearable
              style="width: 200px"
              v-model="dialogFrom.orgName"
            />
          </el-form-item>

          <el-form-item label="机构简称：" size="medium" prop="orgShortName">
            <el-input
              placeholder="请输入机构简称："
              class="filter-item"
              clearable
              style="width: 200px"
              v-model="dialogFrom.orgShortName"
            />
          </el-form-item>

          <el-form-item label="排序号：" size="medium" prop="orderNum">
            <el-input
              placeholder="请输入排序号"
              class="filter-item"
              clearable
              style="width: 200px"
              v-model="dialogFrom.orderNum"
            />
          </el-form-item>

          <el-form-item label="备注信息：" size="medium" prop="remark">
            <el-input
              placeholder="请输入备注信息"
              class="filter-item"
              clearable
              rows="6"
              style="width: 300px;"
              v-model="dialogFrom.remark"
              type="textarea"
              show-word-limit
              maxlength="120"
            />
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" v-if="isAdd" @click="addDone">保存</el-button>
        <el-button type="primary" v-if="isEdit" @click="editDone">保存</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
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
//import { driverInfo } from "@/api/baseInfo/schoolDriver";
// // import { timingSafeEqual } from "crypto";
import { jsonData } from "./data/json";
import { baseUrl } from "@/config/env";

import {
  getOrgInfoSelect,
  add,
  view,
  update,
  enable,
  disable
} from "@/api/cgs-exam/systemManage/orgInfo";
export default {
  name: "coach",
  mixins: [initData],
  data() {
    return {
      group1:[],
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
      total: 0,
      page: 0,
      size: 10,
      fslx: "",
      peoples: [],
      groups: [],
      showView: false,
      viewPeopleList: jsonData.viewPeopleList,
      rules: jsonData.rules
     // tableDatatableDatatableDatatableData:jsonData.tableData
    };
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
    this.initOrgInfoSelect();
  },
  mounted() {
    //this.initNonroadData();
    // this.tableData=jsonData.tableData;
  },
  computed: {
    dialogTitle: function() {
      if (this.isEdit) {
        return "组织机构编辑";
      }
      if (this.isAdd) {
        return "组织机构新增";
      }
    }
  },
  methods: {
    selectOrg(obj){
       console.log(JSON.stringify(obj)); 
    },
    initOrgInfoSelect(){
      getOrgInfoSelect()
      .then(res => {
        this.group1 = res.data.body;       
      })
      .catch(err => {
        this.group1 = [];
      });
    },
    view() {
      this.showView = true;
    },
    colseView() {
      this.showView = false;
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
            msg = "无法禁用已禁用的组织机构,请重新勾选";
            break;
          }
        }
      }

      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }
      this.$confirm("是否禁用选中的组织机构", "提示", {
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
            msg = "无法启用已启用的组织机构,请重新勾选";
            break;
          }
        }
      }

      if (msg != null && msg != "") {
        this.$alert(msg);
        return false;
      }
      this.$confirm("是否启用选中的组织机构", "提示", {
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
      //console.log(JSON.stringify(this.queryParm.id));
      //console.log(this.$refs["orgSelectTree"].getCheckedNodes()[0].data.label);
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
              this.initOrgInfoSelect();
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
              this.initOrgInfoSelect();
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
      this.url = baseUrl+"/orgInfo/list";
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
      this.$refs["dialogFrom"].resetFields();
      this.dialogFrom={};
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