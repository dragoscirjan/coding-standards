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

On large code bases, it's preferable and a tonne more maintainable if the specificity of selectors are all as equal and
as low as humanly possible.

In all three languages, the use of classes, for styling, is encouraged, while use ID's is completely prohibited. There
is literally no point in using ids.

<!-- --lang-ex -->

##### Css

```css
.component {
    ...
}

/* DON'T
#component {
    ...
}*/
```

##### Less

```less
.component {
    ...
}

/* DON'T
#component {
  ...
}*/
```

##### Sass

```css
.component {
    ...
}

/* DON'T
#component {
    ...
}*/
```
<!-- --lang-ex-end -->

Style the base elements (such as typography elements). **Do not** reference or style descendent elements in your class
selectors.

<!-- --lang-ex -->

##### Css

```css
h1 {
    ...
}

/* DON'T
.component h1 {
    ...
}*/
```

##### Less

```less
h1 {
    ...
}

/* DON'T
.component {
    & h1 {
        ...
    }
}*/
```

##### Sass

```css
h1 {
    ...
}

/* DON'T
.component h1 {
  ...
}*/
```

<!-- --lang-ex-end -->


Use overqualified selectors in your CSS is not recommended. Do not prepend a class or ID with an element.

```css
div.container {
    ...
}
```

#### Performance

Overly specific selectors can also cause performance issues. Consider:

<!-- --lang-ex -->

##### Css

```css
ul.user-list li span a:hover {
    color: red;
}
```

##### Less

```css
ul.user-list {
    li {
        span {
            a:hover {
                color: red;
            }
        }
    }
}
```

##### Sass

```css
ul.user-list li span a:hover {
    color: red;
}
```

<!-- --lang-ex-end -->

Selectors are resolved right to left, exiting when it has been detected the selector does not match. This requires a lot
of DOM walking and for large documents can cause a significant increase in the layout time. For further reading checkout:
https://developers.google.com/speed/docs/best-practices/rendering#UseEfficientCSSSelectors

If we know we want to give all `a` elements inside the `.user-list` red on hover we can simplify this style to:

<!-- --lang-ex -->

##### Css

```css
.user-list-link:hover {
    color: red;
}
```

##### Less

```less
.user-list-link {
    &:hover {
        color: red;
    }
}
```

##### Sass

```css
.user-list-link:hover {
    color: red;
}
```

<!-- --lang-ex-end -->

## Formatting

Please reffer to the .editorconfig file from the main [Formating](formatting.md) section.

#### Commenting

Separation of code into logical sections using standard comment blocks is strongly recommended.

Annotation of code inside a comment block, leaving a reference # next to the line is also recommended.

<!-- --lang-ex -->

##### Css

```css
/*******************************************************************************
 * FILE TITLE / SECTION TITLE
 ******************************************************************************/


/* Comment Block / Sub-section
 *******************************************************************************
 *
 * Purpose: This will describe when this component should be used. This comment
 * block is 80 chars long
 *
 * 1. Mark lines of code with numbers which are explained here.
 * This keeps your code clean, while also allowing detailed comments.
 *
 ******************************************************************************/

.component {
    ... /* 1 */
}

```

##### Less

```less
// =============================================================================
// FILE TITLE / SECTION TITLE
// =============================================================================


// Comment Block / Sub-section
// -----------------------------------------------------------------------------
//
// Purpose: This will describe when this component should be used. This comment
// block is 80 chars long
//
// 1. Mark lines of code with numbers which are explained here.
// This keeps your code clean, while also allowing detailed comments.
//
// -----------------------------------------------------------------------------

.component {
    ... // 1
}

```

##### Sass

```less
// =============================================================================
// FILE TITLE / SECTION TITLE
// =============================================================================


// Comment Block / Sub-section
// -----------------------------------------------------------------------------
//
// Purpose: This will describe when this component should be used. This comment
// block is 80 chars long
//
// 1. Mark lines of code with numbers which are explained here.
// This keeps your code clean, while also allowing detailed comments.
//
// -----------------------------------------------------------------------------

.component {
    ... // 1
}

```

<!-- --lang-ex-end -->

#### Spacing

Multiple CSS rules, having the same styles, should be comma separated but live on new lines.

Braces should start one space from the last defined rule, and end on a new line after the last style has been defined.

Style lines should always end with semi-colons, while a space must also always be added after ":". A space shoudl also
be included after each comma in comma-separated property or function values.

CSS blocks should be separated by a single clear line, while two blank lines should be added between sections and one
between sub-sections.

```css
.content,
.content-edit {
    padding: 0;
    margin: 0;
    font-family: "Helvetica", sans-serif;
}


.newSection {
    ...
}

.newSection-edit {
    ...
}

/* DON'T
.content, .content-edit{
    padding:0; margin:0;
    font-family: "Helvetica",sans-serif}
.newSection {
    ...
}
.newSection-edit {
    ...
*/
```

#### Quotes

Use of double quotes, when available, is mandatory. Quote attribute values in selectors.

```css
input[type="checkbox"] {
    background-image: url("/img/you.jpg");
    font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial;
}

/* DON'T
input[type=checkbox] {
    background-image: url(/img/you.jpg);
    font-family: Helvetica Neue Light, Helvetica Neue, Helvetica, Arial;
}*/
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
.component {
    background-color: #ccc;
    color: #aaa;
    left: 0;
    line-height: 1.25;
    min-height: 400px;
    padding: 0 20px;
    top: 0;
}

/* DON'T
.component {
    background: #ccc;
    color: #AAAAAA;
    left: 0px;
    line-height: 24px;
    height: 400px !important; //jerk #yolo FUUUUUU
    padding: 0px 20px 0px 20px;
    top: 0px;
}*/
```


#### Declaration order

There are a millions opinions and thoughts on logical ordering and grouping. Don't force someone to learn your opinion,
ordering doesn't matter, consistency does. Just use the alphabet, _everyone_ knows it.
* @extend _(for Sass)_
* @include _(for Sass)_
* Alphabetical, always.


<!-- --lang-ex -->

##### Css

```css
.component {
    color: #aaa;
    left: 0;
    line-height: 1.25;
    min-height: 400px;
    padding: 0 20px;
    top: 0;
    width: 150px;
}

/* DON'T
.component {
    min-height: 400px;
    left: 0;
    top: 0;
    width: 150px;
    color: #aaa;
    line-height: 1.25;
    width: 200px;
    padding: 0 20px;
}*/
```

##### Less

```css
.component {
    color: #aaa;
    left: 0;
    line-height: 1.25;
    min-height: 400px;
    padding: 0 20px;
    top: 0;
    width: 150px;
}

/* DON'T
.component {
    min-height: 400px;
    left: 0;
    top: 0;
    width: 150px;
    color: #aaa;
    line-height: 1.25;
    width: 200px;
    padding: 0 20px;
}*/
```

##### Sass

```css
.component {
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

/* DON'T
.component {
    min-height: 400px;
    left: 0;
    @include silly-links;
    top: 0;
    width: 150px;
    color: #aaa;
    @extend %a-placeholder;
    line-height: 1.25;
    width: 200px;
    padding: 0 20px;
}*/
```

<!-- --lang-ex-end -->

## Pseudo Elements and Classes
Pseudo elements and classes are very different things, as is the syntax used to declare them. Declare pseudo
_**classes**_ with a single colon. Declare pseudo _**elements**_ with a double colon.

<!-- --lang-ex -->

##### Css

```css
.component:focus {
    ...
}

.component:hover {
    ...
}

.component::before {
    ...
}

.component::after {
    ...
}

/* DON'T
.component:after {
    ...
}*/
```

##### Less

```css
.component
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

/* DON'T
.component:after {
    ...
}*/
```

##### Sass

```css
.component:focus {
    ...
}

.component:hover {
    ...
}

.component::before {
    ...
}

.component::after {
    ...
}

/* DON'T
.component:after {
    ...
}*/
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

##### Css

```css
.panel-body {
    position: relative;
}

.panel-sideBar {
    z-index: 10;
}

.panel-sideBar-item {
    cursor: pointer;
}

.panel-sideBar-item-label {
    color: #AEAEAE;

}

.panel-sideBar-item-label.has-smallFont {
    font-size: 13px;
}
```

##### Less

```css
.panel-body {
    position: relative;
}

.panel-sideBar {
    z-index: 10;

    &-item {
      cursor: pointer;
    }

    &-item-label {
      color: #AEAEAE;

      &.has-smallFont {
        font-size: 13px;
      }
    }
}


/* DON'T
.bc-tab-panel {

    .panel-body {
        position: relative;
        ...

        .panel-side-bar {
            z-index: 10;
            ...

            .panel-side-item {
                cursor: pointer;
                ...

                .panel-side-item-label {
                    color: #AEAEAE;

                    &.small-font {
                        font-size: 13px;
                    }
                }
            }
        }
    }
}*/
```

##### Sass

```css
.panel-body {
    position: relative;
}

.panel-sideBar {
    z-index: 10;

    &-item {
      cursor: pointer;
    }

    &-item-label {
      color: #AEAEAE;

      &.has-smallFont {
        font-size: 13px;
      }
    }
}

/* DON'T
.bc-tab-panel {

    .panel-body {
        position: relative;
        ...

        .panel-side-bar {
            z-index: 10;
            ...

            .panel-side-item {
                cursor: pointer;
                ...

                .panel-side-item-label {
                    color: #AEAEAE;

                    &.small-font {
                        font-size: 13px;
                    }
                }
            }
        }
    }
}*/
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

.component1 {
    @extend %placeholderSelector;
    color: red;
}

.component2 {
    @extend %placeholderSelector;
    color: blue;
}
```

## Components

Syntax: `<componentName>[--modifierName|-descendantName]`

This component syntax is mainly taken from [Suit CSS](http://suitcss.github.io/) with minor modifications.

Component driven development offers several benefits when reading and writing HTML and CSS:

* It helps to distinguish between the classes for the root of the component, descendant elements, and modifications.
* It keeps the specificity of selectors low.
* It helps to decouple presentation semantics from document semantics.

You can think of components as custom elements that enclose specific semantics, styling, and behaviour.

**Do not choose a class name based on its visual presentation or its content.**

The primary architectural division is between components and utilities:

* componentName (eg. `.dropdown` or `.buttonGroup`)
* componentName--modifierName (eg. `.dropdown--dropUp` or `.button--primary`)
* componentName-descendantName (eg. `.dropdown-item`)
* componentName.is-stateOfComponent (eg. `.dropdown.is-active`)
* u-utilityName (eg. `.u-textTruncate`)
* `[<namespace>-]<componentName>[--modifierName|-descendentName]`

#### ComponentName

The component's name must be written in camel case. Use class names that are as short as possible but as long as necessary.

* Example: `.nav` not `.navigation`
* Example: `.button` not `.btn`

```css
.myComponent { /* ... */ }
```

```html
<article class="myComponent">
  ...
</article>
```

#### componentName--modifierName

A component modifier is a class that modifies the presentation of the base component in some form. Modifier names must
be written in camel case and be separated from the component name by two hyphens. The class should be included
in the HTML _in addition_ to the base component class.

<!-- --lang-ex -->

##### Css

```css
/* Core button */
.button {
    ...
}

.button--primary {
    ...
}
```

##### Less

```less
/* Core button */
.button {
    ...

    &--primary {
        ...
    }
}

```

##### Sass

```less
/* Core button */
.button {
    ...

    &--primary {
        ...
    }
}
```

<!-- --lang-ex-end -->

```html
<button class="button button--primary">...</button>
```

#### componentName__descendantName

A component descendant is a class that is attached to a descendant node of a component. It's responsible for applying
presentation directly to the descendant on behalf of a particular component. Descendant names must be written in camel
case.

```html
<article class="tweet">
  <header class="tweet-header">
    <img class="tweet-avatar" src="{$src}" alt="{$alt}">
    ...
  </header>
  <div class="tweet-body">
    ...
  </div>
</article>
```

You might notice that `tweet-avatar`, despite being a descendant of `tweet-header` does not have the class of
`tweet-header-avatar`. Why? Because it doesn't necessarily **have** to live there. It could be adjacent to
`tweet-header` and function the same way. Therefore, you should **only** prepend a descendant with its parent if must
live there. Strive to keep class names as short as possible, but as long as necessary.

When building a component, you'll often run into the situation where you have a list, group or simply require a container
for some descendants. In this case, it's much better to follow a pattern of pluralising the container and having each
descendant be singular. This keeps the relationship clear between descendant levels.

```html
<nav class="pagination">
  <ul class="pagination-list">
    <li class="pagination-listItem">
      ...
    </li>
  </ul>
</nav>

<ul class="breadcrumbs">
  <li class="breadcrumb">
    <a class="breadcrumb-label" href="#"></a>
  </li>
</ul>

/* DON'T DO
Avoid verbose descendant names
*/
<nav class="pagination">
  <ul class="pagination-pages">
    <li class="pagination-pages-page">
      ...
    </li>
  </ul>
</nav>

  <ul class="breadcrumbs">
    <li class="breadcrumbs-breadcrumb">
      <a class="breadcrumbs-breadcrumb-label" href="#"></a>
    </li>
  </ul>
```

#### componentName.is-stateOfComponent

Use `is-stateName` for state-based modifications of components. The state name must be Camel case. **Never style these
classes directly; they should always be used as an adjoining class.**

JS can add/remove these classes. This means that the same state names can be used in multiple contexts, but every
component must define its own styles for the state (as they are scoped to the component).

```html
<article class="tweet is-expanded">
  ...
</article>
```

```css
.tweet {
    ...
}

.tweet.is-expanded {
    ...
}
```

## Utilities

Utility classes are low-level structural and positional traits. Utilities can be applied directly to any element;
multiple utilities can be used together; and utilities can be used alongside component classes.

Utility classes should be used sparingly, lean towards component level styling to make for as reusable HTML patterns as
possible.


#### u-utilityName

Syntax: `u-<utilityName>`

Utilities must use a camel case name, prefixed with a `u` namespace.

## Variables and Mixins

Variables and Mixins should follow similar naming conventions.

#### Variables

Syntax: `[<componentName>[--modifierName][-descendentName]-]<propertyName>-<variablename>[--<modifierName>]`

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
settings folder. Even if at the time, your
component only uses globally available variables from Bigcommerce's Library, you should reassign the global variable to
a local one.
If your component styles change from those global variables at all in the future, less of your SCSS will have to change,
as you only change the local variable value.

If your variable is scoped to your component, it should be namespaced as such following our component naming conventions.

<!-- --lang-ex -->

##### Less

```css
$componentName-fontSize:                                fontSize("small");
$componentName-decendantName-backgroundColor:           #ccc;
$componentName-decendantName-marginBottom:              fontSize("large");
$componentName-decendantName--active-backgroundColor:   #000;
```

```css
.componentName {
    font-size: $componentName-fontSize;
}

.componentName-decendantName {
    background-color: $componentName-decendantName-backgroundColor;
    margin-bottom: $componentName-decendantName-marginBottom;
}

.componentName-decendantName--active {
    background-color: $componentName-decendantName--active-backgroundColor;
}
```

##### Sass

```css
$componentName-fontSize:                                fontSize("small");
$componentName-decendantName-backgroundColor:           #ccc;
$componentName-decendantName-marginBottom:              fontSize("large");
$componentName-decendantName--active-backgroundColor:   #000;
```

```css
.componentName {
    font-size: $componentName-fontSize;
}

.componentName-decendantName {
    background-color: $componentName-decendantName-backgroundColor;
    margin-bottom: $componentName-decendantName-marginBottom;
}

.componentName-decendantName--active {
    background-color: $componentName-decendantName--active-backgroundColor;
}
```

<!-- --lang-ex-end -->

#### Maps, maps are cool

Variable maps with a simple getter mixin, can help simplify your variable names when calling them, and help better group
variables together using their relationship. [More info](http://erskinedesign.com/blog/friendlier-colour-names-sass-maps/)

<!-- --lang-ex -->

##### Sass

```less
// Setting variables and mixin
// -----------------------------------------------------------------------------

$colors: (
    primary: (
        base: #00abc9,
        light: #daf1f6,
        dark: #12799a
    ),
    secondary: (
        base: #424d55,
        light: #ccc,
        lightest: #efefef,
        dark: #404247
    ),
    success: (
        base: #bbd33e,
        light: #eaf0c6
    )
);

@function color($color, $tone: "base") {
    @return map-get(map-get($colors, $color), $tone);
}
```


```less
// Usage
// -----------------------------------------------------------------------------

body {
    color: color("secondary");
}

h1,
h2,
h3 {
    color: color("secondary", "dark");
}

.alert {
    background-color: color("primary", "light");
}

.alert-close {
      color: color("primary");
    }

.alert--success {
    background-color: color("success", "light");

    > .alert-close {
        color: color("success");
    }
}
```

<!-- --lang-ex-end -->

**Every variable used in the core architecture must be based off the global variables.**

#### Colors

Please only use the globally available colors from the Bigcommerce Library. Your Micro app or component shouldn't really
have a need for a *new* color. This creates consistency and sanity.

Avoid using the `darken(color, %)` and `lighten(color, %)` mixins for similar reasons.

Use the color maps available to you:

```css
.component {
    background-color: color("brand", "primary");
}
```

#### z-index scale

Please use the z-index scale defined in the Bigcommerce Library under global settings.

`zIndex("lowest")` or `zIndex("high")` for example.

#### Font Weight

Apps should share a strict set of font weights. Never declare a new font weight, only use the available font settings
from the Bigcommerce Library. e.g.

```css
fontWeight("light");
fontWeight("semibold");
```
#### Line Height

The Bigcommerce Library also provides a line height scale. This should be used for blocks of text. e.g.

```css
lineHeight("smallest");
lineHeight("large");
```

Alternatively, when using line height to vertically centre a single line of text, be sure to set the line height to the
height of the container - 1.

```CSS
.button {
  height: remCalc(50px);
  line-height: remCalc(49px);
}
```

#### Animations

Animation delays, durations and easing should be taken from the global framework

#### Mixins

Mixins follow regular camel case naming conventions and do not require namespacing. If you are creating a mixin for a
utility, it will need to match the utility name (including `u` namespacing).

* `@mixin buttonVariant;`
* `@mixin u-textTruncate;`

## Polyfills

At Bigcommerce, we try not to replicate CSS polyfills that auto-prefixer can supply in a Grunt or Gulp task. This keeps
our SCSS code base lean and future proof.

```css
.button {
    border-radius: 3px;
}

/* DON'T Add vendor prefixes at all. */

.button {
    @include border-radius(3px);
}

.button {
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
}
```
