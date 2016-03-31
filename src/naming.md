# Naming Conventions

**Note**: This document is a draft and it will remain so. It is your duty as a developer to continuously
improve this document and your knowledge of this document.

**Note**: When continuing/extending a 3rd party project, it is recommended to continue with the naming 
convention imposed/used by that specific project.

## Classes

For class naming, it is mandatory to use [CamelCase](https://en.wikipedia.org/wiki/CamelCase) naming
style unless programming language impose otherwise, or project manager / system architect decided
otherwise. First letter of the class name must also be upper case.

```java
class MyCamelCaseName {
  // your class code here
}
```

## Functions/Methods

For function/method naming, it is mandatory to use [camelCase](https://en.wikipedia.org/wiki/CamelCase) 
naming style unless programming language impose otherwise, or project manager / system architect decided
otherwise. Oposed to class names, first letter of the method/function name must be lower case.

```php
class MyCamelCaseName {
  
  public function myCamelCaseMethod() {
    // your function code here
  }

}

function myCamelCaseFunction() {
  // your function code here
}

```

## Namespaces

As much as possible, namespaces will be defined wil lower case and be formed of simpler explanatory 
words. Namespace naming should always start with the following 3 components
1. **com** or **org** to disociate commercial projects from open source once
1. Project Name or company name followed by project name 
1. Package name

Given archiect or manger's choice, Project/Company name be skipped.

```java
namespace org.company.project.package.subpackage;

class MyCamelCaseName {

}
```

For some languages, we recommend skipping the `org` prefix in case of open source packages; however
in order to avoid namespace colision when both commercial and open source packages are installed,
the commercial packages should always have the `com` prefix

<!-- --lang-ex -->

Before [C++ v17](http://en.cppreference.com/w/cpp/language/namespace) you could not use nested 

##### C/C++/C&#35;

```cpp
// before C++ v17
namespace Company_Project_Package_Subpackage {
  // your code here
}
// after C++ v17
namespace company::project::package::subpackage {
  // your code here
}
```

```csharp
@TODO:
```

##### CFML

ColdFusion does not have 

`org/company/project/package/subpackage/ComponentName.cfc`
```xml
<cfcomponent displayName="ComponentName" output="no"> 
  <!-- your code here -->
</cfcomponent>
```

```javascript
component displayName='ComponentName' output='no' {
  
}
```

#####  Dart

Dart does not have namespaces, however, you can emulate it via folders. Dart language has the `import`
protocol, for loading a library to another file.

`org/company/project/package/subpackage/ClassName.dart`
```dart
class ClassName  {
  // your code here
}
```

##### JavaScript

Nor Javascript nor CoffeScript won't have namespaces, however they can be emulated through variables
and file paths.

###### ECMAScript5 and lower

`org/company/package/subpackage/ClassName.js`
```javascript
window.org = org || {};
org.company = org.company || {};
org.company.package = org.company.package || {};
org.company.package.subpackage = org.company.package.subpackage || {};
org.company.package.subpackage.ClassName = function() {
  // your code here
};
```

###### ECMAScript6

`org/company/project/package/subpackage/ClassName.js`
```javascript
expor class ClassName {
  
}
```

###### CoffeeScript

`org/company/project/package/subpackage/ClassName.coffee`
```coffeescript
window.org or= {}
org.company or= {}
org.company.package or= {}
org.company.package.subpackage or= {}
org.company.package.subpackage.ClassName = class ClassName
  # your code here
```

###### PureScript

```javascript
// @TODO
```

###### TypeScript

```typescript
// @TODO
```

##### Java

```java
namespace org.company.project.package.subpackage;

class ClassName {

}
```

#####  Perl

```perl
# @TODO
```

##### PHP

For project that were developed under PHP-5.2 and lower and were not refactored as PHP5.3+ project,
we standardize on a class naming convention whereby the names of the classes directly map to the
directories in which they are stored.

```php
// for php under v5.2

class Company_Project_Package_Subpackage_ClassName {
  
}

// for php v5.2 and more
namsespace Company\Project\Package\Subpackage;

class ClassName {

}
```

##### Ruby

```ruby
# @TODO
# https://rubymonk.com/learning/books/1-ruby-primer/chapters/35-modules/lessons/80-modules-as-namespaces
# http://stackoverflow.com/questions/7821459/whats-the-difference-between-these-ruby-namespace-conventions
```

##### Python

```python
# @TODO
```

<!-- --lang-ex-end -->

## Folders

@TODO

### Frameworks / Libraries / Modules

@TODO
The root level directory of Zend Framework's standard library is the "Zend/" directory, whereas the root level directory of Zend Framework's extras library is the "ZendX/" directory. All Zend Framework classes are stored hierarchically under these root directories.

### Applications

@TODO
