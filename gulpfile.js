var gulp = require('gulp');
$ = require('gulp-load-plugins')();

gulp.task('default', ['clean'], function() {
    return gulp.src('src/index.html')
        .pipe($.usemin({
            css: [$.minifyCss(), 'concat'],
            js: [$.uglify(), 'concat']
        }))
        .pipe(gulp.dest('dist'));
});

// cleans "dist" folder which will be deployed to server
gulp.task('clean', function() {
    return gulp.src('public/*')
        .pipe($.rimraf());
});