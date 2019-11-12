<template>
    <div>
        <navbar class="navbar">
            <div slot="left" class="left" @click="backclick">
                <img src="~assets/img/common/back.svg">
            </div>
            <div slot="center" class="center">
                <div v-for="(item,index) in titles"
                     class="item"
                     @click="itemclick(index)"
                     :class="{active:index===currentindex}">{{item}}</div>
            </div>
        </navbar>
    </div>
</template>

<script>
    import navbar from '../../../components/common/navbar/navbar'
    export default {
        name:'detailnavbar',
        data(){
            return{
                titles:['商品','参数','评论','推荐'],
                currentindex:0,
            }
        },
        methods:{
            backclick(){
                this.$router.go(-1)
            },
            itemclick(index){
                this.currentindex = index;
                this.$emit('itemclick',index)
            }
        },
        components:{
            navbar
        }
    }
</script>

<style scoped>
    .navbar{
        position:fixed;
        background: #fff;
        z-index: 999;
        width:100%
    }
    .center{
        display:flex;
        font-size: 15px;
        padding: 0 5px;
        color:black
    }
    .left{
        padding-top:8px
    }
    .center .item{
        flex:1;
    }
    .active{
        color:red;
    }
</style>