/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import gulp from 'gulp';
import buildConfig from './cu-build.config.js';
import buildTools from 'cu-build-tools';

buildTools.auto(gulp, buildConfig);
