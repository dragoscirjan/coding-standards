
module.exports = function(grunt) {

    grunt.initConfig({
        markdown: {
            all: {
                files: [{
                    expand: true,
                    src: 'docs/*.md',
                    dest: 'html/',
                    ext: '.html'
                }, {
                    src: 'README.md',
                    dest: 'html/index.html'
                }],
                /*options: {
                    template: 'myTemplate.jst',
                    preCompile: function(src, context) {},
                    postCompile: function(src, context) {},
                    templateContext: {},
                    contextBinder: false,
                    contextBinderMark: '@@@',
                    autoTemplate: true,
                    autoTemplateFormat: 'jst',
                    markdownOptions: {
                        gfm: true,
                        highlight: 'manual',
                        codeLines: {
                            before: '<span>',
                            after: '</span>'
                        }
                    }
                }/**/
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    //  grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-markdown');

    // Default task(s).
    grunt.registerTask('default', ['markdown']);

};
