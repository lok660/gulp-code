gulp是一种基于流的自动化构建工具，基于nodeJs中的stream（流）来读取和写入数据，相对于grunt直接对文件进行IO读写来说速度更快。

    借助于gulp，我们可以自动化地完成js/sass/less/css等文件的的测试、检查、合并、压缩、格式化，并监听文件在改动后重复指定的这些步骤。
    
    gulp与webpack最大的不同点体现在gulp并不能像webpack那样将css/less/image等非js类资源模块化打包。
    
    gulp适用场景：单独打包sass/less/css、压缩图片、压缩html等。


### gulp3与gulp4

```js
gulp3	
1.gulp3对于任务，顺序执行完该任务的依赖任务后，才执行该任务。

gulp4
1.gulp4中定义任务采用async await方式定义任务。
2.gulp4中任务执行有串行（gulp.series）和并行执行（gulp.parallel）方式，通过合理配置串行和并行即可实现gulp3中的依赖执行。
```





- gulp-clean：用于清理;
- gulp-notify：用于打印消息文本;
- gulp-rename：用于修改名字;
- gulp-concat：用于合并文件;
- gulp-zip：用于生成一个zip压缩包;
- gulp-minify-css：用于压缩css;
- gulp-autoprefixer：用于给css添加前缀;
- gulp-imagemin：用于给图片进行优化;
- gulp-uglify：用于压缩js;
- amd-optimize：用于amd模块引用编译；
- gulp-import-css：如果css文件是通过import导入的可以使用此插件进行合并优化;
- gulp-rev-replace：用于替换;
- gulp-useref：引入使用build标记，进行替换;
- gulp-rev：生成md5文件名;
- gulp-filter：对文件进行过滤;
- gulp-header：压缩之后将注释写入到文件的头部
- gulp-if：进行逻辑判断
- gulp-size：获取文件大小
- gulp-less：编译less文件
- gulp-sass：编译sass文件
- gulp-file-include：对文件进行引入
- gulp-sourcemaps：生成map文件
- gulp-livereload：自动刷新
- gulp-clean-css：css压缩
- browserSync：启动server并启动热更新
- gulp-plumber : 监测工作流，报错，防止遇到错误时直接退出gulp
- gulp-rev : 文件名添加版本号
- gulp-css-spritesmith：根据css文件自动生成雪碧图

