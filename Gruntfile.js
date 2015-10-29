
module.exports = function(grunt) {

    /**
     * @link https://github.com/treasonx/grunt-markdown
     */

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
                    dest: 'html/docs/index.html'
                }],
                options: {
                    template: 'template.jst',
                    preCompile: function(src, context) {},
                    postCompile: function(src, context) {
                        src = src
                            .replace(/[a-z\-]+\.md/gi, function($1) { return $1.replace(/.md$/i, '') + '.html' })
                            .replace(/<!\-\- \-\-lang\-ex \-\->/gi, '<div class="lang-ex">')
                            .replace(/<!\-\- \-\-lang\-ex-end \-\->/gi, '</div>')
                            .replace(/<p><strong>Note<\/strong>/gi, '<p class="note"><strong>Note</strong>');


                        return src;
//                        console.log(context);
                    },
                    templateContext: {},
                    contextBinder: true,
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
                    }/**/
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    //  grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-markdown');

    // Default task(s).
    grunt.registerTask('default', ['markdown']);

};
