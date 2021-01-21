<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{msg}}</h1>
    <img src="../assets/cat1.jpg" alt="" srcset="">
    <img :src="tup" alt="" srcset="">
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg:"我是about组件",
      tup: require("../assets/cat1.jpg") 
    };
  },
  created(){
    this.$http.post("/api/page/register",{
      username:'yangli',
      password:'yangli',
      age:"19",
      nick:'yl',
      head_img:''
    }).then(res=>{
      console.log(res)
    })
  },
  methods:{}
};
</script>
<style lang="scss">
</style>