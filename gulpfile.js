var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

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
		.pipe(gulp.dest('./app/js'))
		.pipe(connect.reload());
}



// This 'js' task needs fixin' -- compileJS does not refresh the DOM when changes are made
// gulp.task('js', require('./gulp-tasks/compileJS')(gulp, plugins, gutil, source, sourcemaps, assign, concat, exec, babel, watchify, browserify, connect));

gulp.task('js', bundle);
gulp.task('less', require('./gulp/gulp-tasks/compileStyles')(gulp, plugins, gutil, less, concat, connect));
gulp.task('html', require('./gulp/gulp-tasks/reloadHTML')(gulp, plugins, connect));
gulp.task('connect', require('./gulp/gulp-tasks/webserver')(gulp, plugins, connect));

gulp.task('default', ['js', 'less', 'connect'], function() {
	gulp.watch('app/styles/*.less', ['less']);
	gulp.watch(['app/*.html'], ['html']);
});
