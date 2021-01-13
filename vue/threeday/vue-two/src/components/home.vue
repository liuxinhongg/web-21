<template>
  <div>
    <h1>我是home组件</h1>
    <h2>{{canshu}}</h2>
    <h2>{{$route.params.id}}</h2>
    <button @click="jump">我要去work组件</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      canshu:''
    }
  },
  methods:{
    jump(){
      // path传参
      this.$router.push({  path:'/work',query:{
        name:"zhangsan",
        age:19
      } })
      // this.$router.push('/work?name=zhangsan')
      // name传参
      this.$router.push({
        name:"work",
        params:{
          name:"zhangsan",
          age:19
        }
      })
    }
  },
  mounted(){
    console.log(this.$route);
    this.canshu = this.$route.params.id
  }
}
</script>

<style>
</style>
