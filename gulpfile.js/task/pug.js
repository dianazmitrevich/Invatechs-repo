// обработка pug
const pug = () => {
   return $.gulp.src($.path.pug.src) // создает файловый поток чтения, который мы можем потом передать дальше
      .pipe($.gp.plumber({
         errorHandler: $.gp.notify.onError(error => ({
            title: "Pug",
            message: error.message
         }))
      }))
      .pipe($.gp.pug($.app.pug))
      .pipe($.gp.webpHtml())
      .pipe($.gulp.dest($.path.pug.dest))
}

module.exports = pug;