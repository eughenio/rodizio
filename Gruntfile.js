var timer = require("grunt-timer");

module.exports = function(grunt) {
  timer.init(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'resources/assets/css/master.min.css': ['resources/assets/css/master.css']
        }
      }
    },
    uglify: {
      core: {
        files: {
          'public/javascript/mapga.min.js': ['resources/assets/javascript/core.js', 'resources/assets/javascript/ga.js']
        }
      }
    },
    concat: {
      css: {
        src: [
          "bower_components/bootstrap/dist/css/bootstrap.min.css",
          "bower_components/bootstrap/dist/css/bootstrap-theme.min.css",
          "resources/assets/css/master.min.css"
        ],
        dest: "public/styles/styles.css"
      },
      js: {
        src: [
          "bower_components/jquery/dist/jquery.min.js",
          "bower_components/bootstrap/dist/js/bootstrap.min.js"
        ],
        dest: "public/javascript/javascript.js"
      }
    },
    copy: {
      main: {
        files: [
          {src: 'bower_components/jquery/dist/jquery.min.map', dest: 'public/javascript/jquery.min.map'}
        ],
      },
    },
    watch: {
      css: {
        files: ['resources/assets/css/master.css'],
        tasks: ['concatmincss']
      },
      scripts: {
        files: ['resources/assets/javascript/**/*.js'],
        tasks: ['concatjs', 'uglify'],
        options: {
          spawn: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('mincss', ["cssmin"]);
  grunt.registerTask('concatcss', ["concat:css"]);
  grunt.registerTask('concatjs', ["concat:js", "uglify", "copy"]);
  grunt.registerTask('concatmincss', ["cssmin", "concat:css"]);
  grunt.registerTask('uglifycore', ["uglify"]);
  grunt.registerTask('default', ["cssmin", "concat", "uglify", "copy", "watch"]);
};