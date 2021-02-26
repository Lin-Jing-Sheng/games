<template>
  <div v-if="item.showType==4">

    <el-link type="primary" v-if="!item.oldStringValue == ''" @click="download(item.attr1)"> {{item.oldStringValue}}
    </el-link>

  </div>
  <div v-else-if="item.showType==5">

    <el-image v-if="item.oldStringValue!=null" :src="src1" :preview-src-list="src1p" />

  </div>
  <div v-else>

    {{item.oldStringValue}}

  </div>

</template>
<script type="text/babel">
import { downLoadFileByID } from "@/util/file";
import { deepClone, toImgSrc } from "@/util/util";
export default {
  name: "checkItemOld",
  props: {
    item: {
      type: Object,
      default: {
        name: "",
        attriName: "",
        showType: "",
        oldStringValue: "",
        newStringValue: ""
      }
    }
  },
  data() {
    return { src1: "", src1p: [], src2: "", src2p: [] };
  },
  created() {
    this.showType = this.item.showType;
    this.oldStringValue = this.item.oldStringValue;
    this.newStringValue = this.item.newStringValue;
    if (this.showType == "5") {
      this.src1 = toImgSrc(this.oldStringValue);
      this.src1p.push(this.src1);
      this.src2 = toImgSrc(this.newStringValue);
      this.src2p.push(this.src2);
    }
  },
  computed: {},
  methods: {
    download(id) {
      downLoadFileByID(id);
    }
  }
};
</script>