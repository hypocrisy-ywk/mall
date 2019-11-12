<template>
  <div id="app" class="wrapper">
    <keep-alive exclude="detail">
        <router-view/>
    </keep-alive>
    <maintabber/>
  </div>
</template>
<script>
    import maintabber from "./components/content/maintabber/maintabber.vue";
    export default {
        name:'App',
        components:{
            maintabber
        }
    }
</script>

<style>
    @import "assets/css/base.css";
</style>
