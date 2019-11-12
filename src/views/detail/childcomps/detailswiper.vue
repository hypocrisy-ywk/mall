<template>
    <swiper class="detail-swiper">
        <swiperitem v-for="(item,index) in topswiper" :key="index">
            <img :src="item" alt="">
        </swiperitem>
    </swiper>
</template>

<script>
    import {swiper,swiperitem} from "../../../components/common/swiper"
    export default {
        name:'detailswiper',
        props:{
            topswiper:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            swiper,
            swiperitem
        }
    }
</script>

<style scoped>
    .detail-swiper{
        height:300px;
        overflow: hidden;
    }
</style>