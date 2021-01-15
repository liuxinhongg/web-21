<template>
    <div>
        <div class="count">
            <el-button type="success" @click="add(3)">加</el-button>
             {{num}}
            <el-button type="warning" @click="jian(2)">减</el-button>
            {{count}}
            <h1>{{name}}</h1>
        </div>
    </div>
</template>

<script>
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
    export default {
        // data() {
        //     return {
        //         num:this.$store.state.num
        //     }
        // },
        computed:{
            ...mapState({
                num(){
                    return this.$store.state.num
                },
                name(){
                    return this.$store.state.name
                }
            }),
            ...mapGetters({
                count:'count'
            })
            // num2(){
            //     return this.$store.getters.count
            // }
        },
        methods:{
            ...mapMutations({
                reduce:'mincrement'
            }),
            ...mapActions({
                aa:'increment'
            }),
            add(num){
                // mutations里面的方法提交使用this.$store.commit("方法名")
                // this.num+=5
                // this.$store.commit("increment",{n:num,name:'zhangsan',age:19})
                // this.$store.dispatch("increment")
                this.aa()
            },
            jian(num){
                this.reduce({n:num,name:'lisi',hohhy:'eating'})
                // this.num -= 5
                // this.$store.commit("mincrement",{n:num,name:'lisi',hohhy:'eating'})
            }
        }
    }
</script>

<style lang="scss" scoped>
.count{
    width: 300px;
    margin: 100px auto;
}
</style>