<template>
  <div class="slide public-flex-col">
    <div class="nav-btn public-flex-center" v-for="(item,index) in nav" @click="to_nav(index)">
      {{item}}
    </div>
    <!--npm install vue-router-->
  </div>
</template>

<script>
  export default {
    name: "Slide",
    data() {
      return {
        nav: ['相关配置', '导航2', '导航3', '导航4']
      }
    },
    methods:{
      to_nav(ind){
        console.log(this)
        switch (ind) {
          case 0:
            this.$router.push('/home/route1')
            break;
        }
      }
    }
  }
</script>

<style scoped>
  .slide {
    transition: 1s!important;
    width: 15%;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background: chartreuse;
  }

  .nav-btn {
    transition: 1s!important;
    width: 60%;
    height: 20%;
    background: darksalmon;
    margin: 4vw;
    color: #fff;
    font-size: 2vw;
  }
</style>