<template>
  <div class="route1">

    <div class="test">
      test
    </div>

    <pre>
      new Vue({
      router:VueRouter,
      render: h => h(App),
      }).$mount('#app')
    </pre>
    <pre>
      cnpm install --save-dev sass-loader
      cnpm install --save-dev node-sass
    </pre>
    <pre>
      30px=0.4rem
      0.2rem=15px

      应该
      1rem=75px

      目前
      1rem=37.5px
      75

      10 37.5
    </pre>

  </div>
</template>

<script>
  export default {
    name: "Route1"
  }
</script>

<style scoped lang="scss">
  .route1 {
    width: 100%;
    height: 100%;
    background: #f1f1f1;
    font-size: 20px;
    pre{
      background: forestgreen;
      padding: 2vw;
      margin: 2vw;
      color: #fff;
      font-size: 20px;/*no*/
    }
  }
</style>