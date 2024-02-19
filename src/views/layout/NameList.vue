<template>
    <div>
    <div class="d-flex" v-for="(item,index) in tasks" :key="index">
        <div class="text-primary">{{ item.name }}</div>
            <div class="ms-4">{{ item.age }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NameList",
        data(){
            return {
                title : 'This is List Page',
                tasks : [
                    {
                        name : 'Moe Yan Htun',
                        age : '18'
                    },
                    {
                        name : 'Myint Mo',
                        age : '19'
                    },{
                        name : 'Aung Paing Phyo',
                        age : '20'
                    }

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>