const webpack = require("webpack-stream");

// обработка JS
const js = () => {
   return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev }) // создает файловый поток чтения, который мы можем потом передать дальше
      .pipe($.gp.plumber({
         errorHandler: $.gp.notify.onError(error => ({
            title: "JS",
            message: error.message
         }))
      }))
      .pipe($.gp.babel())
      .pipe(webpack($.app.webpack))
      .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
}

module.exports = js;