<template>
    <div class="cartlist">
       <scroll class="content" ref="scroll">
           <cartlistitem v-for="(item,index) in cartlist"
                         :key="index"
                         :iteminfo = "item"/>
            <div v-if="isnull" class="isnull">
                <span>∑(っ°Д°;)っ购物车为空 !</span>
            </div>
       </scroll>
    </div>
</template>

<script>
    import scroll from "../../components/common/scroll/scroll"
    import cartlistitem from "./cartlistitem"
    export default {
        name:'cartlist',
        components:{
            scroll,
            cartlistitem
        },
        computed:{
            isnull(){
                return this.cartlist.length === 0
            }
        },
        props:{
            cartlist:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .cartlist{
        height: calc(100% - 49px - 44px - 40px);
    }
    .content{
        height: 100%;
        overflow: hidden; 
    }
    .isnull span{
        font-size: 25px;
        text-align: center;
        margin-top:80px;
        display: block;
        color:rgb(220, 83, 20)
    }
</style>