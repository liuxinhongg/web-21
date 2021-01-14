<template>
    <div>
        <div class="topbox">
            <div> <img src="../../static/tu.jpg" alt="" srcset=""> </div>
            <ul>
                <!-- <li> <i class="el-icon-eleme" style="color:#fff;font-size:30px"></i> 导航一</li>
                <li> <i class="el-icon-cold-drink"></i> 导航一</li>
                <li>导航一</li>
                <li>导航一</li>
                <li>导航一</li> -->
                <li v-for="(item,index) in datalist" :key="index">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            datalist:{
                type:Array,
                required:true
            }
        }
    }
</script>

<style scoped lang="scss">
$kuan:150px;
@mixin hunhe{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.topbox{
    width: 100%;
    height: 100px;
    background-color: aquamarine;
    @include hunhe;
    div{
        width: $kuan;
        height: 80px;
        img{
            width: $kuan;
            height: 80px;
        }
    }
    ul{
        line-height: 100px;
        @include hunhe;
        list-style: none;
        li{
            width: $kuan;
            &:hover{
                background: red;
                // cursor: no-drop;
                cursor: crosshair;
            }
        }
    }
}
// .leftnav{
//     width: $kuan;
//     height: 80px;
// }
// .leftnav img{
//     width: $kuan;
//     height: 80px;
// }
// ul{
//     line-height: 100px;
//     @include hunhe;
//     list-style: none;
// }
// ul li{
//     width: $kuan;
// }
</style>