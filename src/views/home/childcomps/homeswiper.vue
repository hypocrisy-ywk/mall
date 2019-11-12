<template>
    <swiper>
        <swiperitem v-for="item in banner">
            <a :href="item.link">
                <img :src="item.image" @load="imageload">
            </a>
        </swiperitem>
    </swiper>
</template>

<script>
    import {swiper,swiperitem} from "../../../components/common/swiper";
    export default {
        name:'homeswiper',
        props:{
            banner:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                isload:false
            }
        },
        methods:{
            imageload(){
                if(!this.isload){
                    this.$emit('swiperimageload');
                    this.isload = true
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

</style>