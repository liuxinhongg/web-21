<template>
  <div>
    <el-form ref="registerform" :model="registerform" style="width:400px;margin:100px auto;" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="registerform.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="registerform.password"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="registerform.age"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="registerform.nick"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-input v-model="registerform.head_img"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="btn()">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            registerform:{
                username:'',
                password:'',
                age:'',
                nick:'',
                head_img:''
            }
        }
    },
    methods:{
        btn(){
            this.$http.post('/nodeapi/page/register',this.registerform).then(res=>{
                console.log(res);
                if(res.data.code===0){
                    this.$message.success('注册成功！请登录！')
                    this.$router.push('/login')
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
</style>