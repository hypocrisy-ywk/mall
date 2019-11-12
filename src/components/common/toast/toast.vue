<template>
    <div v-show="show" class="toast">
        {{massage}}
    </div>
</template>

<script>
    export default {
        name:'toast',
        props:{
            massage:{
                type:String,
                default(){
                    return ''
                }
            },
            show:{
                type:Boolean,
                default(){
                    return false
                }
            }
        }
    }
</script>

<style scoped>
    .toast{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        background:var(--color-high-text);
        color:#fff;
        border-radius:12%;
        text-align: center;
        line-height: 40px;
        font-size: 22px;
        height: 40px;
        z-index: 99;
        padding:0 10px
    }
</style>