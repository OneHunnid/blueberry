module.exports = function(gulp, plugins, STYLE_BUILD, STYLE_DEST, pluginsUtil, pluginsLess, pluginsConcatSourcemap, pluginsConnect) {
		return function() {
			gulp.src(['app/styles/normalize.less', 'app/styles/main.less'])
					.on('error', plugins.util.log)
					.pipe(plugins.less({
						plugins: [autoprefix, cleancss]
					}))
					.pipe(plugins.concatSourcemap(STYLE_BUILD))
					.pipe(gulp.dest(STYLE_DEST))
					.pipe(plugins.connect.reload());
		};
};
