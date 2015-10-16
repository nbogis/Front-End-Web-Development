"use strict";

// var ngrok = require('ngrok');

// module.exports = function(grunt) {
// 	// load grunt tasks 
// 	require('load-grunt-tasks')(grunt);

// 	// Grunt configuration 
// 	grunt.initConfig({ pagespeed: { options: { nokey: true, locale: “en_GB”, threshold: 40 }, local: { options: { strategy: “desktop” } }, mobile: { options: { strategy: “mobile” } } } }); 
// };

// // Register customer task for ngrok 
// grunt.registerTask(‘psi-ngrok’, ‘Run pagespeed with ngrok’, 
// 	function() { var done = this.async(); var port = 8080;});

// ngrok.connect(port, function(err, url) {
//   if (err !== null) {
//     grunt.fail.fatal(err);
//     return done();
//   }
//   grunt.config.set('pagespeed.options.url', url);
//   grunt.task.run('pagespeed');
//   done();
// });   });

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uncss: {
      dist: {
        files: [{
          src: 'index.html',
          dest: 'dist/css/style.min.css'
          }]
      },
      options: {
        // stylesheet: ['unoptimized/css/style.css'],
        // ignoreSheet: "fonts.googleapis/",
        compress: true
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          src: 'index.html',
          dest: 'dist/index.html'
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['index.html']
        }
      }
    }
  });

grunt.loadNpmTasks('grunt-uncss');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-processhtml');
//Register default tasks 
grunt.registerTask('default', ['uncss','htmlmin','processhtml']); 

};