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

#### src

This is the directory where all the module typescript code is located.


#### src/module.ts

This is the entry point for the module.
The example `module.js` is exporting everything from `cu-lib-example`
It is also doing some console logs, to check things are being imported correctly.


#### src/tsd.d.ts

This is the TypeScript definition file for the module. This is managed by `tsd` https://github.com/DefinitelyTyped/tsd.
To update this file for all node_modules run `tsd link` on the project root.


---

#### dist

This is where the `browserify`, `babelify` and `tsify` bundles will be located. They are built from `src/module.ts`.
These are the files that will be included in the `html` of the module itself.

This directory is also where all assets will go, including `html`, `css`, `images` and `audio`.


===

Gulp Configuration
------------------

There is a `config` variable in `gulpfile.js` which can be used to easily configure the build process and file names .


Developing
----------

To develop there are a number of `gulp` tasks configured:


#### gulp server

This will create a connect server, you can then access this server via at http://localhost:9000/dist/
This will serve the `dist/index.html` file which can be used to test/develop the module.


#### gulp watch

This will watch the src directory and compile the development bundle file on changes.
This paired with the server and `dist/index.html` should allow for easy testing/development.


#### gulp build

This will build the `bundle` javascript files based on the `src` contents.


#### gulp lint

This currently does not `lint` anything, but could be replaces with a linting system for typescript
