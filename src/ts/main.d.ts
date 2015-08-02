/// <reference path="../typings/tsd.d.ts" />

// TODO remove this cuAPI declaration, will be replaced by cuAPI libraries own declaration
declare interface cuAPI {
    fps: number;
    locationX: number;
    locationY: number;
    locationZ: number;
}

declare var cuAPI: cuAPI;
