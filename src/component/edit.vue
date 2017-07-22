<template lang="html">
    <div id="edit">
        <el-form label-width="80px" :model='form'>
            <el-form-item label="标题">
                <el-input v-model='form.title'></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-input type='textarea' placeholder='支持MarkDown语法' :rows="6" v-model='form.content'></el-input>
            </el-form-item>
            <el-form-item label="预览">
                <div id="md-preview" v-html='previewContent'></div>
            </el-form-item>
            <el-button type="primary" size='small' @click='onSubmit'>发布</el-button>
        </el-form>
    </div>
</template>

<script>
import marked from 'marked';
export default {
    props: ['injectData'],
    data() {
        return {
            form: {
                title: this.injectData && this.injectData.title,
                content: this.injectData && this.injectData.content
            }
        }
    },
    computed: {
        previewContent() {
            return this.form && this.form.content && marked(this.form.content);
        }
    },
    methods: {
        onSubmit() {
            this.$emit('submit',this.form,this.injectData);
        }
    }
}
</script>

<style lang="scss">
#edit {
    display: flex;
    justify-content: center;
    .el-form {
        width: 400px;
        padding: 20px 20px 30px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .el-button {
        width: 100%;
    }
}
</style>
