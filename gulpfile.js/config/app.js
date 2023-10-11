const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
   isProd: isProd,
   isDev: isDev,

   htmlmin: {
      collapseWhitespace: isProd
   },

   pug: {
      pretty: isDev,
      data: {
         products: require("../data/products.json")
      }
   },

   webpack: {
      mode: isProd ? "production" : "development"
   },

   imagemin: {
      verbose: true
   }
}