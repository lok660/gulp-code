var gulp = require('gulp'); //引入gulp
var concat = require('gulp-concat');//引入合并文件模块

//创建一个合并任务
gulp.task('concat', function () {
  //指明要合并的文件
  gulp.src('*.js')
    //合并找到的js文件并命名为'merge.js'
    .pipe(concat('merge.js'))
    //将合并后的文件输出到concat文件夹下
    .pipe(gulp.dest('concat'));
})