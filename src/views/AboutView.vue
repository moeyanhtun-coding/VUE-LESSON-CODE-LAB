<template>
  <div>
    <h1 class="border container">{{ title }}</h1>
    <h2>{{ titleName }}</h2>
    <h3>{{ bodyName }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'AboutView',
    props:['titleName','bodyName'] ,
    data() {
      
      return {
        title: 'This is about page',
      }
    },
      
    };
</script>

<style lang="scss" scoped>

</style>

