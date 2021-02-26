<template>
    <div class="dashboard-container" style="background-color: #F0F2F5">
        <div class="dashboard-editor-container">
            <el-row :gutter="32">
                <el-col :xl="8" :lg="18" :md="16" :sm="20" :xs="24">
                    <el-row>
                        <el-col :span="24">
                            <el-card class="box-card" shadow="always">
                                <div slot="header" class="clearfix">
                                    <span>{{time}}</span>
                                </div>
                                <div>
                                    <h2>欢迎你，{{userInfo.userName}}</h2>
                                    <p>上次登录时间：{{userInfo.lastTime}}</p>
                                    <p>上次登录IP：{{userInfo.lastIP}}</p>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <change-pwdDialog/>
    </div>
</template>
<script>


    import changePwdDialog from "./changePwdDialog"
    import timer from "@/mixins/time";
    import {setStore, getStore} from '@/util/store'

    export default {
        name: "Analyse",
        mixins: [timer],
        components: {changePwdDialog},
        data() {
            return {
                time: "",
                userInfo: {},
            };
        },
        mounted() {
            // 
            // this.userInfo = getStore({name: 'userInfo'});
        },
        methods: {
            // beforeInit() {
            //     return true;
            // },
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .dashboard-editor-container {
        padding: 18px 22px 22px 22px;

        background-color: rgb(240, 242, 245);

        .chart-wrapper {
            background: #fff;
            padding: 16px 16px 0;
            margin-bottom: 32px;
        }
    }
</style>
