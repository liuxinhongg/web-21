<template>
    <div>
        <top></top>
        <div class="box">
            less sass
        </div>
        <bottom></bottom>
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

            }
        },
        created(){
            
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