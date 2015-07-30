/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/// <reference path="tsd.d.ts" />

import {BoilerplateLibrary} from "cu-ui-boilerplate-library";

BoilerplateLibrary.BoilerplateModule.staticSayHello();

var cuBoilerplateLibraryModule = new BoilerplateLibrary.BoilerplateModule();
cuBoilerplateLibraryModule.sayHello();

console.log('hello from cu-ui-boilerplate-component');
