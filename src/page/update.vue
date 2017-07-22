<template lang="html">
    <section class='root'>
        <headerComponent></headerComponent>
        <editComponent :injectData='this.injectData' v-if='this.show' v-on:submit='onSubmit'></editComponent>
    </section>
</template>

<script>
import editComponent from '../component/edit.vue';
import headerComponent from '../component/header.vue';
import api from '../api';
export default {
    data(){
        return{
            injectData:{},
            show:false
        }
    },
    mounted(){
        const list_id=this.$route.query.list_id;
        this.http.get(api.content+list_id).then(res=>{
            this.injectData=res.data.res[0];
            this.show=true;
        })
    },
    components: {
        editComponent,
        headerComponent
    },
    methods:{
        onSubmit(data,sub){
            data.list_id=sub.list_id;
            this.http.post(api.update,data).then(res=>{
                console.log(res);
            })
        }
    }
}
</script>

<style lang="scss"></style>
