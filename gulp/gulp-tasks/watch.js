module.exports = function(gulp) {
  return function() {
    gulp.watch('app/styles/*.less', ['less']);
  	gulp.watch('app/*.html', ['html']);
  };
};
