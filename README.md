cu-module-ts-example
====================

> example CU module written in typescript

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

#### module

This directory is also where all assets will go, including `html`, `css`, `images` and `audio`.


#### module/ts/module.ts

This is the entry point for the module.
The example `module.js` is exporting everything from `cu-lib-example`
It is also doing some console logs, to check things are being imported correctly.


#### module/ts/tsd.d.ts

This is the TypeScript definition file for the module. This is managed by `tsd` https://github.com/DefinitelyTyped/tsd.
To update this file for all node_modules run `tsd link` on the project root.


===

Gulp Configuration
------------------

There is a `config` variable in `gulpfile.js` which can be used to easily configure the build process and file names .



Developing
----------

The build process is provided by [cu-ui-build-tools](https://github.com/saddieeiddas/cu-ui-build-tools#component-builder)

The build can be configured in `cu-build.config.js`

You can view the gulp tasks here https://github.com/saddieeiddas/cu-ui-build-tools#component-builder

