<template>
    <div>
        <top :datalist="peopleList"></top>
        <div class="box">
            <div class="aa" ref="box">{{msg}}</div>
            <h1>news:{{news}}</h1>
            <h2>msgOne:{{msgOne}}</h2>
            <el-button type="primary" @click="btn()">主要按钮</el-button>
            <h1>{{bottomval}}</h1>
            <!-- <fieldset id="">
                <legend align="center">我是标题</legend>
                <h1>我还在处理伤口</h1>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info" plain round>信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </fieldset> -->
        </div>
        <bottom @aapass="getaa($event)"></bottom>
    </div>
</template>

<script>
    import top from '../components/top'
    import bottom from '../components/bottom'
    export default {
        components:{
            top,
            bottom
        },
        data(){
            return {
                msg:'我是一条消息',
                news:'',
                msgOne:'',
                peopleList:[
                    {
                        name:"菜单一",
                        id:1
                    },
                    {
                        name:"菜单一",
                        id:1
                    },
                    {
                        name:"菜单一",
                        id:1
                    },
                    {
                        name:"菜单一",
                        id:1
                    },
                    {
                        name:"菜单一",
                        id:1
                    },
                    {
                        name:"菜单一",
                        id:1
                    }
                ],
                bottomval:''
            }
        },
        methods:{
           btn(){
              this.msg = "盛开的凤凰卡速度发货";
              this.msgOne = this.$refs.box.innerHTML;
              this.$nextTick(()=>{
               this.news = this.$refs.box.innerHTML;
              })
           },
           getaa(val){
               console.log(val);
               this.bottomval = val;
           }
        },
        created(){
            
        },
        mounted(){
            console.log(this.$refs.box)
            this.$refs.box.style.background = "green"
            this.$refs.box.style.color = "#fff"
        }
    }
</script>

<style scoped>
.box{
    width: 90%;
    height: 600px;
    margin: 10px auto;
    background-color: red;
}
</style>