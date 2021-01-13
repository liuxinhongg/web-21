<template>
   <div>
       <h1>我是work组件</h1>
       <h1>我是work组件</h1>
       <h1>我是work组件</h1>
       <h1>{{$route.query.name}}</h1>
   </div>
</template>

<script>
    export default {
        created(){
            console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>
