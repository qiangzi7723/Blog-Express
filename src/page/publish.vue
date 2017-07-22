<template lang="html">
    <section class='root'>
        <headerComponent></headerComponent>
        <editComponent v-on:submit='onSubmit'></editComponent>
    </section>
</template>

<script>
import editComponent from '../component/edit.vue';
import headerComponent from '../component/header.vue';
import api from '../api';
export default {
    components: {
        editComponent,
        headerComponent
    },
    methods:{
        onSubmit(data){
            this.http.post(api.publish,data).then(res => {

            })
        }
    }
}
</script>

<style lang="scss"></style>
