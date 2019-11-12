<template>
    <div class="foottab">
        <div class="item">
            <div>
                <i class="icon service"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="icon select"></i>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="play">
            <div class="cart" @click="addtocart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'detailbottombar',
        methods:{
            addtocart(){
                this.$emit('addtocart')
            }
        }
    }
</script>

<style scoped>
    .foottab{
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        background:#fff;
        height: 70px;
        width: 100%; 
        display: flex;
    }
    .item{
        display: flex;
    }
    .item div{
        flex: 1;
        width: 68px;
        height: 70px;
        text-align: center;
        font-size: 13px;
        margin-top:10px;
    }
    .item .icon{
        display: block;
        width: 22px;
        height: 22px;
        margin:5px auto 3px;
        background:url("~assets/img/detail/detail_bottom.png") 0 0/100%
    }
    .item .service{
        background-position: 0 -53px;
    }
    .item .shop{
        background-position: 0 -98px;
    }
    .item .select{
        background-position: 0 -150px;
    }
    .play{
        flex:1;
        display: flex;
        line-height: 70px;
        color:#fff;
        text-align: center
    }
    .play div{
        height:70px;
    }
    .play .cart{
        background:#ffe817;
        color:#333;
        width: 110px;
    }
    .play .buy{
        background:#f69;
        flex:1
    }
</style>