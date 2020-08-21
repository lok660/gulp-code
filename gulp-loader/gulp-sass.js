var gulp = require('gulp'); //引入gulp
var sacss = require('gulp-sass');//引入编译模块

//创建一个编译任务
gulp.task('compile-sass', function () {
  //指明要编译的文件
  gulp.src('*.sass')
    //进行编译
    .pipe(sacss())
    //将编译后的文件输出到css文件夹下
    .pipe(gulp.dest('css'));
})