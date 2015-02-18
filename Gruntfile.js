/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat:{
      css: {
        src: [
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'],
        dest: 'css/styles.css'
      },
      js: {
        src: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js'],
        dest: 'js/javascript.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task.
  grunt.registerTask('default', ['concat']);

};
