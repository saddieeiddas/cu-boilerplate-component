'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var browserify = require("browserify");
var babelify = require("babelify");
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var sequence = require('gulp-sequence');
var header = require('gulp-header');

var headerLicenceJs = ['/**',
  ' * This Source Code Form is subject to the terms of the Mozilla Public',
  ' * License, v. 2.0. If a copy of the MPL was not distributed with this',
  ' * file, You can obtain one at http://mozilla.org/MPL/2.0/.',
  ' */',
  ''].join('\n');

// Config
var config = {
  srcGlob: 'src/**/*.ts',
  bundleDir: 'dist/js',
  libDir: 'lib',
  moduleName: 'cu-module-ts-example',
  moduleFile: 'src/module.ts',
  serverPort: 9000

};

// Web Server
gulp.task('server', function () {
  connect.server({
    root: '',
    livereload: true,
    port: config.serverPort
  });
});

// Watch - Currently runs bundle:dev to build the browserify bundle
gulp.task('watch', ['lint', 'bundle:dev'], function () {
  gulp.watch(config.srcGlob, ['lint', 'bundle:dev']);
});

// Lint
gulp.task('lint', function (cb) {
  cb();
});

// Lint Fail On Error
gulp.task('lint:failOnError', function (cb) {
  cb();
});

// Build
gulp.task('build', sequence('lint', ['bundle']));

// Bundle Development & Production
gulp.task('bundle', ['bundle:dev', 'bundle:prod']);

// Bundle Development
gulp.task('bundle:dev', function () {
  return bundle(false);
});

// Bundle Production
gulp.task('bundle:prod', function () {
  return bundle(true);
});

// Bundle
function bundle(shouldMinify) {
  var b = browserify({
    entries: config.moduleFile,
    debug: true,
    transform: [babelify]
  });
  b.plugin('tsify', { noImplicitAny: true });
  return b.bundle()
    .pipe(source(shouldMinify ? config.moduleName + '.min.js' : config.moduleName + '.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(gulpif(shouldMinify, uglify()))
    .pipe(gulpif(shouldMinify, header(headerLicenceJs))) // ensure license is at top of file
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./' + config.bundleDir + '/'));
}
