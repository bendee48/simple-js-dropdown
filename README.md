# Simple JS Dropdown
---
Adds simple dropdown functionality to selected HTML elements. 
# Installation
---
Install via NPM: `npm i @bendee48/simple-dropdown`
Import into JS file: `import { dropdown } from '@bendee48/simple-dropdown'`

# Usage
---
Call `dropdown.setup()` within main JS file.
### Base HTML
Ensure any elements wishing to be turned into a dropdown follow the base HTML. The module will target all appropriately tagged elements.
- A `button`, `div`, `li` etc tagged with the `dropdown-trigger` class.
- A sibling `div` with class of `dropdown-content` wrapping `li` elements for the menu items.
- All above elements wrapped in a `div` with a class of `dropdown-menu`.
```
<div class="dropdown-menu">
    <button class="dropdown-trigger">Example Button</button>
    <div class="dropdown-content">
      <ul>
        <li><a href="#">Example 1</a></li>
        <li><a href="#">Example 2</a></li>
        <li><a href="#">Example 3</a></li>
      </ul>
    </div>
</div>
```
### Base CSS
Include the bare minimum CSS.
```
.dropdown-menu {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
}

.open-menu {
  position: absolute;
  display: block;
}
```
