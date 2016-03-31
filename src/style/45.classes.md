## Classes

### Namespaces

If programming language requires/supports namespaces, all namespaces should be written as follows:
* `org.company.project.*` for open source projects
* `com.company.project.*` for commercial projects

Most programming languages requiring namespaces also require folder structures with the same naming.
Each project should have its folder naming as follows:
* `src/org/company/project/*` for open source
* `src/org/company/project/*` for commercial

<!-- --lang-ex -->

##### C/C++/C&#35; TODO

```c
    // code here
```

```cpp
    // code here
```

```csharp
    // code here
```

##### CFML

ColdFusion language does not require namespacing, however it can be emulated via folders.

`src/org/company/project/Controller.cfc` should have the following as code:
```cfml
<!--- CFML --->
<component name="Controller" ... >
    <!--- ... --->
</component>

<!--- CFScript --->
<cfscript>
    component name="Controller" ... {
        // ...
    }
</cfscript>
```

And can be instatiated as follows:

```cfml
<!--- CFML --->
<cfset theComponent=createObject("Component" "org.company.project.Controller");  />

<!--- CFScript --->
<cfscript>
    var theComponent=createObject("Component" "org.company.project.Controller");
</cfscript>
```

#####  Dart TODO

Dart variable substitution looks more like 'string interpolation'. Any other non string variable needs
to be converted to String to work. Furthermore, between the `${}` syntax expressions can be used. See
[Dart String Interpolation](http://shailen.github.io/blog/2012/11/14/dart-string-interpolation/) article.

```dart
    // code here
```

##### JavaScript

JavaScript language does not require namespacing, however it can be emulated with the help of folders.

However, importing the functions under the defned namespaces can be something tricky.

###### ECMAScript5 and lower

`src/org/company/project/Controller.js`
```javascript
function Controller()
{
    // ...
}
```

###### ECMAScript6

`src/org/company/project/Controller.js`
```javascript
class Controller
{
    // ...
}
```

###### CoffeeScript

`src/org/company/project/Controller.coffee`
```coffeescript
class Controller
    # ...
```

##### Java

`src/org/company/project/Controller.java`
```java

namespace org.company.project;

class Controller
{
    // ...
}

```

#####  Perl TODO

```perl
    # code here
```

##### PHP

`src/org/company/project/Controller.php`
```php
namespace org\company\project;

class Controller
{
    // ...
}
```

##### Ruby TODO

```ruby
    // your code here
```

##### Python TODO

```python
    # your code here
```

##### CSS TODO

```css
    /* your code here */
```

##### HTML TODO

```html
    <!-- your code here -->
```

<!-- --lang-ex-end -->

### Class Declaration

Classes must be named according to project's naming conventions (decided by developing team).

The brace should always be written on the line underneath the class name.

Every class must have a documentation block that conforms to the [PHPDocumentor](http://www.phpdoc.org/) standard.

All code in a class must be indented (see [Overview](overview.md)).

Only one class is permitted in each PHP file.

Placing additional code in class files is **not** permitted and discouraged.

The following is an example of an acceptable class declaration:

```php
/**
 * Documentation Block Here
 */
class SampleClass
{
    // all contents of class
    // must be indented
}
```

Classes that extend other classes or which implement interfaces should declare their dependencies on the same line when possible.

```php
class SampleClass extends FooAbstract implements BarInterface
{
}
```

If as a result of such declarations, the line length exceeds the maximum line length, break the line before the "extends" and/or "implements" keywords, and pad those lines by one indentation level.

```php
class SampleClass
```php    extends FooAbstract
    implements BarInterface
{
}
```

If the class implements multiple interfaces and the declaration exceeds the maximum line length, break after each comma separating the interfaces, and indent the interface names such that they align.

```php
class SampleClass
    implements BarInterface,
               BazInterface
{
}
```

### Class Member Variables

Member variables must be named according to project's variable naming conventions. If no other convention is chosen, naming will be done according with camel case naming convention (camelCaseNamingConvention).

If decided by developer team, private variable naming may contain the underscore "\_" character as a prefix (i.e. \_camelCaseNamingConvention).

Any variables declared in a class must be listed at the top of the class, above the declaration of any methods.

The var construct is not permitted. Member variables always declare their visibility by using one of the `private`, `protected`, or `public` modifiers.

Giving access to member variables directly by declaring them as public is permitted but discouraged in favor of accessor methods (set & get).
