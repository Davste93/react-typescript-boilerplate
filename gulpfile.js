var path = require('path');
var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require("gulp-util");
var WebpackDevServer = require("webpack-dev-server");
var jsonServer = require('gulp-json-srv');
var config = require('./config/webpack.dev');
var port_server = 8085;
var port_db = 8086;
var compiler = webpack(config);

gulp.task('build', function() {
  return gulp.src('src/entry.js')
    .pipe(compiler)
    .pipe(gulp.dest('dist/'));
});

gulp.task('mockdb', function() {
  jsonServer.start({
    data: 'apiMockService/db.json',
    port: port_db });
});

//dev task:
gulp.task('serve', ['mockdb'], function(){
  //Webpackdev server builds so there's no need
    new WebpackDevServer(compiler, {
      /*drop it like it's*/hot:true,
      noInfo: false,
      publicPath: config.output.publicPath

    }).listen(port_server, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log(`Listening at http://localhost:${port_server}`);
    });
});
