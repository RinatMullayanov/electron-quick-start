module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
      electron: {
          osxBuild: {
              options: {
                  name: 'MyApp',
                  dir: './app',
                  //out: './dist',
                  version: '0.26.1',
                  platform: 'darwin',
                  arch: 'x64'
              }
          }
      }
  });

  grunt.registerTask('default', ['electron']);

};
