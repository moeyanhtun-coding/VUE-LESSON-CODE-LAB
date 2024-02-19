<template>
    <div>
        <input class="form-control" v-model="ListName" type="text"  @keyup.enter="toSave" v-if="isEdit" >
            <span v-else @dblclick="toEdit">{{ ListName }}</span>
    </div>
</template>

<script>

    export default {
        name : 'EachPage',
        data() {
            return {
                title:'Todo List',
                ListName : '',
                isEdit:true,
            }
        },
        methods: {
            toSave() {
               this.isEdit = false;
            },
            toEdit(){

               this.isEdit = true ;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>