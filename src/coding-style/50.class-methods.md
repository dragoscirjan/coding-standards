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
