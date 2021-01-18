<template>
  <div class="user">
    <span>昵称：</span>
    <el-input type="text" v-model="nick"></el-input>
    <el-upload
      class="avatar-uploader"
      action="/nodeapi/page/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      name="head_img"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-button type="success" @click="gengxin">更新用户信息</el-button>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  data() {
    return {
      imageUrl: "",
      nick:''
    };
  },
  methods: {
    gengxin(){
        this.$http.post('/nodeapi/page/updateuser',{
            username:Cookie.get("username"),
            head_img:this.imageUrl,
            nick:this.nick
        }).then(res=>{
            console.log(res)
        })
    },
    handleAvatarSuccess(res, file) {
        console.log(res)
        //   this.imageUrl = URL.createObjectURL(file.raw);
        this.imageUrl = res.data
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  created() {
    this.$http
      .get("/nodeapi/page/userinfo", {
        params: { username: Cookie.get("username") },
      })
      .then((res) => {
        console.log(res);
        this.nick = res.data.nick;
        if(res.data.head_img!==''||res.data.head_img!==null){
          this.imageUrl = res.data.head_img 
        }
      });
  },
};
</script>

<style lang="scss" scoped>
.user {
  width: 300px;
  margin: 100px auto;
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>