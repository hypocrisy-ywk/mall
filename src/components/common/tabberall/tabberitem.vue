<template>  
    <div class = 'tab-ber-item' @click = 'isclick'>
       <div v-if="!isflag"><slot name = 'item-icon'></slot></div>
       <div v-else><slot name = 'item-icon-active'></slot></div>
       <div :class = {active:isflag}><slot name = 'item-text'></slot></div>
    </div>
</template>

<script>
export default {
  name: 'tabberitem',
  props:{
      path:String
  },
  data(){
      return {
          //isflag : false
      }
  },
  computed:{
      isflag(){
          return this.$route.path.indexOf(this.path) !== -1
      }
  },
  methods:{
      isclick(){
          this.$router.replace(this.path)
      }
  }
}
</script>

<style>
    .tab-ber-item{
        flex:1;
        text-align: center;
        height:49px;
    }
    .tab-ber-item img{
        width:24px;
        height:24px;      
    }
    .active{
        font-weight: bold;
    }
</style>