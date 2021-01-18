<template>
  <div>
    <el-table :data="tableData" border style="width: 70%;margin:50px auto;">
      <el-table-column type="index" label="序号" width="180"> </el-table-column>
      <el-table-column prop="" label="头像" width="180">
          <template slot-scope="scope">
              <div>
                  <img :src="scope.row.img" alt="" srcset="" class="avatar">
              </div>
          </template>
      </el-table-column>
      <el-table-column prop="title" label="名称">
          <template slot-scope="scope">
              <div>
                  {{ scope.row.title ? scope.row.title :'暂无标题' }}
              </div>
          </template>
        </el-table-column>
      <el-table-column prop="ct" label="创建时间"> </el-table-column>
    </el-table>
    <div class="block">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pagesize"
            layout="total, prev, pager, next"
            :total="totalNum">
        </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableData:[],
            currentPage:1,
            pagesize:15,
            totalNum:0
        }
    },
    methods:{
        getdata(){
            // showapi_appid=替换自己的值&page=1&maxResult=20&showapi_sign=替换自己的值"
            this.$http.get("/showapi/341-2",{
                params:{
                    showapi_appid:'46452',
                    showapi_sign:'c3bc2247155b4219bffb60cac4fd315c',
                    page:this.currentPage,
                    maxResult:this.pagesize
                }
            }).then(res=>{
                console.log(res);
                this.tableData = res.data.showapi_res_body.contentlist;
                this.totalNum = res.data.showapi_res_body.allNum
            })
        },
         handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            if(this.currentPage){
                this.getdata()
            }
        }
    },
    mounted(){
        this.getdata()
    }
};
</script>

<style scoped>
.avatar{
    width: 80px;
    height: 80px;
    border-radius:50%;
}
</style>