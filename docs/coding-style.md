#Coding Style

**Note**: This file in inspired from [Zend Framework's Coding Standards](http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html)

## PHP Code Demarcation
PHP code must always be delimited by the full-form, standard PHP tags:

```php
<?php
// your code here
?>
```
Short tags are never allowed. For files containing only PHP code, the closing tag must always be omitted (See General standards).

##Strings

###String Literals

When a string is literal (contains no variable substitutions), the apostrophe or "single quote" should always be used to demarcate the string:

```php
$a = 'Example String';
```

###String Literals Containing Apostrophes

When a literal string itself contains apostrophes, it is permitted to demarcate the string with quotation marks or "double quotes". This is especially useful for SQL statements:

```php
$sql = "SELECT `id`, `name` from `people` "
     . "WHERE `name`='Fred' OR `name`='Susan'";
```

This syntax is preferred over escaping apostrophes as it is much easier to read.

###Variable Substitution

Variable substitution is permitted using either of these forms:

```php
$greeting = "Hello $name, welcome back!";

$greeting = "Hello {$name}, welcome back!";
```
For consistency, this form is *not* permitted:

```php
$greeting = "Hello ${name}, welcome back!";
```
###String Concatenation

Strings must be concatenated using the "." operator. A space must always be added before and after the "." operator to improve readability:

```php
$company = 'Code' . ' ' . 'Styling';
```

When concatenating strings with the "." operator, it is encouraged to break the statement into multiple lines to improve readability. In these cases, each successive line should be padded with white space such that the "."; operator is aligned under the "=" operator:

```php
$sql = "SELECT `id`, `name` FROM `people` "
     . "WHERE `name` = 'Susan' "
     . "ORDER BY `name` ASC ";
```

##Arrays

###Numerically Indexed Arrays

Negative numbers are not permitted as indices.

An indexed array may start with any non-negative number, however all base indices besides 0 are discouraged.

When declaring indexed arrays with the Array function, a trailing space must be added after each comma delimiter to improve readability:

```php
$sampleArray = array(1, 2, 3, 'Zend', 'Studio');
```

It is permitted to declare multi-line indexed arrays using the "array" construct. The initial array item may begin on the following line. If so, it should be padded at one indentation level greater than the line containing the array declaration, and all successive lines should have the same indentation; the closing paren should be on a line by itself at the same indentation level as the line containing the array declaration:

```php
$sampleArray = array(
    1, 2, 3, 'Zend', 'Studio',
    $a, $b, $c,
    56.44, $d, 500,
);
```

When using this latter declaration, we encourage using a trailing comma for the last item in the array; this minimizes the impact of adding new items on successive lines, and helps to ensure no parse errors occur due to a missing comma.

###Associative Arrays

When declaring associative arrays with the Array construct, breaking the statement into multiple lines is mandatory. The initial array item must begin on the following line. If so, it should be padded at one indentation level greater than the line containing the array declaration, and all successive lines should have the same indentation; the closing parent should be on a line by itself at the same indentation level as the line containing the array declaration. For readability, the various "=>" assignment operators should be padded such that they align.

```php
$sampleArray = array(
    'firstKey'  => 'firstValue',
    'secondKey' => 'secondValue',
);
```

When using this latter declaration, we encourage using a trailing comma for the last item in the array; this minimizes the impact of adding new items on successive lines, and helps to ensure no parse errors occur due to a missing comma.

##Classes

###Class Declaration

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

###Class Member Variables

Member variables must be named according to project's variable naming conventions. If no other convention is chosen, naming will be done according with camel case naming convention (camelCaseNamingConvention).

If decided by developer team, private variable naming may contain the underscore "_" character as a prefix (i.e. _camelCaseNamingConvention).

Any variables declared in a class must be listed at the top of the class, above the declaration of any methods.

The var construct is not permitted. Member variables always declare their visibility by using one of the *private*, *protected*, or *public* modifiers.

Giving access to member variables directly by declaring them as public is permitted but discouraged in favor of accessor methods (set & get).

##Functions and Methods

###Function and Method Declaration

*Functions* must be named according to project's function naming conventions. If no other convention is chosen, function naming will be done according with sFunctionserpent case naming convention (serpent_case_naming_convention).

*Methods* inside classes must always declare their visibility by using one of the private, protected, or public modifiers.

If no other convention is chosen, method naming will be done according with camel case naming convention (camelCaseNamingConvention).

If decided by developer team, private method naming may contain the underscore "_" character as a prefix (i.e. _camelCaseNamingConvention).

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
        // all contents of function
        // must be indented four spaces
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
        // all contents of function
        // must be indented four spaces
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

###Function and Method Usage

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

##Control Statements & Loops

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

###If/Else/Elseif

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

Note: It is sometimes useful to write a case statement which falls through to the next case by not including a break or return within that case. To distinguish these cases from bugs, any case statement where break or return are omitted should contain a comment indicating that the break was intentionally omitted.

###Loops (for / foreach / while)

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

##Inline Documentation

###Documentation Format

All documentation blocks ("docblocks") must be compatible with the phpDocumentor format. Describing the phpDocumentor format is beyond the scope of this document. For more information, visit: [» http://phpdoc.org/](http://phpdoc.org/1)

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
 * @copyright  Copyright (c) 2007-2015 IT Media Connect S.R.L. (http://www.itmediaconnect.ro)
 * @license    https://github.com/ITMCdev/{PROJECT-NAME}/blob/master/LICENSE License Type
 * @version    $Id:$
 * @link       https://github.com/ITMCdev/{PROJECT-NAME}
 * @link       https://github.com/ITMCdev/{PROJECT-NAME}/issues
 * @since      File available since Release 1.5.0
 */
```

The @category annotation must have a value of "Itmc" or project's name abbreviation (i.e. "Athem").

The @package annotation must be assigned, and should be equivalent to the component name of the class contained in the file; typically, this will only have two segments, the "Itmc" prefix, and the component name.

The @subpackage annotation is optional. If provided, it should be the subcomponent name, minus the class prefix. In the example above, the assumption is that the class in the file is either "Itmc_Soap_Client", or uses that classname as part of its prefix.

### Classes

Every class must have a docblock that contains these phpDocumentor tags at a minimum:

```php
/**
 * Short description for class
 *
 * Long description for class (if any)...
 *
 * @category   Itmc
 * @package    Itmc_Soap
 * @subpackage Client
 * @version    Release: @package_version@
 * @since      Class available since Release 1.5.0
 * @deprecated Class deprecated in Release 2.0.0
 */
```

The @category annotation must have a value of "Itmc" or project's name abbreviation (i.e. "Athem").

The @package annotation must be assigned, and should be equivalent to the component name of the class contained in the file; typically, this will only have two segments, the "Itmc" prefix, and the component name.

The @subpackage annotation is optional. If provided, it should be the subcomponent name, minus the class prefix. In the example above, the assumption is that the class in the file is either "Itmc_Soap_Client", or uses that classname as part of its prefix.

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
