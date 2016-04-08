module.exports = function(gulp, plugins, pluginsUtil, pluginsLess, pluginsConcat, pluginsConnect) {
		return function() {
			gulp.src(['app/styles/normalize.less', 'app/styles/main.less'])
					.on('error', plugins.util.log)
					.pipe(plugins.less({
						plugins: [autoprefix, cleancss]
					}))
					.pipe(plugins.concat('build.css'))
					.pipe(gulp.dest('app/styles'))
					.pipe(plugins.connect.reload());
		};
};
