// 基本使用(当less发现变化的时候自动更新页面)
var gulp = require('gulp'),
  less = require('gulp-less'),
  livereload = require('gulp-livereload');

gulp.task('less', function () {
  gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('src/css'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen(); //要在这里调用listen()方法
  gulp.watch('less/*.less', ['less']);  //监听目录下的文件，若文件发生变化，则调用less任务。
});