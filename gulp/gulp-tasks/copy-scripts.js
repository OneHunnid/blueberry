module.exports = function(gulp) {
  gulp.src('./app/scripts/build.js')
  .pipe(gulp.dest('./build/scripts'));
};
