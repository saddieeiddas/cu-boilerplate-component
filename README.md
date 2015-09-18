cu-boilerplate-module
=====================

> Camelot Unchained UI - Boilerplate Module

Install
-------

Clone the Repository

```sh
git clone https://github.com/CUModSquad/cu-boilerplate-module.git
cd cu-boilerplate-module
```

Install Dependencies

```sh
npm install
gulp install
gulp build
```


Structure
---------

The structure is as follows:

**`src`**

This is where all the code goes.

**`src/ts/main.tsx`**

This is the entry point for the module.

**`src/sass/main.scss`**

This is the main stylesheet for the module.

**`dist`**

This is the bundled code that to be included in the published client.


Developing
----------

The build process is provided by [cu-build-tools][1]

The build can be configured in `cu-build.config.js`

You can view the gulp tasks [here][1]


[1]: https://github.com/CUModSquad/cu-build-tools#modulelibrary---builder
