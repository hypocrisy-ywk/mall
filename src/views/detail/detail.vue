<template>
    <div class="detail">
        <toast :massage="massage" :show="show"/>
        <detailnavbar class="top" ref="nav" @itemclick = "itemclick"/>
        <scroll class="content" ref="scroll" :num="3" @scroll="contentscroll">
            <detailswiper :topswiper = "topswiper"/>
            <detailinfo :good = "good"/>
            <detailshopinfo :shop = "shop"/>
            <detailshopimg :shopimg = "shopimg" @detailimageload = "detailimageload"/>
            <detailparams ref="params" :params = "params"/>
            <detailcomment ref="comment" :comment = "comment"/>
            <datashow ref="recommend" :goods = "recommend" class="recommend"/>
        </scroll>
        <backtop class="backtop" @click.native="backclick" v-show = 'isshowback'/>
        <detailbottombar @addtocart="addtocart"/>
    </div>
</template>

<script>
    import detailnavbar from "./childcomps/detailnavbar";
    import detailswiper from "./childcomps/detailswiper";
    import detailinfo from "./childcomps/detailinfo";
    import detailshopinfo from "./childcomps/detailshopinfo";
    import detailshopimg from "./childcomps/detailshopimg";
    import detailparams from "./childcomps/detailparams";
    import detailcomment from "./childcomps/detailcomment";
    import detailbottombar from "./childcomps/detailbottombar";

    import scroll from "../../components/common/scroll/scroll";
    import datashow from "../../components/content/datashow/datashow";
    import backtop from "../../components/content/backtop/backtop";
    import toast from "../../components/common/toast/toast"

    import {getDetail,Goods,getRecommend} from "../../network/detail";

    export default {
        name:'detail',
        components:{
            detailnavbar, //详情页导航
            detailswiper, //轮播图
            detailinfo, //商品信息
            detailshopinfo, //店铺信息
            detailshopimg, //效果展示图
            detailparams, //商品参数
            detailcomment, //评论
            detailbottombar,//底部工具栏
            scroll,
            datashow, //推荐商品  代码复用
            backtop,
            toast
        },
        data(){
            return {
                iid:null,
                topswiper:[],
                good:{},
                shop:{},
                detailinfo:{},
                shopimg:{},
                params:{},
                comment:{},
                recommend:[],//推荐商品
                currentindex:0,
                topYs:[],
                isshowback:false,
                massage:'', // 操作之后的弹窗变量
                show:false
            }
        },
        created(){
            //1. 获取iid
            /* console.log(this.$route.query.iid) */
            this.iid = this.$route.query.iid;

            //2. 发送网络请求
            getDetail(this.iid).then(res =>{
               /*  console.log(res) */
                const data = res.result
                this.topswiper = data.itemInfo.topImages
                this.good = new Goods(data.itemInfo , data.columns , data.shopInfo.services)
                this.shop = data.shopInfo
                this.shopimg = data.detailInfo
                this.params = data.itemParams
                this.comment = data.rate
            })

            getRecommend().then(res => {
                /* console.log(res) */
                this.recommend = res.data.list
            })
        },
        methods:{
            detailimageload(){
                this.$refs.scroll.refresh()

                this.topYs = []
                this.topYs.push(0)
                this.topYs.push(this.$refs.params.$el.offsetTop)
                this.topYs.push(this.$refs.comment.$el.offsetTop)
                this.topYs.push(this.$refs.recommend.$el.offsetTop)
            },

            contentscroll(position){
                this.isshowback = -position.y > 1000;

                const positionY = -position.y
                // 用 positionY和主题标题的位置比较
                //[0,7938,9120,9452]

                // positionY 在 0 到 7938的位置时  index===0
                // positionY 在 7938 到 9120的位置时  index===1
                // positionY 在 9120 到 9452的位置时  index===2
                // positionY 在 9452 以下位置时 index===3

                let length = this.topYs.length
                for(let i = 0 ; i < length ; i++){
                    if(this.currentindex !== i && (( i < length - 1 && positionY >= this.topYs[i] && positionY < this.topYs[i+1]) || (i ===length-1 &&  positionY >= this.topYs[i]))){
                        this.currentindex = i;
                        this.$refs.nav.currentindex = this.currentindex
                    }
                }
            },

            itemclick(index){
                /* console.log(index) */
                this.$refs.scroll.scroll.scrollTo(0 , -this.topYs[index] , 200)
            },

            backclick(){
                this.$refs.scroll.scroll.scrollTo(0,0,500)
                //this.$refs.scroll是scroll组件,里面有一个scroll对象,scroll对象内的scrollTo方法.
            },

            addtocart(){
                //获取购物车需要展示的商品信息
                const product = {}
                product.image = this.topswiper[0]
                product.title = this.good.title
                product.desc = this.good.desc
                product.iid = this.iid
                product.price = this.good.realprice 
                console.log('.....')
                //将商品信息添加到购物车里
                /* this.$store.dispatch('addtocart' , product) */

                this.$store.dispatch('addtocart', product).then( res =>{
                    this.show = true 
                    this.massage = res
                    setTimeout(()=>{
                        this.show = false
                        this.massage = res;
                    },2000)
                    console.log(this.massage)
                })
            }
        }
    }
</script>

<style scoped>
    .detail{
        height:100vh;
        position: relative;
        z-index: 3;
        overflow: hidden;
    }
    .content{
        background: #fff;
        height:calc(100% - 114px);
        position: absolute;
        top:44px
    }
    .recommend{
        clear: both;
    }
    .backtop{
       position: fixed;
       bottom:70px;
       right:10px;
    }
</style>