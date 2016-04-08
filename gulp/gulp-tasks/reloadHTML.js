module.exports = function(gulp, plugins, connect) {
  return function() {
    gulp.src('app/*.html')
      .pipe(connect.reload());
  };
};
