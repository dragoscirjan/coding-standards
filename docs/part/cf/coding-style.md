#Coding Style

**Note**: This file in inspired from [Zend Framework's Coding Standards](http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html)

* @TODO: http://www.scribd.com/doc/17091861/Cold-Fusion-Coding-Standards
* @TODO: http://www.slideshare.net/ddspringle1/coldfusion-coding-guidelines
* @TODO: http://wiki.coldbox.org/wiki/DevelopmentBestPractices.cfm
* @TODO: http://dnr.alaska.gov/webmasters/ColdfusionStandards2010.pdf
* @TODO: http://web.archive.org/web/20090330013324/http://livedocs.adobe.com/wtg/public/coding_standards/contents.html


## CFScript Code Demarcation
CFSript code must always be delimited by the full-form, standard `<cfscript>` tags:

```cfml
<cfscript>
// your code here
</cfscript>
```

##Strings

###String Literals

When a string is literal (contains no variable substitutions), the apostrophe or "single quote" should always be used to demarcate the string:

```cfml
<!--- CFML --->
<cfset var a = 'Example String' />

<!--- CFScript --->
<cfscript>
var a = 'Example String';
</cfscript>
```

###String Literals Containing Apostrophes

When a literal string itself contains apostrophes, it is permitted to demarcate the string with quotation marks or "double quotes". This is especially useful for SQL statements:

```cfml
<cfquery>
    SELECT `id`, `name` from `people`
    WHERE `name`='Fred' OR `name`='Susan'
</cfquery>
```

This syntax is preferred over escaping apostrophes as it is much easier to read.

###Variable Substitution & String Concatenation

ColdFusion does not have an in-string variable substitution syntax, everything being done using the [Replace](http://cfdocs.org/replace) functions, or using concatenation syntax.

```cfml
<!--- CFML --->
<cfset var greeting = replace("Hello {name}, welcome back!", '{name}', name) />

<!--- CFScript --->
<cfscript>
var greeting = replace("Hello {name}, welcome back!", '{name}', name)
</cfscript>
```

or

```cfml
<!--- CFML --->
<cfset var greeting = "Hello " & name & ", welcome back!" />

<!--- CFScript --->
<cfscript>
var greeting = "Hello " & name & ", welcome back!";
</cfscript>
```

Strings must be concatenated using the "&" operator. A space must always be added before and after the "&" operator to improve readability.

When concatenating strings with the "&" operator, it is encouraged to break the statement into multiple lines to improve readability. In these cases, each successive line should be padded with white space such that the "&"; operator is aligned under the "=" operator:

```cfml
<!--- CFML --->
<cfset var sqlcmd = "SELECT `id`, `name` FROM `people` "
                  & "WHERE `name` = 'Susan' "
                  & "ORDER BY `name` ASC " />

<!--- CFScript --->
<cfscript>
var sqlcmd = "SELECT `id`, `name` FROM `people` "
           & "WHERE `name` = 'Susan' "
           & "ORDER BY `name` ASC ";
</cfscript>
```

##Arrays

###Numerically Indexed Arrays

Negative numbers are not permitted as indices. Also **zero** is not permitted as indice. An indexed array may start with 1.

When declaring arrays with the, a trailing space must be added after each comma delimiter to improve readability:

```cfml
<!--- CFML --->
<cfset var sampleArray = (1, 2, 3, 'Zend', 'Studio') />

<!--- CFScript --->
<cfscript>
var sampleArray = (1, 2, 3, 'Zend', 'Studio');
</cfscript>
```

It is permitted to declare multi-line indexed arrays using the "array" construct. The initial array item may begin on the following line. If so, it should be padded at one indentation level greater than the line containing the array declaration, and all successive lines should have the same indentation; the closing paren should be on a line by itself at the same indentation level as the line containing the array declaration:

```cfml
<!--- CFML --->
<cfset var sampleArray = (
    1, 2, 3, 'Zend', 'Studio',
    a, b, c,
    56.44, $d, 500
) />

<!--- CFScript --->
<cfscript>
var sampleArray = (
    1, 2, 3, 'Zend', 'Studio',
    a, b, c,
    56.44, d, 500
);
</cfscript>
```

###Associative Arrays

Associative arrays are not present in Cold Fusion.

##Components

###Components Declaration

In ColdFusion components (classes) are taking their naming from the file naming, so

Classes must be named according to project's naming conventions (decided by developing team).

For CFScript case, the brace should always be written on the line underneath the class name.

Every class must have a documentation block that simila with Java/PHP documentation blocks. We sugest [PHPDocumentor](http://www.phpdoc.org/) standard.

All code in a class must be indented (see [Overview](overview.md)).

Only one class is permitted in each **cfc** file.

Placing additional code in class files is **not** permitted and discouraged.

The following is an example of an acceptable class declaration:

```cfml
<!--- CFML --->
<!---
 Documentation Block Here
--->
<cfcomponent displayname="Customer" hint="ColdFusion Component for Customers">
    body contents
</cfcomponent>

<!--- CFScript --->
<cfscript>
/**
 * Documentation Block Here
 */
component displayname="Customer" hint="ColdFusion Component for Customers"
{
     body contents
}
 </cfscript>
```

Components that extend other components or which implement interfaces should declare their dependencies on the same line when possible.

```cfml
<!--- CFML --->
<!--- i.e CartInterface.cfc --->
<cfinterface>
    <cffunction name=add returntype = "numeric" ...>
        <cfargument name="product" type="struct" required="yes">
    </cffunction>
</cfinterface>
<!--- i.e Cart.cfc --->
<cfcomponent implements="CartInteface">
    body contents
</cfcomponent>

<!--- CFScript --->
<cfscript>
/* i.e CartInterface.cfc */
interface
{
    public function add(struct product);
}
/* i.e Cart.cfc */
component implements="CartInterface"
{
    body contents
}
 </cfscript>
```

If as a result of such declarations, the line length exceeds the maximum line length, break the line before the "extends" and/or "implements" keywords, and pad those lines by one indentation level.

```cfml
<!--- CFML --->
<cfcomponent displayName="Cart"
    extends="lib.com.shop.CartAbstract"
    implements="lib.com.shop.CartInterface">

    body contents
</cfcomponent>

<!--- CFScript --->
<cfscript>
component displayName="Cart"
    extends="lib.com.shop.CartAbstract"
    implements="lib.com.shop.CartInterface"
{
    body contents
}
</cfscript>
```

###Component Member Variables @TODO

Member variables must be named according to project's variable naming conventions. If no other convention is chosen, naming will be done according with camel case naming convention (camelCaseNamingConvention).

If decided by developer team, private variable naming may contain the underscore "\_" character as a prefix (i.e. \_camelCaseNamingConvention).

Any variables declared in a class must be listed at the top of the class, above the declaration of any methods.

The var construct is not permitted. Member variables always declare their visibility by using one of the *private*, *protected*, or *public* modifiers.

Giving access to member variables directly by declaring them as public is permitted but discouraged in favor of accessor methods (set & get).

##Functions and Methods

###Function and Method Declaration

*Functions* must be named according to project's function naming conventions. If no other convention is chosen, function naming will be done according with serpent case naming convention (serpent_case_naming_convention).

*Methods* inside classes must always declare their visibility by using one of the private, protected, or public modifiers.

If no other convention is chosen, method naming will be done according with camel case naming convention (camelCaseNamingConvention).

If decided by developer team, private method naming may contain the underscore "\_" character as a prefix (i.e. \_camelCaseNamingConvention).

As with classes, the brace should always be written on the line underneath the function name. Space between the function name and the opening parenthesis for the arguments is not permitted.

**Functions in the global scope are strongly discouraged.**

The following is an example of an acceptable function declaration in a class:

```cfml
<!--- CFML --->
<!---
 Documentation Block Here
--->
<cfcomponent displayname="Customer" hint="ColdFusion Component for Customers">
    <cffunction name="bar" return="int">
        <!--- all contents of function must be indented --->
    </cffunction>
</cfcomponent>

<!--- CFScript --->
<cfscript>
/**
 * Documentation Block Here
 */
component displayname="Customer" hint="ColdFusion Component for Customers"
{
     public function bar()
     {
         // all contents of function must be
         // indented one additional level
     }
}
 </cfscript>
```

For CFML arcuments will always be indented with an additional level beyond the function declaration. If argument declaration exceeds the maximum line length, the argument declaration can be split to multiple lines, with the condition that the additional lines will be indented one more level beyond the argument declaration.

For CFScript, in cases where the argument list exceeds the maximum line length, you may introduce line breaks. Additional arguments to the function or method must be indented one additional level beyond the function or method declaration. A line break should then occur before the closing argument parent, which should then be placed on the same line as the opening brace of the function or method with one space separating the two, and at the same indentation level as the function or method declaration. The following is an example of one such situation:


```cfml
<!--- CFML --->
<!---
 Documentation Block Here
--->
<cfcomponent displayname="Customer" hint="ColdFusion Component for Customers">
    <cffunction name="bar" return="int">
        <cfargument name="arg1" type="int" />
        <cfargument name="arg2" type="int" />
        <cfargument name="arg3" type="int" />
        <cfargument name="arg4" type="int" default="0" />
        <cfargument name="arg5" type="int" default="0" />
        <cfargument name="arg6" type="int" default="this is a test"
            hint="this is a hint for your argument" />

        <!--- all contents of function must be indented one additional level --->
    </cffunction>
</cfcomponent>

<!--- CFScript --->
<cfscript>
/**
 * Documentation Block Here
 */
component displayname="Customer" hint="ColdFusion Component for Customers"
{
     public function bar(int arg1, int arg2, int arg3,
        int arg4 = 0, int arg5 = 0, string arg6 = "this i a test"
     ) {
         // all contents of function must be
         // indented one additional level
     }
}
 </cfscript>
```

*Note*: It is recommended a function should not have more than five (5) arguments. If a function must have more than 5 arguments, it is recommended masking the arguments in an addition object.

<!--*Note*: Pass-by-reference is the only parameter passing mechanism permitted in a method declaration.

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
``` -->

###Function and Method Usage

Function arguments should be separated by a single trailing space after the comma delimiter. The following is an example of an acceptable invocation of a function that takes three arguments:

```cfml
<!--- CFML --->
<cfset threeArguments(1, 2, 3); />

<!--- CFScript --->
<cfscript>
threeArguments(1, 2, 3);
</cfscript>

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

Every file that contains CMLF/CFScript code must have a docblock at the top of the file that contains these phpDocumentor tags at a minimum (we are aware phpDocumentor will not function for ColdFusion, yet we consider it a point of reference):

```cfml
<!---
 Short description for file

 Long description for file (if any)...

 LICENSE: Some license information

 @copyright  Copyright (c) 2007-2015 IT Media Connect S.R.L. (http://www.itmediaconnect.ro)
 @license    https://github.com/ITMCdev/{PROJECT-NAME}/blob/master/LICENSE License Type
 @version    $Id:$
 @link       https://github.com/ITMCdev/{PROJECT-NAME}
 @link       https://github.com/ITMCdev/{PROJECT-NAME}/issues
 @since      File available since Release 1.5.0
--->
```

The @category annotation must have a value of "Itmc" or project's name abbreviation (i.e. "Athem").

The @package annotation must be assigned, and should be equivalent to the component name of the class contained in the file; typically, this will only have two segments, the "Itmc" prefix, and the component name.

The @subpackage annotation is optional. If provided, it should be the subcomponent name, minus the class prefix. In the example above, the assumption is that the class in the file is either "Itmc_Soap_Client", or uses that classname as part of its prefix.

### Classes

Every class must have a docblock that contains these phpDocumentor tags at a minimum:

```cfml
<!---
 Short description for class

 Long description for class (if any)...

 @category   Itmc
 @package    Itmc_Soap
 @subpackage Client
 @version    Release: @package_version@
 @since      Class available since Release 1.5.0
 @deprecated Class deprecated in Release 2.0.0
--->
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

<hr />
[&laquo; Naming Conventions](naming-conventions.md) / [Recommended Tools &raquo;](recommended-tools.md)
