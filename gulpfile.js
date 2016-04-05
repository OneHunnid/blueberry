var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var lessPluginCleanCSS = require('less-plugin-clean-css');
var lessPluginAutoPrefix = require('less-plugin-autoprefix');

cleancss = new lessPluginCleanCSS({ advanced: true });
autoprefix = new lessPluginAutoPrefix({ browser: ["last 2 versions"] });

// Scripts Tasks - Compiles ECMAScript 6 and minifies
gulp.task('scripts', function() {
	gulp.src('app/js/*.js')
			.pipe(babel({
				presets: ['es2015']
			}))
			.on('error', gutil.log)
			.pipe(uglify())
			.pipe(gulp.dest('build/js'))
});

// Styles Tasks - Turns LESS to CSS, autoprefixes and minifies
gulp.task('less', function() {
	gulp.src('app/styles/*.less')
			.on('error', gutil.log)
			.pipe(less({
				plugins: [autoprefix, cleancss]
			}))
			.pipe(gulp.dest('build/styles'))
});

// Watch Task - Watches javascript and stylesheets for changes
gulp.task('watch', function() {
	gulp.watch('app/js/*.js', ['scripts']);
	gulp.watch('app/styles/*.less', ['less']);
});

gulp.task('default', ['scripts', 'less', 'watch']);