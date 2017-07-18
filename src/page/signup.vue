<template lang="html">
    <div id='sign-up'>
        <el-form label-width="80px" :model='form'>
            <el-form-item label="用户名">
                <el-input v-model='form.name'></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model='form.password'></el-input>
            </el-form-item>
            <el-form-item label="重复密码">
                <el-input v-model='form.passEnsure'></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select placeholder="请选择性别" v-model='form.sex'>
                    <el-option label="男" value="male"></el-option>
                    <el-option label="女" value="female"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="个人介绍">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="头像">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :file-list="form.fileList">
                  <el-button size="small" type="">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-button type="primary" @click="onSubmit" size='small'>立即创建</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                password: '',
                passEnsure: '',
                sex: '',
                desc: '',
                fileList:[]
            }
        }
    },
    methods:{
        onSubmit(){
            console.log(this.form);
        }
    }
}
</script>

<style lang="scss">
#sign-up {
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
