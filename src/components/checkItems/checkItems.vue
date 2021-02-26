<template>
  <div>
    <!--
    <el-row>
      <el-col :span="4">

      </el-col>

      <el-col :span="10">
        修改前
      </el-col>
      <el-col :span="10">
        修改后
      </el-col>

    </el-row>

    <checkItem v-for="(item, index) in items" :key="index" :item="item" />

    !-->
    <el-divider content-position="center">对象对比内容</el-divider>
    <el-table ref="compareTable" :data="items" highlight-current-row border :header-cell-style="{fontSize:'14px',fontWeight:900,color:'#000',background:'#F3F3F3',}" style="width: 100%;">
      <el-table-column align="left" width="200"   prop="name" label="对象对比内容" />
      <el-table-column align="left"   prop="oldStringValue" label="修改前">
        <template slot-scope="scope">
          <checkItemOld :item="scope.row" />
        </template>
      </el-table-column>
      <el-table-column align="left"   prop="newStringValue" label="修改后">
        <template slot-scope="scope">
          <checkItemNew :item="scope.row" />
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>
<script type="text/babel">
import checkItemOld from "./checkItemOld";
import checkItemNew from "./checkItemNew";
export default {
  name: "checkItems",
  components: { checkItemOld, checkItemNew },
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      num: 1 //点击的记数
    };
  },
  computed: {},
  methods: {}
};
</script>