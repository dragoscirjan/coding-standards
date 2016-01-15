# Coding Style

**Note** This document is a draft and it will remain so. It is your duty as a developer to continuously
improve this document and your knowledge of this document.

**Note** This document in inspired from
[Zend Framework's Coding Standards](http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html)
If you have any other suggestion, please comment in our issue section.

## Code Demarcation (and context)

<!-- --lang-ex -->

##### C/C++/C&#35; TODO

Neither **C** nor **C++** have code demarcation. This is also valid for C#, unless (ASP) code is embed
in HTML templates.

```csharp
<%
    response.write("Hello World!");
%>
```

##### CFML

While using CFScript (as a component of CFML), no matter the file type, whether code is embed within
HTML templates (e.g **cfml** file), or as a standalone class code (e.g. **cfc** file), code must always be
embed in the `<cfscript>` tag.

```cfml
<cfscript>
    writeOutput('Hello World!');
</cfscript>
```

#####  Dart TODO
Language has no code demarcation unless used within HTML files, where code is marked by `<script type="text/dart">` tag.

```html
<script type="text/dart">
    main() async {
        print('Hello World!');
    }
</script>
```

Please take in consideration that **ONLY** [Google Chrome](https://google.com/chrome) **supports** dart language.

##### JavaScript
Language (nor substitutes) do not have code demarcation, unless usest within HTML files when code is marked by `<script>` tag.

###### ECMAScript
```html
<!-- JavaScript -->
<script type="text/javascript">
    document.write("Hello World!");
</script>
```

###### CoffeeScript
```html
<script type=”text/coffeescript”>
    document.write "Hello World!"
</script>
<!-- last script in body -->
<script type=”text/javascript” src=”http://github.com/jashkenas/coffee-script/raw/master/extras/coffee-script.js&#8221;> </script>
```

###### TypeScript
```htmls
<!-- TypeScript -->
@TODO
```

For [CofeeScript](http://coffeescript.org/) please read more on their [github repository](https://github.com/jashkenas/coffeescript).


##### Java

Language does not have code demarcation unless code is embed in HTML content, when it is wrapped
by the following marks `<% /* code here */ %>`.

Also, for printing the demarcation turns to `<%= "Hello World!" %>` where the `=` equals mark is
equivalent to `System.out.println()` call.

```java
    <p>
        <% String hello = new String("Hello World!"); %>
        <%= hello %>
    </p>
```

#####  Perl TODO
Perl has no code demarcation. Please read this [article](http://www.redantigua.com/html-template2.html)
to understand how perl is used with HTML templates.

##### PHP
PHP code must always be delimited by the full-form, standard PHP tags:

```php
<?php
    echo "Hello World!"
?>
```
Short tags are never allowed (due to possible server misconifguration).

For files that contain only PHP code, the closing tag ("?>") is never permitted. It is not required
by PHP, and omitting it´ prevents the accidental injection of trailing white space into the response.

```php
<?php
    echo "Hello World!"
```

##### Ruby TODO

Ruby has no code demarcation, unless used within [html templates](http://www.arubystory.com/2013/11/tutorial-saying-hello-world-with-ruby.html)
when it uses the same demarcation as **Java**.

```ruby
    def home
        @greeting = "Hello world!"
    end
```

```html
    <%= @greeting %>
```

##### Python TODO

Python has no code demarcation.

##### CSS

CSS has no code demarcation, unless CSS code is embed within HTML code, when CSS must be wrapped
by `<style>` tag.

##### HTML

HTML has no code demarcation, unless you consider `<!DOCTYPE>` as a code demarcation, or the fact
that all a standard HTML code must be placed within `<html>` tag.

<!-- --lang-ex-end -->

## Strings

### String Literals

When a string is literal (contains no variable substitutions) and also programming language allows it,
the **apostrophe** or **single quote** should always be used to demarcate the string:

<!-- --lang-ex -->

##### C/C++/C&#35; TODO

###### C
```c
char myString[] = "Example String";
```

###### C++
```c
std::string myString ("Example String");
```

###### C&#35;
```csharp
string myString = @"Example String";
System.String myString = "Example String";
// For more info, please read:
// @link https://msdn.microsoft.com/en-us/library/ms228362.aspx
```

##### CFML

```cfml
<!--- CFSCript --->
<cfscript>var myString = 'Example String'; </cfscript>

<!--- CFML --->
<cfset var myString = 'Example String' />
```

#####  Dart TODO

```dart
var myString = 'Example String';
```

##### JavaScript

###### ECMAScript
```javascript
var myString = 'Example String';
```

###### CoffeeScript
```coffeescript
myString = 'Example String'
```

##### Java

Java follows the C model, so strings **can't** be marked with **single quotes**. Thus they will be always marked with
**double quotes**.

```java
String myString = "Example String";
```

#####  Perl TODO
```perl
my $myString = 'Example String';
```

##### PHP

```php
$myString = 'Example String';
```

##### Ruby TODO

```ruby
myString = 'Example String';
```

##### Python TODO

```python
myString = 'Example String'
```

##### CSS

```css
@import('http://url/to/file.css');
```

##### HTML

HTML strings (standard text) does not have any demarcation type. However, they can always be embeded in different HTML tags.

```html
<p>Example String</p>
```

<!-- --lang-ex-end -->

### String Literals Containing Apostrophes

When a literal string itself contains apostrophes, it is permitted to demarcate the string with **quotation
marks** or **double quotes**. This is especially useful for SQL statements:

<!-- --lang-ex -->

##### C/C++/C&#35; TODO

###### C
```c
char sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

###### C++
```c
std::string sql ("SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'");
```

###### C&#35;
```csharp
string sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

##### CFML

```cfml
<!--- CFSCript --->
<cfscript>var sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'"; </cfscript>

<!--- CFML --->
<cfset sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'" />
```

#####  Dart TODO

```dart
var sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

##### JavaScript

###### ECMAScript*

```javascript
var sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

###### CoffeeScript

```coffeescript
sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'"
```

##### Java

```java
String sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

#####  Perl TODO

```perl
my $sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

##### PHP

```php
// double quotes
$sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";

/// quotation marks
$sql = <<<SQL_COMMAND
SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'
SQL_COMMAND;
```

##### Ruby TODO

```ruby
sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

##### Python TODO

```python
sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'"
```

<!-- --lang-ex-end -->

This syntax is preferred over escaping apostrophes as it is much easier to read.

### Variable Substitution / String interpolation


Variable substitution is permitted using either of these forms:

<!-- --lang-ex -->

##### C/C++/C&#35; TODO

<!-- http://rosettacode.org/wiki/String_interpolation_(included) -->
<!-- https://msdn.microsoft.com/en-us/library/dn961160.aspx -->

```c
  // Using `stdio.h`
  const char \*name = "John Doe";
  printf("Hello %s\n", name);
  char hello[100];
  sprintf(hello, "Hello %s", name)

  // ...
```

```cpp
xx
```

```csharp
xx
```

##### CFML

ColdFusion variablie substitution is done by wrapping the variable name within **#** character.

```cfml
<!--- CFML --->
<cfset var greeting = "Hello #name#, welcome back!" />

<!--- CFScript --->
<cfscript>
    var greeting = "Hello #name#, welcome back!"
</cfscript>
```

#####  Dart TODO

Dart variable substitution looks more like 'string interpolation'. Any other non string variable needs
to be converted to String to work. Furthermore, between the `${}` syntax expressions can be used. See
[Dart String Interpolation](http://shailen.github.io/blog/2012/11/14/dart-string-interpolation/) article.

```dart
    var name = 'John Doe';
    var hello = "Hello ${name}";

    var age = 15;
    var hello "Hello ${name}. I'm ${age.toString()} years old."
```

##### JavaScript

JavasScript (ECMAScript 5 and below) does not have variable substitution, however ECMAScript6 and
preprocessors do:

###### ECMAScript5 and lower

```javascript
var hello = "Hello " + name;
```

###### ECMAScript6

```javascript
var hello = `Hello ${name}`;
```

###### CoffeeScript
```coffeescript
hello = "Hello #{name}"
```

Also, both ES6 and Coffee support expressions within their string interpolation wrappings.

##### Java

One of the default string interpolation methods in Java is [`java.lang.String.format()`](http://docs.oracle.com/javase/8/docs/api/java/lang/String.html#format-java.lang.String-java.lang.Object...-)
function. We recommend this one.

```java
    String name = "John Doe";
    String hello = String.format("Hello %s", name);
```

#####  Perl

Perl's string interpolation is done by adding variable's name within the string. Also, string containing interpolated variables must be wrapped in double quotes (perl rule).

```perl
    my $name = 'John Doe';
    my $hello = "Hello $name";
```

##### PHP

PHP follows the same rule as Perl, however, it is recommended to wrap the variables within {}

```php
$greeting = "Hello {$name}, welcome back!";
// or - a more simple form which does not support complex expressions
$greeting = "Hello $name, welcome back!";
```
For consistency, this form is *not* permitted:

```php
$greeting = "Hello $name, welcome back!";
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

### String Concatenation

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

Strings must be concatenated using the **&** operator. A space must always be added before and after the **&** operator
to improve readability:

```cfml
<!--- CFML --->
<cfset var company = 'Code' & ' ' & 'Styling' />

<!--- CFScript --->
<cfscript>
    var company = 'Code' & ' ' & 'Styling';
</cfscript>
```

When concatenating strings with the **&** operator, it is encouraged to break the statement into multiple lines to improve
readability. In these cases, each successive line should be padded with white space such that the **&**; operator is aligned
under the **=** operator:

```cfml
<!--- CFML --->
<cfset var sql = "SELECT `id`, `name` FROM `people` "
             . "WHERE `name` = 'Susan' "
             . "ORDER BY `name` ASC "; />

<!--- CFScript --->
<cfscript>
    var sql = "SELECT `id`, `name` FROM `people` "
         . "WHERE `name` = 'Susan' "
         . "ORDER BY `name` ASC ";
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

Strings must be concatenated using the "+" operator. A space must always be added before and after the "+" operator to
improve readability:

```php
$company = 'Code' . ' ' . 'Styling';
```

###### ECMAScript

```javascript
var company = 'Code' + ' ' + 'Styling';
```

###### CoffeeScript

```coffeescript
company = 'Code' + ' ' + 'Styling'
```

When concatenating strings with the "+" operator, it is encouraged to break the statement into multiple lines to improve
readability. In these cases, each successive line should be padded with white space such that the "+"; operator is aligned
under the "=" operator:

###### ECMAScript

```javascript
var sql = "SELECT `id`, `name` FROM `people` "
     + "WHERE `name` = 'Susan' "
     + "ORDER BY `name` ASC ";
```

###### CoffeeScript

```coffeescript
sql = "SELECT `id`, `name` FROM `people` "
     + "WHERE `name` = 'Susan' "
     + "ORDER BY `name` ASC ";
```

##### Java

Strings must be concatenated using the "+" operator. A space must always be added before and after the "+" operator to
improve readability:

```java
String company = "Code" + " " + "Styling";
```

When concatenating strings with the "+" operator, it is encouraged to break the statement into multiple lines to improve
readability. In these cases, each successive line should be padded with white space such that the "+"; operator is aligned
under the "=" operator:

```java
String sql = "SELECT `id`, `name` FROM `people` "
     + "WHERE `name` = 'Susan' "
     + "ORDER BY `name` ASC ";
```

Please do not forget either [`String.concat`](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html)
function.

#####  Perl TODO

```perl
    # code here
```

##### PHP

Strings must be concatenated using the "." operator. A space must always be added before and after the "." operator to
improve readability:

```php
$company = 'Code' . ' ' . 'Styling';
```

When concatenating strings with the "." operator, it is encouraged to break the statement into multiple lines to improve
readability. In these cases, each successive line should be padded with white space such that the "."; operator is aligned
under the "=" operator:

```php
$sql = "SELECT `id`, `name` FROM `people` "
     . "WHERE `name` = 'Susan' "
     . "ORDER BY `name` ASC ";
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

## Arrays

### Numerically Indexed Arrays

Negative numbers are not permitted as indices in any of the languages presented bellow. Most of the languages bellow
start their index with 0.

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

Coldfusion arrays have their index starting from 1 and not from 0.

```cfml
<!--- CFML --->
<cfset sampleArray=ArrayNew(1) >
<cfset firstname[1]=1 >
<cfset firstname[2]=2 >
<cfset firstname[3]=3 >
<cfset firstname[4]='Cold' >
<cfset firstname[5]='Fusion' >

<!-- or -->
<cfset sampleArray = [1, 2, 3, 'Cold', 'Fusion'] >

<!--- CFScript --->
<cfscript>
    var sampleArray=ArrayNew(1) >
    firstname[1]=1;
    firstname[2]=2;
    firstname[3]=3;
    firstname[4]='Cold';
    firstname[5]='Fusion';

    // or
    var sampleArray = [1, 2, 3, 'Cold', 'Fusion'];
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

###### ECMAScript

```javascript
var sampleArray = new Array();
sampleArray.push(1);
sampleArray.push(2);
// ...
sampleArray.push('Script');

// or
var sampleArray = [1, 2, 3, 'ECMA', 'Script'];
```

###### CoffeeScript
```coffeescript
sampleArray = new Array
sampleArray.push 1
sampleArray.push 2
# ...
sampleArray.push 'Script'

# or
sampleArray = [1, 2, 3, 'ECMA', 'Script']
```

##### Java

Java arrays are usually single type. You cannot have arrays containing variables of multiple types.

```java
int[] num = new int[5];
num[0] = 1;
// ...
num[4] = 5;

// or
int[] num = {1, 2, 3, 4, 5};
```

Please do not forget Java is a more complex object oriented class. As a **TODO** we should treat also `java.lang.reflect.Array`
and `java.utils.Arrays` classes at least.

#####  Perl TODO

```perl
    # code here
```

##### PHP

An indexed array may start with any non-negative number, however all base indices besides 0 are discouraged.

When declaring indexed arrays with the Array function, a trailing space must be added after each comma delimiter to improve readability:

```php
$sampleArray = array(1, 2, 3, 'Zend', 'Studio');
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

It is permitted to declare multi-line indexed arrays using the "array" construct. The initial array item may begin on the
following line. If so, it should be padded at one indentation level greater than the line containing the array declaration,
and all successive lines should have the same indentation; the closing parent should be on a line by itself at the same
indentation level as the line containing the array declaration:

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

ColdFusion variablie substitution is done by wrapping the variable name within **#** character.

```cfml
<!--- CFML --->
<cfset var sampleArray = [
                1, 2, 3, 'Zend', 'Studio',
                $a, $b, $c,
                56.44, $d, 500,
            ] />

<!--- CFScript --->
<cfscript>
    var sampleArray = [
        1, 2, 3, 'Zend', 'Studio',
        $a, $b, $c,
        56.44, $d, 500
    ];
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

JavasScript (ECMAScript 5 and below) does not have variable substitution, however ECMAScript6 and
preprocessors do:

###### ECMAScript*

```javascript
var sampleArray = [
    1, 2, 3, 'Zend', 'Studio',
    $a, $b, $c,
    56.44, $d, 500
];
```

###### CoffeeScript

Since it is an indentation based syntax, CoffeeScript will not allow multi-line array declaration.

##### Java

One of the default string interpolation methods in Java is [`java.lang.String.format()`](http://docs.oracle.com/javase/8/docs/api/java/lang/String.html#format-java.lang.String-java.lang.Object...-)
function. We recommend this one.

```java
int sampleArray[] = {
    1, 2, 3,
    5, 6, 7,
    56, 100, 500
};
```

#####  Perl TODO

```perl
    # code here
```

##### PHP

```php
$sampleArray = array(
    1, 2, 3, 'Zend', 'Studio',
    $a, $b, $c,
    56.44, $d, 500,
);
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

When programming language allows (e.g php) and using this latter declaration, we encourage using a trailing comma for the
last item in the array; this minimizes the impact of adding new items on successive lines, and helps to ensure no parse
errors occur due to a missing comma.

### Associative Arrays

When programming language allows (e.g php, javascript) and declaring associative arrays with the Array construct, breaking
the statement into multiple lines is mandatory. The initial array item must begin on the following line. If so, it should
be padded at one indentation level greater than the line containing the array declaration, and all successive lines should
have the same indentation; the closing parent should be on a line by itself at the same indentation level as the line
containing the array declaration.

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

ColdFusion languages does not allow associative arrays. However, we can always emulate associative arrays through structures.

```cfml
<!--- CFML --->
<cfset var sampleArray = StructNew() />
<cfset sampleArray.firstKey = 'firstValue' /> <!--- both key declarations are valid --->
<cfset sampleArray['secondKey'] = 'secondValue' />
<!--- or --->
<cfset var sampleArray = {
    'firstKey'  = 'firstValue',
    'secondKey' = 'secondValue'
} />

<!--- CFScript --->
<cfscript>
    var sampleArray = StructNew();
    sampleArray.firstKey = 'firstValue'; // both key declarations are valid
    sampleArray['secondKey'] = 'secondValue';

    // or
    var sampleArray = {
        'firstKey'  = 'firstValue',
        'secondKey' = 'secondValue'
    };
</cfscript>
```

ColdFusion structures can be looped/parsed through as any other associative array using `<cfloop>` tag for CFML and
`for key in ...` for CFScript.

#####  Dart TODO

Dart variable substitution looks more like 'string interpolation'. Any other non string variable needs
to be converted to String to work. Furthermore, between the `${}` syntax expressions can be used. See
[Dart String Interpolation](http://shailen.github.io/blog/2012/11/14/dart-string-interpolation/) article.

```dart
    // code here
```

##### JavaScript

JavaScript language does not allow associative arrays. However, we can always emulate associative arrays through Objects.

###### ECMAScript5 and lower

```javascript
var sampleArray = {
    'firstKey':  'firstValue',
    'secondKey': 'secondValue'
};
```

###### ECMAScript6

```javascript
var sampleArray = {
    'firstKey':  'firstValue',
    'secondKey': 'secondValue',
};
```

###### CoffeeScript
```coffeescript
sampleArray =
    'firstKey':  'firstValue',
    'secondKey': 'secondValue'

```

##### Java

Java does not have associative arrays, but has something better called maps (see
[`java.lang.Map`](https://docs.oracle.com/javase/7/docs/api/java/util/Map.html)).
The same as arrays, Java maps do not support multiple types regarding stored values. The only chance for multiple types
storage could be when all stored types extend the same interface.

```java
Map<String, String> map = new HashMap<String, String>();
map.put("firstKey", "firstValue");
map.put("secondKey", "secondValue");
```

#####  Perl TODO

```perl
    # code here
```

##### PHP

```php
$sampleArray = array(
    'firstKey'  => 'firstValue',
    'secondKey' => 'secondValue',
);
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

When language allows it (e.g. php, ECMAScript6) and using this latter declaration, we encourage using a trailing comma
for the last item in the array; this minimizes the impact of adding new items on successive lines, and helps to ensure
no parse errors occur due to a missing comma.

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

## Functions and Methods

### Function and Method Declaration

*Functions* must be named according to project's function naming conventions. If no other convention is chosen, function naming will be done according with serpent case naming convention (serpent_case_naming_convention).

*Methods* inside classes must always declare their visibility by using one of the `private`, `protected`, or `public` modifiers.

If no other convention is chosen, method naming will be done according with camel case naming convention (camelCaseNamingConvention).

If decided by developer team, private method naming may contain the underscore "\_" character as a prefix (i.e. \_camelCaseNamingConvention).

As with classes, the brace should always be written on the line underneath the function name. Space between the function name and the opening parenthesis for the arguments is not permitted.

**Functions in the global scope are strongly discouraged.**

The following is an example of an acceptable function declaration in a class:

```php
/**
 * Documentation Block Here
 */
class Foo
{
    /**
     * Documentation Block Here
     */
    public function bar()
    {
        // all contents of function must be
        // indented one additional level
    }
}
```
In cases where the argument list exceeds the maximum line length, you may introduce line breaks. Additional arguments to the function or method must be indented one additional level beyond the function or method declaration. A line break should then occur before the closing argument parent, which should then be placed on the same line as the opening brace of the function or method with one space separating the two, and at the same indentation level as the function or method declaration. The following is an example of one such situation:

```php
/**
 * Documentation Block Here
 */
class Foo
{
    /**
     * Documentation Block Here
     */
    public function bar($arg1, $arg2, $arg3,
        $arg4, $arg5, $arg6
    ) {
        // all contents of function must be
        // indented one additional level
    }
}
```
*Note*: It is recommended a function should not have more than five (5) arguments. If a function must have more than 5 arguments, it is recommended masking the arguments in an array.

*Note*: Pass-by-reference is the only parameter passing mechanism permitted in a method declaration.

```php
/**
 * Documentation Block Here
 */
class Foo
{
    /**
     * Documentation Block Here
     */
    public function bar(&$baz)
    {}
}
```

Call-time pass-by-reference is strictly prohibited.

The return value must not be enclosed in parentheses. This can hinder readability, in additional to breaking code if a method is later changed to return by reference.

```php
/**
 * Documentation Block Here
 */
class Foo
{
    /**
     * WRONG
     */
    public function bar()
    {
        return($this->bar);
    }

    /**
     * RIGHT
     */
    public function bar()
    {
        return $this->bar;
    }
}
```

### Function and Method Usage

Function arguments should be separated by a single trailing space after the comma delimiter. The following is an example of an acceptable invocation of a function that takes three arguments:

```php
threeArguments(1, 2, 3);
```

Call-time pass-by-reference is strictly prohibited. See the function declarations section for the proper way to pass function arguments by-reference.

In passing arrays as arguments to a function, the function call may include the "array" hint and may be split into multiple lines to improve readability. In such cases, the normal guidelines for writing arrays still apply:

```php
threeArguments(array(1, 2, 3), 2, 3);
```

```php
threeArguments(array(
    1, 2, 3, 'Zend', 'Studio',
    $a, $b, $c,
    56.44, $d, 500
), 2, 3);
```

If function/method usage exceeds recommended per line length, breaking the statement into multiple lines is recommended. The initial argument must begin on the following line. If so, it should be padded at one indentation level greater than the line containing the array declaration, and all successive lines should have the same indentation; the closing parent should be on a line by itself at the same indentation level as the line containing the function/method declaration.

```php
threeLongArguments(
    $someVeryLongArgument1,
    $someVeryLongArgument2,
    $someVeryLongArgument3
);
```

## Control Statements & Loops

Any control statement or loop using syntax inspired from BASIC programming language, are strongly un-adviced, but not forbidden.

```php
if ($a == 1): // recommended not to use this syntax
    // your code here
endif

// should be replaced with

if ($a == 1) {
    // your code here  
}
```

### If/Else/Elseif

Control statements based on the if and elseif constructs must have a single space before the opening parenthesis of the conditional and a single space after the closing parenthesis.

Within the conditional statements between the parentheses, operators must be separated by spaces for readability. Inner parentheses are encouraged to improve logical grouping for larger conditional expressions.

The opening brace is written on the same line as the conditional statement. The closing brace is always written on its own line. Any content within the braces must be indented using four spaces.

```php
if ($a != 2) {
    $a = 2;
}
```

If the conditional statement causes the line length to exceed the maximum line length and has several clauses, you may break the conditional into multiple lines. In such a case, break the line prior to a logic operator, and pad the line such that it aligns under the first character of the conditional clause. The closing parent in the conditional will then be placed on a line with the opening brace, with one space separating the two, at an indentation level equivalent to the opening control statement.

```php
if (($a == $b)
    && ($b == $c)
    || (Foo::CONST == $d)
) {
    $a = $d;
}
```

The intention of this latter declaration format is to prevent issues when adding or removing clauses from the conditional during later revisions.

For "if" statements that include "elseif" or "else", the formatting conventions are similar to the "if" construct. The following examples demonstrate proper formatting for "if" statements with "else" and/or "elseif" constructs:

```php
if ($a != 2) {
    $a = 2;
} else {
    $a = 7;
}

if ($a != 2) {
    $a = 2;
} elseif ($a == 3) {
    $a = 4;
} else {
    $a = 7;
}

if (($a == $b)
    && ($b == $c)
    || (Foo::CONST == $d)
) {
    $a = $d;
} elseif (($a != $b)
          || ($b != $c)
) {
    $a = $c;
} else {
    $a = $b;
}
```

PHP allows statements to be written without braces in some circumstances. This coding standard makes no differentiation all "if", "elseif" or "else" statements must use braces.

Furthermore, if STRICT mode is chosen, no "if" statement cannot be defined without having it's else statement even if empty.

```php
if ($a == 1) {
  $a = 2;
} else {

}

###Switch

Control statements written with the "switch" statement must have a single space before the opening parenthesis of the conditional statement and after the closing parenthesis.

All content within the "switch" statement must be indented using four spaces. Content under each "case" statement must be indented using an additional four spaces.

```php
switch ($numPeople) {
    case 1:
        break;

    case 2:
        break;

    default:
        break;
}
```

The construct default should never be omitted from a switch statement.

**Note:** It is sometimes useful to write a case statement which falls through to the next case by not including a break or return within that case. To distinguish these cases from bugs, any case statement where break or return are omitted should contain a comment indicating that the break was intentionally omitted.

### Loops (for / foreach / while)

No loop statement will be used without opening and closing brackets.

```php
for ($i = 0; $i < 10; $i++) {
    // your code here
}

foreach ($array as $key => $value) {
    // your code here
}

while ($i > 0) {
    // your code here
}

do {
    // your code here
} while ($i > 0);
```

## Inline Documentation

### Documentation Format

All documentation blocks ("docblocks") must be compatible with the phpDocumentor format. Describing the phpDocumentor format is beyond the scope of this document. For more information, visit: [» http://phpdoc.org/](http://www.phpdoc.org/docs/latest/index.html)

All class files must contain a "file-level" docblock at the top of each file and a "class-level" docblock immediately above each class. Examples of such docblocks can be found below.

### Files

Every file that contains PHP code must have a docblock at the top of the file that contains these phpDocumentor tags at a minimum:

```php
/**
 * Short description for file
 *
 * Long description for file (if any)...
 *
 * LICENSE: Some license information
 *
 * @copyright  Copyright (c) 2007-2015 Foo Company LTD S.R.L. (http://www.company.foo)
 * @license    https://github.com/{ACCOUNT/GROUP}/{PROJECT-NAME}/blob/master/LICENSE License Type
 * @version    $Id:$
 * @link       https://github.com/{ACCOUNT/GROUP}/{PROJECT-NAME}
 * @link       https://github.com/{ACCOUNT/GROUP}/{PROJECT-NAME}/issues
 * @since      File available since Release 1.5.0
 */
```

The @category annotation must be a project's name abbreviation (i.e. "Athem").

The @package annotation must be assigned, and should be equivalent to the component name of the class contained in the file; typically, this will only have two segments, the @category prefix, and the component name (i.e. Athem_Soap).

The @subpackage annotation is optional. If provided, it should be the subcomponent name, minus the class prefix. In the example above, the assumption is that the class in the file is either "Athem_Soap_Client", or uses that classname as part of its prefix (i.e. Client).

### Classes

Every class must have a docblock that contains these phpDocumentor tags at a minimum:

```php
/**
 * Short description for class
 *
 * Long description for class (if any)...
 *
 * @category   Athem
 * @package    Athem_Soap
 * @subpackage Client
 * @version    Release: @package_version@
 * @since      Class available since Release 1.5.0
 * @deprecated Class deprecated in Release 2.0.0
 */
```

The @category annotation must be a project's name abbreviation (i.e. "Athem").

The @package annotation must be assigned, and should be equivalent to the component name of the class contained in the file; typically, this will only have two segments, the @category prefix, and the component name (i.e. Athem_Soap).

The @subpackage annotation is optional. If provided, it should be the subcomponent name, minus the class prefix. In the example above, the assumption is that the class in the file is either "Athem_Soap_Client", or uses that classname as part of its prefix (i.e. Client).

###Functions

Every function, including object methods, must have a docblock that contains at a minimum:

A description of the function

All of the arguments

All of the possible return values

It is not necessary to use the "@access" tag because the access level is already known from the "public", "private", or "protected" modifier used to declare the function.

If a function or method may throw an exception, use @throws for all known exception classes:

```php
/**
 * @throws exceptionclass [description]
 */
```

### In-line Comments

Single line comments should be made using the "//" syntax. Using "#" is not recommended, but not forbidden.

Multi line comments should always be wrapped between "/*" and "*/" characters.

If comment is of stronger importance, comments should follow the example bellow:

```php
/*************************************************
 * This is a comment
 *************************************************/

 Such comments should not exceed more than 5 lines of text, underlining the most important part of documentation.

###Code Examples

Following the phpDocumentor documentation, code examples must have the following syntax:

```php
/**
 * My function
 *
 * Here is an inline example:
 * <code>
 * <?php
 * echo strlen('6');
 * ?>
 * </code>
 * @example /path/to/example.php How to use this function
 * @example anotherexample.inc This example is in the "examples" subdirectory
 */
function mine()
{
}
```

<hr />
[&laquo; Naming Conventions](naming-conventions.md) / [Recommended Tools &raquo;](recommended-tools.md)
