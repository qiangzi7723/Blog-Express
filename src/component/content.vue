<template lang="html">
<section id="content">
    <div class="content-tab" v-for='v in arrMarked'>
        <div class="content-title">
            {{v.title}}
        </div>
        <div class="content-content" v-html='v.content'>
        </div>
        <div class="content-bottom">
            <span class='time'>{{v.date}}</span>
            <div class="">
                <span class='author'>{{v.username}}</span>
                <router-link :to='{path:"/update",query:{list_id:v.list_id}}' tag='span' class='cursor' v-show='profile'>编辑</router-link>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import marked from 'marked';
export default {
    props:['injectData','profile'],
    computed:{
        arrMarked(){
            this.injectData=this.injectData.reverse();
            this.injectData.forEach((obj)=>{
                obj.content=marked(obj.content);
            })
            return this.injectData;
        }
    }
}
</script>

<style lang="scss">
#content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content-tab{
    width: 400px;
    box-sizing: border-box;
    padding: 20px;
    margin-bottom: 60px;
    border:1px solid #ccc;
    border-radius: 4px;
    .content-title{
        color: #20a0ff;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .content-bottom{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #b4b4b4;
    }
    .cursor{
        margin-left: 10px;
        cursor: pointer;
        &:hover{
            color: #20a0ff;
        }
    }
}
</style>
