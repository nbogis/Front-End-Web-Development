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
        options: {
          stylesheet: ['unoptimized/css/style.css'],
          ignoreSheet: "fonts.googleapis/",
          compress: true
        },
        files: [{
          src: 'unoptimized/index.html',
          dest: 'unoptimized/css/style.min.css'
          }]
          
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          src: 'unoptimized/index.html',
          dest: 'dist/'
        }
      }
    }
  });

grunt.loadNpmTasks('grunt-uncss');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
//Register default tasks 
grunt.registerTask('default', ['uncss','htmlmin']); 

};