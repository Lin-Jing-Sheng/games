<template>
  <basic-container>
    <div style="text-align: center;min-height:800px">
    <p >
     首页
    </p>
    <p>欢迎进入车管所考试系统</p>
    </div>
  </basic-container>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "wel",
    data() {
      return {
        activeNames: ['1', '2', '3', '5'],
        logActiveNames: ['13']
      };
    },
    computed: {
      ...mapGetters(["userInfo"]),
    },
    created() {
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  };
</script>

