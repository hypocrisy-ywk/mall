<template>
    <div class="checkput">
        <img src="~assets/img/cart/tick.svg" alt="" :class="{check:ischeck}">
    </div>
</template>

<script>
    export default {
        name:'checkput',
        props:{
            ischeck:{
                type:Boolean,
                default(){
                    return true
                }
            }
        } 
    }
</script>


<style scoped>
    .checkput img{
        background-color: #fff;
        border-radius:50%;   
        border:2px solid #aaa; 
        width: 22px;
        height: 22px;    
    }
    .check{
        border-color: red!important;
        background-color: red!important;
    }
</style>