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



### 常用API

src(globs, [options])：输入

```js
//	globs[string|array]: 要处理文件的路径匹配规则
//	options：配置项
const { src, dest } = require('gulp');

function copy() {
  return src('input/*.js', { sourcemaps: true })
    .pipe(dest('output/'));
}
```

dest(directory, [options])：输出

```js
//	directory[string|function]: 输出的路径
//	options：配置项
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');

src('input/**/*.js', { sourcemaps: true })
  .pipe(uglify())
  .pipe(dest('output/', { sourcemaps: '.' }));

//	注意：dest的路径默认是基于当前路径，并不是输入文件的路径，如果需要输出到输入文件的相对路径，可以使用gulp-rename插件来实现。如我要将所有目录下的scss目录中的scss文件输出到scss同目录的css文件中:

src('./SCOs/**/scss/*.scss')
.pipe(sass())
.pipe(rename(path=> path.dirname += '../../css'))
.pipe(dest('./SCOs'));

```

series(...tasks)：顺序执行多个任务

```js
//	tasks[function|string]：任务名或者function
const { series } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = series(javascript, css);
```

parallel(...tasks)：多个任务同时执行

```js
//	tasks[function|string]：任务名或者function
const { parallel } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = parallel(javascript, css);
```

watch(globs, [options], [task])：文件监听

```js
//	globs[string|array]: 要监听的文件
//	options：配置项，点击查看详情
//	task[function|string]：要执行的任务或操作
const { watch } = require('gulp');

watch(['input/*.js', '!input/something.js'], function(cb) {
  // body omitted
  cb();
});
```

```js
//	监听方法会返回一个实例,该实例提供了如下几个方法

watcher.on(eventName, eventHandler)
//	eventName[string]：事件名称，可以是add, addDir, change, unlink, unlinkDir, ready, 	error, or all
//	eventHandler[function]：事件处理函数，该函数接收path和stats两个参数。
const { watch } = require('gulp');

const watcher = watch(['input/*.js']);

watcher.on('change', function(path, stats) {
  console.log(`File ${path} was changed`);
});

watcher.on('add', function(path, stats) {
  console.log(`File ${path} was added`);
});

watcher.on('unlink', function(path, stats) {
  console.log(`File ${path} was removed`);
});

watcher.close();


//	watcher.close()：关闭文件监听器
//	watcher.add(globs)：添加文件到监听器

//	globs[string|array]: 要添加的文件

//	watcher.unwatch(globs)：移除监听器中的文件

//	globs[string|array]: 要移除的文件
```



task([taskName], taskFunction)：定义任务（4.0推荐使用function替代此方法）

```js
//	taskName[string]：任务名称
//	taskFunction[function]：处理函数
const { task } = require('gulp');

task('build', function(cb) {
  // body omitted
  cb();
});

const build = task('build');
```





### 插件

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

