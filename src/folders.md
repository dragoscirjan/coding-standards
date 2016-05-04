## Folders

> **Note**: This document is a draft and it will remain so. It is your duty as a developer to continuously
improve this document and update your knowledge of this document.

Organizing and naming folder structures is a very sensitive subject and can be a subject of discussion to each project
which is brought to development. The following are only recommendations of project structures as used by
[Foo Company LTD](http://company.foo/).


### Applications

<!-- --lang-ex -->

##### HTML Website

**src** folder will be containing source code (since we can always use **jade**, **Coffee Script** or any other
preprocessors).

while

**dist** folder will be containing the compiled code.

Root foler can also contain:
* .editoconfig for editor configuration
* config files for linters
* config files for javascript installers
  * `bower` > `bower.json`
  * `jspm` > `config.js`
  * `npm` > `package.json`
* config files and folders for compilers
  * gulp
  * webpack

```
.
├── dist
├── src
|   └── assets
|       └── 3rdpt
|       └── images
|       └── styles
|           └── fonts
|           └── *.css|less|sass
|       └── scripts
|           └── *.coffee|js|ts
|       └── *.html|jade
```

<!-- ##### Angular Website

**src** folder will be containing source code (since we can always use **jade**, **Coffee Script** or any other
preprocessors).

while

**dist** folder will be containing the compiled code.

Root foler can also contain:
* .editoconfig for editor configuration
* config files for linters
* config files for javascript installers
  * `bower` > `bower.json`
  * `jspm` > `config.js`
  * `npm` > `package.json`
* config files and folders for compilers
  * gulp
  * webpack

```
.
├── dist
├── src
|   └── assets
|       └── 3rdpt
|       └── images
|       └── styles
|           └── fonts
|           └── *.css|less|sass
|       └── scripts
|           └── *.coffee|js|ts
|       └── *.html|jade
``` -->

##### Web Application

```
.
├── assets
|   ├── 3rdpt
|   ├── images
|   ├── styles
|   |   └── fonts
|   └── scripts
├── src
|   └── com|org
|       └── project
|           └── package
|               └── subpackage
|                   └── ...
├── vendor
├── view
└── index.*
```

##### Aurelia Application

> Web Application based on (Aurelia Framework)[http://aurelia.io]

```
.
|── assets
|   └── 3rdpt
|   └── styles.css
├── dist
├── services
|   └── views
|   └── src
|       ├── project
|       |    └── package
|       |        └── ...
|       └ index.*
├── src
|   └── assets
|       ├── images
|       ├── styles
|       |   └── fonts
|       ├── scripts
|       ├── *.html|jade
|       └── *.js|ts
├── config.js
├── index.html
└── index.js
```

<!-- ##### Angular Application

> Web Application based on Aurelia Framework

```
``` -->

<!-- --lang-ex-end -->

### Frameworks / Libraries / Modules

For Open Source projects, `org` level can be skipped.

<!-- --lang-ex -->

<!-- ##### C/C++/C&#35;

###### C
```cpp
```

###### C++
```csharp

```

###### C&#35;
```csharp

``` -->

##### CFML

###### Open Source

```
.
├── src
|   └── org
|       └── project
|           └── package
|               └── subpackage
|                   └── ...
├── vendor
├── Application.cfc
└── index.cfm
```

###### Commercial

```
.
├── src
|   └── com
|       └── project
|           └── package
|               └── subpackage
|                   └── ...
├── vendor
├── Application.cfc
└── index.cfm
```

<!-- #####  Dart

```
.
``` -->

<!-- ##### JavaScript

```
``` -->

<!-- ##### Java

```
``` -->

<!-- #####  Perl

```
``` -->

##### PHP

###### Open Source

```
.
├── bin
├── src
|   └── Org
|       └── Project
|           └── Package
|               └── Subpackage
|                   └── ...
├── vendor
└── index.php
```

###### Commercial

```
.
├── bin
├── src
|   └── Com
|       └── Project
|           └── Package
|               └── Subpackage
|                   └── ...
├── vendor
└── index.php
```

<!-- ##### Ruby

```ruby
``` -->

<!-- ##### Python

```
``` -->

<!-- --lang-ex-end -->
