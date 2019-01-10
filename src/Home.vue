<template>
  <div class="home">
    <!--这里是home-->
    <Header></Header>
    <Slider></Slider>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './public/Header'
  import Slider from './public/Slide'
  export default {
    name: "Home",
    components:{
      Header,Slider
    }
  }
</script>

<style scoped>
  .home{
    position: fixed;
    top: 0;
    right: 0;
    width: 85%;
    height: 100%;
    background: deepskyblue;
  }
</style>