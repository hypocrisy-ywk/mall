<template>
    <div class="cartbottombar">
        <div class="checkall">
            <checkput class="img" :ischeck="isselectall" @click.native="checkedclick"/>
            <span>全选</span>
        </div>
        <div class="price">
            合计 :{{totalprice}}
        </div>
        <div class="computed">
            去计算 ( {{checkedlength}} )
        </div>
    </div>
</template>

<script>
    import checkput from "../../components/content/checkput/checkput"
    export default {
        name:'cartbottombar',
        components:{
            checkput
        },
        computed:{
            totalprice(){
                return '￥' + this.$store.state.cartlist.filter(item => {
                    return item.checked
                }).reduce((prevalue , item)=>{
                    return prevalue + item.price * item.count
                },0).toFixed(2)
            },
            checkedlength(){
                return this.$store.state.cartlist.filter(item => item.checked).length
            },
            isselectall(){
                /* return !(this.$store.state.cartlist.filter(item=>!item.checked).length) *///高阶函数遍历
                if(this.$store.state.cartlist===0) return false
                
                for(let item of this.$store.state.cartlist){
                    if(!item.checked){
                        return false
                    }
                }
                return true //普通遍历
            }
        },
        methods:{
            checkedclick(){
                if(this.isselectall){//全部选中
                    this.$store.state.cartlist.forEach(item => item.checked = false)
                }else{
                    this.$store.state.cartlist.forEach(item => item.checked = true)
                }
            }
        }
    }
</script>

<style scoped>
    .cartbottombar{
        height: 40px;
        background-color: #eee;
        position:relative;
        display: flex;
        line-height:40px;
    }
    .checkall{
        width: 100px;
        display:flex;
        
    }
    .img{
        margin:4px 10px 6px 20px; 
    }
    .price{
        flex:1;
        margin-left: 20px;
    }
    .computed{
        width: 100px;
        color:#fff;
        background-color: red;
        text-align:center;

    }
</style>