<template>
    <div>
        <h1>this is home page</h1>
        <h2>{{ $store.state.myName }}</h2>
        <li class=" text-success" v-for="(f,index) in myFriList() " :key="index">
        <h6>{{ f }}</h6></li>
        <p>{{ getMyName }}</p>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name : 'HomePage',
        methods: {
            myFriList() {
                return this.$store.state.myFri;
            }
        },
        computed: 
            mapState ({ getMyName : state => state.myName})
    }
</script>
