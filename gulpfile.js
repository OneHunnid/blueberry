var gulp = require('gulp');

var gutil = require('gulp-util');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var lessPluginCleanCSS = require('less-plugin-clean-css');
var lessPluginAutoPrefix = require('less-plugin-autoprefix');

var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var concat = require('gulp-concat-sourcemap');
var exec = require('child_process').exec;
var babel = require('babelify');
var watchify = require('watchify');
var browserify = require('browserify');

cleancss = new lessPluginCleanCSS({ advanced: true });
autoprefix = new lessPluginAutoPrefix({ browser: ["last 2 versions"] });

// Add custom browserify options here
var customOpts = {
	entries: ['./app/js/app.js'],
	debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

// Add transformations here
b.transform("babelify", {presets: ["es2015", "react"]})
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal


function bundle() {
		return b.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error')) // log errors if they happen
		.pipe(source('build.js'))
		.pipe(sourcemaps.write('./')) // write .map file
		.pipe(gulp.dest('./app/js'));
}

// ========================================================================

// JS Task - Renders React Application
gulp.task('js', bundle);

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
	gulp.watch('app/styles/*.less', ['less']);
	gulp.watch(['app/*.html'], ['html']);
});

// Connect Task - Starts localhost:8080
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		port: 8080,
		livereload: true
	})
});

gulp.task('default', ['js', 'less', 'connect', 'watch']);
