# Recommended Tools

## IDE

### Atom

Atom is a desktop application based on web technologies. Like other desktop apps, it has its own icon in the dock, native menus and dialogs, and full access to the file system.

Open the dev tools, however, and Atom's web-based core shines through. Whether you're tweaking the look of Atom's interface with CSS or adding major features with HTML and JavaScript, it's never been easier to take control of your editor.

Download from Atom's official [download oage](https://atom.io/), or, for Linux, use the script written by [Dragos Cirjan](https://github.com/dragoscirjan/mylin2)

```bash
git clone https://github.com/dragoscirjan/mylin2.git /opt/mylin2 && \
  bash /opt/mylin2/ide/atom.sh -i
```

### Eclipse

### Eclipse CHE

### JetBrains

PhpStorm’s smart code editor provides excellent support for PHP (including the latest language versions and frameworks), HTML, JavaScript, CSS, Sass, Less, CoffeeScript, and many other languages. Enjoy coding with intelligent context-aware code completion, error detection, and on-the-fly code inspections & fixes.​

Consdering JetBrains description, and what we were able to develop with it until now, we consider PhpStorm by far the best Php editor in the market.

Download from JetBrains official PhpStorm [download oage](https://www.jetbrains.com/phpstorm/download/), or, for Linux, use the script written by [Dragos Cirjan](https://github.com/dragoscirjan/mylin2)

```bash
git clone https://github.com/dragoscirjan/mylin2.git /opt/mylin2 && \
  bash /opt/mylin2/ide/phpstorm.sh -i
```

### KDevelop

KDevelop is a free, open source IDE for Linux, Solaris, FreeBSD, Mac OS X and other Unix flavors.

It is a feature-full, plugin extensible IDE for C/C++ and other programming languages.

It is based on KDevPlatform, and the KDE and Qt libraries and is under development since 1998.


### Netbeans

### Sublime Text

Sublime Text is a sophisticated text editor for code, markup and prose.

You'll love the slick user interface, extraordinary features and amazing performance.

Download from Sublime's official [download oage](http://www.sublimetext.com/3), or, for Linux, use the script written by [Dragos Cirjan](https://github.com/dragoscirjan/mylin2)

```bash
git clone https://github.com/dragoscirjan/mylin2.git /opt/mylin2 && \
  bash /opt/mylin2/ide/sublime.sh -i
```

### Visual Studio Code

### Vim

## IDE Settings &amp; Plugins

## Tools

### Atom

<!-- --lang-ex -->

##### General Settings

###### Coding

```bash
# https://atom.io/packages/atom-beautify
apm install atom-beautify
# https://atom.io/packages/docblockr
apm install docblockr

apm install autocomplete-plus

apm install linter
```

###### General

```bash

apm install editorconfig

apm install project-manager

apm install linter-jsonlint
apm install language-json5
```

```bash

apm install sync-settings
```

###### Git

```bash
# https://atom.io/packages/git-control
apm install git-control
```

```css
/** in case of git and gulp control add this to stylesheet */

.gulp-control, .git-control {
  .output {
    pre {
      border: 0px;
      color: white;
    }
  }
}
```

```
apm install merge-conflicts
```

###### UI

```bash
# https://atom.io/packages/atom-material-syntax
apm install atom-material-syntax 
# https://atom.io/packages/atom-material-numix-syntax
apm install atom-material-numix-syntax
# https://atom.io/packages/atom-material-ui
apm install atom-material-ui
# https://atom.io/packages/file-icons
apm install file-icons
# or https://atom.io/packages/seti-icons
# apm install seti-icons 
# https://atom.io/packages/expose
apm install expose
```

###### Linux

```bash

# https://atom.io/packages/language-apache
apm install language-apache
# https://atom.io/packages/linter-docker
apm install linter-docker
# https://atom.io/packages/language-docker
apm install language-docker
```

##### ColdFusion

```bash
# http://atom.io/packages/language-cfml
apm install language-cfml

# https://atom.io/packages/language-lucee 
apm install language-lucee

# https://atom.io/packages/linter-cflint
# NOTE: Do not activate unless you know what you do!
apm install linter-cflint
```

...

##### JavaScript &amp; HTML

###### ES5+

```bash
# http://atom.io/packages/atom-ternjs
apm install atom-ternjs

# https://atom.io/packages/gulp-control
# Make sure change shortcat from ctrl+alt+o to ctrl+alt+shift+o 
apm install gulp-control

# https://atom.io/packages/autocomplete-modules
apm install autocomplete-modules

# http://atom.io/packages/langauge-babel
apm install language-babel
# http://atom.io/packages/linter-eslint
apm install linter-eslint

# http://atom.io/packages/flow-ide
apm install flow-ide

# https://atom.io/packages/js-hyperclick
apm install js-hyperclick
```

###### Coffee

```bash
# http://atom.io/packages/language-coffee-script
apm install language-coffee-script
# http://atom.io/packages/linter-coffeelint
apm install linter-coffeelint
```
###### TypeScript

```bash
# http://atom.io/packages/atom-typescript
apm install atom-typescript
```
###### HTML

```bash
# https://atom.io/packages/emmet
apm install emmet
# https://atom.io/packages/autocomplete-html
apm install autocomplete-html
# https://atom.io/packages/language-html
apm install language-html
```	

###### Jade/Pug

```bash
# https://atom.io/packages/atom-jade
apm install atom-jade
# https://atom.io/packages/html2jade-plus
apm install html2jade-plus
# https://atom.io/packages/linter-jade
apm install linter-jade
# https://atom.io/packages/jade-beautify
apm install jade-beautify
```	

###### Css &amp; Less

```bash
# https://atom.io/packages/language-css
apm install language-css
# https://atom.io/packages/autocomplete-css
apm install autocomplete-css
# https://atom.io/packages/linter-csslint
apm install linter-csslint
# https://atom.io/packages/pigments
apm install pigments
# CSS COMB ?
# https://atom.io/packages/css-spy
apm install css-spy # (new suggestion)


# https://atom.io/packages/language-less
apm install language-less
# https://atom.io/packages/linter-less
apm install linter-less
```

...

##### PHP

...

##### Python

```
# https://atom.io/packages/atom-jinja2
apm install atom-jinja2
```

<!-- --lang-ex-end -->

### IntelliJ IDEA

...

### Sublime Text

<!-- --lang-ex -->

##### General Settings

###### Coding

...

###### General

...

###### Git

* [Sublimerge](http://www.sublimerge.com/) (LICENSED)
* [GitConflictResolver](https://github.com/Zeeker/sublime-GitConflictResolver)

...

###### UI

##### ColdFusion

...

##### JavaScript &amp; HTML

...

##### PHP

...

##### Python

...

<!-- --lang-ex-end -->

### Vim

...

### Visual Studio Code

<!-- --lang-ex -->

##### General Settings

###### Coding

* [mrmlnc.vscode-json5](https://github.com/Microsoft/vscode-json5) :: Adds syntax highlighting of JSON5 files http://json5.org/
* [joelday.docthis](https://github.com/joelday/vscode-docthis) :: JSDoc generator extension for Visual Studio Code.

###### General

* [EditorConfig.EditorConfig](#) :: EditorConfig for Visual Studio Code
* [Shan.code-settings-sync](https://github.com/shanalikhan/code-settings-sync) :: Synchronize your Visual Studio Code Settings Across Multiple Machines using Github GIST

###### Git

* [donjayamanne.githistory](https://github.com/DonJayamanne/gitHistoryVSCode) :: Git History for Visual Studio Code
* [vector-of-bool.gitflow](https://github.com/vector-of-bool/vscode-gitflow) :: Gitflow integration for Visual Studio Code
* [codezombiech.gitignore](https://github.com/github/gitignore) :: Language support for .gitignore files.

* [jasonn-porch.gitlab-mr](https://gitlab.com/jasonnutter/vscode-gitlab-mr) :: VS Code plugin for working with Gitlab MRs.

###### UI


##### ColdFusion

* [ilich8086.ColdFusion](#) CFML (ColdFusion) Language Support

##### JavaScript &amp; HTML

###### ES 5+

* [dbaeumer.vscode-eslint](https://github.com/Microsoft/vscode-eslint) :: Integrate eslint into VSCode
* [vscode-babel-coloring](https://github.com/dzannotti/vscode-babel) :: Adds Js Babel es6/es7 syntax coloring

###### TypeScript

###### HTML

###### Jade/Pug

* [mrmlnc.vscode-puglint](https://github.com/mrmlnc/vscode-puglint) :: Linter and style checker for Pug (formerly Jade) as plugin for VS Code.

###### Handlebars


###### Css &amp; Less

* [mrmlnc.vscode-csscomb](https://github.com/mrmlnc/vscode-csscomb) :: CSS coding style formatter. https://goo.gl/lKARa5
* [mrmlnc.vscode-less](https://github.com/mrmlnc/vscode-less) :: Less intellisense for Variables and Mixins in all Less files.

###### Scss
* [mrmlnc.vscode-scss](https://github.com/mrmlnc/vscode-scss) :: IntelliSense for Variables, Mixins and Functions in all Sass (SCSS syntax only) files.

##### PHP

...

##### Python

...

<!-- --lang-ex-end -->

## Using Git

https://developer.atlassian.com/blog/2015/12/tips-tools-to-solve-git-conflicts/

### Saving Credentials

We do not recomment storing credentials more than one hour on any computer. So please use the following.

``` bash
git config --global credential.helper 'cache --timeout 3600'
```

For windows, we do accept `wincred` as well, since `cache` would not work.

```shell
git config --global credential.helper wincred
```

For removing credentials - best use the credential helper unset command, after which use again the credential helper set command.

```bash
git config --global --unset credential.helper
```
