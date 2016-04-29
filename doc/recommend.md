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

## IDE Plugins

## Tools

<!-- --lang-ex -->

##### Project Manager

###### Atom

```bash
# https://github.com/danielbrodin/atom-project-manager
apm install project-manager
```

###### Visual Studio Code

```bash  
# https://github.com/alefragnani/vscode-project-manager/
ext install project-manager
```

###### Sublime Text

* [Sublime Text Project Manager](https://github.com/randy3k/Project-Manager)

###### Vim

* [vim Project Manager](http://www.vim.org/scripts/script.php?script_id=69)

##### Synchronize Settings

###### Atom

```bash
# https://github.com/atom-community/sync-settings
apm install sync-settings
```

###### Visual Studio Code

```bash  
# https://github.com/shanalikhan/code-settings-sync
ext install code-settings-sync
```
<!-- --lang-ex-end -->


## Highlighters &amp; Linters

<!-- --lang-ex -->

##### Ansible

###### Atom

```bash
# https://github.com/haad/language-Ansible
apm install language-ansible
# https://atom.io/packages/linter-ansible-linting
apm install atom-lint
apm install linter
apm install linter-ansible-linting
```

##### C/C++/C&#35;

###### C

```c
// code here
```

###### C++

```cpp
// code here
```

###### C&#35;

```csharp
// code here
```

##### ColdFusion

###### CFML

```xml
<!--- code here --->
```
###### CFScript

```javascript
// code here
```

#####  Dart

```dart
// code here
```

##### JavaScript

###### ECMAScript5 and lower

```javascript
// code here
```

###### ECMAScript6

```javascript
// code here
```

###### CoffeeScript
```coffeescript
# code here
```

###### PureScript

```purescript
// code here
```

###### TypeScript

```typescript
// code here
```

##### Java

```java
// code here
```

#####  Perl

```perl
# code here
```

##### PHP

```php
// code here
```

##### Ruby

```ruby
// code here
```

##### Python

```python
# code here
```

##### CSS

```css
/* your code here */
```

##### HTML

```html
<!-- your code here -->
```

<!-- --lang-ex-end -->

<!--| :----------- | :-------------------------- | :-------------------- | :------------ | :------ | :------- | :-- |
| C/C++/Obj-C  | atom-lint[101]              | -                     | -             |         |          |     |
| CSS          | atom-lint, *-ccslint        | -                     | -             |         |          |     |
| - LESS       | *-less                      | -                     | WebStorm      |         |          |     |
| - SASS       | *-9e-sass                   | -                     | WebStorm      |         |          |     |
| - SCSS       | atom-lint, *-scss-lint      | -                     | WebStorm      |         |          |     |
| ColdFusion   | -                           | -                     | -             |         |          |     |
| HTML         | -                           | -                     | -             |         |          |     |
|  - Jade      | -                           | -                     | -             |         |          |     |
|  - Haml      | *-haml                      | -                     | -             |         |          |     |
|  - Jinja     | -                           | -                     | -             |         |          |     |
| Java         | *-javac                     | -                     | IntelliJ IDEA |         |          |     |
| JavaScript   | atom-lint                   | -                     | native        |         |          |     |
|  - ES6[901]  | *-eslint[102]               | *-jshint[2], babel[3] | [301]         |         |          |     |
|  - Coffee    | atom-lint, coffee-lint      | *-coffeelint          | -             |         |          |     |
| PHP          | *-php                       | -                     | PhpStorm      |         |          |     |
| Python       | atom-lint                   | -                     | PyCharm       |         |          |     |
| Ruby         | atom-lint                   | -                     | RubyMine      |         |          |     |
| XML          |                             |                       |               |         |          |     |
|              | language-xml                | native                | native        |         |          |     |
|              | *-xmllint                   | *-xmllint | native    |               |         |          |     |
| YAML         | *-js-yaml[104]              | -                     | native        |         |          |     |
| Comments     | *-js-yaml                   | docblockr             | native        |         |          |     |-->

### Notes: (Plugins) ###
 
2. For Sublime, all linters seem to start with 'SublimeLinter'
3. For more about Babel Sublime, read here: https://github.com/babel/babel-sublime
103. [103] linter-js-yaml depens on [yaml-js](https://github.com/connec/yaml-js) ``


#### ECMA Script 6 ####

102. [102] [linter-eslint](https://atom.io/packages/linter-eslint) depends on [eslint](https://www.npmjs.com/package/eslint) `npm install -g eslint && apm install linter-eslint`.
Also, in order for your prject benefit eslint, we suggest downloading [.eslintrc](../../../raw/master/.eslintrc) and extend it according to your needs.
301. [201] In order to use ES6 on JetBrains IDEs, please follow these [instructions](http://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/).
There is also [JavaScript.next Support](https://plugins.jetbrains.com/plugin/7643?pr=) Plugin, however I could not make it work (yet).

### Notes: (Documentation) ###

901. [901] Best documentation for EcmaScript 6 can be found at https://github.com/lukehoban/es6features or http://www.ecma-international.org/ecma-262/6.0/

## Other

| vers./IDE    | Atom                                  | Sublime Text        | IntelliJ | Eclipse | Netbeans | Vim |
| :----------: | :-----------------------------------: | :-----------------: | :------: | :-----: | :------- | :-- |
| git          | git-control, git-plus, git-tab-status | -                   |  native  |         |          |     |
| svn          | svn                                   | -                   |  native  |         |          |     |
| copy/paste   | native                                | SideBarEnhancements |  native  |         |          |     |
| editorconfig | ?                                     | EditorConfig        |  native  |         |          |     |
