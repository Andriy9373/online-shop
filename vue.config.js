const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //to be able to import scss file
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "@/assets/styles/styles.scss";`
  //     }
  //   }
  // },
  //
})
