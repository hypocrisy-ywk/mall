<template>
    <div class="info" v-if="Object.keys(good).length !== 0">
        <div class="title">
            {{good.title}}
        </div>
        <div class="price">
            <span class="span1">{{good.newprice}}</span>
            <span class="span2">{{good.oldprice}}</span>
            <span class="span3">{{good.discountdesc}}</span>
        </div>
        <div class="columns">
            <span class="span4">{{good.columns[0]}}</span>
            <span class="span5">{{good.columns[1]}}</span>
            <span class="span6">{{good.services[good.services.length-1].name}}</span>
        </div>
        <div class="icontext">
            <span v-for="index in good.services.length-1" :key="index" class="span7">
                <img :src="good.services[index].icon">
                <span>{{good.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'detailinfo',
        props:{
            good:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .info{
        margin-top:8px;
        padding:0 8px;
        border-bottom:4px solid #eee
    }
    .title{
        font-size:19px;
        font-weight: 700;
        font-family:Georgia, 'Times New Roman', Times, serif;
        font-family:inherit;
    }
    .price{
        margin:10px 0;  
        position: relative;    
    }
    .span1{
        font-size:26px;
        color:var(--color-high-text)
    }
    .span2{
        font-size:14px;
        color:#aaa;
        font-weight: 200;
        padding-left:8px;
        text-decoration:line-through #666 solid;/* 删除线 */
    }
    .span3{
        position: absolute;
        top:0;
        margin-left:10px;
        font-size: 15px;
        letter-spacing:1px;
        background:var(--color-high-text);
        color:white;
        border-radius:6px;
    }
    .columns{
        margin-top:20px;
        padding-bottom:10px;
        font-size: 16px;
        color:#999;
        display:flex;
        justify-content: space-between;
        border-bottom:1px solid #ccc
    }
    .icontext{
        margin:20px 0;
        display: flex;
        justify-content:space-between
    }
    .icontext img{
        width: 18px;
        padding-right: 2px;
    }
    .span7 span{
        font-size:14px;
    }
</style>