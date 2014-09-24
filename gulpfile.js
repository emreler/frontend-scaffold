var gulp = require('gulp');
$ = require('gulp-load-plugins')();

// default task. concatenates, minifies/uglifies asset files, appends content hash to filename, replaces links in template file
gulp.task('default', ['clean'], function () {

    var jsFilter = $.filter("**/*.js");
    var cssFilter = $.filter("**/*.css");
    var userefAssets = $.useref.assets();

    return gulp.src('src/index.html')
        .pipe(userefAssets)
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.minifyCss())
        .pipe(cssFilter.restore())
        .pipe($.rev())
        .pipe(userefAssets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest('dist'));
});

// cleans "dist" folder which will be deployed to server
gulp.task('clean', function() {
    return gulp.src('dist/*')
        .pipe($.rimraf());
});

// watches for changes in "src" directory for css, js or html files
gulp.task('watch', ['default'], function() {
    gulp.watch('src/**/*.{css,js,html}', ['default'])
});