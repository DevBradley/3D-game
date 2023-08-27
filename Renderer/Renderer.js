/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Renderer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Dot", "./Renderer/costumes/Dot.png", { x: 1, y: 1 }),
      new Costume("Big Rect", "./Renderer/costumes/Big Rect.svg", {
        x: 250.5,
        y: 189.5
      })
    ];

    this.sounds = [new Sound("pop", "./Renderer/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Init: Renderer" },
        this.whenIReceiveInitRenderer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "System: Rendering Tick" },
        this.whenIReceiveSystemRenderingTick
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "System: Loaded" },
        this.whenIReceiveSystemLoaded
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.index1 = 5;
    this.vars.viewMatrix11 = 0.4226182617;
    this.vars.viewMatrix12 = 0;
    this.vars.viewMatrix13 = -0.906307787;
    this.vars.viewMatrix21 = 0.3099755191836459;
    this.vars.viewMatrix22 = 0.9396926208;
    this.vars.viewMatrix23 = 0.1445439584278309;
    this.vars.viewMatrix31 = 0.8516507396174783;
    this.vars.viewMatrix32 = -0.3420201433;
    this.vars.viewMatrix33 = 0.3971312619348133;
    this.vars.triangleFill2 = -0.7142299179357258;
    this.vars.triangleFill3 = -1.18373034607439;
    this.vars.triangleFill4 = -0.39841754805467605;
    this.vars.triangleFill1 = 0.31916986040083606;
    this.vars.triangleFill0 = 2.7739568364442397;
    this.vars.triangleFill8 = 1.5665639586772533;
    this.vars.groupSize = 4;
    this.vars.ig = 1;
    this.vars.ib = 5;
    this.vars.index2 = 2;
    this.vars.index3 = 4;
    this.vars.worldMatrix11 = 1;
    this.vars.worldMatrix12 = 0;
    this.vars.worldMatrix13 = 0;
    this.vars.worldMatrix21 = 0;
    this.vars.worldMatrix22 = 1;
    this.vars.worldMatrix23 = 0;
    this.vars.worldMatrix31 = 0;
    this.vars.worldMatrix32 = 0;
    this.vars.worldMatrix33 = 1;
    this.vars.triangleFill5 = 0.625156063407238;
    this.vars.triangleFill6 = 1.1032842733648618;
    this.vars.triangleFill7 = 0.22060877883688756;
    this.vars.vectorX = 0.09713332110755259;
    this.vars.vectorY = 0.9369191069682796;
    this.vars.vectorZ = -0.3357792502945625;
    this.vars.length = 3296.2936088342094;
    this.vars.dot = 0.2;
    this.vars.surfaceR = 20;
    this.vars.surfaceG = 51;
    this.vars.surfaceB = 20;
    this.vars.transformedLightX = 357.0081207979771;
    this.vars.transformedLightY = 3066.052355916678;
    this.vars.transformedLightZ = -943.9596834039414;
    this.vars.x1 = 67.03843479297711;
    this.vars.y1 = 35.519934394888736;
    this.vars.z1 = 126.82826170334016;
    this.vars.x2 = 67.03843479297711;
    this.vars.y2 = -58.449327685111264;
    this.vars.z2 = 161.03027603334016;
    this.vars.x3 = -23.592343907022887;
    this.vars.y3 = -43.99493184232818;
    this.vars.z3 = 200.7434022268215;
    this.vars.pointDataX = [
      18.669482262977112,
      18.669482262977112,
      -23.592343907022887,
      -23.592343907022887,
      109.3002609629771,
      109.3002609629771,
      67.03843479297711,
      67.03843479297711,
      42.853958527977106
    ];
    this.vars.pointDataY = [
      80.97188215603641,
      -12.997379923963592,
      -43.99493184232818,
      49.97433023767182,
      66.51748631325331,
      -27.451775766746678,
      -58.449327685111264,
      35.519934394888736,
      11.261277235462572
    ];
    this.vars.pointDataZ = [
      251.70646185856933,
      285.90847618856935,
      200.7434022268215,
      166.5413878968215,
      211.99333566508798,
      246.19534999508798,
      161.03027603334016,
      126.82826170334016,
      206.36836894595476
    ];
    this.vars.screenX = [
      17.80119473306228,
      15.671713559689298,
      -28.205970780986227,
      -33.99853099094749,
      123.74003432143984,
      106.54978914767432,
      99.91428162852648,
      126.85835265919111,
      49.837822042427455
    ];
    this.vars.screenY = [
      77.20601042164756,
      -10.910383712072594,
      -52.59840933764943,
      72.01716887619467,
      75.30518195346201,
      -26.760969222816975,
      -87.11305097385748,
      67.21517854366988,
      13.096515470444125
    ];
    this.vars.surfacesDepth = [
      196.84268640899916,
      181.69203715291033,
      164.7043506089944,
      162.86731332116727
    ];
    this.vars.surfacesOrder = [4, 3, 1, 2];
    this.vars.clippedSurfacesP1 = [3, 8, 8, 1];
    this.vars.clippedSurfacesP2 = [4, 7, 4, 5];
    this.vars.clippedSurfacesP3 = [8, 3, 1, 8];
    this.vars.clippedSurfacesPerent = [3, 4, 5, 6];
    this.vars.tempList = [
      -0.422618261722856,
      -0.3099755191976434,
      -0.851650739655936,
      0.09713332110755259,
      0.9369191069682796,
      -0.3357792502945625
    ];
  }

  *transformAllPoints() {
    this.warp(this.calculateViewMatrix)();
    this.vars.pointDataX = [];
    this.vars.pointDataY = [];
    this.vars.pointDataZ = [];
    this.vars.screenX = [];
    this.vars.screenY = [];
    this.vars.index1 = 1;
    this.vars.index2 = 1;
    for (let i = 0; i < this.stage.vars.objectsX.length; i++) {
      this.warp(this.calculateWorldMatrix)(
        0 -
          this.toNumber(
            this.itemOf(this.stage.vars.objectsRotX, this.vars.index1 - 1)
          ),
        0 -
          this.toNumber(
            this.itemOf(this.stage.vars.objectsRotY, this.vars.index1 - 1)
          ),
        0 -
          this.toNumber(
            this.itemOf(this.stage.vars.objectsRotZ, this.vars.index1 - 1)
          )
      );
      for (
        let i = 0;
        i <
        this.toNumber(
          this.itemOf(this.stage.vars.objectsPointIndex, this.vars.index1 - 1)
        );
        i++
      ) {
        this.warp(this.transformPoint)(
          this.itemOf(this.stage.vars.pointDataX, this.vars.index2 - 1),
          this.itemOf(this.stage.vars.pointDataY, this.vars.index2 - 1),
          this.itemOf(this.stage.vars.pointDataZ, this.vars.index2 - 1)
        );
        this.warp(this.projectPoint)(this.vars.pointDataX.length);
        this.vars.index2++;
      }
      this.vars.index1++;
    }
    this.vars.transformedLightX =
      (this.toNumber(this.stage.vars.lightSourceX) -
        this.toNumber(this.stage.vars.cameraX)) *
        this.toNumber(this.vars.viewMatrix11) +
      ((this.toNumber(this.stage.vars.lightSourceY) -
        this.toNumber(this.stage.vars.cameraY)) *
        this.toNumber(this.vars.viewMatrix12) +
        (this.toNumber(this.stage.vars.lightSourceZ) -
          this.toNumber(this.stage.vars.cameraZ)) *
          this.toNumber(this.vars.viewMatrix13));
    this.vars.transformedLightY =
      (this.toNumber(this.stage.vars.lightSourceX) -
        this.toNumber(this.stage.vars.cameraX)) *
        this.toNumber(this.vars.viewMatrix21) +
      ((this.toNumber(this.stage.vars.lightSourceY) -
        this.toNumber(this.stage.vars.cameraY)) *
        this.toNumber(this.vars.viewMatrix22) +
        (this.toNumber(this.stage.vars.lightSourceZ) -
          this.toNumber(this.stage.vars.cameraZ)) *
          this.toNumber(this.vars.viewMatrix23));
    this.vars.transformedLightZ =
      (this.toNumber(this.stage.vars.lightSourceX) -
        this.toNumber(this.stage.vars.cameraX)) *
        this.toNumber(this.vars.viewMatrix31) +
      ((this.toNumber(this.stage.vars.lightSourceY) -
        this.toNumber(this.stage.vars.cameraY)) *
        this.toNumber(this.vars.viewMatrix32) +
        (this.toNumber(this.stage.vars.lightSourceZ) -
          this.toNumber(this.stage.vars.cameraZ)) *
          this.toNumber(this.vars.viewMatrix33));
  }

  *renderSurfaces() {
    this.warp(this.sortSurfaces)();
    this.clearPen();
    this.vars.index1 = 1;
    for (let i = 0; i < this.vars.surfacesOrder.length; i++) {
      this.vars.index2 = this.itemOf(
        this.vars.surfacesOrder,
        this.vars.index1 - 1
      );
      this.vars.index3 = this.itemOf(
        this.vars.clippedSurfacesPerent,
        this.vars.index2 - 1
      );
      if (
        this.toNumber(
          this.itemOf(this.stage.vars.surfacesType, this.vars.index3 - 1)
        ) === 1
      ) {
        this.warp(this.getColorAndLightingForTriangleColor)(
          this.itemOf(this.vars.clippedSurfacesP1, this.vars.index2 - 1),
          this.itemOf(this.vars.clippedSurfacesP2, this.vars.index2 - 1),
          this.itemOf(this.vars.clippedSurfacesP3, this.vars.index2 - 1),
          this.itemOf(this.stage.vars.surfacesR, this.vars.index3 - 1),
          this.itemOf(this.stage.vars.surfacesG, this.vars.index3 - 1),
          this.itemOf(this.stage.vars.surfacesB, this.vars.index3 - 1)
        );
        this.warp(this.renderTriangleSurface)(
          this.itemOf(this.vars.clippedSurfacesP1, this.vars.index2 - 1),
          this.itemOf(this.vars.clippedSurfacesP2, this.vars.index2 - 1),
          this.itemOf(this.vars.clippedSurfacesP3, this.vars.index2 - 1)
        );
      } else {
        if (
          this.toNumber(
            this.itemOf(this.stage.vars.surfacesType, this.vars.index3 - 1)
          ) === 2
        ) {
          this.warp(this.setPenColorToRgb)(
            this.itemOf(this.stage.vars.surfacesR, this.vars.index3 - 1),
            this.itemOf(this.stage.vars.surfacesG, this.vars.index3 - 1),
            this.itemOf(this.stage.vars.surfacesB, this.vars.index3 - 1)
          );
          this.warp(this.renderLineSurfaceWidth)(
            this.itemOf(this.vars.clippedSurfacesP1, this.vars.index2 - 1),
            this.itemOf(this.vars.clippedSurfacesP2, this.vars.index2 - 1),
            this.itemOf(this.stage.vars.surfacesDiameter, this.vars.index3 - 1)
          );
        } else {
          if (
            this.toNumber(
              this.itemOf(this.stage.vars.surfacesType, this.vars.index3 - 1)
            ) === 3
          ) {
            this.warp(this.setPenColorToRgb)(
              this.itemOf(this.stage.vars.surfacesR, this.vars.index3 - 1),
              this.itemOf(this.stage.vars.surfacesG, this.vars.index3 - 1),
              this.itemOf(this.stage.vars.surfacesB, this.vars.index3 - 1)
            );
            this.warp(this.renderSphereSurfaceDiameter)(
              this.itemOf(this.vars.clippedSurfacesP1, this.vars.index2 - 1),
              this.itemOf(
                this.stage.vars.surfacesDiameter,
                this.vars.index3 - 1
              )
            );
          }
        }
      }
      this.vars.index1++;
    }
  }

  *calculateViewMatrix() {
    this.vars.viewMatrix11 = Math.cos(
      this.degToRad(this.toNumber(this.stage.vars.cameraRotY))
    );
    this.vars.viewMatrix12 = 0;
    this.vars.viewMatrix13 =
      0 - Math.sin(this.degToRad(this.toNumber(this.stage.vars.cameraRotY)));
    this.vars.viewMatrix21 =
      0 -
      Math.sin(this.degToRad(this.toNumber(this.stage.vars.cameraRotY))) *
        Math.sin(this.degToRad(this.toNumber(this.stage.vars.cameraRotX)));
    this.vars.viewMatrix22 = Math.cos(
      this.degToRad(this.toNumber(this.stage.vars.cameraRotX))
    );
    this.vars.viewMatrix23 =
      0 -
      Math.cos(this.degToRad(this.toNumber(this.stage.vars.cameraRotY))) *
        Math.sin(this.degToRad(this.toNumber(this.stage.vars.cameraRotX)));
    this.vars.viewMatrix31 =
      Math.sin(this.degToRad(this.toNumber(this.stage.vars.cameraRotY))) *
      Math.cos(this.degToRad(this.toNumber(this.stage.vars.cameraRotX)));
    this.vars.viewMatrix32 = Math.sin(
      this.degToRad(this.toNumber(this.stage.vars.cameraRotX))
    );
    this.vars.viewMatrix33 =
      Math.cos(this.degToRad(this.toNumber(this.stage.vars.cameraRotY))) *
      Math.cos(this.degToRad(this.toNumber(this.stage.vars.cameraRotX)));
  }

  *transformPoint(x, y, z) {
    this.vars.tempList = [];
    this.warp(this.applyWorldTransformations)(x, y, z);
    this.warp(this.applyViewTransformations)(
      this.itemOf(this.vars.tempList, 0),
      this.itemOf(this.vars.tempList, 1),
      this.itemOf(this.vars.tempList, 2)
    );
    this.vars.pointDataX.push(this.itemOf(this.vars.tempList, 0));
    this.vars.pointDataY.push(this.itemOf(this.vars.tempList, 1));
    this.vars.pointDataZ.push(this.itemOf(this.vars.tempList, 2));
  }

  *projectPoint(point) {
    this.vars.screenX.push(
      (this.toNumber(this.itemOf(this.vars.pointDataX, point - 1)) /
        this.toNumber(this.itemOf(this.vars.pointDataZ, point - 1))) *
        240
    );
    this.vars.screenY.push(
      (this.toNumber(this.itemOf(this.vars.pointDataY, point - 1)) /
        this.toNumber(this.itemOf(this.vars.pointDataZ, point - 1))) *
        240
    );
  }

  *renderTriangleSurface(p1, p2, p3) {
    this.warp(this.fillTriangleResolution)(
      this.itemOf(this.vars.screenX, p1 - 1),
      this.itemOf(this.vars.screenY, p1 - 1),
      this.itemOf(this.vars.screenX, p2 - 1),
      this.itemOf(this.vars.screenY, p2 - 1),
      this.itemOf(this.vars.screenX, p3 - 1),
      this.itemOf(this.vars.screenY, p3 - 1),
      1
    );
  }

  *fillTriangleResolution(ax, ay, bx, by, cx, cy, resolution) {
    this.vars.triangleFill2 = Math.sqrt(
      (this.toNumber(cx) - this.toNumber(bx)) *
        (this.toNumber(cx) - this.toNumber(bx)) +
        (this.toNumber(cy) - this.toNumber(by)) *
          (this.toNumber(cy) - this.toNumber(by))
    );
    this.vars.triangleFill3 = Math.sqrt(
      (this.toNumber(cx) - this.toNumber(ax)) *
        (this.toNumber(cx) - this.toNumber(ax)) +
        (this.toNumber(cy) - this.toNumber(ay)) *
          (this.toNumber(cy) - this.toNumber(ay))
    );
    this.vars.triangleFill4 = Math.sqrt(
      (this.toNumber(ax) - this.toNumber(bx)) *
        (this.toNumber(ax) - this.toNumber(bx)) +
        (this.toNumber(ay) - this.toNumber(by)) *
          (this.toNumber(ay) - this.toNumber(by))
    );
    this.vars.triangleFill1 =
      (this.toNumber(this.vars.triangleFill2) +
        (this.toNumber(this.vars.triangleFill3) +
          this.toNumber(this.vars.triangleFill4))) /
      2;
    this.vars.triangleFill0 =
      2 *
      Math.sqrt(
        ((this.toNumber(this.vars.triangleFill1) -
          this.toNumber(this.vars.triangleFill2)) *
          ((this.toNumber(this.vars.triangleFill1) -
            this.toNumber(this.vars.triangleFill3)) *
            (this.toNumber(this.vars.triangleFill1) -
              this.toNumber(this.vars.triangleFill4)))) /
          this.toNumber(this.vars.triangleFill1)
      );
    this.vars.triangleFill1 += this.toNumber(this.vars.triangleFill1);
    this.goto(
      (this.toNumber(this.vars.triangleFill2) * this.toNumber(ax) +
        (this.toNumber(this.vars.triangleFill3) * this.toNumber(bx) +
          this.toNumber(this.vars.triangleFill4) * this.toNumber(cx))) /
        this.toNumber(this.vars.triangleFill1),
      (this.toNumber(this.vars.triangleFill2) * this.toNumber(ay) +
        (this.toNumber(this.vars.triangleFill3) * this.toNumber(by) +
          this.toNumber(this.vars.triangleFill4) * this.toNumber(cy))) /
        this.toNumber(this.vars.triangleFill1)
    );
    this.penSize = this.toNumber(this.vars.triangleFill0);
    this.penDown = true;
    if (this.compare(this.vars.triangleFill0, 0) > 0) {
      if (
        this.compare(this.vars.triangleFill3, this.vars.triangleFill2) < 0 ||
        this.compare(this.vars.triangleFill4, this.vars.triangleFill2) < 0
      ) {
        if (
          this.compare(this.vars.triangleFill2, this.vars.triangleFill3) < 0 ||
          this.compare(this.vars.triangleFill4, this.vars.triangleFill3) < 0
        ) {
          this.vars.triangleFill1 = this.x - this.toNumber(cx);
          this.vars.triangleFill2 = this.y - this.toNumber(cy);
        } else {
          this.vars.triangleFill1 = this.x - this.toNumber(bx);
          this.vars.triangleFill2 = this.y - this.toNumber(by);
        }
      } else {
        this.vars.triangleFill1 = this.x - this.toNumber(ax);
        this.vars.triangleFill2 = this.y - this.toNumber(ay);
      }
      this.vars.triangleFill1 =
        Math.sqrt(
          this.toNumber(this.vars.triangleFill1) *
            this.toNumber(this.vars.triangleFill1) +
            this.toNumber(this.vars.triangleFill2) *
              this.toNumber(this.vars.triangleFill2)
        ) /
        (this.toNumber(this.vars.triangleFill0) / 2);
      this.vars.triangleFill8 =
        (this.toNumber(this.vars.triangleFill1) * this.toNumber(resolution)) /
        (this.toNumber(this.vars.triangleFill1) - 1);
      this.vars.triangleFill1 =
        0.5 - 0.5 / this.toNumber(this.vars.triangleFill1);
      this.vars.triangleFill2 =
        (this.x - this.toNumber(ax)) / this.toNumber(this.vars.triangleFill0);
      this.vars.triangleFill3 =
        (this.y - this.toNumber(ay)) / this.toNumber(this.vars.triangleFill0);
      this.vars.triangleFill4 =
        (this.x - this.toNumber(bx)) / this.toNumber(this.vars.triangleFill0);
      this.vars.triangleFill5 =
        (this.y - this.toNumber(by)) / this.toNumber(this.vars.triangleFill0);
      this.vars.triangleFill6 =
        (this.x - this.toNumber(cx)) / this.toNumber(this.vars.triangleFill0);
      this.vars.triangleFill7 =
        (this.y - this.toNumber(cy)) / this.toNumber(this.vars.triangleFill0);
      for (
        let i = 0;
        i <
        Math.floor(
          Math.log10(1 / this.toNumber(this.vars.triangleFill0)) /
            Math.log10(this.toNumber(this.vars.triangleFill1))
        );
        i++
      ) {
        this.vars.triangleFill0 =
          this.toNumber(this.vars.triangleFill1) *
          this.toNumber(this.vars.triangleFill0);
        this.penSize = this.toNumber(this.vars.triangleFill0) + 0.5;
        this.goto(
          this.toNumber(ax) +
            this.toNumber(this.vars.triangleFill0) *
              this.toNumber(this.vars.triangleFill2),
          this.toNumber(ay) +
            this.toNumber(this.vars.triangleFill0) *
              this.toNumber(this.vars.triangleFill3)
        );
        this.goto(
          this.toNumber(bx) +
            this.toNumber(this.vars.triangleFill0) *
              this.toNumber(this.vars.triangleFill4),
          this.toNumber(by) +
            this.toNumber(this.vars.triangleFill0) *
              this.toNumber(this.vars.triangleFill5)
        );
        this.goto(
          this.toNumber(cx) +
            this.toNumber(this.vars.triangleFill0) *
              this.toNumber(this.vars.triangleFill6),
          this.toNumber(cy) +
            this.toNumber(this.vars.triangleFill0) *
              this.toNumber(this.vars.triangleFill7)
        );
        this.goto(
          this.toNumber(ax) +
            this.toNumber(this.vars.triangleFill0) *
              this.toNumber(this.vars.triangleFill2),
          this.toNumber(ay) +
            this.toNumber(this.vars.triangleFill0) *
              this.toNumber(this.vars.triangleFill3)
        );
      }
    }
    this.penSize = this.toNumber(resolution);
    this.goto(this.toNumber(ax), this.toNumber(ay));
    this.goto(this.toNumber(bx), this.toNumber(by));
    this.goto(this.toNumber(cx), this.toNumber(cy));
    this.goto(this.toNumber(ax), this.toNumber(ay));
    this.penDown = false;
  }

  *sortSurfaces() {
    this.warp(this.transformAllPoints)();
    this.vars.surfacesDepth = [];
    this.vars.surfacesOrder = [];
    this.vars.clippedSurfacesP1 = [];
    this.vars.clippedSurfacesP2 = [];
    this.vars.clippedSurfacesP3 = [];
    this.vars.clippedSurfacesPerent = [];
    this.vars.index1 = 1;
    for (let i = 0; i < this.stage.vars.surfacesP1.length; i++) {
      if (
        this.toNumber(
          this.itemOf(this.stage.vars.surfacesType, this.vars.index1 - 1)
        ) === 1
      ) {
        this.warp(this.loadTriangleSurface)(
          this.itemOf(this.stage.vars.surfacesP1, this.vars.index1 - 1),
          this.itemOf(this.stage.vars.surfacesP2, this.vars.index1 - 1),
          this.itemOf(this.stage.vars.surfacesP3, this.vars.index1 - 1)
        );
      } else {
        if (
          this.toNumber(
            this.itemOf(this.stage.vars.surfacesType, this.vars.index1 - 1)
          ) === 2
        ) {
          this.warp(this.loadLineSurface)(
            this.itemOf(this.stage.vars.surfacesP1, this.vars.index1 - 1),
            this.itemOf(this.stage.vars.surfacesP2, this.vars.index1 - 1)
          );
        } else {
          if (
            this.toNumber(
              this.itemOf(this.stage.vars.surfacesType, this.vars.index1 - 1)
            ) === 3
          ) {
            this.warp(this.loadSphereSurface)(
              this.itemOf(this.stage.vars.surfacesP1, this.vars.index1 - 1)
            );
          }
        }
      }
      this.vars.index1++;
    }
    this.warp(this.mergeSort)(this.vars.surfacesDepth.length);
  }

  *loadTriangleSurface(p1, p2, p3) {
    this.vars.tempList = [];
    this.warp(this.clip)(
      this.itemOf(this.vars.pointDataX, p1 - 1),
      this.itemOf(this.vars.pointDataY, p1 - 1),
      this.itemOf(this.vars.pointDataZ, p1 - 1),
      this.itemOf(this.vars.pointDataX, p2 - 1),
      this.itemOf(this.vars.pointDataY, p2 - 1),
      this.itemOf(this.vars.pointDataZ, p2 - 1),
      p1
    );
    this.warp(this.clip)(
      this.itemOf(this.vars.pointDataX, p2 - 1),
      this.itemOf(this.vars.pointDataY, p2 - 1),
      this.itemOf(this.vars.pointDataZ, p2 - 1),
      this.itemOf(this.vars.pointDataX, p3 - 1),
      this.itemOf(this.vars.pointDataY, p3 - 1),
      this.itemOf(this.vars.pointDataZ, p3 - 1),
      p2
    );
    this.warp(this.clip)(
      this.itemOf(this.vars.pointDataX, p3 - 1),
      this.itemOf(this.vars.pointDataY, p3 - 1),
      this.itemOf(this.vars.pointDataZ, p3 - 1),
      this.itemOf(this.vars.pointDataX, p1 - 1),
      this.itemOf(this.vars.pointDataY, p1 - 1),
      this.itemOf(this.vars.pointDataZ, p1 - 1),
      p3
    );
    if (this.compare(this.vars.tempList.length, 2) > 0) {
      this.warp(this.addClippedTriangleSurface)(
        this.itemOf(this.vars.tempList, 0),
        this.itemOf(this.vars.tempList, 1),
        this.itemOf(this.vars.tempList, 2)
      );
      if (this.vars.tempList.length === 4) {
        this.warp(this.addClippedTriangleSurface)(
          this.itemOf(this.vars.tempList, 2),
          this.itemOf(this.vars.tempList, 3),
          this.itemOf(this.vars.tempList, 0)
        );
      }
    }
  }

  *mergeSort(length) {
    this.vars.groupSize = 1;
    for (
      let i = 0;
      i < Math.ceil(Math.log10(this.toNumber(length)) / Math.log10(2));
      i++
    ) {
      this.vars.groupSize = this.toNumber(this.vars.groupSize) * 2;
      this.warp(this.mergeAllGroups)(this.vars.groupSize, length);
    }
  }

  *mergeAllGroups(groupSize, length) {
    this.vars.ig = 0;
    for (
      let i = 0;
      i < Math.floor(this.toNumber(length) / this.toNumber(groupSize));
      i++
    ) {
      this.vars.ig++;
      this.warp(this.mergeAnd)(
        this.toNumber(groupSize) * (this.toNumber(this.vars.ig) - 1) + 1,
        this.toNumber(groupSize) * (this.toNumber(this.vars.ig) - 0.5),
        this.toNumber(groupSize) * (this.toNumber(this.vars.ig) - 0.5) + 1,
        this.toNumber(groupSize) * this.toNumber(this.vars.ig)
      );
    }
    if (
      this.compare(
        (this.toNumber(length) % this.toNumber(groupSize)) /
          this.toNumber(groupSize),
        0.5
      ) > 0
    ) {
      this.vars.ig++;
      this.warp(this.mergeAnd)(
        this.toNumber(groupSize) * (this.toNumber(this.vars.ig) - 1) + 1,
        this.toNumber(groupSize) * (this.toNumber(this.vars.ig) - 0.5),
        this.toNumber(groupSize) * (this.toNumber(this.vars.ig) - 0.5) + 1,
        length
      );
    }
  }

  *mergeAnd(aMin, aMax, bMin, bMax) {
    this.vars.ib = bMin;
    for (let i = 0; i < this.toNumber(aMax) - this.toNumber(aMin) + 1; i++) {
      while (
        !(
          this.compare(
            this.itemOf(this.vars.surfacesDepth, aMin - 1),
            this.itemOf(this.vars.surfacesDepth, this.vars.ib - 1)
          ) > 0 || this.compare(this.vars.ib, bMax) > 0
        )
      ) {
        this.vars.ib++;
      }
      this.vars.surfacesDepth.splice(
        this.vars.ib - 1,
        0,
        this.itemOf(this.vars.surfacesDepth, aMin - 1)
      );
      this.vars.surfacesDepth.splice(aMin - 1, 1);
      this.vars.surfacesOrder.splice(
        this.vars.ib - 1,
        0,
        this.itemOf(this.vars.surfacesOrder, aMin - 1)
      );
      this.vars.surfacesOrder.splice(aMin - 1, 1);
    }
  }

  *setPenColorToRgb(r, g, b) {
    this.penColor = Color.num(
      Math.round(this.toNumber(r)) * 65536 +
        (Math.round(this.toNumber(g)) * 256 + Math.round(this.toNumber(b)))
    );
  }

  *whenIReceiveInitRenderer() {
    this.costume = "Dot";
    this.size = 50000;
    this.costume = "Big Rect";
  }

  *whenIReceiveSystemRenderingTick() {
    yield* this.renderSurfaces();
  }

  *clip(x1, y1, z1, x2, y2, z2, point) {
    if (this.compare(z1, 1) > 0) {
      this.vars.tempList.push(point);
    }
    if (
      this.compare((this.toNumber(z1) - 1) * (this.toNumber(z2) - 1), 0) < 0
    ) {
      this.vars.pointDataX.push(
        this.toNumber(x1) -
          ((this.toNumber(x1) - this.toNumber(x2)) /
            (this.toNumber(z1) - this.toNumber(z2))) *
            (this.toNumber(z1) - 1)
      );
      this.vars.pointDataY.push(
        this.toNumber(y1) -
          ((this.toNumber(y1) - this.toNumber(y2)) /
            (this.toNumber(z1) - this.toNumber(z2))) *
            (this.toNumber(z1) - 1)
      );
      this.vars.pointDataZ.push(1);
      this.warp(this.projectPoint)(this.vars.pointDataX.length);
      this.vars.tempList.push(this.vars.screenX.length);
    }
  }

  *addClippedTriangleSurface(p1, p2, p3) {
    if (
      this.compare(
        0,
        (this.toNumber(this.itemOf(this.vars.screenX, p2 - 1)) -
          this.toNumber(this.itemOf(this.vars.screenX, p1 - 1))) *
          (this.toNumber(this.itemOf(this.vars.screenY, p3 - 1)) -
            this.toNumber(this.itemOf(this.vars.screenY, p1 - 1))) -
          (this.toNumber(this.itemOf(this.vars.screenX, p3 - 1)) -
            this.toNumber(this.itemOf(this.vars.screenX, p1 - 1))) *
            (this.toNumber(this.itemOf(this.vars.screenY, p2 - 1)) -
              this.toNumber(this.itemOf(this.vars.screenY, p1 - 1)))
      ) > 0
    ) {
      this.vars.clippedSurfacesP1.push(p1);
      this.vars.clippedSurfacesP2.push(p2);
      this.vars.clippedSurfacesP3.push(p3);
      this.vars.clippedSurfacesPerent.push(this.vars.index1);
      this.vars.surfacesDepth.push(
        (this.toNumber(this.itemOf(this.vars.pointDataZ, p1 - 1)) +
          (this.toNumber(this.itemOf(this.vars.pointDataZ, p2 - 1)) +
            this.toNumber(this.itemOf(this.vars.pointDataZ, p3 - 1)))) /
          3
      );
      this.vars.surfacesOrder.push(this.vars.clippedSurfacesP1.length);
    }
  }

  *calculateWorldMatrix(rotX, rotY, rotZ) {
    this.vars.worldMatrix11 =
      Math.cos(this.degToRad(this.toNumber(rotY))) *
      Math.cos(this.degToRad(this.toNumber(rotZ)));
    this.vars.worldMatrix12 =
      Math.sin(this.degToRad(this.toNumber(rotX))) *
        (Math.sin(this.degToRad(this.toNumber(rotY))) *
          Math.cos(this.degToRad(this.toNumber(rotZ)))) -
      Math.cos(this.degToRad(this.toNumber(rotX))) *
        Math.sin(this.degToRad(this.toNumber(rotZ)));
    this.vars.worldMatrix13 =
      Math.cos(this.degToRad(this.toNumber(rotX))) *
        (Math.sin(this.degToRad(this.toNumber(rotY))) *
          Math.cos(this.degToRad(this.toNumber(rotZ)))) +
      Math.sin(this.degToRad(this.toNumber(rotX))) *
        Math.sin(this.degToRad(this.toNumber(rotZ)));
    this.vars.worldMatrix21 =
      Math.cos(this.degToRad(this.toNumber(rotY))) *
      Math.sin(this.degToRad(this.toNumber(rotZ)));
    this.vars.worldMatrix22 =
      Math.sin(this.degToRad(this.toNumber(rotX))) *
        (Math.sin(this.degToRad(this.toNumber(rotY))) *
          Math.sin(this.degToRad(this.toNumber(rotZ)))) +
      Math.cos(this.degToRad(this.toNumber(rotX))) *
        Math.cos(this.degToRad(this.toNumber(rotZ)));
    this.vars.worldMatrix23 =
      Math.cos(this.degToRad(this.toNumber(rotX))) *
        (Math.sin(this.degToRad(this.toNumber(rotY))) *
          Math.sin(this.degToRad(this.toNumber(rotZ)))) -
      Math.sin(this.degToRad(this.toNumber(rotX))) *
        Math.cos(this.degToRad(this.toNumber(rotZ)));
    this.vars.worldMatrix31 = 0 - Math.sin(this.degToRad(this.toNumber(rotY)));
    this.vars.worldMatrix32 =
      Math.sin(this.degToRad(this.toNumber(rotX))) *
      Math.cos(this.degToRad(this.toNumber(rotY)));
    this.vars.worldMatrix33 =
      Math.cos(this.degToRad(this.toNumber(rotX))) *
      Math.cos(this.degToRad(this.toNumber(rotY)));
  }

  *applyWorldTransformations(x, y, z) {
    this.vars.tempList.push(
      this.toNumber(x) * this.toNumber(this.vars.worldMatrix11) +
        (this.toNumber(y) * this.toNumber(this.vars.worldMatrix12) +
          this.toNumber(z) * this.toNumber(this.vars.worldMatrix13)) +
        this.toNumber(
          this.itemOf(this.stage.vars.objectsX, this.vars.index1 - 1)
        )
    );
    this.vars.tempList.push(
      this.toNumber(x) * this.toNumber(this.vars.worldMatrix21) +
        (this.toNumber(y) * this.toNumber(this.vars.worldMatrix22) +
          this.toNumber(z) * this.toNumber(this.vars.worldMatrix23)) +
        this.toNumber(
          this.itemOf(this.stage.vars.objectsY, this.vars.index1 - 1)
        )
    );
    this.vars.tempList.push(
      this.toNumber(x) * this.toNumber(this.vars.worldMatrix31) +
        (this.toNumber(y) * this.toNumber(this.vars.worldMatrix32) +
          this.toNumber(z) * this.toNumber(this.vars.worldMatrix33)) +
        this.toNumber(
          this.itemOf(this.stage.vars.objectsZ, this.vars.index1 - 1)
        )
    );
  }

  *applyViewTransformations(x, y, z) {
    this.vars.tempList.splice(
      0,
      1,
      (this.toNumber(x) - this.toNumber(this.stage.vars.cameraX)) *
        this.toNumber(this.vars.viewMatrix11) +
        ((this.toNumber(y) - this.toNumber(this.stage.vars.cameraY)) *
          this.toNumber(this.vars.viewMatrix12) +
          (this.toNumber(z) - this.toNumber(this.stage.vars.cameraZ)) *
            this.toNumber(this.vars.viewMatrix13))
    );
    this.vars.tempList.splice(
      1,
      1,
      (this.toNumber(x) - this.toNumber(this.stage.vars.cameraX)) *
        this.toNumber(this.vars.viewMatrix21) +
        ((this.toNumber(y) - this.toNumber(this.stage.vars.cameraY)) *
          this.toNumber(this.vars.viewMatrix22) +
          (this.toNumber(z) - this.toNumber(this.stage.vars.cameraZ)) *
            this.toNumber(this.vars.viewMatrix23))
    );
    this.vars.tempList.splice(
      2,
      1,
      (this.toNumber(x) - this.toNumber(this.stage.vars.cameraX)) *
        this.toNumber(this.vars.viewMatrix31) +
        ((this.toNumber(y) - this.toNumber(this.stage.vars.cameraY)) *
          this.toNumber(this.vars.viewMatrix32) +
          (this.toNumber(z) - this.toNumber(this.stage.vars.cameraZ)) *
            this.toNumber(this.vars.viewMatrix33))
    );
  }

  *renderLineSurfaceWidth(p1, p2, width) {
    this.penSize =
      (this.toNumber(width) * 480) /
        ((this.toNumber(this.itemOf(this.vars.pointDataZ, p1 - 1)) +
          this.toNumber(this.itemOf(this.vars.pointDataZ, p2 - 1))) /
          2) /
        2 +
      0.5;
    this.goto(
      this.toNumber(this.itemOf(this.vars.screenX, p1 - 1)),
      this.toNumber(this.itemOf(this.vars.screenY, p1 - 1))
    );
    this.penDown = true;
    this.goto(
      this.toNumber(this.itemOf(this.vars.screenX, p2 - 1)),
      this.toNumber(this.itemOf(this.vars.screenY, p2 - 1))
    );
    this.penDown = false;
  }

  *loadLineSurface(p1, p2) {
    this.vars.tempList = [];
    this.warp(this.clip)(
      this.itemOf(this.vars.pointDataX, p1 - 1),
      this.itemOf(this.vars.pointDataY, p1 - 1),
      this.itemOf(this.vars.pointDataZ, p1 - 1),
      this.itemOf(this.vars.pointDataX, p2 - 1),
      this.itemOf(this.vars.pointDataY, p2 - 1),
      this.itemOf(this.vars.pointDataZ, p2 - 1),
      p1
    );
    this.warp(this.clip)(
      this.itemOf(this.vars.pointDataX, p2 - 1),
      this.itemOf(this.vars.pointDataY, p2 - 1),
      this.itemOf(this.vars.pointDataZ, p2 - 1),
      this.itemOf(this.vars.pointDataX, p1 - 1),
      this.itemOf(this.vars.pointDataY, p1 - 1),
      this.itemOf(this.vars.pointDataZ, p1 - 1),
      p2
    );
    if (this.compare(this.vars.tempList.length, 1) > 0) {
      this.vars.clippedSurfacesP1.push(this.itemOf(this.vars.tempList, 0));
      this.vars.clippedSurfacesP2.push(this.itemOf(this.vars.tempList, 1));
      this.vars.clippedSurfacesP3.push("");
      this.vars.clippedSurfacesPerent.push(this.vars.index1);
      this.vars.surfacesDepth.push(
        (this.toNumber(
          this.itemOf(
            this.vars.pointDataZ,
            this.itemOf(this.vars.tempList, 0) - 1
          )
        ) +
          this.toNumber(
            this.itemOf(
              this.vars.pointDataZ,
              this.itemOf(this.vars.tempList, 1) - 1
            )
          )) /
          2
      );
      this.vars.surfacesOrder.push(this.vars.clippedSurfacesP1.length);
    }
  }

  *loadSphereSurface(point) {
    if (this.compare(this.itemOf(this.vars.pointDataZ, point - 1), 1) > 0) {
      this.vars.clippedSurfacesP1.push(point);
      this.vars.clippedSurfacesP2.push("");
      this.vars.clippedSurfacesP3.push("");
      this.vars.clippedSurfacesPerent.push(this.vars.index1);
      this.vars.surfacesDepth.push(
        this.itemOf(this.vars.pointDataZ, point - 1)
      );
      this.vars.surfacesOrder.push(this.vars.clippedSurfacesP1.length);
    }
  }

  *renderSphereSurfaceDiameter(point, diameter) {
    this.penSize =
      (this.toNumber(diameter) * 480) /
        this.toNumber(this.itemOf(this.vars.pointDataZ, point - 1)) /
        2 +
      0.5;
    this.goto(
      this.toNumber(this.itemOf(this.vars.screenX, point - 1)),
      this.toNumber(this.itemOf(this.vars.screenY, point - 1))
    );
    this.penDown = true;
    this.penDown = false;
  }

  *getColorAndLightingForTriangleColor(p1, p2, p3, r, g, b) {
    this.vars.x1 = this.itemOf(this.vars.pointDataX, p1 - 1);
    this.vars.y1 = this.itemOf(this.vars.pointDataY, p1 - 1);
    this.vars.z1 = this.itemOf(this.vars.pointDataZ, p1 - 1);
    this.vars.x2 = this.itemOf(this.vars.pointDataX, p2 - 1);
    this.vars.y2 = this.itemOf(this.vars.pointDataY, p2 - 1);
    this.vars.z2 = this.itemOf(this.vars.pointDataZ, p2 - 1);
    this.vars.x3 = this.itemOf(this.vars.pointDataX, p3 - 1);
    this.vars.y3 = this.itemOf(this.vars.pointDataY, p3 - 1);
    this.vars.z3 = this.itemOf(this.vars.pointDataZ, p3 - 1);
    this.vars.tempList = [];
    this.warp(this.normalise)(
      (this.toNumber(this.vars.y2) - this.toNumber(this.vars.y1)) *
        (this.toNumber(this.vars.z3) - this.toNumber(this.vars.z1)) -
        (this.toNumber(this.vars.y3) - this.toNumber(this.vars.y1)) *
          (this.toNumber(this.vars.z2) - this.toNumber(this.vars.z1)),
      (this.toNumber(this.vars.x3) - this.toNumber(this.vars.x1)) *
        (this.toNumber(this.vars.z2) - this.toNumber(this.vars.z1)) -
        (this.toNumber(this.vars.x2) - this.toNumber(this.vars.x1)) *
          (this.toNumber(this.vars.z3) - this.toNumber(this.vars.z1)),
      (this.toNumber(this.vars.x2) - this.toNumber(this.vars.x1)) *
        (this.toNumber(this.vars.y3) - this.toNumber(this.vars.y1)) -
        (this.toNumber(this.vars.x3) - this.toNumber(this.vars.x1)) *
          (this.toNumber(this.vars.y2) - this.toNumber(this.vars.y1))
    );
    this.vars.tempList.push(this.vars.vectorX);
    this.vars.tempList.push(this.vars.vectorY);
    this.vars.tempList.push(this.vars.vectorZ);
    this.warp(this.normalise)(
      this.toNumber(this.vars.transformedLightX) -
        (this.toNumber(this.vars.x1) +
          (this.toNumber(this.vars.x2) + this.toNumber(this.vars.x3))) /
          3,
      this.toNumber(this.vars.transformedLightY) -
        (this.toNumber(this.vars.y1) +
          (this.toNumber(this.vars.y2) + this.toNumber(this.vars.y3))) /
          3,
      this.toNumber(this.vars.transformedLightZ) -
        (this.toNumber(this.vars.z1) +
          (this.toNumber(this.vars.z2) + this.toNumber(this.vars.z3))) /
          3
    );
    this.vars.tempList.push(this.vars.vectorX);
    this.vars.tempList.push(this.vars.vectorY);
    this.vars.tempList.push(this.vars.vectorZ);
    this.vars.dot =
      this.toNumber(this.itemOf(this.vars.tempList, 0)) *
        this.toNumber(this.itemOf(this.vars.tempList, 3)) +
      (this.toNumber(this.itemOf(this.vars.tempList, 1)) *
        this.toNumber(this.itemOf(this.vars.tempList, 4)) +
        this.toNumber(this.itemOf(this.vars.tempList, 2)) *
          this.toNumber(this.itemOf(this.vars.tempList, 5)));
    if (this.compare(this.vars.dot, 0) < 0) {
      this.vars.dot = 0;
    }
    this.vars.dot =
      this.toNumber(this.vars.dot) *
        this.toNumber(this.stage.vars.diffuseLight) +
      this.toNumber(this.stage.vars.ambientLight);
    this.vars.surfaceR =
      this.toNumber(r) *
        this.toNumber(this.vars.dot) *
        this.toNumber(
          this.compare(255, this.toNumber(r) * this.toNumber(this.vars.dot)) > 0
        ) +
      255 *
        this.toNumber(
          !(
            this.compare(this.toNumber(r) * this.toNumber(this.vars.dot), 255) <
            0
          )
        );
    this.vars.surfaceG =
      this.toNumber(g) *
        this.toNumber(this.vars.dot) *
        this.toNumber(
          this.compare(255, this.toNumber(g) * this.toNumber(this.vars.dot)) > 0
        ) +
      255 *
        this.toNumber(
          !(
            this.compare(this.toNumber(g) * this.toNumber(this.vars.dot), 255) <
            0
          )
        );
    this.vars.surfaceB =
      this.toNumber(b) *
        this.toNumber(this.vars.dot) *
        this.toNumber(
          this.compare(255, this.toNumber(b) * this.toNumber(this.vars.dot)) > 0
        ) +
      255 *
        this.toNumber(
          !(
            this.compare(this.toNumber(b) * this.toNumber(this.vars.dot), 255) <
            0
          )
        );
    this.warp(this.setPenColorToRgb)(
      this.vars.surfaceR,
      this.vars.surfaceG,
      this.vars.surfaceB
    );
  }

  *normalise(x, y, z) {
    this.vars.length = Math.sqrt(
      this.toNumber(x) * this.toNumber(x) +
        (this.toNumber(y) * this.toNumber(y) +
          this.toNumber(z) * this.toNumber(z))
    );
    this.vars.vectorX = this.toNumber(x) / this.toNumber(this.vars.length);
    this.vars.vectorY = this.toNumber(y) / this.toNumber(this.vars.length);
    this.vars.vectorZ = this.toNumber(z) / this.toNumber(this.vars.length);
  }

  *whenGreenFlagClicked() {
    yield* this.broadcastAndWait("Init: Lighting");
    yield* this.broadcastAndWait("Init: Objects");
    yield* this.broadcastAndWait("Init: Camera");
    yield* this.broadcastAndWait("Init: Renderer");
    this.broadcast("System: Loaded");
  }

  *whenIReceiveSystemLoaded() {
    while (true) {
      yield* this.broadcastAndWait("System: Physics Tick");
      yield* this.broadcastAndWait("System: Rendering Tick");
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.wait(0.01);
      this.stage.vars.lightSourceY += 18;
      yield;
    }
  }
}
