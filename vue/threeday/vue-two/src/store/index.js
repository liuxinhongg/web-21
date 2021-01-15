import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        num:100,
        name:'张三'
    },
    getters:{
        count:(state)=>{
            return state.num > 120 ? 120 : state.num
        }
    },
    mutations:{
        increment(state,plaod){
            // setTimeout(()=>{
                state.num+=plaod.n
            // },1000)
        },
        mincrement(state,plaod){
            state.num-=plaod.n
        }
    },
    actions:{
        increment(context){
            // console.log(context);
            setTimeout(()=>{
                context.commit('increment',{n:3})
            },1000)
            context.dispatch('test')
        },
        test(){
            // console.log("我是actions里面的方法")
        }
    }
})
export default store