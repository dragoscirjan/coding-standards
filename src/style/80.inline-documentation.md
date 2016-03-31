
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
