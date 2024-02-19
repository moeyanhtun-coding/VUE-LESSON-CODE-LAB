<template>
    <div>
        <h1>{{ title }}</h1>
        <ul class=" list-group">
            <li class="list-group-item mx-5" >
            <List></List>
            </li>
        </ul>
       
    </div>
</template>

<script>
     import List from "./EachPage.vue";
    export default {
        name :'AllListPage',
        data() {
            return {
                title: "Todo List"
            }
        },
        components : {
            List
        }
    }
</script>

<style lang="scss" scoped>

</style>