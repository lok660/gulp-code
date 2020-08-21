var gulp = require('gulp'); //引入gulp
var lecss = require('gulp-less');//引入编译模块

//创建一个编译任务
gulp.task('compile-less', function () {
  //指明要编译的文件
  gulp.src('*.less')
    //进行编译
    .pipe(lecss())
    //将编译后的文件输出到css文件夹下
    .pipe(gulp.dest('css'));
})