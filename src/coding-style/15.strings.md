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
