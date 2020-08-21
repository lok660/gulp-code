var gulp = require('gulp'); //引入gulp
var concat = require('gulp-jshint');//引入检测js文件模块

//创建一个检测js的任务
gulp.task('concat', function () {
  //指明要检测的文件
  gulp.src('*.js')
    .pipe(jshint())
    //输出检查结果
    .pipe(jshint.reporter());
})