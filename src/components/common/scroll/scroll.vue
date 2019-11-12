<template>
    <div class='wrapper' ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        name:'scroll',
        props:{
            num:{
                type:Number,
                default(){
                    return 0
                }
            },
            upload:{
                type:Boolean,
                default(){
                    return false
                }
            }
        },
        data(){
            return {
                scroll:null
            }
        },
        methods:{
            refresh(){
                this.scroll && this.scroll.refresh()
            }
        },
        mounted(){
            //1.创建BScroll对象
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,
                probeType:this.num, //从组件中传来到底要不要监听滚动的数
                pullUpLoad:this.upload
            })

            //2.监听滚动的位置
            this.scroll.on('scroll',(position) => {
                this.$emit('scroll',position)
            })
            
            //3.监听上拉事件
            this.scroll.on('pullingUp',() =>{
                this.$emit('pullingUp')
            })          
        }
    }
</script>

<style scoped>

</style>