# Overview

**Note**: This document is a draft and it will remain so. It is your duty as a developer to continuously
improve this document and your knowledge of this document.

## Scope

This document provides guidelines for code formatting and documentation to individuals and teams contributing to
[Foo Company LTD](http://company.foo/) products. Many developers using [Foo Company LTD](http://company.foo/) products
have also found these coding standards useful because their code's style remains consistent with all
[Foo Company LTD](http://company.foo/) products code. It is also worth noting that it requires significant effort to
fully specify coding standards.

**Note**: Sometimes developers consider the establishment of a standard more important than what that standard actually
suggests at the most detailed level of design. The guidelines in [Foo Company LTD](http://company.foo/) products' coding
standards capture practices that have worked well on the [Foo Company LTD](http://company.foo/) products project. You
may modify these standards or use them as is in accordance with the terms of our
[» license](https://raw.githubusercontent.com/dragoscirjan/coding-standards/master/LICENSE).

Topics covered in [Foo Company LTD](http://company.foo/) products' coding standards include:

* [File Formatting](formating.md)
* [Naming Conventions](naming.md)
* [Coding Style](style.md)
* [CSS Coding Style](css-style.md)
* [Recommended Tools](recommend.md)

**Note**: Mainly [Foo Company LTD](http://company.foo/) is a [PHP](http://php.net/) company, thus all documentation
written further will be developed over [PHP](http://php.net/) coding language.

However, [PHP](http://php.net/) is not the only language we are using, so we tried extending and adapting coding
standards to all coding languages used in our company. Also, with each adopted coding language, we engage in adding
and adapting our coding standards to that specific language as well.

Languages included in [Foo Company LTD](http://company.foo/) products' coding standards include:

* [Adobe](http://www.adobe.com)<sup>&copy;</sup> [ColdFusion](http://www.adobe.com/products/coldfusion-family.html)
* C as [C](https://en.wikipedia.org/wiki/List_of_C-family_programming_languages), [C++](https://en.wikipedia.org/wiki/C%2B%2B) 
  and [C&#35;](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)
* JavaScript as [ECMAScript 5 or lower](https://en.wikipedia.org/wiki/JavaScript), 
  [EcmaScript 6](https://github.com/lukehoban/es6features), [CoffeeScript](http://coffeescript.org), 
  [Microsoft](http://microsoft.com)<sup>&copy;</sup> [TypeScript](http://www.typescriptlang.org) (not completed) and 
  [PureScript](http://www.purescript.org) (not completed)
* [Google](http://code.google.com/p/dart)<sup>&copy;</sup> [Dart](https://www.dartlang.org)
* [Oracle](https://www.oracle.com)<sup>&copy;</sup> [Java](https://www.oracle.com/java/index.html)
* [Perl](https://www.perl.org)
* [PHP](http://php.net)
* [Python](https://www.python.org)
* [Ruby](http://ruby.com)
* CSS as [Css](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) (not completed), [Less](http://lesscss.org) (not completed) and
  [Sass/Scss](http://sass-lang.com) (not completed)
* HTML as [Html](https://en.wikipedia.org/wiki/HTML) (not completed) and [Jade](http://jade-lang.com) (not completed)

## Goals
Coding standards are important in any development project, but they are particularly important when many developers are
working on the same project. Coding standards help ensure that the code is high quality, has fewer bugs, and can be
easily maintained.

## Influences

* [Zend Framework Coding Standard for PHP](http://framework.zend.com/manual/current/en/ref/coding.standard.html)
* [Drupal Coding Standars](https://www.drupal.org/coding-standards)
* [Symfony Coding Standards](http://symfony.com/doc/current/contributing/code/standards.html)
* [Code Conventions for the Java Programming Language](http://www.oracle.com/technetwork/java/javase/documentation/codeconventions-139411.html#16711)
* [Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/)
* [CFML Standards & Best Practices](http://wiki.coldbox.org/wiki/DevelopmentBestPractices.cfm) by [coldbox.org](coldbox.org)
* [SBA ColdFusion Programming Standards](https://www.scribd.com/doc/17091861/Cold-Fusion-Coding-Standards)
* [CSS Pro Tips](https://github.com/AllThingsSmitty/css-protips) by [AllThingsSmitty](https://github.com/AllThingsSmitty)
* [Sass Style Guide](https://github.com/bigcommerce/sass-style-guide) by [BigCommerce](https://github.com/bigcommerce/sass-style-guide)
