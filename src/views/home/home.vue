<template>
    <div id="home" class="wrapper">
        <navbar class="home-nav"><div slot="center">购物街</div></navbar>
        <tabcontrol :titles = "titles" 
                        @tabclick="tabclick" 
                        ref = 'tabcontrol1'
                        class="tabcontrol" v-show="istabfixed"/>
        <scroll class="content" 
                ref="scroll" 
                :num = '3' 
                :upload="true" 
                @scroll = 'showbackclick'
                @pullingUp = 'loadmore'>
            <homeswiper :banner="banner" @swiperimageload='swiperimageload'/>
            <recommendview :recommend = "recommend"/>
            <featureview/>
            <tabcontrol :titles = "titles" 
                        @tabclick="tabclick" 
                        ref = 'tabcontrol2'/>
            <datashow :goods="goods[currenttype].list"/>
        </scroll>
        <backtop class="backtop" @click.native="backclick" v-show = 'isshowback'/>
    </div>
</template>

<script>
    import navbar from "../../components/common/navbar/navbar";
    import tabcontrol from "../../components/content/tabcontrol/tabcontrol";
    import datashow from "../../components/content/datashow/datashow";
    import scroll from "../../components/common/scroll/scroll";
    import backtop from "../../components/content/backtop/backtop"

    import homeswiper from "./childcomps/homeswiper";
    import recommendview from "./childcomps/recommendview";
    import featureview from "./childcomps/featureview";
    

    import {getHomeMultidata,getHomeGoods} from "../../network/home";
    export default {
        name: 'home',
        components:{
            navbar,
            tabcontrol,
            datashow,
            scroll,
            backtop,
            homeswiper,
            recommendview,
            featureview
        },
        data(){
            return {
                banner: [],
                recommend:[],
                titles:['流行','新款','精选'],
                goods:{
                    'pop': {page:0 , list:[]},
                    'new': {page:0 , list:[]},
                    'sell': {page:0 , list:[]}
                },
                currenttype:'pop',
                isshowback:false,
                taboffsetTop:0,
                istabfixed:false,
                saveY:0
            }
        }, 
        created() {
            this.getHomeMultidata(),
            this.getHomeGoods('pop'),
            this.getHomeGoods('new'),
            this.getHomeGoods('sell')
        },
        /*   activated(){
            this.$refs.scroll.scroll.scrollTo(0 , this.saveY ,0)
            this.$refs.scroll.refresh();
            console.log('come')
        },
        deactivated(){
            this.saveY = this.$refs.scroll.scroll.y
        }, */
        activated(){
           this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
           this.$refs.scroll.scroll.refresh()
        },
        mounted(){
            const refresh = this.debounce(this.$refs.scroll.refresh,50);
            this.$bus.$on('imageload',() => {
                    refresh()
                })
        },
        methods:{
            //与页面逻辑相关的方法
            debounce(func,delay){
                let timer = null;
                return function(...args){
                    if(timer)clearTimeout(timer)
                    timer = setTimeout(() => {
                        func.apply(this,args)
                    },delay)
                }
            },//防抖函数 提升性能 

            tabclick(index){
                switch(index){
                    case 0:
                        this.currenttype = 'pop'; 
                        break;                 
                    case 1:
                        this.currenttype = 'new';
                        break;                   
                    case 2:
                        this.currenttype = 'sell'               
                } 
                this.$refs.tabcontrol1.currentindex = index;
                this.$refs.tabcontrol2.currentindex = index
            },

            backclick(){
                this.$refs.scroll.scroll.scrollTo(0,0,500)
                //this.$refs.scroll是scroll组件,里面有一个scroll对象,scroll对象内的scrollTo方法.
            },

            showbackclick(position){
                this.isshowback = (-position.y) > 1000;
                //判断元素是否大于1000 大于则显示回顶部按钮 小于则隐藏

                this.istabfixed = (-position.y) > this.taboffsetTop
            },

            loadmore(){
                this.getHomeGoods(this.currenttype);
                //监听下拉事件调用请求数据方法
            },

            swiperimageload(){
                this.taboffsetTop = this.$refs.tabcontrol2.$el.offsetTop
            },

            //网络请求相关的方法
            getHomeMultidata(){
                getHomeMultidata().then(res => {
                   /*  console.log(res); */
                    this.banner = res.data.banner.list
                    this.recommend = res.data.recommend.list
                })
            },
            getHomeGoods(type){
                const page = this.goods[type].page + 1
                getHomeGoods(type,page).then(res => {
                   /*  console.log(res); */
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1;
                    this.$refs.scroll.scroll.finishPullUp()
                })
            }
        }
    }
</script>

<style scoped>
    #home{
        overflow: hidden;
        position:relative;
        height: 100vh;
    }
    .home-nav{
       background-color: var(--color-tint);
       /* position:fixed;
       left:0;
       right:0;
       top:0;
       z-index:1000; */
   }
   .content{
       overflow: hidden;
       position:absolute;
       top:44px;
       bottom:49px;
   }
   .backtop{
       position: fixed;
       bottom:50px;
       right:10px;
   }
   .tabcontrol{
       position:relative;
       z-index: 9;
   }
</style>