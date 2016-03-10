# File Formatting

## General
For files that contain **only code**, the closing tag is never permitted (when programming language allows it).
I.e. it is not required by [PHP](http://php.net/), and omitting it prevents the accidental injection of trailing
white space into the response.

<!-- --lang-ex -->

##### PHP

**Note** Important: Inclusion of arbitrary binary data as permitted by __HALT_COMPILER() is prohibited from 
[PHP](http://php.net/) files in the [Foo Company LTD](http://company.foo/) projects or files derived from them.
Use of this feature is only permitted for some installation scripts.

<!-- --lang-ex-end -->

### [Editorconfig](http://editorconfig.org/)

In order to standardize all IDE configurations, we recommend the EditorConfig standard.

What is EditorConfig?
EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs.
The EditorConfig project consists of a file format for defining coding styles and a collection of text editor
plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily
readable and they work nicely with version control systems.

Further more, the use of the the following [.editorconfig](../../../raw/master/.editorconfig) (as a base) is
mandatory in any project developed by [Foo Company LTD](http://company.foo/).

### Maximum Line Length
The target line length is 100 characters. That is to say, [Foo Company LTD](http://company.foo/) developers should
strive keep each line of their code under 100 characters where possible and practical. However, longer lines are
acceptable in some circumstances. The maximum length of any line of code is 140 characters.

*Thus said, please configure your IDEs accordingly.*
