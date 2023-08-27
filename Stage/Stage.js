/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.cameraX = -197.35535978256615;
    this.vars.cameraY = 60;
    this.vars.cameraZ = 255.2557959424119;
    this.vars.cameraRotX = -20;
    this.vars.cameraRotY = 65;
    this.vars.ambientLight = 0.2;
    this.vars.diffuseLight = 0.8;
    this.vars.lightSourceX = 100;
    this.vars.lightSourceY = 3264;
    this.vars.lightSourceZ = 0;
    this.vars.pointDataX = [50, 50, -50, -50, 50, 50, -50, -50, 0];
    this.vars.pointDataY = [50, -50, -50, 50, 50, -50, -50, 50, 0];
    this.vars.pointDataZ = [50, 50, 50, 50, -50, -50, -50, -50, 0];
    this.vars.surfacesP1 = [1, 6, 3, 8, 8, 1, 2, 7, 3, 1, 5, 7];
    this.vars.surfacesP2 = [2, 5, 4, 7, 4, 5, 3, 6, 2, 4, 6, 8];
    this.vars.surfacesP3 = [6, 1, 8, 3, 1, 8, 7, 2, 1, 3, 7, 5];
    this.vars.surfacesR = [
      255,
      255,
      100,
      100,
      100,
      100,
      255,
      255,
      255,
      255,
      100,
      100
    ];
    this.vars.surfacesG = [
      100,
      100,
      255,
      255,
      100,
      100,
      255,
      255,
      100,
      100,
      255,
      255
    ];
    this.vars.surfacesB = [
      255,
      255,
      100,
      100,
      255,
      255,
      100,
      100,
      100,
      100,
      255,
      255
    ];
    this.vars.objectsPointIndex = [9];
    this.vars.objectsX = [0];
    this.vars.objectsY = [0];
    this.vars.objectsZ = [300];
    this.vars.objectsRotX = [0];
    this.vars.objectsRotY = [0];
    this.vars.objectsRotZ = [0];
    this.vars.surfacesDiameter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.surfacesType = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  }
}
