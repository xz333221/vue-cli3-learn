<template>
  <div class="route1">
    <pre>
      路由配置

      new Vue({
        router:VueRouter,
        render: h => h(App),
      }).$mount('#app')
    </pre>
    <pre>
      安装sass

      cnpm install --save-dev sass-loader
      cnpm install --save-dev node-sass
    </pre>
    <pre>
      安装px2rem

      cnpminstall--savelib-flexible
      cnpm install --save-dev postcss-loader postcss-px2rem

      main.js
      import'lib-flexible/flexible.js'

      &lt;meta name="viewport"content="width=device-width, initial-scale=1.0,maximum-scale=1.0,
      minimum=1.0,user-scalable=no">

      vue.config.js
      module.exports = {
        css: {
          loaderOptions: {
            css: {
              // options here will be passed to css-loader
            },
            postcss: {
              // options here will be passed to postcss-loader
              plugins: [require('postcss-px2rem')({
                remUnit: 37.5
              })]
            }
          }
        }
      }

      border: 1px solid red;/*no*/
      font-size: 24px;/*px*/

      30px=0.4rem
      0.2rem=15px

      应该
      1rem=75px

      目前
      1rem=37.5px
      75

      10 37.5
    </pre>

    <pre>
      jq安装

      cnpm install jquery --save

      import $ from 'jquery'

      plugins: [

        new webpack.ProvidePlugin({

          $:"jquery",

          jQuery:"jquery",

          "windows.jQuery":"jquery"

        })

      ]
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
    box-sizing: border-box;
    text-align: left;
    /*overflow: scroll;*/
    width: 100%;
    /*height: 100%;*/
    background: #f1f1f1;
    font-size: 20px;
    pre {
      background: forestgreen;
      padding: 2vw;
      margin: 2vw;
      color: #fff;
      font-size: 20px; /*no*/
    }
  }
</style>