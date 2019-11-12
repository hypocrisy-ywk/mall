<template>
    <div class="shopimg" v-if="Object.keys(shopimg).length !== 0">
         <div class="top">
            <div class="start"></div>
            <div class="desc">{{shopimg.desc}}</div>
            <div class="end"></div>           
        </div>
        <div class="mid" v-for="item in shopimg.detailImage">
            <div class="key">{{item.key}} :</div>
            <div v-for="(item,index) in item.list">
                <img :src="item" :key="index" @load='imageload'>
            </div>     
        </div>
    </div>
</template>

<script>
    export default {
        name:'detailshopimg',
        props:{
            shopimg:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods:{
            imageload(){
                this.$emit('detailimageload')
            }
        }
    }
</script>

<style scoped>
    .shopimg{
        margin:20px 0;
        padding-bottom:20px;
        border-bottom:5px solid #ddd
    }
    .top{
        position:relative;
    }
    .desc{ /* 设置多少超出行的时候隐藏文本 */
       /*  overflow: hidden;
        text-overflow:ellipsis; /* 超出的文本隐藏 */
       /*  display: -webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;  */
        padding:15px 15px;
        font-size: 15px;
    }
    .start , .end{
        width: 90px;
        height: 1px;
        position:relative;
        background:#666;
    }
    .start {
        background: #444
    }
    .start::before , .end::after{
        content:'';
        position:absolute;
        width: 5px;
        height:5px;
        background-color:#333;
        bottom:0
    }
    .start{
        float:left;
    }
    .end{
        float:right;
    }
    .end::after{
        right:0
    }
    .key{
        color:#333;
        margin:10px 0 10px 15px;
        font-size: 18px;
    }   
    .mid img{
        width: 100%;
    }
</style>