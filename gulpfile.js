var gulp = require('gulp');
$ = require('gulp-load-plugins')();

// minification, concatenation
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

// watches for changes in "src" directory for css, js or html files
gulp.task('watch', ['default'], function() {
    gulp.watch('src/**/*.{css,js,html}', ['default'])
});