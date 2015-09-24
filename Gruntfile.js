module.exports = function(grunt) {

    grunt.initConfig({
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/mincss/',
        ext: '.min.css'
      },
      combine: {
        files: {
          'css/3dBlog.min.css': ['css/mincss/*.min.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin:minify','cssmin:combine']);

};