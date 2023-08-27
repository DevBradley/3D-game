/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Objects extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Objects/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Objects/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Init: Objects" },
        this.whenIReceiveInitObjects
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Init: Lighting" },
        this.whenIReceiveInitLighting
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Init: Camera" },
        this.whenIReceiveInitCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "System: Physics Tick" },
        this.whenIReceiveSystemPhysicsTick
      )
    ];

    this.vars.pointIndex = 9;
    this.vars.numberOfPoints = 0;
    this.vars.playerVelX = 0.0007528259132380019;
    this.vars.playerVelY = 0;
    this.vars.playerVelZ = 0.001760793117642286;
  }

  *addPoint(x, y, z) {
    this.stage.vars.pointDataX.push(x);
    this.stage.vars.pointDataY.push(y);
    this.stage.vars.pointDataZ.push(z);
    this.vars.pointIndex++;
  }

  *addTriangleSurfaceColor(p1, p2, p3, r, g, b) {
    this.stage.vars.surfacesP1.push(
      this.toNumber(p1) + this.toNumber(this.vars.numberOfPoints)
    );
    this.stage.vars.surfacesP2.push(
      this.toNumber(p2) + this.toNumber(this.vars.numberOfPoints)
    );
    this.stage.vars.surfacesP3.push(
      this.toNumber(p3) + this.toNumber(this.vars.numberOfPoints)
    );
    this.stage.vars.surfacesDiameter.push("");
    this.stage.vars.surfacesType.push(1);
    this.stage.vars.surfacesR.push(r);
    this.stage.vars.surfacesG.push(g);
    this.stage.vars.surfacesB.push(b);
  }

  *clearObjectData() {
    this.stage.vars.objectsX = [];
    this.stage.vars.objectsY = [];
    this.stage.vars.objectsZ = [];
    this.stage.vars.objectsRotX = [];
    this.stage.vars.objectsRotY = [];
    this.stage.vars.objectsRotZ = [];
    this.stage.vars.objectsPointIndex = [];
    this.stage.vars.pointDataX = [];
    this.stage.vars.pointDataY = [];
    this.stage.vars.pointDataZ = [];
    this.stage.vars.surfacesP1 = [];
    this.stage.vars.surfacesP2 = [];
    this.stage.vars.surfacesP3 = [];
    this.stage.vars.surfacesDiameter = [];
    this.stage.vars.surfacesType = [];
    this.stage.vars.surfacesR = [];
    this.stage.vars.surfacesG = [];
    this.stage.vars.surfacesB = [];
  }

  *whenIReceiveInitObjects() {
    yield* this.clearObjectData();
    yield* this.initCube();
  }

  *beginObject(x, y, z, rotX, rotY, rotZ) {
    this.stage.vars.objectsX.push(x);
    this.stage.vars.objectsY.push(y);
    this.stage.vars.objectsZ.push(z);
    this.stage.vars.objectsRotX.push(rotX);
    this.stage.vars.objectsRotY.push(rotY);
    this.stage.vars.objectsRotZ.push(rotZ);
    this.vars.pointIndex = 0;
    this.vars.numberOfPoints = this.stage.vars.pointDataX.length;
  }

  *endObject() {
    this.stage.vars.objectsPointIndex.push(this.vars.pointIndex);
  }

  *initOctahedron() {
    this.warp(this.beginObject)(-200, 0, 300, 0, 0, 0);
    this.warp(this.addPoint)(-50, 0, 50);
    this.warp(this.addPoint)(50, 0, 50);
    this.warp(this.addPoint)(50, 0, -50);
    this.warp(this.addPoint)(-50, 0, -50);
    this.warp(this.addPoint)(0, 80, 0);
    this.warp(this.addPoint)(0, -80, 0);
    this.warp(this.addTriangleSurfaceColor)(2, 5, 1, 255, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(3, 5, 2, 100, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(4, 5, 3, 100, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(1, 5, 4, 255, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(2, 1, 6, 100, 255, 255);
    this.warp(this.addTriangleSurfaceColor)(3, 2, 6, 255, 100, 100);
    this.warp(this.addTriangleSurfaceColor)(4, 3, 6, 255, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(1, 4, 6, 100, 255, 100);
    this.warp(this.endObject)();
  }

  *initCube() {
    this.warp(this.beginObject)(0, 0, 300, 0, 0, 0);
    this.warp(this.addPoint)(50, 50, 50);
    this.warp(this.addPoint)(50, -50, 50);
    this.warp(this.addPoint)(-50, -50, 50);
    this.warp(this.addPoint)(-50, 50, 50);
    this.warp(this.addPoint)(50, 50, -50);
    this.warp(this.addPoint)(50, -50, -50);
    this.warp(this.addPoint)(-50, -50, -50);
    this.warp(this.addPoint)(-50, 50, -50);
    this.warp(this.addPoint)(0, 0, 0);
    this.warp(this.addTriangleSurfaceColor)(1, 2, 6, 255, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(6, 5, 1, 255, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(3, 4, 8, 100, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(8, 7, 3, 100, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(8, 4, 1, 100, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(1, 5, 8, 100, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(2, 3, 7, 255, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(7, 6, 2, 255, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(3, 2, 1, 255, 100, 100);
    this.warp(this.addTriangleSurfaceColor)(1, 4, 3, 255, 100, 100);
    this.warp(this.addTriangleSurfaceColor)(5, 6, 7, 100, 255, 255);
    this.warp(this.addTriangleSurfaceColor)(7, 8, 5, 100, 255, 255);
    this.warp(this.endObject)();
  }

  *initIcosahedron() {
    this.warp(this.beginObject)(200, 0, 300, 0, 0, 0);
    this.warp(this.addPoint)(-80, 0, -50);
    this.warp(this.addPoint)(-80, 0, 50);
    this.warp(this.addPoint)(-50, -80, 0);
    this.warp(this.addPoint)(-50, 80, 0);
    this.warp(this.addPoint)(0, -50, -80);
    this.warp(this.addPoint)(0, 50, -80);
    this.warp(this.addPoint)(0, -50, 80);
    this.warp(this.addPoint)(0, 50, 80);
    this.warp(this.addPoint)(50, -80, 0);
    this.warp(this.addPoint)(50, 80, 0);
    this.warp(this.addPoint)(80, 0, -50);
    this.warp(this.addPoint)(80, 0, 50);
    this.warp(this.addTriangleSurfaceColor)(3, 2, 1, 255, 100, 100);
    this.warp(this.addTriangleSurfaceColor)(5, 3, 1, 100, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(6, 5, 1, 100, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(4, 6, 1, 255, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(2, 4, 1, 100, 255, 255);
    this.warp(this.addTriangleSurfaceColor)(11, 10, 12, 255, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(9, 11, 12, 255, 100, 100);
    this.warp(this.addTriangleSurfaceColor)(7, 9, 12, 100, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(8, 7, 12, 100, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(10, 8, 12, 255, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(7, 8, 2, 100, 255, 255);
    this.warp(this.addTriangleSurfaceColor)(3, 7, 2, 255, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(5, 9, 3, 255, 100, 100);
    this.warp(this.addTriangleSurfaceColor)(9, 7, 3, 100, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(8, 10, 4, 100, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(2, 8, 4, 255, 255, 100);
    this.warp(this.addTriangleSurfaceColor)(11, 9, 5, 100, 255, 255);
    this.warp(this.addTriangleSurfaceColor)(6, 11, 5, 255, 100, 255);
    this.warp(this.addTriangleSurfaceColor)(10, 11, 6, 255, 100, 100);
    this.warp(this.addTriangleSurfaceColor)(4, 10, 6, 100, 255, 100);
    this.warp(this.addSphereSurfaceDiameterColor)(60, 5, 0, 0, 0);
    this.warp(this.endObject)();
  }

  *addLineSurfaceWidthColor(p1, p2, width, r, g, b) {
    this.stage.vars.surfacesP1.push(
      this.toNumber(p1) + this.toNumber(this.vars.numberOfPoints)
    );
    this.stage.vars.surfacesP2.push(
      this.toNumber(p2) + this.toNumber(this.vars.numberOfPoints)
    );
    this.stage.vars.surfacesP3.push("");
    this.stage.vars.surfacesDiameter.push(width);
    this.stage.vars.surfacesType.push(2);
    this.stage.vars.surfacesR.push(r);
    this.stage.vars.surfacesG.push(g);
    this.stage.vars.surfacesB.push(b);
  }

  *addSphereSurfaceDiameterColor(point, diameter, r, g, b) {
    this.stage.vars.surfacesP1.push(
      this.toNumber(point) + this.toNumber(this.vars.numberOfPoints)
    );
    this.stage.vars.surfacesP2.push("");
    this.stage.vars.surfacesP3.push("");
    this.stage.vars.surfacesDiameter.push(diameter);
    this.stage.vars.surfacesType.push(3);
    this.stage.vars.surfacesR.push(r);
    this.stage.vars.surfacesG.push(g);
    this.stage.vars.surfacesB.push(b);
  }

  *whenIReceiveInitLighting() {
    this.stage.vars.lightSourceX = 100;
    this.stage.vars.lightSourceY = 150;
    this.stage.vars.lightSourceZ = 0;
    this.stage.vars.diffuseLight = 0.8;
    this.stage.vars.ambientLight = 0.2;
  }

  *whenIReceiveInitCamera() {
    this.stage.vars.cameraX = 0;
    this.stage.vars.cameraY = 60;
    this.stage.vars.cameraZ = 0;
    this.stage.vars.cameraRotX = 0;
    this.stage.vars.cameraRotY = 0;
    this.vars.playerVelX = 0;
    this.vars.playerVelY = 0;
    this.vars.playerVelZ = 0;
  }

  *whenIReceiveSystemPhysicsTick() {
    if (this.keyPressed("w")) {
      this.vars.playerVelX +=
        2 * Math.sin(this.degToRad(this.toNumber(this.stage.vars.cameraRotY)));
      this.vars.playerVelZ +=
        2 * Math.cos(this.degToRad(this.toNumber(this.stage.vars.cameraRotY)));
    }
    if (this.keyPressed("s")) {
      this.vars.playerVelX +=
        -2 * Math.sin(this.degToRad(this.toNumber(this.stage.vars.cameraRotY)));
      this.vars.playerVelZ +=
        -2 * Math.cos(this.degToRad(this.toNumber(this.stage.vars.cameraRotY)));
    }
    if (this.keyPressed("a")) {
      this.vars.playerVelX +=
        -2 * Math.cos(this.degToRad(this.toNumber(this.stage.vars.cameraRotY)));
      this.vars.playerVelZ +=
        2 * Math.sin(this.degToRad(this.toNumber(this.stage.vars.cameraRotY)));
    }
    if (this.keyPressed("d")) {
      this.vars.playerVelX +=
        2 * Math.cos(this.degToRad(this.toNumber(this.stage.vars.cameraRotY)));
      this.vars.playerVelZ +=
        -2 * Math.sin(this.degToRad(this.toNumber(this.stage.vars.cameraRotY)));
    }
    if (this.keyPressed("e")) {
      this.vars.playerVelY += 2;
    }
    if (this.keyPressed("q")) {
      this.vars.playerVelY -= 2;
    }
    if (this.keyPressed("up arrow")) {
      this.stage.vars.cameraRotX += 5;
    }
    if (this.keyPressed("down arrow")) {
      this.stage.vars.cameraRotX -= 5;
    }
    if (this.keyPressed("left arrow")) {
      this.stage.vars.cameraRotY -= 5;
    }
    if (this.keyPressed("right arrow")) {
      this.stage.vars.cameraRotY += 5;
    }
    if (this.compare(this.stage.vars.cameraRotX, 90) > 0) {
      this.stage.vars.cameraRotX = 90;
    }
    if (this.compare(this.stage.vars.cameraRotX, -90) < 0) {
      this.stage.vars.cameraRotX = -90;
    }
    this.stage.vars.cameraX += this.toNumber(this.vars.playerVelX);
    this.vars.playerVelX = this.toNumber(this.vars.playerVelX) * 0.8;
    this.stage.vars.cameraY += this.toNumber(this.vars.playerVelY);
    this.vars.playerVelY = this.toNumber(this.vars.playerVelY) * 0.8;
    this.stage.vars.cameraZ += this.toNumber(this.vars.playerVelZ);
    this.vars.playerVelZ = this.toNumber(this.vars.playerVelZ) * 0.8;
  }
}
