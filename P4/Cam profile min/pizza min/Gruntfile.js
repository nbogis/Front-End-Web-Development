"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /** minify js */
    uglify: {
       dist: {
          files: {
             'js/main.min.js': ['js/main.js'],
          }
       }
    },
        /** remove space from css */
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: '*.css',
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    /** inline css in html */
    inlinecss: {
      main: {
        files: {
        'pizza-inline.html': 'pizza.html',
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          uglify: true,
          cssmin: true,
          removeComments: true,
          collapseWhitespace: true,
          removeCommentsFromCDATA: true
        },
        files: {
          'pizza.min.html': 'pizza-inline.html'
        }
      }
    },
    imagemin: {
       dist: {
          options: {
            optimizationLevel: 7
          },
          files: [{
             expand: true,
             cwd: '',
             src: ['images/*.{jpg,png}'],
             dest: 'images/'
          }]
       }
    }
  });
grunt.loadNpmTasks('grunt-contrib-uglify');
/** minify css */
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-inline-css');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
//Register default tasks 
grunt.registerTask('default', ['uglify','cssmin','inlinecss','imagemin','htmlmin']); 

};