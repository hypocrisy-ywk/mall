<template>
    <div class="shopinfo" v-if="Object.keys(shop).length !== 0">
        <div class="top">
            <img :src="shop.shopLogo" alt="">
            <span>{{shop.name}}</span>
        </div>
        <div class="mid">
            <div class="sell">
                <p class="p1">{{shop.cSells | sellmore}}</p>
                <p class="p2">总销量</p>
            </div>
            <div class="good">
                <p class="p1">{{shop.cGoods}}</p>
                <p class="p2">全部宝贝</p>
            </div>
            <table>
                <tr v-for="item in shop.score">
                    <td>{{item.name}}</td>
                    <td class="fonts" :class="{isfonts:item.isBetter}">{{item.score}}</td>
                    <td class="nobetter" :class="{isbetter:item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
                </tr>              
            </table>
        </div>
        <div class="foot">进店逛逛</div>
    </div>
</template>

<script>
    export default {
        name:'detailshopinfo',
        filters:{
            sellmore(value){
                if( value < 10000 ) return value;
                return ( value / 10000 ).toFixed(1) + ' 万'
            }
        },  
        props:{
            shop:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .shopinfo{
        margin-top: 20px;
        padding:0 8px
    }
    .top{
        margin-bottom: 10px;
        position: relative;
    }
    .top img{
        width:50px;
    }
    .top span{
        position:absolute;
        top:16px;
        left:65px;
        font-family:cursive;
        font-size: 22px;
    }
    .mid{
        height:90px;
    }
    .mid div,table{
        float: left;
    }
    .mid div{
        margin-top:20px;
        padding:0 25px 0 8px;
    }
    .mid .good{
        border-right:1px solid #ccc
    }
    .mid .p1{
        font-size: 24px;
        text-align: center
    }
    .mid .p2{
        font-size: 15px;
        text-align: center;
        padding-top:5px
    }
    table{
        margin-left:25px
    }
    table tr{
        height:25px;
        line-height: 18px;
    }
    table td{
        padding:4px;
        font-size:15px;
    }
    .fonts{
        color:rgb(143, 194, 41)
    }
    .isfonts{
        color:var(--color-high-text)!important
    }
    table .nobetter{
        background-color:rgb(143, 194, 41);
        color:#fff
    }
    .isbetter{
        background:var(--color-high-text)!important;
        color:#fff!important
    }
    .foot{
        clear: left;
        margin:5px auto;
        width: 180px;
        height:40px;
        line-height: 35px;
        text-align:center;
        border:1px solid #ddd;
        border-radius:15px;
        background:#eee;
    }

</style>