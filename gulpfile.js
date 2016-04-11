var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var lessPluginCleanCSS = require('less-plugin-clean-css');
var lessPluginAutoPrefix = require('less-plugin-autoprefix');
var source = require('vinyl-source-stream');
var assign = require('lodash.assign');
var exec = require('child_process').exec;
var babel = require('babelify');
var watchify = require('watchify');
var browserify = require('browserify');

cleancss = new lessPluginCleanCSS({ advanced: true });
autoprefix = new lessPluginAutoPrefix({ browser: ["last 2 versions"] });



// Add custom browserify options here
// var customOpts = {
// 	entries: ['./app/js/app.js'],
// 	debug: true
// };
// var opts = assign({}, watchify.args, customOpts);
// var b = watchify(browserify(opts));
//
// // Add transformations here
// b.transform("babelify", {presets: ["es2015", "react"]})
// b.on('update', bundle); // on any dep update, runs the bundler
// b.on('log', plugins.util.log); // output build logs to terminal
//
// function bundle() {
// 		return b.bundle()
// 		.on('error', plugins.util.log.bind(plugins.util, 'Browserify Error')) // log errors if they happen
// 		.pipe(source('build.js'))
// 		.pipe(plugins.sourcemaps.write('./')) // write .map file
// 		.pipe(gulp.dest('./app/js'))
// 		.pipe(plugins.connect.reload());
// }



// This 'js' task needs fixin' -- compileJS does not refresh the DOM when changes are made
gulp.task('js', require('./gulp/gulp-tasks/compileJS')(gulp, plugins, plugins.util, source, plugins.sourcemaps, assign, plugins.concatSourcemap, exec, babel, watchify, browserify, plugins.connect));

// gulp.task('js', bundle);
gulp.task('plugins.less', require('./gulp/gulp-tasks/compileStyles')(gulp, plugins, plugins.util, plugins.less, plugins.concatSourcemap, plugins.connect));
gulp.task('html', require('./gulp/gulp-tasks/reloadHTML')(gulp, plugins, plugins.connect));
gulp.task('plugins.connect', require('./gulp/gulp-tasks/webserver')(gulp, plugins, plugins.connect));

gulp.task('default', ['js', 'plugins.less', 'plugins.connect'], function() {
	gulp.watch('app/styles/*.plugins.less', ['plugins.less']);
	gulp.watch(['app/*.html'], ['html']);
});
