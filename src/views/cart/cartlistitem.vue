<template>
    <div class="allitem">
        <div class="put">
            <checkput :ischeck = "iteminfo.checked" @click.native="checkclick"/>
        </div>
        <div class="imginfo">
            <img :src="iteminfo.image" alt="" class="img">
        </div>
        <div class="textinfo">
            <div class="title">{{iteminfo.title}}</div>
            <div>{{iteminfo.desc}}</div>
            <div class="footinfo">
               <span class="price">{{iteminfo.price}}</span>
               <span class="count">× {{iteminfo.count}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import checkput from "../../components/content/checkput/checkput"
    export default {
        name:'cartlistitem',
        components:{
            checkput
        },
        props:{
            iteminfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods:{
            checkclick(){
                this.iteminfo.checked = !this.iteminfo.checked
            }
        }
    }
</script>

<style scoped>
    .allitem{
        height:150px;
        border-bottom:1px solid #aaa ;
        display: flex;
        overflow: hidden;
    }
    .put{
        width: 20px;
        padding-left:15px;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .imginfo .img{
        width: 80px;
        margin:12px 5px 18px 20px;
        border-radius: 10px;
     }
    .allitem .textinfo{
        flex:1;
        width:60%;
        margin-left: 10px;
        line-height:30px;
        margin-top:25px;
    }
    .textinfo div{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .footinfo{
        margin-top: 10px;
        font-size: 18px;
    }
    .title{
        font-size: 18px
    }
    .price{
        color:red;
    }
    .count{
        float:right;
        margin-right: 20px;
    }

</style>