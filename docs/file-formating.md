# File Formatting

## General
For files that contain only [PHP](http://php.net/) code, the closing tag ("?>") is never permitted. It is not required by [PHP](http://php.net/), and omitting it prevents the accidental injection of trailing white space into the response.

**Note**: Important: Inclusion of arbitrary binary data as permitted by __HALT_COMPILER() is prohibited from [PHP](http://php.net/) files in the [IT Media Connect](http://itmediaconnect.ro/) projects or files derived from them. Use of this feature is only permitted for some installation scripts.

## Indentation

Indentation should consist of 4 spaces. Tabs are not allowed.

### Maximum Line Length
The target line length is 80 characters. That is to say, [IT Media Connect](http://itmediaconnect.ro/) developers should strive keep each line of their code under 80 characters where possible and practical. However, longer lines are acceptable in some circumstances. The maximum length of any line of [PHP](http://php.net/) code is 120 characters.

### Line Termination
Line termination follows the Unix text file convention. Lines must end with a single linefeed (LF) character. Linefeed characters are represented as ordinal 10, or hexadecimal 0x0A.

**Note**: Do not use carriage returns (CR) as is the convention in Apple OS's (0x0D) or the carriage return - linefeed combination (CRLF) as is standard for the Windows OS (0x0D, 0x0A).

*Thus said, please configure your IDEs accordingly.*
