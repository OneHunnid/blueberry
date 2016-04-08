module.exports = function(gulp, plugins, pluginsConnect) {
  return function() {
    plugins.connect.server({
      root: 'app',
      port: 8080,
      livereload: true
    })
  };
};
