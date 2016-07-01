module.exports = function(gulp) {
  gulp.src('./app/styles/build.css')
  .pipe(gulp.dest('./build/styles'));
};
