module.exports = function(gulp, ghPages) {
  gulp.src('./build/**/*')
  .pipe(ghPages());
};
