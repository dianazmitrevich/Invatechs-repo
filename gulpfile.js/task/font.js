// обработка font
const font = () => {
   return $.gulp.src($.path.font.src) // создает файловый поток чтения, который мы можем потом передать дальше
      .pipe($.gp.plumber({
         errorHandler: $.gp.notify.onError(error => ({
            title: "Font",
            message: error.message
         }))
      }))
      .pipe($.gp.newer($.path.font.dest))
      .pipe($.gulp.dest($.path.font.dest))
}

module.exports = font;