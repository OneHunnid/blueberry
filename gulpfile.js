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

gulp.task('js', require('./gulp/gulp-tasks/compileJS')(gulp, plugins, plugins.util, source, plugins.sourcemaps, assign, plugins.concatSourcemap, exec, babel, watchify, browserify, plugins.connect));
gulp.task('less', require('./gulp/gulp-tasks/compileStyles')(gulp, plugins, plugins.util, plugins.less, plugins.concatSourcemap, plugins.connect));
gulp.task('html', require('./gulp/gulp-tasks/reloadHTML')(gulp, plugins, plugins.connect));
gulp.task('connect', require('./gulp/gulp-tasks/webserver')(gulp, plugins, plugins.connect));
gulp.task('watch', require('./gulp/gulp-tasks/watch')(gulp));

gulp.task('default', ['js', 'less', 'connect', 'watch']);
