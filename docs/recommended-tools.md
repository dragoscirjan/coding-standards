# PHP Recommended Tools

## IDE

### JetBrains PhpStorm

PhpStorm’s smart code editor provides excellent support for PHP (including the latest language versions and frameworks), HTML, JavaScript, CSS, Sass, Less, CoffeeScript, and many other languages. Enjoy coding with intelligent context-aware code completion, error detection, and on-the-fly code inspections & fixes.​

Consdering JetBrains description, and what we were able to develop with it until now, we consider PhpStorm by far the best Php editor in the market.

Download from JetBrains official PhpStorm [download oage](https://www.jetbrains.com/phpstorm/download/), or, for Linux, use the script written by [Dragos Cirjan](https://github.com/dragoscirjan/mylin2)

```bash
git clone https://github.com/dragoscirjan/mylin2.git /opt/mylin2 && \
  bash /opt/mylin2/ide/phpstorm.sh -i
```

### Atom

Atom is a desktop application based on web technologies. Like other desktop apps, it has its own icon in the dock, native menus and dialogs, and full access to the file system.

Open the dev tools, however, and Atom's web-based core shines through. Whether you're tweaking the look of Atom's interface with CSS or adding major features with HTML and JavaScript, it's never been easier to take control of your editor.

Download from Atom's official [download oage](https://atom.io/), or, for Linux, use the script written by [Dragos Cirjan](https://github.com/dragoscirjan/mylin2)

```bash
git clone https://github.com/dragoscirjan/mylin2.git /opt/mylin2 && \
  bash /opt/mylin2/ide/atom.sh -i
```

### Sublime Text

Sublime Text is a sophisticated text editor for code, markup and prose.

You'll love the slick user interface, extraordinary features and amazing performance.

Download from Sublime's official [download oage](http://www.sublimetext.com/3), or, for Linux, use the script written by [Dragos Cirjan](https://github.com/dragoscirjan/mylin2)

```bash
git clone https://github.com/dragoscirjan/mylin2.git /opt/mylin2 && \
  bash /opt/mylin2/ide/sublime.sh -i
```

### KDevelop

KDevelop is a free, open source IDE for Linux, Solaris, FreeBSD, Mac OS X and other Unix flavors.

It is a feature-full, plugin extensible IDE for C/C++ and other programming languages.

It is based on KDevPlatform, and the KDE and Qt libraries and is under development since 1998.

#### Plugins

##### Linters

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Language/IDE | Atom                       | IntelliJ | Sublime Text |
| ------------ | : ------------------------ | :------: | ------------ |
| **Ansible**  | linter-ansible-lint        | -        | -            |
| C/C++/Obj-C  | atom-lint                  | -        | -            |

| Language/IDE | Atom                       | IntelliJ | Sublime Text | KDevelop | Zend Studio | Eclipse | Netbeans |
| ------------ | : ------------------------ | :------: | - | - | - | - | - |
| **Ansible** | linter-ansible-lint         | - | - | - | - | - | - |
| C/C++/Obj-C | atom-lint                   | - | - | - | - | - | - |
| CSS         | atom-lint, linter-ccslint   | - | - | - | - | - | - |
| - LESS      | linter-less                 | - | - | - | - | - | - |
| - SASS      | linter-9e-sass              | - | - | - | - | - | - |
| - SCSS      | atom-lint, linter-scss-lint | - | - | - | - | - | - |
| ColdFusion  | -                           | - | - | - | - | - | - |
| HTML        | -                           | - | - | - | - | - | - |
|  - Jade     | -                           | - | - | - | - | - | - |
|  - Haml     | linter-haml                 | - | - | - | - | - | - |
|  - Jinja    | -                           | - | - | - | - | - | - |
| Java        | linter-javac                | - | - | - | - | - | - |
| JavaScript  | atom-lint                   | - | - | - | - | - | - |
|  - Coffee   | atom-lint, coffee-lint      | - | - | - | - | - | - |
| PHP         | linter-php                  | - | - | - | - | - | - |
| Python      | atom-lint                   | - | - | - | - | - | - |
| Ruby        | atom-lint                   | - | - | - | - | - | - |
| XML         | linter-xmllint              | - | - | - | - | - | - |

##### Languages

| Language/IDE | Atom                       | IntelliJ | Sublime Text | KDevelop | Zend Studio | Eclipse | Netbeans |
|--------------|:---------------------------|:--------:|
| **Ansible** | linter-ansible-lint         | $- |
| C/C++/Obj-C | atom-lint                   | $- |
| CSS         | atom-lint, linter-ccslint   | $- |
| - LESS      | linter-less                 | $- |
| - SASS      | linter-9e-sass              | $- |
| - SCSS      | atom-lint, linter-scss-lint | $- |
| ColdFusion  | -                           | $- |
| HTML        | -                           | $- |
|  - Jade     | -                           | $- |
|  - Haml     | linter-haml                 | $- |
|  - Jinja    | -                           | $- |
| Java        | linter-javac                | $- |
| JavaScript  | atom-lint                   | $- |
|  - Coffee   | atom-lint, coffee-lint      | $- |
| PHP         | linter-php                  |   $12 |
| Python      | atom-lint                   |    $1 |
| Ruby        | atom-lint                   |    $1 |
| XML         | linter-xmllint              |    $1 |

##### Revision

| vers./IDE | Atom                                  | IntelliJ | Sublime Text | KDevelop | Zend Studio | Eclipse | Netbeans |
|:---------:|:--------------------------------------|:--------:|
| git       | git-control, git-plus, git-tab-status |  native  |
| svn       | svn                                   |  native  |



### Zend Studio

## Frameworks

### Package Manager

####Composer

Composer is not a package manager. Yes, it deals with "packages" or libraries, but it manages them on a per-project basis, installing them in a directory (e.g. vendor) inside your project. By default it will never install anything globally. Thus, it is a dependency manager.

https://getcomposer.org/download/

### Model View Controller (MVC)

#### Athem

Comments will be added at the right time.

#### ![Phalcon Framework](images/fwk-phalcon.png "Phalcon Framework") Phalcon

Phalcon is by far the fastest php framework we encountered.

#####Pros
* a framework in a single DLL file
* did we mention how FAST IT IS?
* easy to learn, easy syntax
* developer tools

#####Cons
* young
* a framework in a single DLL file which gives:
* lack of transparency
* hard to debug

In order to install it, go to their [download](http://phalconphp.com/en/download) page.

#### ![Symfony Framework](images/fwk-symfony.png "Symfony Framework") Symfony

Symfony is by far the most popular and complex framework we have encountered with implications and ramifications in so many other projects (i.e. Drupal, phpBB, Laravel, Doctrine, etc).

When starting a new project, it's almost impossible to ask "Why not develop with Symfony?".

https://symfony.com/

##### Silex

However, Symfony has grown a bit too large. When needed to create a more simple application, a micro framework is always a better choice than using a large scale framework, charging your application with a lot of bloat libraries you don't use.

Fortunately, one of the creators of Symfony project, Fabien Potencier, came with a solution, creating a micro framework based on Symfony 2.

http://silex.sensiolabs.org/

### Model (ORM)

#### Doctrine

The Doctrine Project is the home to several PHP libraries primarily focused on database storage and object mapping. The core projects are a Object Relational Mapper (ORM) and the Database Abstraction Layer (DBAL) it is built upon. Doctrine has greatly benefited from concepts of the Hibernate ORM and has adapted them to fit the PHP language.

http://www.doctrine-project.org/index.html

#### Athem

Comments will be added at the right time.

http://en.wikipedia.org/wiki/Overview_of_RESTful_API_Description_Languages

### Content Management System

http://www.scratchinginfo.net/top-10-php-content-management-systems-cms/

http://code.tutsplus.com/articles/top-10-most-usable-content-management-systems--net-6493

#### Drupal

Drupal is an open source content management platform powering millions of websites and applications. It’s built, used, and supported by an active and diverse community of people around the world.

https://www.drupal.org/

#### Wordpress

WordPress is web software you can use to create a beautiful website or blog. We like to say that WordPress is both free and priceless at the same time.

https://wordpress.org/

#### Magento

"More than 240,000 merchants worldwide put their trust in our eCommerce software. Magento’s eCommerce platform gives you the tools you need to attract more prospects, sell more products, and make more money. It’s what we do."

http://magento.com/

## Documentation

### phpDocumentor

phpDocumentor 2 is a tool that makes it possible to generate documentation directly from your PHP source code. With this you can provide your consumers with more information regarding the functionality embedded within your source and not just what is usable to them from your user interface.

Documentation generated by phpDocumentor 2 does not aim to be a replacement for conventional documentation but is rather supplemental, or reference, documentation.This proves to be useful in the following example situations:

* Sets of libraries or applications providing an API, such as phpDocumentor 2 itself
* Frameworks, such as Zend Framework or Symfony
* Pluggable architectures, such as WordPress or PyroCMS
* Long-running, complex projects, to help you find the right function or method for the job

http://www.phpdoc.org/

## Unit Testing & Debugging

### phpUntTest

PHPUnit is a programmer-oriented testing framework for PHP.

It is an instance of the xUnit architecture for unit testing frameworks.

https://phpunit.de/

### Php Debug Bar

The DebugBar integrates easily in any projects and can display profiling data from any part of your application. It comes built-in with data collectors for standard PHP features and popular projects.

http://phpdebugbar.com/


## Continuous Integration

NOTE: This is a document proposal. None of this CI tools have been tested yet.

* [PHP CI](https://www.phptesting.org)
* [Gitlab CI](https://github.com/gitlabhq/gitlab-ci)
* [Travis CI](https://travis-ci.org)
* [Jenkins CI](https://jenkins-ci.org)
* [Team City](https://www.jetbrains.com/teamcity)
* [Bamboo](https://www.atlassian.com/software/bamboo)


## Code Quality

NOTE: This is a document proposal. None of this CI tools have been tested yet.

* [Code Climate](https://codeclimate.com)
* [Coveralls](https://coveralls.io)

<hr />
[&laquo; Coding Sylte](coding-style.md) / [Home &raquo;](../README.md)
