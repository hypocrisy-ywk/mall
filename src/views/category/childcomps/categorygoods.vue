<template>
    <div class="goods">
        <scroll class="content">
            <div class="goodson">
                <ul>
                    <li v-for="itemon in maitkey">
                        <img :src="itemon.image" alt="">
                        <p>{{itemon.title}}</p>
                    </li>
                </ul>
            </div>
            <div class="goodsup">
                <tabcontrol :titles = "titles" 
                        @tabclick="tabclick"/>
                <datashow :goods="goodslist"></datashow>
            </div>
        </scroll>
    </div>
</template>

<script>
    import scroll from "../../../components/common/scroll/scroll"

    import tabcontrol from "../../../components/content/tabcontrol/tabcontrol"
    import datashow from "../../../components/content/datashow/datashow"
    import datashowitem from "../../../components/content/datashow/datashowitem"

    export default {  
        name:'categorygoods',
        data(){
            return{
                titles:['流行','新款','精选'],
                tabclickindex:''
            }
        },
        components:{
            scroll,
            datashow,
            datashowitem,
            tabcontrol
        },
        props:{
            maitkey:{
                type:Array,
                default(){
                    return []
                }
            },
            goodslist:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
             tabclick(index){
                switch(index){
                    case 0:
                        this.tabclickindex = 'pop'; 
                        break;                 
                    case 1:
                        this.tabclickindex = 'new';
                        break;                   
                    case 2:
                        this.tabclickindex = 'sell'               
                } 
                this.$emit('tabclick',this.tabclickindex)
            },
        }
    }
</script>

<style scoped>
    .goods{
        width: 75%;
    }
     .content{
       overflow: hidden;
       position:absolute;
       top:44px;
       bottom:49px;
       width: 75%;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    ul>li{
        flex:1;
        width: 30%;
        height: 110px;
        list-style:none;
    }
    ul>li img{
        width: 80px;
        margin:0 8px;
    }
    ul>li p{
        text-align: center;
    }

</style>