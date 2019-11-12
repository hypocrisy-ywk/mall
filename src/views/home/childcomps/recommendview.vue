<template>
    <div class="recommend">
        <div v-for="item in recommend" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name:'recommendview',
        props:{
            recommend:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{

        }
    }
</script>

<style scoped>
    .recommend{
        display: flex;
        text-align: center;
        border-bottom:8px solid #ddd;
        font-size:14px
    }
    .recommend-item{
        flex:1;
        padding:15px 0 28px 0;
    }
    .recommend-item img{
        width: 76px;
        margin-bottom:10px;
    }
</style>