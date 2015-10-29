#Naming Conventions

**TODO**: 

##Classes

For project that were developed under PHP-5.2 and lower and were not refactored as PHP5.3+ project, we standardize on a class naming convention whereby the names of the classes directly map to the directories in which they are stored.

=========

The root level directory of Zend Framework's standard library is the "Zend/" directory, whereas the root level directory of Zend Framework's extras library is the "ZendX/" directory. All Zend Framework classes are stored hierarchically under these root directories..

Class names may only contain alphanumeric characters. Numbers are permitted in class names but are discouraged in most cases. Underscores are only permitted in place of the path separator; the filename "Zend/Db/Table.php" must map to the class name "Zend_Db_Table".

If a class name is comprised of more than one word, the first letter of each new word must be capitalized. Successive capitalized letters are not allowed, e.g. a class "Zend_PDF" is not allowed while "Zend_Pdf" is acceptable.

These conventions define a pseudo-namespace mechanism for Zend Framework. Zend Framework will adopt the PHP namespace feature when it becomes available and is feasible for our developers to use in their applications.

See the class names in the standard and extras libraries for examples of this classname convention.

Note: Important: Code that must be deployed alongside Zend Framework libraries but is not part of the standard or extras libraries (e.g. application code or libraries that are not distributed by Zend) must never start with "Zend_" or "ZendX_".

##Abstract Classes
In general, abstract classes follow the same conventions as classes, with one additional rule: abstract class names must end in the term, "Abstract", and that term must not be preceded by an underscore. As an example, Zend_Controller_Plugin_Abstract is considered an invalid name, but Zend_Controller_PluginAbstract or Zend_Controller_Plugin_PluginAbstract would be valid names.

Note: This naming convention is new with version 1.9.0 of Zend Framework. Classes that pre-date that version may not follow this rule, but will be renamed in the future in order to comply.
The rationale for the change is due to namespace usage. As we look towards Zend Framework 2.0 and usage of PHP 5.3, we will be using namespaces. The easiest way to automate conversion to namespaces is to simply convert underscores to the namespace separator -- but under the old naming conventions, this leaves the classname as simply "Abstract" or "Interface" -- both of which are reserved keywords in PHP. If we prepend the (sub)component name to the classname, we can avoid these issues.
To illustrate the situation, consider converting the class Zend_Controller_Request_Abstract to use namespaces:

namespace Zend\Controller\Request;

abstract class Abstract
{
    // ...
}
Clearly, this will not work. Under the new naming conventions, however, this would become:
namespace Zend\Controller\Request;

abstract class RequestAbstract
{
    // ...
}
We still retain the semantics and namespace separation, while omitting the keyword issues; simultaneously, it better describes the abstract class.

##Interfaces
In general, interfaces follow the same conventions as classes, with one additional rule: interface names may optionally end in the term, "Interface", but that term must not be preceded by an underscore. As an example, Zend_Controller_Plugin_Interface is considered an invalid name, but Zend_Controller_PluginInterface or Zend_Controller_Plugin_PluginInterface would be valid names.

While this rule is not required, it is strongly recommended, as it provides a good visual cue to developers as to which files contain interfaces rather than classes.

Note: This naming convention is new with version 1.9.0 of Zend Framework. Classes that pre-date that version may not follow this rule, but will be renamed in the future in order to comply. See the previous section for more information on the rationale for this change.

##Filenames
For all other files, only alphanumeric characters, underscores, and the dash character ("-") are permitted. Spaces are strictly prohibited.

Any file that contains PHP code should end with the extension ".php", with the notable exception of view scripts. The following examples show acceptable filenames for Zend Framework classes:

Zend/Db.php

Zend/Controller/Front.php

Zend/View/Helper/FormRadio.php
File names must map to class names as described above.

##Functions and Methods
Function names may only contain alphanumeric characters. Underscores are not permitted. Numbers are permitted in function names but are discouraged in most cases.

Function names must always start with a lowercase letter. When a function name consists of more than one word, the first letter of each new word must be capitalized. This is commonly called "camelCase" formatting.

Verbosity is generally encouraged. Function names should be as verbose as is practical to fully describe their purpose and behavior.

These are examples of acceptable names for functions:

filterInput()

getElementById()

widgetFactory()
For object-oriented programming, accessors for instance or static variables should always be prefixed with "get" or "set". In implementing design patterns, such as the singleton or factory patterns, the name of the method should contain the pattern name where practical to more thoroughly describe behavior.

For methods on objects that are declared with the "private" or "protected" modifier, the first character of the method name must be an underscore. This is the only acceptable application of an underscore in a method name. Methods declared "public" should never contain an underscore.

Functions in the global scope (a.k.a "floating functions") are permitted but discouraged in most cases. Consider wrapping these functions in a static class.

##Variables
Variable names may only contain alphanumeric characters. Underscores are not permitted. Numbers are permitted in variable names but are discouraged in most cases.

For instance variables that are declared with the "private" or "protected" modifier, the first character of the variable name must be a single underscore. This is the only acceptable application of an underscore in a variable name. Member variables declared "public" should never start with an underscore.

As with function names (see section 3.3) variable names must always start with a lowercase letter and follow the "camelCaps" capitalization convention.

Verbosity is generally encouraged. Variables should always be as verbose as practical to describe the data that the developer intends to store in them. Terse variable names such as "$i" and "$n" are discouraged for all but the smallest loop contexts. If a loop contains more than 20 lines of code, the index variables should have more descriptive names.

##Constants
Constants may contain both alphanumeric characters and underscores. Numbers are permitted in constant names.

All letters used in a constant name must be capitalized, while all words in a constant name must be separated by underscore characters.

For example, EMBED_SUPPRESS_EMBED_EXCEPTION is permitted but EMBED_SUPPRESSEMBEDEXCEPTION is not.

Constants must be defined as class members with the "const" modifier. Defining constants in the global scope with the "define" function is permitted but strongly discouraged.

<hr />
[&laquo; File Formating](file-formating.md) / [Coding Style &raquo;](coding-style.md)
