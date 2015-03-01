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
          'css/master.min.css': ['css/master.css']
        }
      }
    },
    uglify: {
      core: {
        files: {
          'app/javascript/mapga.min.js': ['javascript/core.js', 'javascript/ga.js']
        }
      }
    },
    concat: {
      css: {
        src: [
          "bower_components/bootstrap/dist/css/bootstrap.min.css",
          "bower_components/bootstrap/dist/css/bootstrap-theme.min.css",
          "css/master.min.css"
        ],
        dest: "app/styles/styles.css"
      },
      js: {
        src: [
          "bower_components/jquery/dist/jquery.min.js",
          "bower_components/bootstrap/dist/js/bootstrap.min.js"
        ],
        dest: "app/javascript/javascript.js"
      }
    },
    copy: {
      main: {
        src: 'bower_components/jquery/dist/jquery.min.map',
        dest: 'app/javascript/jquery.min.map',
      },
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'app/index.html': 'index.html',
        }
      }
    },
    watch: {
      css: {
        files: ['css/master.css'],
        tasks: ['concatmincss']
      },
      scripts: {
        files: ['javascript/**/*.js'],
        tasks: ['concatjs'],
        options: {
          spawn: false,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('mincss', ["cssmin"]);
  grunt.registerTask('concatcss', ["concat:css"]);
  grunt.registerTask('concatjs', ["concat:js", "uglify", "copy"]);
  grunt.registerTask('concatmincss', ["cssmin", "concat:css"]);
  grunt.registerTask('uglifycore', ["uglify"]);
  grunt.registerTask('default', ["cssmin", "concat", "uglify", "copy", "htmlmin"]);
};
