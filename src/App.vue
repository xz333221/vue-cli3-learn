<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->

    <!--这里是APP-->

    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<Home></Home>-->
    <router-view></router-view>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import Home from './Home.vue'

  export default {
    name: 'app',
    created(){
      console.log(this.$router);
    },
    components: {
      Home
    }
  }
</script>

<style lang="scss">
  @import "assets/css/public.scss";

  html, body, #app {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: aquamarine;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
