<template lang="html">
<section class='root'>
    <headerComponent></headerComponent>
    <contentComponent :injectData='arr' :profile='true'></contentComponent>
</section>
</template>

<script>
import headerComponent from '../component/header.vue';
import contentComponent from '../component/content.vue';
import api from '../api';
export default {
    data(){
        return{
            arr:[]
        }
    },
    mounted(){
        this.http.post(api.contentPerson).then(res=>{
            this.arr=res.data.res;
        })
    },
    components:{
        contentComponent,
        headerComponent
    }
}
</script>

<style lang="css">
</style>
