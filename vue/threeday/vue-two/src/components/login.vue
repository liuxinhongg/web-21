<template>
    <div>
        <el-form :model="loginform" style="width:30%;margin:100px auto;" label-width="100px">
            <el-form-item label="用户名">
                <el-input v-model="loginform.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="loginform.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Cookie from 'js-cookie'
    export default {
        data() {
            return {
                loginform:{
                    username:"",
                    password:""
                }
            }
        },
        methods:{
            login(){
                this.$http.post("/nodeapi/page/login",this.loginform).then(res=>{
                    console.log(res);
                    if(res.data.code===0){
                        Cookie.set("username",this.loginform.username)
                        Cookie.set('token',res.data.token);
                        this.$store.commit('setToken',res.data.token);
                        this.$store.commit('changeSignIn',1);
                        this.$message.success("登录成功");

                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>