## Folders

Organizing and naming folder structures is a very sensitive subject and can be a subject of discussion to each project
which is brought to development. The following are only recommendations of project structures as used by
[Foo Company LTD](http://company.foo/).


<!-- --lang-ex -->

##### Applications

###### HTML Website

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

<!-- ###### Angular Website

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

###### Web Application

```
.
├── assets
|   ├── 3rdpt
|   ├── images
|   ├── styles
|   |   └── fonts
|   └── scripts
├── src
|   └── com
|       └── project
|           └── package
|               └── subpackage
|                   └── ...
├── vendor
├── view
└── index.*
```

###### Aurelia Application

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

<!-- ###### Angular Application

> Web Application based on Aurelia Framework

```
``` -->

##### Frameworks

##### Libraries

##### Modules

<!-- --lang-ex-end -->

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

<!-- ##### CFML

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
``` -->

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

<!-- ##### PHP

```
``` -->

<!-- ##### Ruby

```ruby
``` -->

<!-- ##### Python

```
``` -->

<!-- --lang-ex-end -->
