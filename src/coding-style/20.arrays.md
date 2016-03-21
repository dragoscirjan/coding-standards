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
