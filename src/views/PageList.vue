<template>
    <div>
        <h1 class=" border container">{{ title }}</h1>
       <AboutView titleName="Title"></AboutView>
       <AboutView bodyName="Body"></AboutView>
  </div>
</template>

<script>
 import AboutView from './AboutView.vue';
    export default {
        name : 'PageList',
        data() {
            return {
                title: "This is Page List"
            }
        },
        components:{
            AboutView
        }
       
    }
</script>

<style lang="scss" scoped>

</style>