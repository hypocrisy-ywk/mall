<template>
    <div class="cart">
        <navbar>
            <div slot="center">购物车 ( {{cartlength}} )</div>
        </navbar>
        <cartlist :cartlist = "$store.state.cartlist" class="cartlist"/>
        <cartbottombar/>
    </div>   
</template>

<script>
    
    import navbar from "../../components/common/navbar/navbar"
    
    import cartlist from "./cartlist"
    import cartbottombar from "./cartbottombar"

    export default {
        name: 'cart',
        computed:{
            cartlength(){
                return this.$store.state.cartlist.length
            }
        },
        components:{
            navbar,
            cartlist,
            cartbottombar
        }
    }
</script>

<style scoped>
    .cart{
        height: 100vh;
    }
    .navbar{
        background: var(--color-tint);
        height:44px;
        color:#fff;
        position:relative;
        left: 0;
        right:0;
        top:0;
    }
   /*  .cartlist{
        overflow: hidden;
        position:absolute;
        top:44px;
        bottom:49px;
    } */
</style>