module.exports = function(gulp, plugins, gutil, source, pluginsSourcemaps, assign, concat, exec, babel, watchify, browserify, connect) {
  return function() {

    // Custom browserify options
    var customOpts = {
    	entries: ['./app/js/app.js'],
    	debug: true
    };
    var opts = assign({}, watchify.args, customOpts);
    var b = watchify(browserify(opts));

    // Transformations
    b.transform("babelify", {presets: ["es2015", "react"]})
    b.on('update', bundle); // on any dep update, runs the bundler
    b.on('log', gutil.log); // output build logs to terminal

    function bundle() {
    		return b.bundle()
    		.on('error', gutil.log.bind(gutil, 'Browserify Error')) // log errors if they happen
    		.pipe(source('build.js'))
    		.pipe(plugins.sourcemaps.write('./')) // write .map file
    		.pipe(gulp.dest('./app/js'));
    }
  };
};
