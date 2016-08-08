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

```bash
#
# ES5+
#

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
```

```bash
#
# Coffee
#

# http://atom.io/packages/language-coffee-script
apm install language-coffee-script
# http://atom.io/packages/linter-coffeelint
apm install linter-coffeelint
```

```bash
#
# TypeScript
#

# http://atom.io/packages/atom-typescript
apm install atom-typescript
```

```bash
#
```

```bash
#
# HTML
#

# https://atom.io/packages/emmet
apm install emmet
# https://atom.io/packages/autocomplete-html
apm install autocomplete-html
# https://atom.io/packages/language-html
apm install language-html
```	

```bash
#
# Jade
#

# https://atom.io/packages/atom-jade
apm install atom-jade
# https://atom.io/packages/html2jade-plus
apm install html2jade-plus
# https://atom.io/packages/linter-jade
apm install linter-jade
# https://atom.io/packages/jade-beautify
apm install jade-beautify
```	

```bash
#
# Css
#

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
```	

```bash
#
# Less
#

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

### Brackets

...

### IntelliJ IDEA

...

### Sublime Text

...

### Vim

...

### Visual Studio Code

<!-- --lang-ex -->

##### General Settings

###### Coding

```
apm install autocomplete-plus
```

```
apm install linter
```

###### General

```
apm install docblockr
```

```
apm install project-manager
```

```
ext install code-settings-sync
```

###### Git

```
apm install git-control
```

```
apm install merge-conflicts
```

###### UI


##### ColdFusion

...

##### JavaScript &amp; HTML

```bash
#
# ES6
#

# Babel ES6/ES7 Syntax highlight 
ext install vscode-babel-coloring
# ESLint 
ext install vscode-eslint
# JavaScript (ES6) code snippets => https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets
ext install JavaScriptSnippets
```
```bash
#
# TypeScript
#
```
```bash
#
# HTML
#
```
```bash
#
# Jade
#
```
```bash
#
# Handlebars
#
```

...

##### PHP

...

##### Python

...

<!-- --lang-ex-end -->