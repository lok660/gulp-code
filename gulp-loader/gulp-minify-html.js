var gulp = require('gulp'); //引入gulp
var minhtml = require('gulp-minify-html');//引入js压缩模块

//创建一个压缩html的任务
gulp.task('minhtml', function () {
  //指定当前文件夹下的所有html文件
  gulp.src('*.html')
    //进行压缩
    .pipe(minhtml())
    //将压缩后的文件输出到minihtml文件夹下
    .pipe(gulp.dest('minihtml'))
})