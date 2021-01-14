<template>
    <div>
        <div class="bottombox">
            <el-button type="success" @click="pass">向父组件传值</el-button>
        </div>
        <!-- 子向父传值（事件传值） -->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                aa:'我要去父组件'
            }
        },
        methods:{
            pass(){
                this.$emit("aapass",this.aa)
            }
        }
    }
</script>

<style scoped>
.bottombox{
    width: 100%;
    height: 200px;
    background-color: blueviolet;
}
</style>