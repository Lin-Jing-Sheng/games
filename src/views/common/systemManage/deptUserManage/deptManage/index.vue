<template>
  <div class="app-container">
    <basic-container>
      <el-form ref="form" label-width="120px">
        <el-collapse-transition>
          <div v-show="showSearchFlag" class="transition-box">
            <el-row :gutter="20" class="row-span">
              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-form-item label="部门名称：" size="medium">
                  <el-select v-model="deptName" filterable placeholder="请选择">
                    <el-option
                      v-for="item in deptList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5">
                <el-button
                  type="primary"
                  size="medium"
                  style="float:left"
                  icon="el-icon-search"
                  @click="toQuery"
                >查询</el-button>
                <el-button
                  size="medium"
                  style="float:left"
                  icon="el-icon-close"
                  @click="resetSearch"
                >重置</el-button>
                <!-- <el-form-item label="部门状态：" size="medium">
                  <el-select v-model="queryParm.state" placeholder="请选择" clearable>
                    <el-option key="0" label="有效" value="0" />
                    <el-option key="1" label="无效" value="1" />
                  </el-select>
                </el-form-item> -->
              </el-col>
              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5"></el-col>
              <el-col :xs="13" :sm="13" :md="10" :lg="8" :xl="5"></el-col>
              <el-col :xl="4" :lg="7" :md="8" :sm="10" :xs="10">
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
              @click="addDept"
            >新增</el-button>
            <el-button
              class="filter-item"
              type="info"
              icon="el-icon-edit"
              size="medium"
              @click="editDept"
            >修改</el-button>
            <!-- <el-button
              class="filter-item"
              type="success"
              plain
              icon="el-icon-check"
              size="medium"
              @click="recover"
            >启用</el-button> -->

            <el-button
              class="filter-item"
              type="danger"
              plain
              icon="el-icon-delete"
              size="medium"
              @click="delDept"
            >删除</el-button>
          </el-col>
          <el-col :xl="4" :lg="7" :md="8" :sm="10" :xs="10" style="text-align:right">
            <!-- <el-tooltip class="item" effect="dark" content="刷新" placement="top">
              <el-button icon="el-icon-refresh" circle size="medium" @click="resetSearch"></el-button>
            </el-tooltip> -->
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
      <!-- @cell-dblclick="view" -->
        <!-- 
          @row-click="clickRow"
          highlight-current-row
        
         -->
      <el-table
        ref="deptTab"
        v-loading="tabLoading"
        :data="tableData"
        size
        border
        max-height="640"
        :header-cell-style="{fontSize:'14px',fontWeight:900,color:'#000',background:'#F3F3F3',}"
        style="width: 100%;"
      >
        <el-table-column align="center" type="selection" width="50" />
        <el-table-column align="center" prop="deptCode" v-if="colSet.deptCode.isShow" :label="colSet.deptCode.label" />
        <el-table-column align="center" prop="deptName" v-if="colSet.deptName.isShow" :label="colSet.deptName.label" />
        <el-table-column align="center" prop="parentDept" v-if="colSet.parentDept.isShow" :label="colSet.parentDept.label" />
        <el-table-column align="center" prop="deptType" v-if="colSet.deptType.isShow" :label="colSet.deptType.label" />
        <el-table-column align="center" prop="state" v-if="colSet.state.isShow" :label="colSet.state.label" >
          <template slot-scope="scope">
            <span v-if="scope.row.state == '1'" style="color:blue;">正常</span>
            <span v-else-if="scope.row.state == '0'" style="color:red;">无效</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="remark" v-if="colSet.remark.isShow" :label="colSet.remark.label" />
        <el-table-column align="center" prop="sortId" v-if="colSet.sortId.isShow" :label="colSet.sortId.label" />
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

   <!-- 新增修改对话框 -->
    <el-dialog :title="dialogTitle[dialogType]" :visible.sync="dialogVisible" width="35%" @closed="clearDialog" :close-on-press-escape="false" :close-on-click-modal="false">
      <div>
        <el-form label-position="right" label-width="200px" :model="popFrom" ref="popFrom" :rules="confData.rules">
          <el-form-item label="部门名称：" size="medium" prop="deptName">
            <el-input
              placeholder="请输入部门名称"
              class="filter-item"
              clearable
              style="width: 200px"
              v-model="popFrom.deptName"
            />
          </el-form-item>
          <el-form-item label="父部门：" size="medium" prop="parentDept">
            <el-select v-model="popFrom.parentDept" filterable placeholder="请选择父部门">
              <el-option
                v-for="item in deptList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="部门类型：" size="medium" prop="deptType">
            <el-select v-model="popFrom.deptType" filterable placeholder="请选择部门类型">
              <el-option
                v-for="item in deptList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注信息：" size="medium" prop="remark">
            <el-input
              placeholder="请输入备注信息"
              class="filter-item"
              clearable
              rows="5"
              style="width: 300px;"
              v-model="popFrom.remark"
              type="textarea"
              show-word-limit
              maxlength="120"
            />
          </el-form-item>
          <el-form-item label="排序号：" size="medium" prop="sortId">
            <el-input
              placeholder="请输入排序号"
              class="filter-item"
              clearable
              style="width: 200px"
              v-model="popFrom.sortId"
            />
          </el-form-item>
          <el-form-item label="状态：" size="medium" prop="state">
            <el-select v-model="popFrom.state" >
              <el-option
                v-for="item in confData.deptState"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" v-if="dialogType==='add'" @click="addDone">确定</el-button>
        <el-button type="primary" v-if="dialogType==='edit'" @click="editDone">保存</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 显隐对话框-->
    <el-dialog title="显隐" :visible.sync="colDialog" width="35%">
      <div>
        <el-form label-position="right" label-width="200px">
          <el-checkbox v-for="(col,index) in colSet" :key="index" v-model="col.isShow">{{col.label}}</el-checkbox>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import initData from "@/mixins/initData";
//import { driverInfo } from "@/api/baseInfo/schoolDriver";
// // import { timingSafeEqual } from "crypto";
// import {clearJson} from "@/util/util";

import confData from "./data/config";
import { baseUrl } from "@/config/env";

// ===========
import testData1 from "./data/deptList";
import testData2  from "./data/tableData";
// ===========

import {
  add,
  view,
  update,
  enable,
  disable
} from "@/api/cgs-exam/systemManage/deptInfo";

import {
  fetchDpetList,
  fetchDeptData,
  addSave,
  updateSave,
} from "@/api/system/deptMange/index";
export default {
  name: "coach",
  // mixins: [initData],
  data() {
    return {
      confData: confData,
      deptName: '',
      // 部门列表
      deptList: [],

      // 弹窗
      dialogVisible: false,
      dialogType: 'add',
      dialogTitle: {
        add: '部门新增',
        edit: '部门修改'
      },
      popFrom: {
        deptName: '',
        parentDept: '',
        deptType: '',
        remark: '',
        sortId: '',
        state: '1',
      },

      // 表格列配置
      tabLoading: false,
      // 表格数据
      tableData: [],
      colSet: confData.colSet,

      // 
      colDialog: false,
      showSearchFlag: true,

      // 分页
      total: 0,
      page: 0,
      size: 10,


    };
  },
  created() {

    this.getDeptList();
    this.getDpetData();
     
  },

  updated() {
  },
  computed: {
  },
  methods: {
    getDeptList(){
      // let params = {state:0};
      // fetchDpetList(params)
      // .then(res => {
      //   this.deptList = res.data.body;
      // })
      // .catch(err => {
      //   this.deptList = [];
      // });

      this.deptList = testData1.data;
    },
    getDpetData(params,isTip=false){
      // this.tableData=testData2;
      this.tabLoading = true
      fetchDeptData(params).then(res => {
        let data = res.data
        this.total = data.body.total;
        this.tableData = data.body.data;
        this.tabLoading = false
        isTip && this.$message.success(data.retMsg);
      }).catch(err => {
        this.tabLoading = false
        this.$message.error(err.message);
      })

    },
    // 查询数据
    toQuery() {
      if(this.deptName===''){
        this.$message({
          showClose: true,
          message: '请选择部门',
          type: 'warning'
        });
        return false
      }
      let params = {
        deptName: this.deptName
      }
      this.getDpetData(params,true)
    },
    // 清除查询
    resetSearch() {
      this.deptName = ''
      let params = {
        deptName: ''
      }
      this.getDpetData(params)
    },
    // 新增部门操作
    addDept() {
      this.dialogVisible = true;
      this.dialogType = 'add';
    },
    addDone() {
      this.$refs["popFrom"].validate(valid => {
        if (valid) {
          // var params = this.popFrom;
          // addSave(params)
          //   .then(res => {
          //     this.$message.success(res.data.retMsg);
          //     this.dialogVisible = false;
          //     this.getDeptList();
          //     this.getDpetData();
          //   })
          //   .catch(err => {
          //     this.$message.error(err.message);
          //   });
          
          console.log(this.popFrom)
          this.$message.success('新增成功');
          this.popFrom.id = 123
          this.tableData.unshift(this.popFrom)

          this.dialogVisible = false;
        } else {
          return false;
        }
      });
    },
    // 修改部门
    editDept() {
      let selectRows = this.$refs.deptTab.selection;
      let msg = "";
      if (selectRows.length == 0) {
        msg = "请勾选一行数据";
      } else if (selectRows.length > 1) {
        msg = "只允许勾选一行数据";
      }
      // else if(selectRows[0].state=='1'){
      //   msg = "数据无效时无法编辑";
      // }
      if (msg != "") {
        this.$alert(msg);
        return false;
      }
      // 获取部门详情数据
      // var id = selectRows[0].id;
      // getDeptDetail(id=12)
      //   .then(res => {
      //     this.popFrom = res.data.body;
      //     this.dialogType = 'edit';
      //     this.dialogVisible = true;
      //   })
      //   .catch(err => {
      //     this.$message.error(err.message);
      //   });

      this.popFrom = {
        deptName: selectRows[0].deptName,
        parentDept: selectRows[0].parentDept,
        deptType: selectRows[0].deptType,
        remark: selectRows[0].remark,
        sortId: selectRows[0].sortId,
        state: selectRows[0].state,
      }
      this.dialogType = 'edit';
      this.dialogVisible = true;

    },
    editDone(){
      this.$refs["popFrom"].validate(valid => {
        if (valid) {
          var params = this.popFrom;
          // updateSave(params)
          //   .then(res => {
          //     this.$message.success(res.data.retMsg);
          //     this.dialogVisible = false;
          //     this.getDeptList();
          //     this.getDpetData();
          //   })
          //   .catch(err => {
          //     this.$message.error(err.message);
          //   });
          this.$message.success('修改成功');
          this.popFrom.id = 123
          this.tableData.unshift(this.popFrom)

          this.dialogVisible = false;
        } else {
          return false;
        }
      });
    },
    delDept(){
      let selectRows = this.$refs.deptTab.selection;
      if (selectRows.length == 0) {
        this.$message.warning('请勾选要删除的数据');
        return false;
      }
      console.log(selectRows)

    },
    // 分页操作
    pageChange(e) {
      this.page = e - 1
      this.getDpetData()
    },
    sizeChange(e) {
      this.page = 0
      this.size = e
      this.getDpetData()
    },
    prevPage() {
      this.page = this.page - 1;
      this.getDpetData()
    },
    nextPage() {
      this.page = this.page + 1;
      this.getDpetData()
    },
    
    // 清除校验结果
    clearDialog() {
      this.$refs["popFrom"].clearValidate();
    },
    // clickRow(row){
    //   this.$refs.deptTab.toggleRowSelection(row);
    // }
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
