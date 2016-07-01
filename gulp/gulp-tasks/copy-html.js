module.exports = function(gulp) {
  gulp.src('./app/index.html')
  .pipe(gulp.dest('./build'));
};
