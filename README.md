cu-ui-boilerplate-component
===========================

> example CU component written in typescript

This example provides a `location` component which was written by [Mehuge](https://github.com/Mehuge) to give a working
example of how to write a component in `ts` and `tsx`

===

Installation
------------

Clone the Repository and run:

```
npm install
```

===


Structure
---------

The structure of this example library is as follows:

---

#### `src`

This directory is also where all assets will go, including `ts`, `tsx`, `html`, `styl`, `images` and `audio`.


#### `src/ts/main.tsx` or `src/ts/main.ts`

This is the entry point for the module.
The example `main.tsx` is importing `location.tsx` and rendering the react component.


#### `src/typings/*.d.ts`

This is managed by `tsd`.
To update this file for all node_modules run `tsd link` on the project root.
You can read the guides at [https://github.com/DefinitelyTyped/tsd](https://github.com/DefinitelyTyped/tsd) for more info


===


Developing
----------

The build process is provided by [cu-ui-build-tools](https://github.com/saddieeiddas/cu-ui-build-tools#component-builder)

The build can be configured in `cu-build.config.js`

You can view the gulp tasks here https://github.com/saddieeiddas/cu-ui-build-tools#component-builder

