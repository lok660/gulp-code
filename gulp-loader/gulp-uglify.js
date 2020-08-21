var gulp = require('gulp'); //引入gulp
var uglify = require('gulp-uglify');//引入js压缩模块

//创建一个压缩js的任务
gulp.task('minifyjs', function () {
  //指定当前文件夹下的所有JS文件
  gulp.src('*.js')
    //进行重命名 可以设置名字为类似(mini.min.js)
    .pipe(rename({ suffix: '.min' }))
    //进行压缩
    .pipe(uglify())
    //将压缩后的文件输出到minijs文件夹下
    .pipe(gulp.dest('minijs'))
})