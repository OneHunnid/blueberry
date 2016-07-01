module.exports = function(gulp) {
  gulp.src('./app/assets/*')
  .pipe(gulp.dest('./build/assets'));
};
