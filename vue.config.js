module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? "/pieda-site/dist" : "",
  publicPath: "",
  css: {
    sourceMap: false,
    // extract: {
    //   filename: 'css/styles.css'
    // },
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        data: `
          @import "@/assets/scss/utils/variable.scss";
          @import "@/assets/scss/utils/mixins.scss";
        `
      }
    }
  },
  configureWebpack: {
    output: {
      filename: "js/[name].[hash:8].js",
      chunkFilename: "js/[name].[hash:8].js"
    }
  }
};
