# Bootstrapped

Bootstrap version 5.3.2 modified to be embedable in a specific HTML element, and can co-exist with other CSS framework, including another version of Bootstrap, on the same page.

## Installation

Coming soon.

## Usage

Sass
``` Scss
/* Class name of your app and root element */
.class-name {
	@import "./PATH/TO/NODE_MODULES/bootstrapped/scss/bootstrap.scss";
	@include keyframes("wrapper-"); /* Mixin to include keyframe definitions */
}
```

JavaScript

``` JavaScript
import setupRootElement, * as BootrapBase from 'bootstrapped/js/bootstrap.js';

const Bootrap = Object.assign({}, BootrapBase, setupRootElement('wrapper'));
```
