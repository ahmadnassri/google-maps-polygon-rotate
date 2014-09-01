module.exports = function (grunt) {
  'use strict';

  require('time-grunt')(grunt);

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      dist: {
        files: {
          'dist/google.maps.Polygon.rotate.min.js': [
            'src/google.maps.LatLng.distanceTo.js',
            'src/google.maps.LatLng.rotate.js',
            'src/google.maps.Polygon.getCenter.js',
            'src/google.maps.Polygon.rotate.js'
          ]
        }
      }
    },

    /* Quality Control */

    jshint: {
      gruntfile: ['Gruntfile.js'],
      dist: ['src/*.js'],
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'uglify'
  ]);
};
