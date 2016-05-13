# Coding Standards (HTML/CSS)

> **Note**: This document is a draft and it will remain so. It is your duty as a developer to continuously
improve this document and update your knowledge of this document.

## Overview
Strictly adhere to the agreed-upon style guide listed below. The general principle is to develop DRY (Don't Repeat
Yourself) CSS (LESS, SCSS/SASS), built around reusable components and patterns.

<!-- * All code should look like a single person has typed it.
* Don't try to prematurely optimize your code; keep it readable and understandable.
* When building a component, always start by looking at existing patterns.
* Break down complex components until they are made up of simple components.
* Save your complex components as patterns so they can be easily reused.
* Build your component as a mixin which outputs _optional_ css. -->

## Specificity

On large code bases, it's preferable and a ton more maintainable if the specificity of selectors are all as equal and
as low as humanly possible.

In all three languages, the use of classes for styling is encouraged, while the use of IDs is completely prohibited. There is literally no point in using IDs in stylesheets.

<!-- --lang-ex -->

##### CSS

```css
/* DO */
.Component {
    ...
}

/* DON'T */
#Component {
    ...
}
```

##### LESS

```less
// DO
.Component {
    ...
}

// DON'T
#Component {
    ...
}
```

##### SCSS

```css
/* DO */
.Component {
    ...
}

/* DON'T */
#Component {
    ...
}
```
<!-- --lang-ex-end -->

Style the base elements (such as typography elements). **Do not** reference or style descendent elements in your class
selectors.

<!-- --lang-ex -->

##### CSS

```css
/* DO */
h1 {
    ...
}

/* DON'T */
.Component h1 {
    ...
}
```

##### LESS

```less
// DO
h1 {
    ...
}

// DON'T
.Component {
    h1 {
        ...
    }
}
```

##### SCSS

```css
/* DO */
h1 {
    ...
}

/* DON'T */
.Component {
    h1 {
        ...
    }
}
```

<!-- --lang-ex-end -->


Use of overqualified selectors in your CSS is not recommended. Do not prepend a class or ID with an element.

```css
/* DON'T */
div.container {
    ...
}
```

#### Performance

Overly specific selectors can also cause performance issues. Consider:

<!-- --lang-ex -->

##### CSS

```css
ul.UserList li span a:hover {
    color: red;
}
```

##### LESS

```less
ul.UserList {
    li {
        span {
            a:hover {
                color: red;
            }
        }
    }
}
```

##### SCSS

```less
ul.UserList {
    li {
        span {
            a:hover {
                color: red;
            }
        }
    }
}
```

<!-- --lang-ex-end -->

Selectors are resolved right to left, exiting when it has been detected the selector does not match. This requires a lot
of DOM walking and for large documents can cause a significant increase in the layout time. For further reading checkout:
https://developers.google.com/speed/docs/best-practices/rendering#UseEfficientCSSSelectors

If we know we want to give all `a` elements inside the `.user-list` red on hover we can simplify this style to:

<!-- --lang-ex -->

##### CSS

```css
.UserList-link:hover {
    color: red;
}
```

##### LESS

```less
.UserList-link:hover {
    color: red;
}
```

##### SCSS

```less
.UserList-link:hover {
    color: red;
}
```

<!-- --lang-ex-end -->

#### General Rules

Your selectors are fundamental to writing good CSS. To very briefly sum up the above sections:

* **Select what you want explicitly**, rather than relying on circumstance or coincidence. Good Selector Intent will rein in the reach and leak of your styles.
* **Write selectors for reusability**, so that you can work more efficiently and reduce waste and repetition.
* **Do not nest selectors unnecessarily**, because this will increase specificity and affect where else you can use your styles.
* **Do not qualify selectors unnecessarily**, as this will impact the number of different elements you can apply styles to.
* Keep selectors as short as possible, in order to keep specificity down and performance up.

Focusing on these points will keep your selectors a lot more sane and easy to work with on changing and long-running projects.

## Formatting

Please reffer to the .editorconfig file from the main [Formating](formatting.md) section.

#### Commenting

Separation of code into logical sections using standard comment blocks is strongly recommended.

Annotation of code inside a comment block, leaving a reference # next to the line is also recommended.

<!-- --lang-ex -->

##### CSS

```css
/* ==========================================================================
   Section comment block
   ========================================================================== */

/* Sub-section comment block
   ========================================================================== */

/**
 * Short description using Doxygen-style comment format
 *
 * Purpose: This will describe when this component should be used. This comment
 * block is 80 chars long
 *
 * 1. Mark lines of code with numbers which are explained here.
 * This keeps your code clean, while also allowing detailed comments.
 */

/* Basic comment */

.Component {
    ... /* 1 */
}

```

##### LESS

```less
// =============================================================================
// Section comment block
// =============================================================================

// Comment Block / Sub-section
// ==========================================================================

// Short description using Doxygen-style comment format
//
// Purpose: This will describe when this component should be used. This comment
// block is 80 chars long
//
// 1. Mark lines of code with numbers which are explained here.
// This keeps your code clean, while also allowing detailed comments.

// Basic comment

.Component {
    ... // 1
}

```

##### SCSS

```less
// =============================================================================
// Section comment block
// =============================================================================

// Comment Block / Sub-section
// ==========================================================================

// Short description using Doxygen-style comment format
//
// Purpose: This will describe when this component should be used. This comment
// block is 80 chars long
//
// 1. Mark lines of code with numbers which are explained here.
// This keeps your code clean, while also allowing detailed comments.

// Basic comment

.Component {
    ... // 1
}

```

<!-- --lang-ex-end -->

#### Spacing

Multiple CSS rules, having the same styles, should be comma separated but live on new lines.

Braces should start one space from the last defined rule, and end on a new line after the last style has been defined.

Style lines should always end with semi-colons, while a space must also always be added after ":". A space should also
be included after each comma in comma-separated property or function values.

CSS blocks should be separated by a single clear line, while two blank lines should be added between sections and one
between sub-sections.

```css
/* DO */
.Component,
.OtherComponent {
    padding: 0;
    margin: 0;
    font-family: "Helvetica", sans-serif;
}


.NewSection {
    ...
}

.NewSection-edit {
    ...
}

/* DON'T */
.Component, .Component-edit{
    padding:0; margin:0;
    font-family: "Helvetica",sans-serif}
.NewSection {
    ...
}
.NewSection-edit {
    ...
}
```

#### Quotes

Use of double quotes, when available, is mandatory. Quote attribute values in selectors.

```css
/* DO */
input[type="checkbox"] {
    background-image: url("/img/you.jpg");
    font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial;
}

/* DON'T */
input[type=checkbox] {
    background-image: url(/img/you.jpg);
    font-family: Helvetica Neue Light, Helvetica Neue, Helvetica, Arial;
}
```

#### When declaring values

it is recommended to

* Use lower-case and shorthand hex values
* Use unit-less line-height values
* Where allowed, avoid specifying units for zero values
* Never specify the height property unless it's specifically needed (`min-height` is cool)
* Never use `!important` (Utility classes are an exception but still should be avoided)
* Try to only style the property you are explicitly concerned with to reduce over zealously resetting something you
might want to inherit
  * `background-color: #333` over `background: #333`
  * `margin-top: 10px` over `margin: 10px 0 0`
  * Use shorthand if you can, be sensible

```css
/* DO */
.Component {
    background-color: #ccc;
    color: #aaa;
    left: 0;
    line-height: 1.25;
    min-height: 400px;
    padding: 0 20px;
    top: 0;
}

/* DON'T */
.Component {
    background: #ccc;
    color: #AAAAAA;
    left: 0px;
    line-height: 24px;
    height: 400px !important; //jerk #yolo FUUUUUU
    padding: 0px 20px 0px 20px;
    top: 0px;
}
```


#### Declaration order

There are a millions opinions and thoughts on logical ordering and grouping. Don't force someone to learn your opinion,
ordering doesn't matter, consistency does.
* @extend _(for SCSS)_, :extend _(for LESS)_
* @include _(for SCSS)_, .mixin-name() _(for LESS)_
* Declarations:
    * Alphabetical order
    * Cluster related properties (e.g. positioning and box-model) together


<!-- --lang-ex -->

##### CSS

```css
/*** ALPHABETICAL ***/
.Component {
    color: #aaa;
    left: 0;
    line-height: 1.25;
    min-height: 400px;
    padding: 0 20px;
    top: 0;
    width: 150px;
}

/*** CLUSTER ***/
.Component {
    /* Positioning */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    /* Box-model */
    display: block;
    float: right;
    width: 100px;
    height: 100px;

    /* Typography */
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: #333;
    text-align: center;

    /* Visual */
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 3px;

    /* Misc */
    opacity: 1;
}
```

##### LESS

```less
//** ALPHABETICAL ***//
.Component {
    &:extend(.OtherComponent);
    .mixin();
    color: #aaa;
    left: 0;
    line-height: 1.25;
    min-height: 400px;
    padding: 0 20px;
    top: 0;
    width: 150px;
}

//*** CLUSTER ***//
.Component {
    &:extend(.OtherComponent);
    .mixin();

    // Positioning
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    // Box-model
    display: block;
    float: right;
    width: 100px;
    height: 100px;

    // Typography
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: #333;
    text-align: center;

    // Visual
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 3px;

    // Misc
    opacity: 1;
}
```

##### SCSS

```css
//*** ALPHABETICAL ***//
.Component {
    @extend %a-placeholder;
    @include silly-links;
    color: #aaa;
    left: 0;
    line-height: 1.25;
    min-height: 400px;
    padding: 0 20px;
    top: 0;
    width: 150px;
}

//*** CLUSTER ***//
.Component {
    @extend %a-placeholder;
    @include silly-links;

    // Positioning
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    // Box-model
    display: block;
    float: right;
    width: 100px;
    height: 100px;

    // Typography
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: #333;
    text-align: center;

    // Visual
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 3px;

    // Misc
    opacity: 1;
}
```

<!-- --lang-ex-end -->

## Pseudo Elements and Classes
Pseudo elements and classes are very different things, as is the syntax used to declare them. Declare _**pseudo-
classes**_ with a single colon. Declare _**pseudo-elements**_ with a double colon.

<!-- --lang-ex -->

##### CSS

```css
/* DO */
.Component:focus {
    ...
}

.Component:hover {
    ...
}

.Component::before {
    ...
}

.Component::after {
    ...
}

/* DON'T */
.Component:after {
    ...
}
```

##### LESS

```less
// DO
.Component
    &:focus {
        ...
    }

    &:hover {
        ...
    }

    &::before {
        ...
    }

    &::after {
        ...
    }
}

// DON'T
.Component:after {
    ...
}
```

##### SCSS

```less
/* DO */
.Component
    &:focus {
        ...
    }

    &:hover {
        ...
    }

    &::before {
        ...
    }

    &::after {
        ...
    }
}

/* DON'T */
.Component:after {
    ...
}
```

<!-- --lang-ex-end -->

## Units

* Use `rem` units as primary unit type. This includes:
  * Positioning (`top`, `right`, `bottom`, `left`)
  * Dimensions (Such as `width`, `height`, `margin`, `padding`)
  * Font size
* Use `px` units as primary unit type for the following properties:
  * Border widths (`border: 1px solid #bada55;`)
* Use `%` units only if necessary, where `rem` will not suffice:
  * Positioning (`top`, `right`, `bottom`, `left`)
  * Dimensions (`width`, `height`)
* Line-height should be kept unit-less. If you find you're using a line-height with a set unit type, try to think of
alternative ways to achieve the same outcome. If it's a unique case which requires a specific `px` or `rem` unit, outline
the reasoning with comments so that others are aware of its purpose.
* Avoid all use of magic numbers. Re-think the problem. (`margin-top: 37px;`)

## Nesting

Nesting is handy, _sometimes_, but will quickly conflict with our **Specificty** and **Performance** guidelines.

As we follow conventions and thoughts from popular and widely accepted methodologies such as BEM, SMACSS and SUIT, the
use of the Suffix can help immensely though.

* Just because you can, doesn't mean you should.
* [Parent Selector Suffixes](http://thesassway.com/news/sass-3-3-released#parent-selector-suffixes) are neat, but not
very searchable
* Watch your output, be mindful of **Specificty** and **Performance**
* Aim for a maximum depth of just 1 nested rule


<!-- --lang-ex -->

##### CSS

```css
/* DO */
.Panel {
    position: relative;
}

.Panel--sidebar {
    z-index: 10;
}

.Panel-item {
    cursor: pointer;
}

.Panel-item--sidebar {
    color: #AEAEAE;
}

.Panel.has-smallFont {
    font-size: 13px;
}

/* DON'T */
body .wrapper .Panel {
    position: relative;
}

body .wrapper .sidebar .Panel {
    z-index: 10;
}

body .wrapper .Panel .item {
    cursor: pointer;
}

body .wrapper .sidebar .Panel .item {
    color: #AEAEAE;
}
```

##### LESS

```less
// DO
.Panel {
    position: relative;

    &--sidebar {
        z-index: 10;
    }

    &-item {
        cursor: pointer;
    }

    &-item--sidebar {
        color: #AEAEAE;
    }

    &.has-smallFont {
        font-size: 13px;
    }
}

// DON'T
body {
    .wrapper {
        .Panel {
            position: relative;

            .item {
                cursor: pointer;
            }
        }

        .sidebar {
            .Panel {
                z-index: 10;

                .item {
                    color: #AEAEAE;
                }
            }
        }
    }
}
```

##### SCSS

```less
// DO
.Panel {
    position: relative;

    &--sidebar {
        z-index: 10;
    }

    &-item {
        cursor: pointer;
    }

    &-item--sidebar {
        color: #AEAEAE;
    }

    &.has-smallFont {
        font-size: 13px;
    }
}

// DON'T
body {
    .wrapper {
        .Panel {
            position: relative;

            .item {
                cursor: pointer;
            }
        }

        .sidebar {
            .Panel {
                z-index: 10;

                .item {
                    color: #AEAEAE;
                }
            }
        }
    }
}
```

<!-- --lang-ex-end -->

### SASS @extend or @include

* Excessive use of `@include` can cause unnecessary bloat to your stylesheet, but gzip should help with that.
* Excessive use of `@extend` can create large selector blocks (not helpful in web inspector) and hoisting of your
selector can cause override and inheritance issues.
* We advise to `@include` over `@extend` generally, but use common sense. In situations where it's better to  `@extend`
it's safer to do so on a placeholder selector.

Make use of placeholder selectors to separate repeated local styles

```css
%placeholderSelector {
    background-color: #eee;
}

.Component1 {
    @extend %placeholderSelector;
    color: red;
}

.Component2 {
    @extend %placeholderSelector;
    color: blue;
}
```

## Components

Syntax: `[<namespace>-]<ComponentName>[--modifierName|-descendantName]`

This component syntax is mainly taken from [Suit CSS](http://suitcss.github.io/) with minor modifications.

Component driven development offers several benefits when reading and writing HTML and CSS:

* It helps to distinguish between the classes for the root of the component, descendant elements, and modifications.
* It keeps the specificity of selectors low.
* It helps to decouple presentation semantics from document semantics.

You can think of components as custom elements that enclose specific semantics, styling, and behavior.

**Do not choose a class name based on its visual presentation or its content.**

The primary architectural division is between components and utilities:

* `ComponentName` (eg. `.Dropdown` or `.ButtonGroup`)
* `ComponentName--modifierName` (eg. `.Dropdown--dropUp` or `.Button--primary`)
* `ComponentName-descendantName` (eg. `.Dropdown-item`)
* `ComponentName.is-stateOfComponent` (eg. `.Dropdown.is-active`)
* `u-[sm-|md-|lg-]utilityName` (eg. `.u-textTruncate`, `.u-sm-floatLeft`)

#### ComponentName

The component's name must be written in pascal case. Use class names that are as short as possible but as long as necessary.

* Example: `.Nav` not `.navigation`
* Example: `.Button` not `.btn`

```css
.MyComponent { /* ... */ }
```

```html
<article class="MyComponent">
  ...
</article>
```

If necessary, components can be prefixed with a namespace. For example, you may wish to avoid the potential for collisions between libraries and your custom components by prefixing all your components with a namespace.

<!-- --lang-ex -->

##### CSS

```css
.twt-Button { /* … */ }
.twt-Tabs { /* … */ }
```

##### LESS

```less
.twt {
    &-Button { /* … */ }
    &-Tabs { /* … */ }
}
```

##### SCSS

```less
.twt {
    &-Button { /* … */ }
    &-Tabs { /* … */ }
}
```

<!-- --lang-ex-end -->

#### ComponentName--modifierName

A component modifier is a class that modifies the presentation of the base component in some form. Modifier names must
be written in camel case and be separated from the component name by two hyphens. The class should be included
in the HTML _in addition_ to the base component class.

<!-- --lang-ex -->

##### CSS

```css
/* Core button */
.Button {
    ...
}

.Button--primary {
    ...
}
```

##### LESS

```less
/* Core button */
.Button {
    ...

    &--primary {
        ...
    }
}

```

##### SCSS

```less
/* Core button */
.Button {
    ...

    &--primary {
        ...
    }
}
```

<!-- --lang-ex-end -->

```html
<button class="Button Button--primary">...</button>
```

#### ComponentName__descendantName

A component descendant is a class that is attached to a descendant node of a component. It's responsible for applying
presentation directly to the descendant on behalf of a particular component. Descendant names must be written in camel
case.

```html
<article class="Tweet">
  <header class="Tweet-header">
    <img class="Tweet-avatar" src="{$src}" alt="{$alt}">
    ...
  </header>
  <div class="Tweet-body">
    ...
  </div>
</article>
```

You might notice that `Tweet-avatar`, despite being a descendant of `Tweet-header` does not have the class of
`Tweet-header-avatar`. Why? Because it doesn't necessarily **have** to live there. It could be adjacent to
`tweet-header` and function the same way. Therefore, you should **only** prepend a descendant with its parent if must
live there. Strive to keep class names as short as possible, but as long as necessary.

When building a component, you'll often run into the situation where you have a list, group or simply require a container for some descendants. In this case, it's much better to follow a pattern of pluralising the container and having each descendant be singular. This keeps the relationship clear between descendant levels.

```html
<nav class="Pagination">
  <ul class="Pagination-list">
    <li class="Pagination-listItem">
      ...
    </li>
  </ul>
</nav>

<ul class="Breadcrumbs">
  <li class="Breadcrumb">
    <a class="Breadcrumb-label" href="#"></a>
  </li>
</ul>

<!-- DON'T DO
Avoid verbose descendant names
-->
<nav class="Pagination">
  <ul class="Pagination-pages">
    <li class="Pagination-pages-page">
      ...
    </li>
  </ul>
</nav>

  <ul class="Breadcrumbs">
    <li class="Breadcrumbs-breadcrumb">
      <a class="Breadcrumbs-breadcrumb-label" href="#"></a>
    </li>
  </ul>
```

#### ComponentName.is-stateOfComponent

Use `is-stateName` for state-based modifications of components. The state name must be Camel case. States can be global (affecting all components that have the state attached to them) or particular to a specific component (affecting just the component they are attached to). **Never style particular classes directly; they should always be used as an adjoining class to the component they serve. Never use !important in these states. Only global states are allowed to use !important in they declaration to enforce overriding the styles.**

JS can add/remove these classes. This means that the same state names can be used in multiple contexts, but every
component must define its own styles for the state (as they are scoped to the component).


```html
<article class="Tweet is-expanded">
  ...
</article>
```

<!-- --lang-ex -->

##### CSS

```css
.Tweet {
    ...
}

.Tweet.is-expanded {
    ...
}

.is-hidden {
    display: none !important;
}
```

##### LESS

```less
.Tweet {
    ...

    &.is-expanded {
        ...
    }
}

.is-hidden {
    display: none !important;
}
```

##### SCSS

```less
.Tweet {
    ...

    &.is-expanded {
        ...
    }
}

.is-hidden {
    display: none !important;
}
```
<!-- --lang-ex-end -->

## Utilities

Utility classes are low-level structural and positional traits. Utilities can be applied directly to any element. Multiple utilities can be used together and utilities can be used alongside component classes.

Utility classes should be used sparingly, lean towards component level styling to make for as reusable HTML patterns as possible.

Utilities must use a camel case name, prefixed with a `u-` namespace.

```html
<div class="Tweet u-cf">
  <a class="u-sizeFit" href="{{url}}">
    <img class="u-block" src="{{src}}" alt="">
  </a>
  <p class="Tweet-text u-sizeFill u-textBreak">
    …
  </p>
</div>
```

Utilities are grouped by type. The names of utilities with similar concerns usually start with a common string, e.g., `u-textCenter`, `u-textTruncate`; `u-linkClean`, `u-linkBlock`.

Any classes with terse names, e.g., `u-cf` and `u-nbfc`, are either particularly abstract or very commonly used utilities with otherwise excessively long names. For example, the `u-cf` utility is used to "contain floats" without clipping any overflow (also known as "clearfix"), while the `u-nbfc` utility is used to create a "new block formatting context".

#### Why to use utilities

Certain CSS properties and patterns are used frequently. For example: floats, containing floats, vertical alignment, text truncation. Relying on utilities can help to reduce repetition and provide consistent implementations.

```html
<div class="u-cf">
    <p class="u-textTruncate">{{text}}</p>
    <img class="u-floatLeft" src="{{src}}" alt="">
    <img class="u-floatLeft" src="{{src}}" alt="">
    <img class="u-floatLeft" src="{{src}}" alt="">
</div>
```

Some utilities apply only a single declaration, so why not use inline styles? Even here, small utilities are preferred because their values can be preprocessed (e.g., generating RTL style sheets) or adjusted to viewport dimensions. The scope of styles not contained in components can be tightly defined, and code is a little easier to read.

#### Responsive utilities

Certain utilities have responsive variants using the patterns: `u-sm-<utilityName>`, `u-md-<utilityName>` and `u-lg-<utilityName>` for small, medium, and large Media Query breakpoints.

#### Modifiying utilities

Utilities **should not** be edited while in use, unless it is to fix a bug. Modifications to utilities cascade throughout the application and should be made with extreme care.

## Variables and Mixins

Variables and Mixins should follow similar naming conventions.

#### Variables

Syntax: `[<ComponentName>[--modifierName][-descendentName]-]<propertyName>-<variablename>[--<modifierName>]`

Variables should be named as such, things that can change over time.

Variables should also follow our component naming convention to show context and be in camelCase. If the variable is a
global, generic variable, the property name should be prefixed first, followed by the variant and or modifier name for
clearer understanding of use.

<!-- --lang-ex -->

##### Less

```less
$color-brandPrimary:  #aaa;
$fontSize:            1rem;
$fontSize--large:     2rem;
$lineHeight--small:   1.2;

// DON'T Name your variables after the color value

$bigcommerceBlue:     #00abc9;
$color-blue:          #00ffee;
$color-lightBlue:     #eeff00;
```

##### Sass

```less
$color-brandPrimary:  #aaa;
$fontSize:            1rem;
$fontSize--large:     2rem;
$lineHeight--small:   1.2;

// DON'T Name your variables after the color value

$bigcommerceBlue:     #00abc9;
$color-blue:          #00ffee;
$color-lightBlue:     #eeff00;
```
<!-- --lang-ex-end -->

#### Component / Micro App level variables

Micro apps must base their local variables on the global variables primarily.
You may add your own specific variables as required if no global variable is available.

For portability, your component should declare it's own set of variables inside it's own settings partial, inside the
settings folder.
If your component styles change from those global variables at all in the future, less of your styles will have to change, as you only change the local variable value.

If your variable is scoped to your component, it should be namespaced as such following our component naming conventions.

<!-- --lang-ex -->

##### LESS

```less
$ComponentName-fontSize:                                fontSize("small");
$ComponentName-descendantName-backgroundColor:           #ccc;
$ComponentName-descendantName-marginBottom:              fontSize("large");
$ComponentName-descendantName--active-backgroundColor:   #000;
```

```less
.ComponentName {
    font-size: $ComponentName-fontSize;
}

.ComponentName-descendantName {
    background-color: $ComponentName-descendantName-backgroundColor;
    margin-bottom: $ComponentName-descendantName-marginBottom;
}

.ComponentName-descendantName--active {
    background-color: $ComponentName-descendantName--active-backgroundColor;
}
```

##### SCSS

```less
$ComponentName-fontSize:                                fontSize("small");
$ComponentName-descendantName-backgroundColor:           #ccc;
$ComponentName-descendantName-marginBottom:              fontSize("large");
$ComponentName-descendantName--active-backgroundColor:   #000;
```

```less
.ComponentName {
    font-size: $ComponentName-fontSize;
}

.ComponentName-descendantName {
    background-color: $ComponentName-descendantName-backgroundColor;
    margin-bottom: $ComponentName-descendantName-marginBottom;
}

.ComponentName-descendantName--active {
    background-color: $ComponentName-descendantName--active-backgroundColor;
}
```

<!-- --lang-ex-end -->

#### Mixins

Mixins follow regular camel case naming conventions and do not require namespacing. If you are creating a mixin for a
utility, it will need to match the utility name (including `u` namespacing).

* `@mixin buttonVariant;`
* `@mixin u-textTruncate;`

## Polyfills

Don't replicate CSS polyfills that Autoprefixer can supply in a Grunt or Gulp task. This keeps the code base lean and future proof.

```css
.button {
    border-radius: 3px;
}
```
```less
/* DON'T Add vendor prefixes at all. */
.button {
    @include border-radius(3px);
}
```
```css
.button {
    -webkit-border-radius: 3px;
        -ms-border-radius: 3px;
         -o-border-radius: 3px;
            border-radius: 3px;
}
```
