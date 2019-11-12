<template>
    <div class="comment" v-if="Object.keys(comment).length !== 0">
        <div class = "header">
            <span>用户评论</span>
            <span>更多</span>
        </div>
        <div v-for="item in comment.list">
            <div class="avatar">
                <img :src="item.user.avatar" alt="">
                <span>{{item.user.uname}}</span>
            </div>
            <div class="text">{{item.content}}</div>
            <div class="smalltext">
                <span>{{item.created | showdate}}</span>
                <span class="span">{{item.style}}</span>
            </div>
            <div v-for="(imgs,index) in item.images" class="imgs">
                <img :src="imgs" alt="" :key="index">
            </div>
        </div>
    </div>
</template>

<script>
    import {formatDate} from "../../../common/utils"
    export default {
        name:'detailcomment',
        props:{
            comment:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        filters:{
            showdate(value){
                const date = new Date(value*1000)
                return formatDate(date,'yyyy-MM-dd hh:mm:ss')
            }
        }
    }
</script>

<style scoped>
    .comment{
        border-top:5px solid #ddd;
        border-bottom:5px solid #ddd;
        height: 400px;
        padding:10px 8px;
        margin-top: 30px;
    }
    .header{
        height:50px;
        line-height: 50px;
        border-bottom:1px solid #aaa;
        font-size: 18px;
        display:flex;
        justify-content: space-between;
    }
    .avatar{
        height: 60px;
        margin-top:20px;
        position: relative;
    }
    .avatar img{
        width: 55px;
    }
    .avatar span{
        position:absolute;
        top:20px
    }
    .smalltext{
        margin-top:5px;
        margin-left:2px;
    }
    .span{
        margin-left:20px;
    }
    .imgs{
        margin-top: 10px
    }
    .imgs img{
        float: left;
        width: 100px;
        height:100px;
        padding:1px
    }
</style>