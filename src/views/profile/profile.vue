<template>
    <div class="profile">
        <navbar class="navbar">
            <div slot="center">我的档案</div>
        </navbar>
        <div class="land">
            <img src="~assets/img/profile/avatar.svg" alt="" class="userimg">
            <div class="landtext">
                <p>登录/注册</p>
                <p><img src="~assets/img/profile/phone.svg" alt="">暂无绑定手机号</p>
            </div>
            <span class="right">✲</span>
        </div>
        <div class="coupon">
            <div>
                <p><span>0.00</span>元</p>
                <p>我的余额</p>
            </div>
            <div class="couponmid">
                <p><span>0.00</span>个</p>
                <p>我的优惠</p>
            </div>          
            <div>
                <p><span>0.00</span>分</p>
                <p>我的积分</p>    
            </div>                   
        </div>
        <div class="vipinfo">
            <div><img src="~assets/img/profile/message.svg" alt=""><span>我的消息</span></div>
            <div><img src="~assets/img/profile/pointer.svg" alt=""><span>积分商城</span></div>
            <div><img src="~assets/img/profile/vip.svg" alt=""><span>会员卡</span></div>       
        </div>
         <div class="vipinfo" id="bottom">
            <div><img src="~assets/img/profile/cart.svg" alt=""><span>购物车</span></div>
            <div id="bottom-son"><img src="~assets/img/profile/shopping.svg" alt=""><span>下载购物 APP</span></div>   
        </div>
    </div>
</template>

<script>
    import navbar from "../../components/common/navbar/navbar"
    export default {
        name: 'profile',
        components:{
            navbar
        }
    }
</script>

<style scoped>
   .navbar{
        background: var(--color-tint);
        height:44px;
        color:#fff;
        position:relative;
        left: 0;
        right:0;
        top:0;     
   }
   .land{
        display:flex;
        padding:10px;
        background-color: var(--color-tint);
   }
   .landtext{
      text-align:left;
      line-height: 35px;
      font-size: 18px;
      padding-left: 10px;
      margin-top:10px;
   }
   .userimg{
       height: 80px;
       width: 80px;
       margin-top: 10px;
       background-color: var(--color-tint);
   }
   .land div p img{
       width:25px;
       height: 25px;
       position: relative;
       top:4px;
       background-color:  var(--color-tint);
   }
   .right{
       width: 30px;
       height: 30px;
       color:#fff;
       font-size: 30px;
       text-align: center;
       line-height: 30px;
       font-weight: 100;
       margin:30px 20px 30px 100px;
   }
   .coupon{
       display: flex;
       height: 100px;
       line-height: 30px;
       border-bottom:15px solid #eee
   }
    .coupon div{
        flex: 1;
        text-align: center;
        padding-top: 13px;
    }
    .coupon div p span{
        color:red;
        font-size:22px
    }
    .coupon .couponmid{
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd
    }
    .vipinfo{
    
        font-size: 20px;
        border-bottom: 15px solid #eee;
    }
    .vipinfo div{
        padding:15px 20px 15px 20px;
        border-bottom: 1px solid #ddd;
    }
     .vipinfo div span{
         padding-left:10px;
     }
    .vipinfo img{
        width: 25px;
        height: 25px;
        vertical-align: middle;
    }
    #bottom,#bottom-son{
        border-color: #fff!important;
    }
</style>