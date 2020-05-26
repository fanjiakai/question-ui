var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css');
var cssWrap = require('gulp-css-wrap');
// 设置不同的主题命名空间
var customThemeName='.custom-text01'

gulp.task('css-wrap', function() {
  return gulp.src( path.resolve('./src/assets/theme/index.css'))
    .pipe(cssWrap({selector:customThemeName}))/* 添加的命名空间 */
    .pipe(cleanCSS())
    .pipe(gulp.dest('./src/assets/gulptheme/text01'));/* 存放FEB84A文件下目录 */
});
// index.css需要fonts里面的依赖
gulp.task('move-font', function() {
  return gulp.src(['./src/assets/theme/fonts/**']).pipe(gulp.dest('./src/assets/gulptheme/text01/fonts'));
});
