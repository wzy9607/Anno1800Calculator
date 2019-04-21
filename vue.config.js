module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === "production" ? "/Anno1800Calculator/" : "/",
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  }
};
