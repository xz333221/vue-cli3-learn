<template>
  <div class="header">
    <div class="header public-flex-center">
      header
    </div>
    <div class="navbtn" @click="nav_click">
      <div class="nav-bar"></div>
      <div class="nav-bar"></div>
      <div class="nav-bar"></div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "Header",
    data(){
      return{

      }
    },
    methods:{
      nav_click(){
        $('.slide').toggleClass("width-none")
        $('.nav-btn').toggleClass("width-none")
        $('.main').toggleClass("width-100")
        $('.header').toggleClass("width-100")
        $('.navbtn').toggleClass("transform-rotate")
        // $('.slide').toggle(1000)
        this.$root.Bus.$emit('nav',1)
      }
    }
  }
</script>

<style scoped>
.header{
  transition: 1s!important;
  position: fixed;
  right: 0;
  top: 0;

  width: 85%;
  height: 10vh;
  background: darksalmon;
  color: #fff;
  font-size: 3vw;
}
</style>