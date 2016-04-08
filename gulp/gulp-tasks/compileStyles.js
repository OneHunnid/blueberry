module.exports = function(gulp, plugins, gutil, less, concat, connect) {
		return function() {
			gulp.src(['app/styles/normalize.less', 'app/styles/main.less'])
					.on('error', gutil.log)
					.pipe(less({
						plugins: [autoprefix, cleancss]
					}))
					.pipe(concat('build.css'))
					.pipe(gulp.dest('app/styles'))
					.pipe(connect.reload());
		};
};
