# Coding Style

> **Note** This document is a draft and it will remain so. It is your duty as a developer to continuously
improve this document and your knowledge of this document.

## Code Demarcation (and context)

Code demarcation is mostly used by scripting languages (interpreted languages) used mostly for web development. It is a
way of specify-ing that the script starts at a certain point and ends at another.


<!-- --lang-ex -->

##### C/C++/C&#35;

Neither **C** nor **C++** have code demarcation. This is also valid for C#, unless (ASP) code is embed
in HTML templates.

```csharp
<%
    response.write("Hello World!");
%>
```

##### ColdFusion

While using CFScript (as a component of CFML), no matter the file type, whether code is embed within
HTML templates (e.g **cfml** file), or as a standalone class code (e.g. **cfc** file), code must always be
embed in the `<cfscript>` tag.

```xml
<cfscript>
    writeOutput('Hello World!');
</cfscript>
```

#####  Dart

Language has no code demarcation unless used within HTML files, where code is marked by `<script type="text/dart">` tag.

```html
<script type="text/dart">
    main() async {
        print('Hello World!');
    }
</script>
<!-- or -->
<script type="application/dart" src="app.dart"></script>
<script type="text/javascript" src="packages/browser/dart.js"></script>
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

```html
<script type="text/typescript" src="demo.ts"></script>
<script type="text/javascript" src="typescript.min.js"></script>
<script type="text/javascript" src="typescript.compile.min.js"></script>
```

> **Note**: CoffeScript and TypeScript are separate programming languages meant to either extend or simplify ECMAScript usage.
Their use within HTML can only be used by adding 3rd party 'compilers' to transpile their content into ECMAScript code and run it.

> **Note**: For [TypeScript](http://www.typescriptlang.org/)  please find a transpiler here in [typescript-compile](https://github.com/niutech/typescript-compile) project.

> **Note**: For [CofeeScript](http://coffeescript.org/) please read more on their [github repository](https://github.com/jashkenas/coffeescript).

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

#####  Perl

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

##### Ruby

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

<!-- ##### Python TODO

Python has no code demarcation. -->

<!-- --lang-ex-end -->

> **Note**: Absence of Programming Language from the list above suggests it does not have coding demarcation.



## Control Statements & Loops

### Initial Notes

> **Note**: Do not take in consideration if desired programming language is not present.

<!-- --lang-ex -->

##### PHP
Any control statement or loop using syntax inspired from BASIC programming language, are strongly un-adviced, but not forbidden.

```php
if (_expression_()): // recommended not to use this syntax
  _action_();
endif

// should be replaced with

if (_expression_()) {
  _action_();  
}
```

<!-- --lang-ex-end -->

### If/Else/Elseif

Control statements based on the if and elseif (elsif/elif) constructs must have a single space before the opening
parenthesis of the conditional and a single space after the closing parenthesis.

Within the conditional statements between the parentheses, operators must be separated by spaces for readability.
Inner parentheses are encouraged to improve logical grouping for larger conditional expressions.

The opening brace is written on the same line as the conditional statement. The closing brace is always written on its
own line. Any content within the braces must be indented using established indentation rules.

> **Note**: In case of CFML, which is a XML like programming language the braces standard will not apply.

> **Note**: Being programming languages based on indentation delimiters and not braces, **CofeeScript** and **Python**
will not be affected by this standard. Indentation for both languages is 2 spaces, and this should suffice this section.

> **Note**: **Ruby** delimiters are not based on braces, but on **if ... then ... end** format. The parentheses standard
will apply within this format as well.

<!-- --lang-ex -->

##### C/C++/C&#35;

```c
if (_expression_()) {
  _action_();
}

if (_expression_1_() && _expression_2_()) {
  _action_();
}
```

##### ColdFusion

###### CFML

```xml
<cfif (_expression_()) >
  <cfset _action_() />
</cfif>

<cfif (_expression_1_() AND _expression_2_()) >
  <cfset _action_() />
</cfif>
```

###### CFScript

```javascript
if (_expression_()) {
  _action_();
}

if (_expression_1_() && _expression_2_()) {
  _action_();
}
```

#####  Dart

```dart
if (_expression_()) {
  _action_();
}

if (_expression_1_() && _expression_2_()) {
  _action_();
}
```

##### JavaScript

###### ECMAScript

```javascript
if (_expression_()) {
  _action_();
}

if (_expression_1_() && _expression_2_()) {
  _action_();
}
```

###### CoffeeScript

```coffeescript
if (_expression_())
  _action_()

_action_() when (_expression_())

if (_expression_1_() && _expression_2_())
  _action_()
```


<!-- ###### PureScript

```javascript
// TODO
``` -->


###### TypeScript

```javascript
if (_expression_()) {
  _action_();
}

if (_expression_1_() && _expression_2_()) {
  _action_();
}
```

##### Java

```java
if (_expression_()) {
  _action_();
}

if (_expression_1_() && _expression_2_()) {
  _action_();
}
```

#####  Perl

```perl
if (_expression_()) {
  _action_();
}

if (_expression_1_() && _expression_2_()) {
  _action_();
}
```

##### PHP

```php
if (_expression_()) {
  _action_();
}

if (_expression_1_() && _expression_2_()) {
  _action_();
}
```

##### Ruby

```ruby
if (_expression_()) then
  _action_();
end

if (_expression_1_() && _expression_2_()) then
  _action_();
end
```

##### Python

```python
if (_expression_()):
  _action_()

if (_expression_1_() && _expression_2_()):
  _action_()
```
<!-- --lang-ex-end -->

If the conditional statement causes the line length to exceed the maximum line length and has several clauses, you may
break the conditional into multiple lines and also start on a new indented line after the opening parent. In such a
case, break the line prior to a logic operator, and pad the line such that it aligns under the first character of the
conditional clause. The closing parent in the conditional will then be placed on a line with the opening brace, with one
space separating the two, at an indentation level equivalent to the opening control statement.

> **Note**: Being programming languages based on indentation delimiters and not braces, **CofeeScript** and **Python**
will not be affected by this standard. However, if the conditional statement is too large, it can always be broken in
multiple inner conditions.

<!-- --lang-ex -->

##### C/C++/C&#35;

```c
if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
}
```

##### ColdFusion

###### CFML

```xml
<!--- CFML --->
<cfif (
  (_very_long_expression_1_())
  OR (_very_long_expression_2_())
) >
  <cfset _action_() />
</cfif>
```
###### CFScript

```javascript
if (
  (_very_long_expression_1_())
  OR (_very_long_expression_2_())
) {
  _action_();
}
```

#####  Dart

```dart
if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
}
```

##### JavaScript

###### ECMAScript

```javascript
if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
}
```

###### CoffeeScript

```coffeescript
if ((_very_long_expression_1_()) || (_very_long_expression_2_())
  _action_()  
```

<!-- ###### PureScript

```purescript
if ((a == b) && (b == c) || (Foo.CONST == d))
  a = d
``` -->

###### TypeScript

```javascript
if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
}
```

##### Java

```java
if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
}
```

#####  Perl

```perl
if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
}
```

##### PHP

```php
if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
}
```

##### Ruby

```ruby
if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) then
  _action_();
end
```

##### Python

```python
if ((_very_long_expression_1_()) || (_very_long_expression_2_())):
  _action_()
```
<!-- --lang-ex-end -->

The intention of this latter declaration format is to prevent issues when adding or removing clauses from the
conditional during later revisions.

For "if" statements that include "elseif" or "else", the formatting conventions are similar to the "if" construct. The
following examples demonstrate proper formatting for "if" statements with "else" and/or "elseif" constructs:

<!-- --lang-ex -->

##### C/C++/C&#35;

```c
if (_expression_()) {
  _action_();
} else {
  _else_action_();
}

if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
} else {
  if (_very_long_expression_3_()) {
    _elseif_action_();
  } else {
    _else_action_();
  }
}
```

##### ColdFusion

###### CFML

```xml
<cfif _expression_() >
  <cfset _action_() />
<cfelse>
  <cfset _else_action_() />
</cfif>

<cfif (
  (_very_long_expression_1_())
  OR (_very_long_expression_2_())
) >
  <cfset _action_() />
<cfelseif ((_very_long_expression_3_()) >
  <cfset _elseif_action_() />
<cfelse>
  <cfset _else_action_() />
</cfif>
```
###### CFScript

```javascript
if (_expression_()) {
  _action_();
} else {
  _else_action_();
}

if (
  (_very_long_expression_1_())
  OR (_very_long_expression_2_())
) {
  _action_();
} else {
  if (_very_long_expression_3_()) {
    _elseif_action_();
  } else {
    _else_action_();
  }
}
```

#####  Dart

```dart
if (_expression_()) {
  _action_();
} else {
  _else_action_();
}

if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
} else {
  if (_very_long_expression_3_()) {
    _elseif_action_();
  } else {
    _else_action_()
  }
}
```

##### JavaScript

###### ECMAScript

```javascript
if (_expression_()) {
  _action_();
} else {
  _else_action_();
}

if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
} else {
  if (_very_long_expression_3_()) {
    _elseif_action_();
  } else {
    _else_action_()
  }
}
```

###### CoffeeScript

```coffeescript
if (_expression_())
  _action_();
else
  _else_action_();

if ((_very_long_expression_1_()) || (_very_long_expression_2_())
  _action_()
else
  if (_very_long_expression_3_())
    _elseif_action_()
  else
    _else_action_()
```

<!-- ###### PureScript

```purescript
if ((a == b) && (b == c) || (Foo.CONST == d))
  a = d
``` -->

###### TypeScript

```javascript
if (_expression_()) {
  _action_();
} else {
  _else_action_();
}

if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
} else {
  if (_very_long_expression_3_()) {
    _elseif_action_();
  } else {
    _else_action_()
  }
}
```

##### Java

```java
if (_expression_()) {
  _action_();
} else {
  _else_action_();
}

if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
} else {
  if (_very_long_expression_3_()) {
    _elseif_action_();
  } else {
    _else_action_();
  }
}
```

#####  Perl

```perl
if (_expression_()) {
  _action_();
} else {
  _else_action_();
}

if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_()
} elsif (_very_long_expression_3_()) {
  _elseif_action_();
} else {
  _else_action_();
}
```

##### PHP

```php
if (_expression_()) {
  _action_();
} else {
  _else_action_();
}

if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) {
  _action_();
} else {
  if (_very_long_expression_3_()) {
    _action_();
  } else {
    _else_action_();
  }
}
```

##### Ruby

```ruby
if (_expression_()) then
  _action_();
else
  _else_action_();
end

if (
  (_very_long_expression_1_())
  || (_very_long_expression_2_())
) then
  _action_();
elsif (_very_long_expression_3_()) then
  _elseif_action_();
else
  _else_action_();
end
```

##### Python

```python
if (_expression_()):
  _action_()
else:
  _else_action_()

if ((_very_long_expression_1_()) || (_very_long_expression_2_())):
  _action_()
elif (_very_long_expression_3_()):
  _elseif_action_()
else:
  _else_action_()
```
<!-- --lang-ex-end -->

Almost all languages allow statements to be written without braces in some circumstances. This coding
standard makes no differentiation all "if", "elseif" or "else" statements must use braces.

Furthermore, if STRICT mode is chosen, no "if" statement cannot be defined without having it's else
statement even if empty.

i.e.
```php
// STRICT MODE
if (_expression_()) {
  _action_();
} else {
  // your empty else section
}
```

### Switch

Control statements written with the "switch" statement must have a single space before the opening parenthesis
of the conditional statement and after the closing parenthesis.

All content within the "switch" statement must be indented using four spaces. Content under each "case" statement
must be indented using an additional four spaces.

> **Note**: In case of **Perl** programming language, all case section must start with a brace on the same line as
the case expression, and end with a brace on a new empty line indented at the same level with the opening case
expression.

> **Note**: **Python**'s lack of a `switch` statement has garnered much discussion and even a PEP. The most popular
substitute uses dictionaries to map cases to functions, which requires lots of defs or lambdas. While
the approach shown here may be O(n) for cases, it aims to duplicate C's original 'switch' functionality
and structure with reasonable accuracy. Please read the complete [recipe](http://code.activestate.com/recipes/410692/).  

<!-- --lang-ex -->

##### C/C++/C&#35;

```c
switch (_expression_()) {
  case 1:
    _action_1_();
    break;
  case 2:
    _action_2_();
    break;
  default:
    _action_else_();
    break;
}
```

##### ColdFusion

###### CFML

```xml
<cfswitch _expression_()>
  <cfcase 1>
    <cfset _action_1_() />
  </cfcase>
  <cfcase 2>
    <cfset _action_2_() />
  </cfcase>
  <cfdefaultcase>
    <cfset _action_else_() />
  </cfdefaultcase>
</cfswitch>
```

###### CFScript

```javascript
switch (_expression_()) {
  case 1:
    _action_1_();
    break;
  case 2:
    _action_2_();
    break;
  default:
    _action_else_();
    break;
}
```

#####  Dart

```dart
switch (_expression_()) {
  case 1:
    _action_1_();
    break;
  case 2:
    _action_2_();
    break;
  default:
    _action_else_();
    break;
}
```

##### JavaScript

###### ECMAScript

```javascript
switch (_expression_()) {
  case 1:
    _action_1_();
    break;
  case 2:
    _action_2_();
    break;
  default:
    _action_else_();
    break;
}
```

###### CoffeeScript
```coffeescript
switch (_expression_())
  when 1 then _action_1_
  when 2
    _action_2_
  else
    _action_else_
```

<!-- ###### PureScript

```purescript
// code here
``` -->

###### TypeScript

```javascript
switch (_expression_()) {
  case 1:
    _action_1_();
    break;
  case 2:
    _action_2_();
    break;
  default:
    _action_else_();
    break;
}
```

##### Java

```java
switch (_expression_()) {
  case 1:
    _action_1_();
    break;
  case 2:
    _action_2_();
    break;
  default:
    _action_else_();
    break;
}
```

#####  Perl

TODO: Add comment.

```perl
switch (_expression_()) {
  case 1 {
    _action_1_();
  }
  case 2 {
    _action_2_();
  }
  else {
    _action_else_();
  }
}
```

##### PHP

```php
switch (_expression_()) {
  case 1:
    _action_1_();
    break;
  case 2:
    _action_2_();
    break;
  default:
    _action_else_();
    break;
}
```

##### Ruby

```ruby
case (_expression_())
  when 1
    _action_1_();
  when 2
    _action_2_();
  else
    _action_else_();
end

result = case (_expression_())
  when 1 then _action_1_();
  when 2 then _action_2_();
  else _action_else_();
end

}
```

##### Python

```python
for case in switch(_expression_())
  if case(1):
    _action_1_()
    break
  if case(2):
    _action_2_()
    break
  if case(): # default
    _action_else_()
    breal
```
<!-- --lang-ex-end -->


The construct default should never be omitted from a switch statement unless programming language has no such directive.

> **Note:** It is sometimes useful to write a case statement which falls through to the next case by not including a break
or return within that case. To distinguish these cases from bugs, any case statement where break or return are omitted
should contain a comment indicating that the break was intentionally omitted.

### Loops (for / foreach / while)

No loop statement will be used without opening and closing brackets (or similar programming language dependent structures).

<!-- --lang-ex -->

##### C/C++/C&#35;

###### C &amp; C++

```c
for (i = 0; i < 10; i++) {
  _action_();
}

while (_expression_()) {
  _action_();
}

do {
  _action_();
} while (_expression_());
```
###### C&#35;

```csharp
for (i = 0; i < 10; i++) {
  _action_();
}

while (_expression_()) {
  _action_();
}

foreach (value in iterable) {
  _action_(value);
}

do {
  _action_();
} while (_expression_());
```

##### ColdFusion

###### CFML

```xml
<!--- CFML --->
<cfloop index="i" from="1" to="#arrayLen(myArray)#">
  <cfset _action_(iterable[i]) />
</cfloop>

<cfloop array="#iterable#" index="val">
  <cfset _action_(val) />
</cfloop>

<cfloop list="#list#" index="val">
  <cfset _action_(val) />
</cfloop>

<cfloop collection="#struct#" index="i">
  <cfset _action_(struct[i]) />
</cfloop>
```
###### CFScript

```javascript
for (i EQ 0; i LT 10; i++) {
  _action_();
}

while (_expression_()) {
  _action_();
}

do {
  _action_();
} while (_expression_());
```

#####  Dart

```dart
for (i = 0; i < 10; i++) {
  _action_();
}

while (_expression_()) {
  _action_();
}

do {
  _action_();
} while (_expression_());
```

##### JavaScript

###### ECMAScript

```javascript
for (i = 0; i < 10; i++) {
  _action_();
}

for (i in object) {
  _action_(object[i]);
}

while (_expression_()) {
  _action_();
}

do {
  _action_();
} while (_expression_());
```
###### ECMAScript 6

This is in addition to the ones above.

```javascript
for (val of iterable) {
  _action_(val);
}
```

###### CoffeeScript
```coffeescript
for val in iterable
  do _action_ val

_action_() while _expression_()
```

<!-- ###### PureScript

```purescript
// code here
``` -->

###### TypeScript

```javascript
for (val of iterable) {
  _action_(val);
}
```

##### Java

```java
for (i = 0; i < 10; i++) {
  _action_();
}

while (_expression_()) {
  _action_();
}

do {
  _action_();
} while (_expression_());
```

#####  Perl

```perl
for ($i = 0; $i < 10; $i++) {
  _action_();
}

foreach $value (@iterable) {
  _action_($value);
}

while (_expression_()) {
  _action_();
}

do {
  _action_();
} while (_expression_());
```

##### PHP

```php
for ($i = 0; $i < 10; $i++) {
  _action_();
}

foreach ($iterable as $key => $value) {
  _action_($value);
}

while (_expression_()) {
  _action_();
}

do {
  _action_();
} while (_expression_());
```

##### Ruby

```ruby
for (val in sequence) do
  _action_(val);
end

sequence.each do |val|
  _action_(val);
end

while (_expression_()) do
  _action_();
end

begin
  _action_();
end while (_expression_())

until (_expression_()) do
  _action_();
end

begin
  _action_();
end until (_expression_())
```

##### Python

```python
for val in sequence:
  _action_(val)

while (_expression_()):
  _action_()

while 1:
  _action_()
  if (_expression_()):
  break
```

<!-- --lang-ex-end -->

## Strings

### String Literals

When a string is literal (contains no variable substitutions) and also programming language allows it, the **apostrophe**
or **single quote** should always be used to demarcate the string:

<!-- --lang-ex -->

##### C/C++/C&#35;

###### C

```c
char myString[] = "Example String";
```

###### C++

```cpp
std::string myString ("Example String");
```

###### C&#35;

```csharp
string myString = @"Example String";
System.String myString = "Example String";
// For more info, please read:
// @link https://msdn.microsoft.com/en-us/library/ms228362.aspx
```

##### ColdFusion

###### CFML

```xml
<cfset var myString = 'Example String' />
```

###### CFScript

```javascript
var myString = 'Example String';
```

#####  Dart

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

<!-- ###### PureScript

```purescript
// TODO
``` -->

###### TypeScript

```typescript
var myString = 'Example String';
```

##### Java

```java
String myString = 'Example String';
```

#####  Perl

```perl
my $myString = 'Example String';
```

##### PHP

```php
$myString = 'Example String';
```

##### Ruby

```ruby
myString = 'Example String';
```

##### Python

```python
myString = 'Example String'
```
<!-- --lang-ex-end -->

### String Literals Containing Apostrophes

When a literal string itself contains apostrophes, it is permitted to demarcate the string with **quotation marks** or
**double quotes**. This is especially useful for SQL statements:

<!-- --lang-ex -->

##### C/C++/C&#35;

###### C

```c
char sql[1000] = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

###### C++

```cpp
std::string sql ("SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'");
```

###### C&#35;

```csharp
System.String sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

##### ColdFusion

###### CFML

```xml
<cfset var sql="SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'" />
```
###### CFScript

```javascript
var sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

#####  Dart

```dart
var sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

##### JavaScript

###### ECMAScript5 and lower

```javascript
var sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

###### ECMAScript6

```javascript
let sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

###### CoffeeScript
```coffeescript
sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'"
```

<!-- ###### PureScript

```purescript
// TODO
``` -->

###### TypeScript

```typescript
var sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

##### Java

```java
String sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

#####  Perl

```perl
my $sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

##### PHP

```php
$sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

##### Ruby

```ruby
sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

##### Python

```python
sql = "SELECT `id`, `name` from `people` WHERE `name`='Fred' OR `name`='Susan'";
```

<!-- --lang-ex-end -->

This syntax is preferred over escaping apostrophes as it is much easier to read.

### Variable Substitution / String interpolation


Variable substitution is permitted using either of these forms:

<!-- --lang-ex -->

##### C/C++/C&#35;

###### C

```c
// Using `stdio.h`
const char \*name = "John Doe";
printf("Hello %s\n", name);
// or
char hello[100];
sprintf(hello, "Hello %s", name)
```

###### C++

```cpp
// TODO
```

###### C&#35;

```csharp
// TODO
```

##### ColdFusion

###### CFML

```xml
<cfset var greeting = "Hello #name#!" />
```
###### CFScript

```javascript
var name = 'John Doe';
var greeting = "Hello #name#!"
```

#####  Dart

Dart variable substitution looks more like 'string interpolation'. Any other non string variable needs
to be converted to String to work. See
[Dart String Interpolation](http://shailen.github.io/blog/2012/11/14/dart-string-interpolation/) article.

```dart
var name = 'John Doe';
var hello = "Hello ${name}!";
var age = 15;
var hello "Hello \${name}! I'm \${age.toString()} years old."
```

##### JavaScript

JavasScript (ECMAScript 5 and below) does not have variable substitution, however ECMAScript6 and
preprocessors do.

###### ECMAScript5 and lower

```javascript
var name = 'John Doe';
var hello = "Hello {name}!".replace(/{name}/, name);
```

###### ECMAScript6

Also, both ES6 and Coffee support expressions within their string interpolation wrappings. However,
unlike Dart, expressions won't need `toString` conversion.

```javascript
let name = 'John Doe';
let age = 15;
let hello = `Hello \${name}! I'm \${age + 10} years old.`;
```

###### CoffeeScript
```coffeescript
name = 'John Doe'
age = 15
hello = "Hello #{name}! I'm #{age + 10} years old."
```

###### PureScript

```purescript
// code here
```

###### TypeScript

```typescript
let name = 'John Doe';
let age = 15;
let hello = `Hello \${name}! I'm \${age + 10} years old.`;
```

##### Java

One of the default string interpolation methods in Java is
[`java.lang.String.format()`](http://docs.oracle.com/javase/8/docs/api/java/lang/String.html#format-java.lang.String-java.lang.Object...-)
function. We recommend this one.

```java
String name = "John Doe";
String hello = String.format("Hello %s", name);
```

#####  Perl

```perl
my $name = 'John Doe';
my $hello = "Hello $name";
```

##### PHP

PHP follows the same rule as Perl, however, it is recommended to wrap the variables within `\${}`

```php
$greeting = "Hello \{$name}!";
// or - a more simple form which does not support complex expressions
$greeting = "Hello $name!";
```
For consistency, this form is *not* permitted:

```php
$greeting = "Hello $name!";
```

##### Ruby

```ruby
name = 'John Doe'
hello = "Hello #{name}!"
```

##### Python

```python
# usig the locals() methos
name = 'John Doe'
hello = "Hello %(name)s!" % locals()

# using the .format() method
name = 'John Doe'
hello = "Hello {name!s}!".format(**locals())

# using the Template class
tmpl = string.Template("Hello $name!")
hello = tmpl.substitute(name="John Doe")
```
<!-- --lang-ex-end -->

### String Concatenation

<!-- --lang-ex -->

##### C/C++/C&#35;

<!-- ###### C

```c
// code here
```

###### C++

```cpp
// code here
``` -->

###### C&#35;

```csharp
System.String myString = "This string" + "is concatenated.";
```

##### ColdFusion

###### CFML

```xml
<cfset var myString = 'This string ' & 'is concatenated.' />
```
###### CFScript

```javascript
var myString = 'This string ' & 'is concatenated.';
```

#####  Dart

```dart
var myString = 'This string ' + 'is concatenated.';
```

##### JavaScript

###### ECMAScript

```javascript
myString = 'This string ' + 'is concatenated.';
```

###### CoffeeScript
```coffeescript
myString = 'This string ' + 'is concatenated.'
```
<!--
###### PureScript

```purescript
// code here
``` -->

###### TypeScript

```typescript
var myString = 'This string ' + 'is concatenated.';
```

##### Java

```java
java.lang.String myString = 'This string ' + 'is concatenated.';
```

#####  Perl

```perl
my $myString = 'This string ' . 'is concatenated.';
```

##### PHP

```php
$myString = 'This string ' . 'is concatenated.';
```

##### Ruby

```ruby
myString = 'This string ' + 'is concatenated.';
```

##### Python

```python
myString = 'This string ' + 'is concatenated.'
```
<!-- --lang-ex-end -->

## Arrays

### Numerically Indexed Arrays

Negative numbers are not permitted as indices in any of the languages presented bellow. Most of the languages bellow
start their index with 0.

<!-- --lang-ex -->

##### C/C++/C&#35;

###### C

```c
int myArray[5] = {16, 2, 77, 40, 12071};
```

###### C++

```cpp
int myArray[5] = {16, 2, 77, 40, 12071};
int myArray[] = {16, 2, 77, 40, 12071};
int myArray[] {16, 2, 77, 40, 12071};
```

###### C&#35;

```csharp
int[] myArray = new int[5] {16, 2, 77, 40, 12071};
```

##### ColdFusion

###### CFML

```xml
<cfset var myArray = [16, 2, 77, 40, 12071] />
<!--- or -->
<cfset var myArray = ArrayNew() />
<cfset myArray[1] = 16 />
<!--- ... -->
<cfset myArray[5] = 120716 />
```
###### CFScript

```javascript
var myArray = [16, 2, 77, 40, 12071];
// or
var myArray = ArrayNew();
myArray[1] = 16;
// ...
myArray[5] = 120716;
```

#####  Dart

```dart
var myArray = [16, 2, 77, 40, 12071];
```

##### JavaScript

###### ECMAScript5 and lower

```javascript
var myArray = [16, 2, 77, 40, 12071];
```

###### ECMAScript6

```javascript
var myArray = [16, 2, 77, 40, 12071];
```

###### CoffeeScript
```coffeescript
myArray = [16, 2, 77, 40, 12071]
```

<!-- ###### PureScript

```purescript
// code here
``` -->

###### TypeScript

```typescript
var myArray = [16, 2, 77, 40, 12071];
```

##### Java

```java
int[] myArray = {16, 2, 77, 40, 12071};
```

#####  Perl

```perl
my $myArray = [16, 2, 77, 40, 12071];
```

##### PHP

```php
$myArray = [16, 2, 77, 40, 12071];
// or
$myArray = array(16, 2, 77, 40, 12071);
```

##### Ruby

```ruby
myArray = [16, 2, 77, 40, 12071];
```

##### Python

```python
myArray = [16, 2, 77, 40, 12071]
```

<!-- --lang-ex-end -->

It is permitted to declare multi-line indexed arrays using the "array" construct. The initial array item may begin on the
following line. If so, it should be padded at one indentation level greater than the line containing the array declaration,
and all successive lines should have the same indentation; the closing parent should be on a line by itself at the same
indentation level as the line containing the array declaration:

<!-- --lang-ex -->

##### C/C++/C&#35;

###### C

```c
int myArray[5] = {16, 2, 77,
                  40, 12071};
```

###### C++

```cpp
int myArray[5] = {16, 2, 77,
                  40, 12071};
int myArray[] = {16, 2, 77,
                40, 12071};
int myArray[] {16, 2, 77,
              40, 12071};
```

###### C&#35;

```csharp
int[] myArray = new int[5] {16, 2, 77,
                            40, 12071};
```

##### ColdFusion

###### CFML

```xml
<cfset var myArray = [16, 2, 77,
                      40, 12071] />
```
###### CFScript

```javascript
var myArray = [16, 2, 77,
              40, 12071];
```

#####  Dart

```dart
var myArray = [16, 2, 77,
              40, 12071];
```

##### JavaScript

###### ECMAScript5 and lower

```javascript
var myArray = [16, 2, 77,
              40, 12071];
```

###### ECMAScript6

```javascript
var myArray = [16, 2, 77,
              40, 12071];
```

###### CoffeeScript
```coffeescript
myArray = [16, 2, 77, 40, 12071]
```

<!-- ###### PureScript

```purescript
// code here
``` -->

###### TypeScript

```typescript
var myArray = [16, 2, 77,
              40, 12071];
```

##### Java

```java
int[] myArray = {16, 2, 77,
                40, 12071};
```

#####  Perl

```perl
my $myArray = [16, 2, 77,
              40, 12071];
```

##### PHP

```php
$myArray = [16, 2, 77,
            40, 12071];
// or for versions lower than php v5.3
$myArray = array(16, 2, 77,
            40, 12071);
```

##### Ruby

```ruby
myArray = [16, 2, 77,
          40, 12071];
```

##### Python

```python
myArray = [16, 2, 77, 40, 12071]
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

##### C/C++/C&#35;

###### C

###### C++

```cpp
std::map <string, string> myMap;
myMap["hello"] = "world";
// ...
myMap["bie"] = "John";
```

###### C&#35;

```csharp
Dictionary<string,string> myMap = new Dictionary<string,string>();
myMap.Add("hello","world");
myMap.Add("bie","John");
```

##### ColdFusion

###### CFML

```xml
<cfset myMap = {
  hello = 'World',
  bie = 'John'
} />
<!--- or -->
<cfset myMap = StructNew() />
<cfset myMap.hello = 'World' />
<cfset myMap.bie = 'John' />
```
###### CFScript

```javascript
myMap = {
  hello = 'World',
  bie = 'John'
};
<!--- or -->
myMap = StructNew();
myMap.hello = 'World';
myMap.bie = 'John';
```

#####  Dart

```dart
var myMap = {
  hello: 'World',
  bie: 'John'
};
```

##### JavaScript

###### ECMAScript

```javascript
var myMap = {
  hello: 'World',
  bie: 'John'
};
```

###### CoffeeScript
```coffeescript
myMap =
  hello: 'World'
  bie: 'John'
```

<!-- ###### PureScript

```purescript
// code here
``` -->

###### TypeScript

```typescript
var myMap = {
  hello: 'World',
  bie: 'John'
};
```

##### Java

```java
Map myMap = new HashMap();
myMap.put("hello", "world");
myMap.put("bie", "John");
```

#####  Perl

```perl
# TODO
```

##### PHP

```php
$myMap = [
  'hello' => 'World',
  'bie' => 'John',
];
```

##### Ruby

```ruby
myMap = {
  'hello' => 'World',
  'bie' => 'John'
}

myMap = {
  :hello => 'World',
  :bie => 'John'
}

myMap = {
  hello: 'World',
  bie: 'John'
}
```

##### Python

```python
myMap = {hello: 'World', bie: 'John'}
```

<!-- --lang-ex-end -->

When language allows it (e.g. php) and using this latter declaration, we encourage using a trailing comma
for the last item in the array; this minimizes the impact of adding new items on successive lines, and helps to ensure
no parse errors occur due to a missing comma.

## Classes

### Class Declaration

Classes must be named according to project's naming conventions (decided by developing team). The
brace should always be written on the line underneath the class name.

Every class must have a documentation block that conforms to the [PHPDocumentor](http://www.phpdoc.org/)
standard. All code in a class must be indented (see [Overview](overview.md)). Only one class is
permitted in each file. Placing additional code in class files is **not** permitted and discouraged.

The following is an example of an acceptable class declaration:

<!-- --lang-ex -->

##### C/C++/C&#35;

###### C++

```cpp
/**
 * Documentation Block Here
 */
class SampleClass
{
  // all contents of class must be indented
};
```

###### C&#35;

```csharp
/**
 * Documentation Block Here
 */
public class SampleClass
{
  // all contents of class must be indented
}
```

##### ColdFusion

###### CFML

`org/company/project/package/subpackage/ComponentName.cfc`
```xml
<!---
  Documentation Block Here
--->
<cfcomponent displayName="ComponentName" output="no">
  <!--- all contents of class must be indented --->
</cfcomponent>
```

###### CFScript

```javascript
/**
 * Documentation Block Here
 */
component displayName='ComponentName' output='no'
{
  // all contents of class must be indented
}
```

#####  Dart

```dart
/**
 * Documentation Block Here
 */
class SampleClass
{
  // all contents of class must be indented
}
```

##### JavaScript

###### ECMAScript5 and lower

```javascript
/**
 * Documentation Block Here
 */
window.ClassName = function() {
  // all contents of class must be indented
};
```

###### ECMAScript6

```javascript
/**
 * Documentation Block Here
 */
export class SampleClass
{
  // all contents of class must be indented
}
```

###### CoffeeScript
```coffeescript
class ClassName

  # all contents of class must be indented
```

<!-- ###### PureScript

```purescript
// code here
``` -->

###### TypeScript

```typescript
/**
 * Documentation Block Here
 */
class SampleClass
{
  // all contents of class must be indented
}
```

##### Java

```java
/**
 * Documentation Block Here
 */
public class SampleClass
{
  // all contents of class must be indented
}
```

#####  Perl

```perl
# TODO
```

##### PHP

```php
/**
 * Documentation Block Here
 */
class SampleClass
{
  // all contents of class must be indented
}
```

##### Ruby

```ruby
#
# Documentation Block Here
#
class SampleClass

  # all contents of class must be indented

end
```

##### Python

```python
#
# Documentation Block Here
#
class SampleClass

  # all contents of class must be indented

```

<!-- --lang-ex-end -->

Classes that extend other classes or which implement interfaces should declare their dependencies on
the same line when possible.

If as a result of such declarations, the line length exceeds the maximum line length and also
programming langauge allows it, break the line before the "extends" and/or "implements" keywords,
and pad those lines by one indentation level.

<!-- --lang-ex -->

##### C/C++/C&#35;

###### C++

```csharp
/**
 * Documentation Block Here
 */
class SampleClass : public FooAbstract, public BarInterface
{
  // all contents of class must be indented
};

/**
 * Documentation Block Here
 */
class SampleClass :
  public FooAbstract,
  public BarInterface
{
  // all contents of class must be indented
};
```

###### C&#35;

```csharp
/**
 * Documentation Block Here
 */
public class SampleClass : FooAbstract, BarInterface
{
  // all contents of class must be indented
}

/**
 * Documentation Block Here
 */
public class SampleClass :
  FooAbstract,
  BarInterface
{
  // all contents of class must be indented
}
```

##### ColdFusion

###### CFML

`org/company/project/package/ComponentName.cfc`
```xml
<!---
  Documentation Block Here
--->
<cfcomponent displayName="ComponentName" extends="AbstractComponentName" implements="InterfaceComponentName" output="no">
  <!--- all contents of class must be indented --->
</cfcomponent>

<!---
  Documentation Block Here
--->
<cfcomponent
  displayName="ComponentName"
  extends="org.company.project.AbstractComponentName"
  implements="org.company.project.InterfaceComponentName" output="no">
  <!--- all contents of class must be indented --->
</cfcomponent>
```

###### CFScript

```javascript
/**
 * Documentation Block Here
 */
component extends="AbstractComponentName" implements="InterfaceComponentName" displayName='ComponentName' output='no'
{
  // all contents of class must be indented
}

/**
 * Documentation Block Here
 */
component
  extends="org.company.project.AbstractComponentName"
  implements="org.company.project.InterfaceComponentName"
  displayName='ComponentName' output='no'
{
  // all contents of class must be indented
}
```

#####  Dart

```dart
/**
 * Documentation Block Here
 */
class SampleClass
{
  // all contents of class must be indented
}
```

##### JavaScript

###### ECMAScript5 and lower

```javascript
/**
 * Documentation Block Here
 */
window.ClassName = function() {
  // all contents of class must be indented
};
```

###### ECMAScript6

```javascript
/**
 * Documentation Block Here
 */
export class SampleClass
{
  // all contents of class must be indented
}
```

###### CoffeeScript
```coffeescript
class ClassName

  # all contents of class must be indented
```

<!-- ###### PureScript

```purescript
// code here
``` -->

###### TypeScript

```typescript
/**
 * Documentation Block Here
 */
class SampleClass
{
  // all contents of class must be indented
}
```

##### Java

```java
/**
 * Documentation Block Here
 */
public class SampleClass
{
  // all contents of class must be indented
}
```

#####  Perl

```perl
# TODO
```

##### PHP

```php
/**
 * Documentation Block Here
 */
class SampleClass extends FooAbstract implements BarInterface
{
  // all contents of class must be indented
}

/**
 * Documentation Block Here
 */
class SampleClass
  extends FooAbstract
  implements BarInterface
{
  // all contents of class must be indented
}
```

##### Ruby

```ruby
#
# Documentation Block Here
#
class SampleClass

  # all contents of class must be indented

end
```

##### Python

```python
#
# Documentation Block Here
#
class SampleClass

  # all contents of class must be indented

```

<!-- --lang-ex-end -->

If the class implements multiple interfaces and the declaration exceeds the maximum line length, break after each comma
separating the interfaces, and indent the interface names such that they align.

```php
class SampleClass
    implements BarInterface,
               BazInterface
{
}
```

### Class Member Variables

Member variables must be named according to project's variable naming conventions. If no other convention is chosen,
naming will be done according with camel case naming convention (camelCaseNamingConvention).

If decided by developer team, private variable naming may contain the underscore "\_" character as a prefix
(i.e. \_camelCaseNamingConvention).

Any variables declared in a class must be listed at the top of the class, above the declaration of any methods.

The var construct is not permitted. Member variables always declare their visibility by using one of the `private`,
`protected`, or `public` modifiers.

Giving access to member variables directly by declaring them as public is permitted but discouraged in favor of accessor
methods (set & get).

## Functions and Methods

### Function and Method Declaration

*Functions* must be named according to project's function naming conventions. If no other convention is chosen, function
naming will be done according with serpent case naming convention (serpent_case_naming_convention).

If programming language allows and uses such directives, *methods* inside classes must always declare their visibility
by using one of the `private`, `protected`, or `public` modifiers.

If no other convention is chosen, *method* naming will be done according with camel case naming convention
(camelCaseNamingConvention).

If decided by developer team, private method naming may contain the underscore "\_" character as a prefix (i.e.
\_camelCaseNamingConvention).

As with classes, the brace should always be written on the line underneath the function name. Space between the function
name and the opening parenthesis for the arguments is not permitted.

In cases where the argument list exceeds the maximum line length, you may introduce line breaks. Additional arguments to
the function or method must be indented one additional level beyond the function or method declaration. A line break
should then occur before the closing argument parent, which should then be placed on the same line as the opening brace
of the function or method with one space separating the two, and at the same indentation level as the function or method
declaration.

**Functions in the global scope are strongly discouraged.**

The following is an example of an acceptable function declaration in a class:

<!-- --lang-ex -->

##### C/C++/C&#35;

###### C

```csharp
/**
 * Documentation Block Here
 */
void functionName()
{
  // all contents of method must be indented
}
```
```csharp
/**
* Documentation Block Here
*/
int functionName(int arg1, int arg2, int arg3,
  int arg4, int arg5, int arg6
) {
  // all contents of method must be indented
}
```
```csharp
/**
* Documentation Block Here
*/
string functionName(
  string arg1,
  ClassType arg2,
  SecondClassType arg3,
  int arg4,
  int arg5 = ONE_CONST_VALUE
) {
  // all contents of method must be indented
}
```

###### C++

```csharp
/**
 * Documentation Block Here
 */
class ClassName
{
  public:
    /**
     * Documentation Block Here
     */
    void functionName()
    {
      // all contents of method must be indented
    }
}
```
```csharp
/**
 * Documentation Block Here
 */
class ClassName
{
  public :
    /**
    * Documentation Block Here
    */
    int functionName(int arg1, int arg2, int arg3,
      int arg4, int arg5, int arg6
    ) {
      // all contents of method must be indented
    }
}
```
```csharp
/**
 * Documentation Block Here
 */
class ClassName
{
  public:
    /**
    * Documentation Block Here
    */
    string functionName(
      string arg1,
      ClassType arg2,
      SecondClassType arg3,
      int arg4,
      int arg5 = ONE_CONST_VALUE
    ) {
      // all contents of method must be indented
    }
}
```

###### C&#35;

```csharp
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  public void functionName()
  {
    // all contents of method must be indented
  }
}
```
```csharp
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  public int functionName(int arg1, int arg2, int arg3,
    int arg4, int arg5, int arg6
  ) {
    // all contents of method must be indented
  }
}
```
```csharp
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  public String functionName(
    String arg1,
    ClassType arg2,
    SecondClassType arg3,
    int arg4,
    int arg5 = ClassName.ONE_CONST_VALUE
  ) {
    // all contents of method must be indented
  }
}
```

##### ColdFusion

###### CFML

```xml
<!---
  Documentation Block Here
--->
<cfcomponent displayName="ComponentName" output="no">
  <!---
    Documentation Block Here
   --->
  <cffunction name="functionName" access="public" displayName="functionname" output="no">
    <!--- all contents of method must be indented --->
  </cffunction>
<cfcomponent>
```
```xml
<!---
  Documentation Block Here
--->
<cfcomponent displayName="ComponentName" output="no">
  <!---
    Documentation Block Here
   --->
  <cffunction name="functionName" access="public" displayName="functionname" output="no">
    <cfargument name="arg1" type="string" required="true" />
    <cfargument name="arg2" type="org.company.project.package.ComponentType" required="true" />
    <cfargument name="arg3" type="org.company.project.package.SecondComponenType" required="true" />
    <cfargument name="arg4" type="numeric" required="true" />
    <cfargument name="arg5" type="numeric" required="false" default="org.company.project.package.ComponentName.ONE_CONST_VALUE" />
    <!--- all contents of method must be indented --->
  </cffunction>
<cfcomponent>
```

###### CFScript

```javascript
/**
 * Documentation Block Here
 */
component displayName='ClassName' output='no'
{
  /**
   * Documentation Block Here
   */
  public string function functionName()
  {
    // all contents of method must be indented
  }
}
```
```javascript
/**
 * Documentation Block Here
 */
component displayName='ClassName' output='no'
{
  /**
   * Documentation Block Here
   */
  public string function functionName(numeric arg1, numeric arg2, numeric arg3,
    numeric arg4, numeric arg5, numeric arg6
  ) {
    // all contents of method must be indented
  }
}
```
```javascript
/**
 * Documentation Block Here
 */
component displayName='ClassName' output='no'
{
  /**
   * Documentation Block Here
   */
  public string function functionName(
    required string arg1,
    required org.company.project.package.ComponentType arg2,
    required org.company.project.package.SecondComponentType arg3,
    required numeric arg4,
    numeric arg5 = ClassName.ONE_CONST_VALUE
  ) {
    // all contents of method must be indented
  }
}
```

#####  Dart

```dart
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  void functionName()
  {
    // all contents of method must be indented
  }
}
```
```dart
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  int functionName(int arg1, int arg2, int arg3,
    int arg4, int arg5, int arg6
  ) {
    // all contents of method must be indented
  }
}
```
```dart
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  String functionName(
    String arg1,
    ClassType arg2,
    SecondClassType arg3,
    int arg4,
    arg5 = ClassName.ONE_CONST_VALUE
  ) {
    // all contents of method must be indented
  }
}
```

##### JavaScript

###### ECMAScript5 and lower

```javascript
/**
 * Documentation Block Here
 */
org.company.project.package.ClassName = function()
{
  // all contents of method must be indented
}

/**
 * Documentation Block Here
 */
org.company.project.package.ClassName.prototype.functionName = function()
{
  // all contents of method must be indented
}
```
```javascript
/**
 * Documentation Block Here
 */
org.company.project.package.ClassName = function()
{
  // all contents of method must be indented
}

/**
 * Documentation Block Here
 */
org.company.project.package.ClassName.prototype.functionName(arg1, arg2, arg3,
  arg4, arg5, arg6)
{
  // all contents of method must be indented
}
```

###### ECMAScript6

```javascript
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  functionName()
  {
    // all contents of method must be indented
  }
}
```
```javascript
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  functionName(arg1, arg2, arg3,
    arg4, arg5 = ClassName.ONE_CONST_VALUE
  ) {
    // all contents of method must be indented
  }
}
```

###### CoffeeScript

```coffeescript
#
# Documentation Block Here
#
class ClassName

  #
  # Documentation Block Here
  #
  functionName: ->
    # all contents of method must be indented
```
```coffeescript
#
# Documentation Block Here
#
class ClassName

  #
  # Documentation Block Here
  #
  functionName: (arg1, arg2, arg3, arg4, arg5 = @ONE_CONST_VALUE) ->
    # all contents of method must be indented
```

<!-- ###### PureScript

```purescript
// TODO
``` -->

###### TypeScript

```typescript
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  void functionName()
  {
    // all contents of method must be indented
  }
}
```
```typescript
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  int functionName(int : arg1, int : arg2, int : arg3,
    int : arg4, int : arg5, int : arg6
  ) {
    // all contents of method must be indented
  }
}
```
```typescript
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  String functionName(
    String : arg1,
    ClassType : arg2,
    SecondClassType : arg3,
    int : arg4,
    arg5 = ClassName.ONE_CONST_VALUE
  ) {
    // all contents of method must be indented
  }
}
```

##### Java

```java
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  public void functionName()
  {
    // all contents of method must be indented
  }
}
```
```java
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  public int functionName(int arg1, int arg2, int arg3,
    int arg4, int arg5, int arg6
  ) {
    // all contents of method must be indented
  }
}
```
```java
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  public String functionName(
    String arg1,
    ClassType arg2,
    SecondClassType arg3,
    int arg4,
    int arg5 = ClassName.ONE_CONST_VALUE
  ) {
    // all contents of method must be indented
  }
}
```

#####  Perl

```perl
# TODO
```

##### PHP

```php
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  public function functionName()
  {
    // all contents of method must be indented
  }
}
```
```php
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  public function functionName($arg1, $arg2, $arg3,
      $arg4, $arg5, $arg6
  ) {
    // all contents of method must be indented
  }
}
```
```php
/**
 * Documentation Block Here
 */
class ClassName
{
  /**
   * Documentation Block Here
   */
  public function functionName(
    string $arg1,
    ClassType $arg2,
    SecondClassType $arg3,
    int $arg4,
    $arg5 = ClassName::ONE_CONST_VALUE
  ) {
    // all contents of method must be indented
  }
}
```

##### Ruby

```ruby
#
# Documentation Block Here
#
class ClassName

  #
  # Documentation Block Here
  #
  def functionName()
    # all contents of method must be indented
  end
end
```
```ruby
#
# Documentation Block Here
#
class ClassName

  #
  # Documentation Block Here
  #
  def functionName(arg1, arg2, arg3,
    arg4, arg5 = ClassName.ONE_CONST_VALUE
  )
    # all contents of method must be indented
  end
end
```

##### Python

```python
#
# Documentation Block Here
#
class ClassName:

  #
  # Documentation Block Here
  #
  def functionName():
    # all contents of method must be indented
```
```python
#
# Documentation Block Here
#
class ClassName:

  #
  # Documentation Block Here
  #
  def functionName(arg1, arg2, arg3, arg4, arg5 = ClassName.ONE_CONST_VALUE):
    # all contents of method must be indented

```

<!-- --lang-ex-end -->


*Note*: It is recommended a function should not have more than five (5) arguments. If a function must have more than 5
arguments, it is recommended masking the arguments in an array.

*Note*: Pass-by-reference is the only parameter passing mechanism permitted in a method declaration.

<!-- --lang-ex -->

##### C/C++/C&#35;

###### C

```csharp
/**
 * Documentation Block Here
 */
void functionName(int *v)
{

}
```

###### C++

```csharp
/**
 * Documentation Block Here
 */
class ClassName
{
  public:
    /**
     * Documentation Block Here
     */
    void functionName(int *v)
    {
      // all contents of method must be indented
    }
}
```

###### C&#35;

```csharp
/**
 * Documentation Block Here
 */
class ClassName
{
  public void functionName(ref int v)
    {
      // all contents of method must be indented
    }
}
```

<!-- ##### ColdFusion

###### CFML

```xml
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
``` -->

##### PHP

```php
/**
 * Documentation Block Here
 */
class ClassName
{
    /**
     * Documentation Block Here
     */
    public function methodName(&$baz)
    {}
}
```

<!-- ##### Ruby

```ruby
// code here
```-->

##### Python

```python
# code here
``` -->
<!-- --lang-ex-end -->


Call-time pass-by-reference is strictly prohibited.

The return value must not be enclosed in parentheses. This can hinder readability, in additional to breaking code if a
method is later changed to return by reference.

<!-- ```php
/**
 * Documentation Block Here
 */
class ClassName
{
    /**
     * WRONG
     */
    public function functionName()
    {
        return($this->bar);
    }

    /**
     * RIGHT
     */
    public function functionName()
    {
        return $this->bar;
    }
}
``` -->

### Function and Method Usage

Function arguments should be separated by a single trailing space after the comma delimiter. The following is an example
of an acceptable invocation of a function that takes three arguments:

```javascript
threeArguments(1, 2, 3);
```

Call-time pass-by-reference is strictly prohibited. See the function declarations section for the proper way to pass
function arguments by-reference.

In passing arrays as arguments to a function, the function call may include the "array" hint and may be split into
multiple lines to improve readability. In such cases, the normal guidelines for writing arrays still apply:

<!-- --lang-ex -->

<!-- ##### C/C++/C&#35;

###### C

```c
threeArguments(array(1, 2, 3), 2, 3);
```
```c
threeArguments(1, 2, 3,
  a, b, c,
  56.44, d, 500
  2, 3);
```

###### C++

```cpp
threeArguments(array(1, 2, 3), 2, 3);
```
```cpp
threeArguments(1, 2, 3,
  a, b, c,
  56.44, d, 500
  2, 3);
```

###### C&#35;

```csharp
threeArguments(array(1, 2, 3), 2, 3);
```
```csharp
threeArguments(1, 2, 3,
  a, b, c,
  56.44, d, 500
  2, 3);
``` -->

##### ColdFusion

###### CFML

```xml
<cfset threeArguments(array(1, 2, 3), 2, 3) />
```
```xml
<cfset threeArguments(array(
    1, 2, 3, 'Zend', 'Studio',
    a, b, c,
    56.44, d, 500
  ), 2, 3) />
```
###### CFScript

```csharp
threeArguments(array(1, 2, 3), 2, 3);
```
```csharp
threeArguments(array(
    1, 2, 3, 'Zend', 'Studio',
    a, b, c,
    56.44, d, 500
  ), 2, 3);
```

#####  Dart

```javascript
threeArguments([1, 2, 3], 2, 3);
```
```javascript
threeArguments([
    1, 2, 3, 'Zend', 'Studio',
    a, b, c,
    56.44, d, 500
  ], 2, 3);
```

##### JavaScript

###### ECMAScript

```javascript
threeArguments([1, 2, 3], 2, 3);
```
```javascript
threeArguments([
    1, 2, 3, 'Zend', 'Studio',
    a, b, c,
    56.44, d, 500
  ], 2, 3);
```

###### CoffeeScript

```coffeescript
threeArguments([1, 2, 3], 2, 3)
```
```coffeescript
threeArguments([
    1, 2, 3, 'Zend', 'Studio',
    a, b, c,
    56.44, d, 500
  ], 2, 3)
```

<!-- ###### PureScript

```purescript
// code here
``` -->

###### TypeScript

```javascript
threeArguments([1, 2, 3], 2, 3);
```
```javascript
threeArguments([
    1, 2, 3, 'Zend', 'Studio',
    a, b, c,
    56.44, d, 500
  ], 2, 3);
```

<!-- ##### Java

```java
// code here
```

#####  Perl

```perl
# code here
``` -->

##### PHP

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

##### Ruby

```ruby
threeArguments([1, 2, 3], 2, 3)
```
```ruby
threeArguments([
    1, 2, 3, 'Zend', 'Studio',
    a, b, c,
    56.44, d, 500
  ], 2, 3)
```

##### Python

```python
threeArguments([1, 2, 3], 2, 3)
```
```python
threeArguments([
    1, 2, 3, 'Zend', 'Studio',
    a, b, c,
    56.44, d, 500
  ], 2, 3);
```

<!-- --lang-ex-end -->

If function/method usage exceeds recommended per line length, breaking the statement into multiple lines is recommended.
The initial argument must begin on the following line. If so, it should be padded at one indentation level greater than
the line containing the array declaration, and all successive lines should have the same indentation; the closing parent
should be on a line by itself at the same indentation level as the line containing the function/method declaration.

<!-- --lang-ex -->

##### C/C++/C&#35;

```csharp
threeLongArguments(
  someVeryLongArgument1,
  someVeryLongArgument2,
  someVeryLongArgument3
);
```

##### ColdFusion

###### CFML

```xml
<cfset threeLongArguments(
  someVeryLongArgument1,
  someVeryLongArgument2,
  someVeryLongArgument3
) />
```

###### CFScript

```javascript
threeLongArguments(
  someVeryLongArgument1,
  someVeryLongArgument2,
  someVeryLongArgument3
);
```

#####  Dart

```javascript
threeLongArguments(
  someVeryLongArgument1,
  someVeryLongArgument2,
  someVeryLongArgument3
);
```

##### JavaScript

###### ECMAScript
```javascript
threeLongArguments(
  someVeryLongArgument1,
  someVeryLongArgument2,
  someVeryLongArgument3
);
```

###### CoffeeScript
```coffeescript
threeLongArguments(
  someVeryLongArgument1,
  someVeryLongArgument2,
  someVeryLongArgument3
)
```

<!-- ###### PureScript

```purescript
// code here
``` -->

###### TypeScript

```javascript
threeLongArguments(
  someVeryLongArgument1,
  someVeryLongArgument2,
  someVeryLongArgument3
);
```

##### Java

```java
threeLongArguments(
  someVeryLongArgument1,
  someVeryLongArgument2,
  someVeryLongArgument3
);
```

#####  Perl

```perl
# code here
```

##### PHP

```php
threeLongArguments(
  $someVeryLongArgument1,
  $someVeryLongArgument2,
  $someVeryLongArgument3
);
```

##### Ruby

```ruby
threeLongArguments(
  someVeryLongArgument1,
  someVeryLongArgument2,
  someVeryLongArgument3
);
```

##### Python

```python
threeLongArguments(
  someVeryLongArgument1,
  someVeryLongArgument2,
  someVeryLongArgument3
);
```

<!-- --lang-ex-end -->

## Inline Documentation

### Documentation Format

All documentation blocks ("docblocks") must be compatible with the phpDocumentor format. Describing the phpDocumentor
format is beyond the scope of this document. For more information, visit:
[» http://phpdoc.org/](http://www.phpdoc.org/docs/latest/index.html)

All class files must contain a "file-level" docblock at the top of each file and a "class-level" docblock immediately
above each class. Examples of such docblocks can be found below.

### Files

Every file that contains PHP code must have a docblock at the top of the file that contains these phpDocumentor tags at
a minimum:

<!-- --lang-ex -->

##### /** Like

```java
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

##### <!--- Like

```xml
<!---
  Short description for file

  Long description for file (if any)...

  LICENSE: Some license information

  @copyright  Copyright (c) 2007-2015 Foo Company LTD S.R.L. (http://www.company.foo)
  @license    https://github.com/{ACCOUNT/GROUP}/{PROJECT-NAME}/blob/master/LICENSE License Type
  @version    $Id:$
  @link       https://github.com/{ACCOUNT/GROUP}/{PROJECT-NAME}
  @link       https://github.com/{ACCOUNT/GROUP}/{PROJECT-NAME}/issues
  @since      File available since Release 1.5.0
--->
```

##### \# Like

```python
#
# Short description for file
#
# Long description for file (if any)...
#
# LICENSE: Some license information
#
# @copyright  Copyright (c) 2007-2015 Foo Company LTD S.R.L. (http://www.company.foo)
# @license    https://github.com/{ACCOUNT/GROUP}/{PROJECT-NAME}/blob/master/LICENSE License Type
# @version    $Id:$
# @link       https://github.com/{ACCOUNT/GROUP}/{PROJECT-NAME}
# @link       https://github.com/{ACCOUNT/GROUP}/{PROJECT-NAME}/issues
# @since      File available since Release 1.5.0
#
```

<!-- --lang-ex-end -->

The @category annotation must be a project's name abbreviation (i.e. "Athem").

The @package annotation must be assigned, and should be equivalent to the component name of the class contained in the
file; typically, this will only have two segments, the @category prefix, and the component name.

The @subpackage annotation is optional. If provided, it should be the subcomponent name, minus the class prefix. In the
example above, the assumption is that the class in the file is either "Athem_Soap_Client", or uses that classname as part
of its prefix (i.e. Client).

### Classes

Every class must have a docblock that contains these phpDocumentor tags at a minimum:

<!-- --lang-ex -->

##### /** Like

```java
/**
 * Short description for class
 *
 * Long description for class (if any)...
 *
 * @category   athem
 * @package    athem.soap
 * @subpackage client
 * @version    Release: @package_version@
 * @since      Class available since Release 1.5.0
 * @deprecated Class deprecated in Release 2.0.0
 */
```

##### <!--- Like

```xml
<!---
  Short description for class

  Long description for class (if any)...

  @category   athem
  @package    athem.soap
  @subpackage client
  @version    Release: @package_version@
  @since      Class available since Release 1.5.0
  @deprecated Class deprecated in Release 2.0.0
--->
```

##### \# Like

```python
#
# Short description for class
#
# Long description for class (if any)...
#
# @category   athem
# @package    athem.soap
# @subpackage client
# @version    Release: @package_version@
# @since      Class available since Release 1.5.0
# @deprecated Class deprecated in Release 2.0.0
#
```
<!-- --lang-ex-end -->

The @category annotation must be a project's name abbreviation.

The @package annotation must be assigned, and should be equivalent to the component name of the class contained in the
file; typically, this will only have two segments, the @category prefix, and the component name.

The @subpackage annotation is optional. If provided, it should be the subcomponent name, minus the class prefix. In the
example above, the assumption is that the class in the file is either, or uses that classname as part of its prefix.

### Functions

Every function, including object methods, must have a docblock that contains at a minimum:

A description of the function

All of the arguments

All of the possible return values

It is not necessary to use the "@access" tag because the access level is already known from the "public", "private", or
"protected" modifier used to declare the function.

If a function or method may throw an exception, use @throws for all known exception classes:


<!-- --lang-ex -->

##### /** Like

```java
/**
 * @throws exceptionclass [description]
 */
```

##### <!--- Like

```xml
<!---
  @throws exceptionclass [description]
--->
```

##### \# Like

```python
#
# @throws exceptionclass [description]
#
```

<!-- --lang-ex-end -->

### In-line Comments

Single line comments should be made using the "//" syntax. Using "#" is not recommended, but not forbidden.

Multi line comments should always be wrapped between "/*" and "*/" characters.

If comment is of stronger importance, comments should follow the example bellow:

<!-- --lang-ex -->

##### /** Like

```java
/*************************************************
 * This is a comment
 *************************************************/
```

##### <!--- Like

```xml
<!------------------------------------------------
  This is a comment
------------------------------------------------->
```

##### \# Like

```python
###################################################
#  This is a comment
###################################################
```

<!-- --lang-ex-end -->

Such comments should not exceed more than 5 lines of text, underlining the most important part of documentation.

###Code Examples

Following the phpDocumentor documentation, code examples must have the following syntax:

<!-- --lang-ex -->

##### /** Like

```java
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
  // function code here
}
```

##### <!--- Like

```xml
<!---
  My function

  Here is an inline example:
  <code>
  <cfoutput var="#len('6')#" />
  </code>
  @example /path/to/example.cfc How to use this function
  @example anotherexample.cfc This example is in the "examples" subdirectory
--->
<cffunction name="functionName" access="public" displayName="functionname" output="no">
  <!--- function code here --->
</cffunction>
```

##### \# Like

```python
#
# My function
#
# Here is an inline example:
# <code>
# <?php
# print strlen('6');
# ?>
# </code>
# @example /path/to/example.php How to use this function
# @example anotherexample.inc This example is in the "examples" subdirectory
#
def mine():
  # function code here
```

<!-- --lang-ex-end -->
