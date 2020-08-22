// （1）当前目录下的main.scss、style.scss转换css然后合并压缩成scss.css写入到dist目录。
// （2）当前目录下的所有css文件合并压缩成style.min.css写入到dist目录。
// ------------------------------------------------------------------------------------

const gulp = require('gulp');
const concat = require('gulp-concat'); // 合并文件
const cleanCss = require('gulp-clean-css'); // 压缩css
const less = require('gulp-less'); // less编译
const del = require('del'); // 清空目录

// clean任务，清空dist目录
gulp.task('clean', async () => {
  await del(['./dist']);
});

// less任务，实现less文件编译、合并、压缩
gulp.task('less', async () => {
  await gulp.src(['./main.less', './style.less'])
    .pipe(less()) // less编译
    .pipe(concat('less.css')) // 合并为less.css
    .pipe(cleanCss()) // 压缩css文件
    .pipe(gulp.dest('./dist'));
});

// css任务，实现css合并、压缩
gulp.task('css', async () => {
  await gulp.src(['./*.css'])
    .pipe(concat('style.min.css')) // 合并为style.min.css
    .pipe(cleanCss()) // 压缩
    .pipe(gulp.dest('./dist'));
});

// 先执行clean任务，再并行执行less和css任务
gulp.task('default', gulp.series('clean', gulp.parallel('less', 'css')));
