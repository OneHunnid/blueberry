var gulp = require('gulp');

var gutil = require('gulp-util');
var connect = require('gulp-connect');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
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
			.pipe(concat('build.js'))
			.pipe(gulp.dest('app/js'))
});

// Styles Tasks - Turns LESS to CSS, autoprefixes and minifies
gulp.task('less', function() {
	gulp.src(['app/styles/normalize.less', 'app/styles/main.less'])
			.on('error', gutil.log)
			.pipe(less({
				plugins: [autoprefix, cleancss]
			}))
			.pipe(concat('build.css'))
			.pipe(gulp.dest('app/styles'))
			.pipe(connect.reload()); 
});

// HTML Task - Reloads HTML
gulp.task('html', function () {
  gulp.src('app/*.html')
    .pipe(connect.reload());
});

// Watch Task - Watches javascript and stylesheets for changes
gulp.task('watch', function() {
	gulp.watch('app/js/*.js', ['scripts']);
	gulp.watch('app/styles/*.less', ['less']);
	gulp.watch('app/*.html', ['html']);
});

// Connect Task - Starts localhost:8080
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		port: 8080,
		livereload: true
	})
});

gulp.task('default', ['scripts', 'less', 'connect', 'watch']);
