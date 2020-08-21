var gulp = requrie('gulp'); // 引入gulp
var minify = require('gulp-minify-css');//引入压缩css的模块
//创建一个压缩任务
gulp.task('minifycss', function () {
  //指定当前文件下的所有后缀为.css的文件
  gulp.src('*.css')
    //使用minify模块进行压缩
    .pipe(minify())
    //最终将压缩的文件输出到minicss文件下
    .pipe(gulp.dest('minicss'))
})
