/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="tsd.d.ts" />

import cuLibExample = require("cu-lib-example");

cuLibExample.ComponentName.staticSayHello();

var cuLibExampleComponent = new cuLibExample.ComponentName();
cuLibExampleComponent.sayHello();

console.log('hello from cu-module-ts-example');
