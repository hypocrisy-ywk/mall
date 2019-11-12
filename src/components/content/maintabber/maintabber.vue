<template>
     <tabber>
      <tabberitem path = '/home'>
        <img slot = 'item-icon' src = '~assets/img/tabber/home1.png'>      
        <img slot = 'item-icon-active' src = '~assets/img/tabber/home2.png'>      
        <div slot = 'item-text'>首页</div>
      </tabberitem>
      <tabberitem path = '/category'>
        <img slot = 'item-icon' src = '~assets/img/tabber/分类1.png'>
        <img slot = 'item-icon-active' src = '~assets/img/tabber/分类2.png'>
        <div slot = 'item-text'>分类</div>
      </tabberitem>
      <tabberitem path = '/cart'>
        <img slot = 'item-icon' src = '~assets/img/tabber/购物车1.png'>
        <img slot = 'item-icon-active' src = '~assets/img/tabber/购物车2.png'>
        <div slot = 'item-text'>购物车</div>
      </tabberitem>
      <tabberitem path = '/profile'>
        <img slot = 'item-icon' src = '~assets/img/tabber/我的1.png'>
        <img slot = 'item-icon-active' src = '~assets/img/tabber/我的2.png'>
        <div slot = 'item-text'>我的</div>
      </tabberitem>    
    </tabber>
</template>

<script>
import tabber from "../../common/tabberall/tabber";
import tabberitem from "../../common/tabberall/tabberitem";

export default {
  name: 'maintabber',
  components:{
      tabber,
      tabberitem
  }
}
</script>

<style>
    
</style>