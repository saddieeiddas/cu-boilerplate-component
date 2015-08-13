/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="../definitions/main.d.ts" />

import React = require('react');

// hack cuAPI to allow testing
// TODO remove this, and replace with a proper mock cuAPI e.g. new CuAPI()
if (typeof cuAPI === "undefined") {
    window["cuAPI"] = { fps: 60, locationX: 10, locationY: 10, locationZ: 20 };
}

import {Location} from './location';

console.log('rendering location');

React.render(
    <Location pollInterval={200}/>,
    document.getElementById("loc")
);
