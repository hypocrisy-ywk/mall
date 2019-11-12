<template>
    <div>
        <scroll class="content">
            <ul>
                <li v-for="(item,index) in tablist" 
                @click="itemclick(index,item.maitKey)" 
                :class="{active:currentindex===index}" :key="item.title">
                    {{item.title}}
                </li>
            </ul>
        </scroll>
    </div>
</template>

<script>
    import scroll from "../../../components/common/scroll/scroll"
    export default {
        name:'categorytab',
        components:{
            scroll
        },
        data(){
            return{
                currentindex:0
            }
        },
        props:{
            tablist:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            itemclick(index,maitKey){
                this.currentindex = index;
                this.$emit("currentMaitKey", maitKey , index)
            }
        }
    }
</script>

<style scoped>
    ul>li{
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #eee;
    }
    .active{
        background-color: #fff;
        color:red;
        border-left:2px solid red
    }
    .content{
       overflow: hidden;
       position:absolute;
       top:44px;
       bottom:49px;
       width: 25%;
    }
</style>