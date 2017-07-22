<template lang="html">
    <header id='header'>
        <el-menu :default-active="activeIndex" mode="horizontal" :router='true'>
            <el-menu-item index="home">首页</el-menu-item>
            <el-menu-item index="login" v-show='!isLogin'>登录</el-menu-item>
            <el-menu-item index="sign-up" v-show='!isLogin'>注册</el-menu-item>
            <el-menu-item index="profile" v-show='isLogin'>个人主页</el-menu-item>
            <el-menu-item index="publish" v-show='isLogin'>发表文章</el-menu-item>
            <el-menu-item v-show='isLogin' @click='logout' index=''>登出</el-menu-item>
        </el-menu>
    </header>
</template>

<script>
import {
    mapState
} from 'vuex';
import api from '../api';

export default {
    data() {
        return {
            activeIndex: '1'
        }
    },
    computed: mapState({
        isLogin: state => state.isLogin
    }),
    beforeCreate() {
        this.http.post(api.checkLogin).then(res => {

            if (res.data.session) {
                // 表示当前已经登录
                this.$store.commit('LOGIN');
            }
        })
    },
    methods: {
        logout() {
            this.$confirm('是否退出当前登录？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.http.post(api.logout).then(res=>{
                    if(res.data.code==1){
                        this.$store.commit('LOGOUT');
                        this.$message({
                            type: 'success',
                            message: '退出登录!'
                        });
                    }
                })
            }).catch(()=>{})
        }
    }
}
</script>

<style lang="scss">
#header {
    margin-bottom: 60px;
}
</style>
