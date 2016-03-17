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

##### CFML

While using CFScript (as a component of CFML), no matter the file type, whether code is embed within
HTML templates (e.g **cfml** file), or as a standalone class code (e.g. **cfc** file), code must always be
embed in the `<cfscript>` tag.

```cfml
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

**NOTE**: CoffeScript and TypeScript are separate programming languages meant to either extend or simplify ECMAScript usage.
Their use within HTML can only be used by adding 3rd party 'compilers' to transpile their content into ECMAScript code and run it.

**NOTE**: For [TypeScript](http://www.typescriptlang.org/)  please find a transpiler here in [typescript-compile](https://github.com/niutech/typescript-compile) project.

**NOTE**: For [CofeeScript](http://coffeescript.org/) please read more on their [github repository](https://github.com/jashkenas/coffeescript).

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

##### CSS

CSS has no code demarcation, unless CSS code is embed within HTML code, when CSS must be wrapped
by `<style>` tag.

##### HTML

HTML has no code demarcation, unless you consider `<!DOCTYPE>` as a code demarcation, or the fact
that all a standard HTML code must be placed within `<html>` tag.

<!-- --lang-ex-end -->

**NOTE**: Absence of Programming Language from the list above suggests it does not have coding demarcation.
