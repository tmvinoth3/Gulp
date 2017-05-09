var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
/*
gulp.task('hello',function(){
console.log("Hello Gulp");
});
*/

gulp.task('sass',function(){
return gulp.src('app/Sass/style.scss')
.pipe(sass())
.pipe(gulp.dest('app/Css'))
.pipe(browserSync.reload({
      stream: true
    }))
});


//gulp.task('watch',function(){
//gulp.watch('app/Sass/**/*.scss',['sass']);
//});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});


gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});