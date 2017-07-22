<template lang="html" >
    <section class='root'>
        <headerComponent></headerComponent>
        <div id="login">
            <el-form label-width="80px" :model='form'>
                <el-form-item label="用户名">
                    <el-input v-model='form.username'></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model='form.password'></el-input>
                </el-form-item>
                <el-button type="primary" @click="onSubmit" size='small'>登录</el-button>
            </el-form>
        </div>
    </section>
</template>

<script>
import headerComponent from '../component/header.vue';
import api from '../api';

export default {
    data(){
        return{
            form:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        onSubmit(){
            this.http.post(api.login,this.form).then(res=>{
                if(res.data.code==-1){
                    this.$message({
                        showClose:true,
                        message:'用户名不存在',
                        type:'error'
                    });
                }else if(res.data.code==-2){
                    this.$message({
                        showClose:true,
                        message:'密码错误',
                        type:'error'
                    })
                }else{
                    this.$message({
                        showClose:true,
                        message:'登录成功',
                        type:'success'
                    })
                    this.$store.commit('LOGIN');
                    
                }
            })
        }
    },
    components:{
        headerComponent
    }
}
</script>

<style lang="scss">
#login {
    display: flex;
    justify-content: center;
    .el-form {
        width: 400px;
        padding: 20px 20px 30px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .el-button{
        width: 100%;
    }
}
</style>
