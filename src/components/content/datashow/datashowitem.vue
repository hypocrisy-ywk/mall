<template>
    <div class="goodsitem" @click='itemclick'>
        <img :src="datashows" @load = "imageload">
        <div class="goodsbody">
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}} ￥</span> 
            <span class="cfav">{{goodsitem.cfav}}</span> 
        </div>
    </div>
</template>

<script>
    export default {
        name:'datashowitem',
        props:{
            goodsitem:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        computed:{
            datashows(){
                if(this.goodsitem.img){
                    return this.goodsitem.img
                }else if(this.goodsitem.show){
                    return this.goodsitem.show.img
                }else if(this.goodsitem.image){
                    return this.goodsitem.image
                }
            }
        },
        methods:{
            imageload(){
                this.$bus.$emit('imageload')
            },
            itemclick(){
                this.$router.push({
                    path:'/detail',
                    query:{
                        iid:this.goodsitem.iid
                    }
                })
            }
        }
    }
</script>
 
<style scoped>
   .goodsitem{
       padding-bottom:40px;
       position:relative;
       width: 48%;
       margin:0;
   }
   .goodsitem img{
       width: 100%;
       border-radius:5px;
   }
   .goodsbody{
       height:40px;
       width:150px;
       position: absolute;
       bottom:0;
       font-size: 15px;
       text-align: center;
       
   }
   .goodsbody p{
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       margin-bottom: 3px;
   }
   .goodsbody .price{
       color:var(--color-high-text);
       margin-right: 20px;
   }
   .goodsbody .cfav{
       position:relative;
   }
   .goodsbody .cfav::before{
       content:'';
       position:absolute;
       left:-15px;
       top:2px;
       width: 14px;
       height: 14px;
       background:url("~assets/img/common/collect.svg") 0 0/14px 14px;

   }
</style>