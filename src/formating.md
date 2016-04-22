# File Formatting

**Note**: This document is a draft and it will remain so. It is your duty as a developer to continuously
improve this document and your knowledge of this document.

## General

<!-- --lang-ex -->

##### PHP
For files that contain only PHP code, the closing tag (”?>”) is never permitted. It is not required 
by PHP, and omitting it´ prevents the accidental injection of trailing white space into the response.

**Note**: Important: Inclusion of arbitrary binary data as permitted by __HALT_COMPILER() is prohibited 
from PHP files in the Zend Framework project or files derived from them. Use of this feature is only 
permitted for some installation scripts.

<!-- --lang-ex-end -->

## Indentation

Indentation should consist of 4 spaces. Tabs are not allowed.

**Note**: This limits can be changed by project references.

# Maximum Line Length

The target line length is 100 characters. That is to say, Zend Framework developers should strive keep 
each line of their code under 80 characters where possible and practical. However, longer lines are 
acceptable in some circumstances. The maximum length of any line of code is 140 characters.

**Note**: This limits can be changed by project references.

# Line Termination

Line termination follows the Unix text file convention. Lines must end with a single linefeed (LF) 
character. Linefeed characters are represented as ordinal 10, or hexadecimal 0x0A.

**Note**: Do not use carriage returns (CR) as is the convention in Apple OS’s (0x0D) or the carriage 
return - linefeed combination (CRLF) as is standard for the Windows OS (0x0D, 0x0A).

## General
For files that contain **only code**, the closing tag is never permitted (when programming language 
allows it). I.e. it is not required by [PHP](http://php.net/), and omitting it prevents the accidental 
injection of trailing white space into the response.

### [Editorconfig](http://editorconfig.org/)

In order to standardize all IDE configurations, we recommend the EditorConfig standard.

What is EditorConfig?
EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs.
The EditorConfig project consists of a file format for defining coding styles and a collection of text editor
plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily
readable and they work nicely with version control systems.

Further more, the use of the the following [.editorconfig](/.editorconfig) (as a base) is
mandatory in any project developed by [Foo Company LTD](http://company.foo/).
