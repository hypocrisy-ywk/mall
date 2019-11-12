<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" class="tabcontrol-child" @click='itemclick(index)'>
            <span :class="{active:index === currentindex}">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'tabcontrol',
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                currentindex:0,
            }
        },
        methods:{
            itemclick(index){
                this.currentindex = index;
                this.$emit('tabclick',index)
            }
        }
    }
</script>

<style scoped>
    .tabcontrol{
        display:flex;
        text-align: center;
        height:40px;
        line-height:40px;
        font-size:16px;
        background:#fff;
        z-index: 9;
    }
    .tabcontrol-child{
        flex:1;    
    }
    .active{
        border-bottom:2px solid var(--color-high-text);
        padding: 5px;
        color:var(--color-high-text) ;
    }
</style>