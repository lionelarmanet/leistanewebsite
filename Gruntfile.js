module.exports = function(grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: []
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'main/**/*.html',
          'main/**/*.css',
          'main/**/*.js'
        ]
      },
    },
    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0',
        livereload: 35730
      },
      livereload: {
        options: {
          open: false,
          base: [
            'main'
          ]
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task
  grunt.registerTask('serve', ['connect', 'watch']);


};