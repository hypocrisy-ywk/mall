<template>
    <div class="category">
        <navbar class="navbar"><div slot="center">商品分类</div></navbar>
        <div class="shopbody">
            <div class="list">
                <categorytab :tablist = "tabList" @currentMaitKey="currentMaitKey"/>
            </div>
            <div class="body">
                <categorygoods :maitkey = "MaitKeData" 
                               :goodslist = "goodsList"
                               @tabclick = 'tabclick' />
            </div>
        </div>
    </div>
</template>

<script>
    import navbar from "../../components/common/navbar/navbar";

    import categorytab from "./childcomps/categorytab";
    import categorygoods from "./childcomps/categorygoods"

    import {getCategory, getSubcategory, getCategoryDetail} from "../../network/category";
    export default {
        name: "category",
        components:{
            navbar,
            categorytab,
            categorygoods
        },
        created(){
            //获取tab数据
            this.getCategory(),
            this.getSubcategory(this.MaitKe)
            this.getCategoryDetail("10062603","pop")
        },
        data(){
            return{
                tabList:[],
                //tab的内容
                MaitKe:5253,
                MaitKeData:[],
                tabIndex:0,
                goodsList:[],
                //当前maitke对应展示的内容
                tabType:'pop'
            }
        },
        methods:{
            //网络请求相关方法
            getCategory(){
                getCategory().then((res)=>{
                  /*   console.log(res); */
                    
                    this.tabList=res.data.category.list;
                })
            },
            getSubcategory(MaitKe){
                    getSubcategory(MaitKe).then((res)=>{
                    this.MaitKeData=res.data.list
                })
            },
            getCategoryDetail(miniWallkey, type){
                getCategoryDetail(miniWallkey, type).then((res)=>{
                  /*   console.log(res); */
                    
                    this.goodsList=res;
                })
            },
            
            //切换tab
            currentMaitKey(MaitKe,tabIndex){
                this.MaitKe=MaitKe,
                //记录当前tab标签的索引
                this.tabIndex=tabIndex;
                this.getSubcategory(MaitKe);
                this.getCategoryDetail(this.miniWallkey,this.tabType)
            },
            //切换tab商品展示
            tabclick(type){
                this.getCategoryDetail(this.miniWallkey,type)
                this.tabType=type
            }
        },
        computed:{
            miniWallkey(){
                return this.tabList[this.tabIndex].miniWallkey;
            }
        }
    }
</script>

<style scoped>
    .navbar{
        background: var(--color-tint);
        height:44px;
        color:#fff;
        position:relative;
        left: 0;
        right:0;
        top:0;
    }
    .shopbody{
        display: flex;
    }
    .list{
        background-color:#ccc;
        height: 100%;
        width: 25%;
    }
    .body{
        background-color:yellow;
        height: 100%;
        width: 75%;
    }
</style>