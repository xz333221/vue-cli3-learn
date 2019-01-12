<template>
  <div class="home">
    <!--这里是home-->
      <Slider></Slider>
      <div class="con">
        <Header></Header>
        <div class="main">
          <router-view></router-view>
        </div>

      </div>

  </div>
</template>

<script>
  import Header from './public/Header'
  import Slider from './public/Slide'

  export default {
    name: "Home",
    components:{
      Header,Slider
    },
    mounted(){
      this.$root.Bus.$on('nav',content=>{
        console.log(content);
        // if(content==1){
        //   alert(111)
        // }
      })
    },
  }
</script>

<style scoped>
  .home{
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: deepskyblue;
    box-sizing: border-box;
  }
  .con{
    position: fixed;
    top: 0;
    right: 0;
    width: 85%;
    /*flex: 1;*/
  }
  .main{
    transition: 1s!important;
    position: fixed;
    right: 0;
    top: 10vh;
    width: 85%;
    height: 90vh;
    overflow: scroll;
    box-sizing: border-box;
    background: #f1f1f1;
  }
</style>