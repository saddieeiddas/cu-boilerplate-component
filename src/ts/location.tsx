/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/// <reference path="main.d.ts" />

import React = require('react');

export interface LocationProps {
    pollInterval: number;
}

export interface LocationState {
    fps: string;
    x: string;
    y: string;
    z: string;
}

export class Location extends React.Component<LocationProps, LocationState> {

    constructor(props) {
        super(props);
        this.update();
    }

    componentDidMount = (): void => {
        setInterval(this.refresh, this.props.pollInterval);
    };

    update = (): void => {
        this.state = {
            fps: cuAPI.fps.toFixed(0),
            x: cuAPI.locationX.toFixed(2),
            y: cuAPI.locationY.toFixed(2),
            z: cuAPI.locationZ.toFixed(2),
        };
    };

    refresh = (): void => {
        this.update();
        this.setState(this.state);
    };

    render() {
        return (
            <div className="noselect">
            {
                'FPS: '
                + this.state.fps
                + ' Location: '
                + this.state.x
                + ', '
                + this.state.y
                + ', '
                + this.state.z
            }
            </div>
        );
    }
}
