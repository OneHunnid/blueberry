module.exports = function(gulp, plugins, pluginsConnect) {
  return function() {
    gulp.src('app/*.html')
      .pipe(plugins.connect.reload());
  };
};
