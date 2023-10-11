// обработка html
const html = () => {
   return $.gulp.src($.path.html.src) // создает файловый поток чтения, который мы можем потом передать дальше
      .pipe($.gp.plumber({
         errorHandler: $.gp.notify.onError(error => ({
            title: "HTML",
            message: error.message
         }))
      }))
      .pipe($.gp.fileInclude())
      .pipe($.gp.webpHtml())
      .pipe($.gp.size({ title: "До сжатия" }))
      .pipe($.gp.htmlmin($.app.htmlmin))
      .pipe($.gp.size({ title: "После сжатия" }))
      .pipe($.gulp.dest($.path.html.dest))
}

module.exports = html;