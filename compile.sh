<<<<<<< HEAD
#! /usr/local/bin/node
=======
#! /bin/node
>>>>>>> dcfa662cc3e1a0f5a06028b7278b83e14ce4d9ae

var Promise = require('promise');

var fs = require('fs');
fs.stat('docs', function(err, stats) {
<<<<<<< HEAD
    if (err) { console.error(err); }
    if (!stats || !stats.isDirectory()) { fs.mkdirSync('docs'); }
=======
    if (err) {
        console.error(err);
    }
    if (!stats.isDirectory()) {
        fs.mkdirSync('docs');
    }
>>>>>>> dcfa662cc3e1a0f5a06028b7278b83e14ce4d9ae
});

var marked = require('marked');
// var log = require('dragosc-log')

// Async highlighting with pygmentize-bundled
// marked.setOptions({
//   highlight: function (code, lang, callback) {
//     require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
//       callback(err, result.toString());
//     });
//   }
// });

function compile_markdown(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, function(err, data) {
            if (err) throw err;
            // pre-compile
            data = data.toString();

            // compile asynced
            marked(data, function (err, content) {
                if (err) throw err;

                // post-compile
                content = content.toString()
                    .replace(/[a-z\-]+\.md/gi, function($1) { return $1.replace(/.md$/i, '') + '.html' })
                    .replace(/<!\-\- \-\-lang\-ex \-\->/gi, '<div class="lang-ex">')
                    .replace(/<!\-\- \-\-lang\-ex-end \-\->/gi, '</div>')
                    .replace(/<p><strong>Note<\/strong>/gi, '<p class="note"><strong>Note</strong>');

                fs.stat('template.html', function(err, stats) {
                    if (err) throw err;
<<<<<<< HEAD
                    if (stats && stats.isFile()) {
=======
                    if (stats.isFile()) {
>>>>>>> dcfa662cc3e1a0f5a06028b7278b83e14ce4d9ae
                        fs.readFile('template.html', function(err, template) {
                            if (err) throw err;
                            fs.writeFile(
                                path.replace(/^src/, 'docs').replace(/.md$/, '.html'),
                                template.toString().replace('<!-- content -->', content),
                                function(err) {
                                    if (err) throw err;
                                    resolve();
                                }
                            );
                        })
                    } else {
                        fs.writeFile(path.replace(/^src/, 'docs').replace(/.md$/, '.html'), content, function(err) {
                            if (err) throw err;
                            resolve();
                        });
                    }
                });

            });
        })
    })
}

// One-liner
<<<<<<< HEAD
require('chokidar').watch(['README.md', 'src/**.md'], {ignored: /[\/\\]\./}).on('all', function(event, path) {
=======
require('chokidar').watch('src/**.md', {ignored: /[\/\\]\./}).on('all', function(event, path) {
>>>>>>> dcfa662cc3e1a0f5a06028b7278b83e14ce4d9ae
    if (event == 'change' || event == 'add') {
        compile_markdown(path).then(function() {
            console.log('File ' + path + ' has been succesfully compiled to ' + path.replace(/^src/, 'docs').replace(/.md$/, '.html'));
        }).catch(function(err) {
            console.error(err);
        })
    }
  console.log(event, path);
});

require('chokidar').watch('src/**.js', {ignored: /[\/\\]\./}).on('all', function(event, path) {
    if (event == 'change' || event == 'add') {
        fs.readFile(path, function(err, data) {
            fs.writeFile(path.replace(/^src/, 'docs'), data, function(err) {
                if(err) throw err;
                console.log('File ' + path + ' has been succesfully moevd to ' + path.replace(/^src/, 'docs'));
            })
        })
    }
  console.log(event, path);
});

// makred = require('marked');
