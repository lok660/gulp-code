var gulp = require('gulp'); //引入gulp
var imagemin = require('gulp-imagemin');


//创建一个压缩任务
gulp.task('pngquant', function () {
  gulp.src('src/*.{png,jpg,gif,ico}')
    .pipe(imagemin({
      progressive: true,//Boolean类型 默认:false 无损压缩图片
      optimizationLevel: 5,//number类型 默认:3 取值范围:0-7(优化等级)
      interlced: true,//Boolean类型 默认false 隔行扫描gif进行渲染
      multipass: true //Boolean类型 默认false 多次优化svg直到完全优化
      //开始压缩png图片
    }))
    .pipe(gulp.dest('img'))

})