const gulp = require('gulp');

// gulp3

// 定义task1任务
gulp.task('task1', function () {
  console.log('task1');
});

// 定义task2任务
gulp.task('task2', function () {
  console.log('task2');
});

// 定义default任务，依赖于task1任务和task2任务
gulp.task('default', ['task1', 'task2'], function () {
  console.log('done');
});

//  ---------------------------------------------------
//gulp4

// 定义任务task1
gulp.task('task1', async () => {
  await console.log('task1');
});

// 定义任务task2
gulp.task('task2', async () => {
  await console.log('task2');
});

// 串行执行task1、task2任务
gulp.task('default', gulp.series('task1', 'task2'));
