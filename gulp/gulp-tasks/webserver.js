module.exports = function(gulp, plugins, connect) {
  return function() {
    connect.server({
      root: 'app',
      port: 8080,
      livereload: true
    })
  };
};
