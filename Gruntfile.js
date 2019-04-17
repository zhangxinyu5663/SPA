/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options:{
        configFile:'.eslintrc.json'
      },
      target:['*-*/*.js','list/*.js']
    },
    csslint: {
      options:{
        csslintrc:'.csslintrc'
      },
      src:['*-*/*.css','list/*.css'],
    },
    htmlhint: {
      options:{
        htmlhintrc:'.htmlhintrc'
      },
      src:['*.html','*-*/*.html','list/*.html']
    },  
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false                            
      },
      files: {
        expand:true,
        src: ['*.html','*-*/*.html','list/*.html'],
        dest: 'dist/'                            
      }
    },
    cssmin: {
      files:{
        expand:true,
        src:['*-*/*.css','list/*.css'],
        dest:'dist/'
      }
    },
    uglify: {
      main:{
        files: [{
          expand:true,
          src:['*-*/*.js','list/*.js'],
          dest:'dist/'
        }]               
      }             
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('lint', ['htmlhint','csslint','eslint']);
  grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
};



