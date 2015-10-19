# Recommended IDE Plugins

## Language &amp; Linters

| Language/IDE | Atom                        | Sublime Text          | Jetbrains     | Eclipse |
| ------------ | :-------------------------- | :-------------------- | :------------ | :------ |
| **Ansible**  | *-ansible-lint[101]         | -                     | -             |         |
| C/C++/Obj-C  | atom-lint[101]              | -                     | -             |         |
| CSS          | atom-lint, *-ccslint        | -                     | -             |         |
| - LESS       | *-less                      | -                     | WebStorm      |         |
| - SASS       | *-9e-sass                   | -                     | WebStorm      |         |
| - SCSS       | atom-lint, *-scss-lint      | -                     | WebStorm      |         |
| ColdFusion   | -                           | -                     | -             |         |
| HTML         | -                           | -                     | -             |         |
|  - Jade      | -                           | -                     | -             |         |
|  - Haml      | *-haml                      | -                     | -             |         |
|  - Jinja     | -                           | -                     | -             |         |
| Java         | *-javac                     | -                     | IntelliJ IDEA |         |
| JavaScript   | atom-lint                   | -                     | native        |         |
|  - ES6[901]  | *-eslint[102]               | *-jshint[2], babel[3] | [301]         |         |
|  - Coffee    | atom-lint, coffee-lint      | *-coffeelint          | -             |         |
| PHP          | *-php                       | -                     | PhpStorm      |         |
| Python       | atom-lint                   | -                     | PyCharm       |         |
| Ruby         | atom-lint                   | -                     | RubyMine      |         |
| XML          |                             |                       |               |         |
|              | language-xml                | native                | native        |         |
|              | *-xmllint                   | *-xmllint | native    |               |         |
| YAML         | *-js-yaml[104]              | -                     | native        |         |
| Comments     | *-js-yaml                   | docblockr             | native        |         |

### Notes: (Plugins) ###

101. [101] For (Atom)[https://atom.io/] there are two interesting linting engines. In case of `linter`, all linters will have "linter-" prefix (all `*-lang` linters above will depend on this linter).
  * [atom-lint](https://atom.io/packages/atom-lint) `apm install atom-lint`
  * [linter](https://atom.io/packages/linter) `apm install linter`
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

## Revision

| vers./IDE | Atom                                  | Sublime Text | IntelliJ |
| :-------: | :------------------------------------ | :----------: | :------: |
| git       | git-control, git-plus, git-tab-status | -            |  native  |
| svn       | svn                                   | -            |  native  |
