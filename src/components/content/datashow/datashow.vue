<template>
    <div class = 'datashow'>
        <datashowitem v-for="item in goods" :goodsitem = "item"/>
    </div>
</template>

<script>
    import datashowitem from "./datashowitem"
    export default {
        name:'datashow',
        components:{
            datashowitem
        },
        props:{
          goods:{
            type:Array,
            default(){
                return []
            }
          }
        }
    }
</script>

<style scoped>
    .datashow{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding:3px
    }
</style>