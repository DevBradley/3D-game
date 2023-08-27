/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Runtime extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Runtime/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Runtime/sounds/pop.wav")];

    this.triggers = [];

    this.vars.index1 = 13;
    this.vars.index2 = 10;
  }

  *moveObjectTo(object, x, y, z) {
    this.stage.vars.objectsX.splice(object - 1, 1, x);
    this.stage.vars.objectsY.splice(object - 1, 1, y);
    this.stage.vars.objectsZ.splice(object - 1, 1, z);
  }

  *rotateObjectTo(object, rotX, rotY, rotZ) {
    this.stage.vars.objectsRotX.splice(object - 1, 1, rotX);
    this.stage.vars.objectsRotY.splice(object - 1, 1, rotY);
    this.stage.vars.objectsRotZ.splice(object - 1, 1, rotZ);
  }

  *deleteObject(object) {
    for (
      let i = 0;
      i <
      this.toNumber(
        this.compare(object, 1) < 0 ||
          this.compare(object, this.stage.vars.objectsX.length) > 0
      );
      i++
    ) {
      return;
    }
    this.vars.index1 = 1;
    this.vars.index2 = 1;
    for (let i = 0; i < this.toNumber(object) - 1; i++) {
      this.vars.index2 += this.toNumber(
        this.itemOf(this.stage.vars.objectsPointIndex, this.vars.index1 - 1)
      );
      this.vars.index1++;
    }
    this.vars.index1 = 1;
    for (let i = 0; i < this.stage.vars.surfacesP1.length; i++) {
      if (
        this.compare(
          this.itemOf(this.stage.vars.surfacesP1, this.vars.index1 - 1),
          this.toNumber(this.vars.index2) +
            (this.toNumber(
              this.itemOf(this.stage.vars.objectsPointIndex, object - 1)
            ) -
              1)
        ) > 0 ||
        this.compare(
          this.itemOf(this.stage.vars.surfacesP2, this.vars.index1 - 1),
          this.toNumber(this.vars.index2) +
            (this.toNumber(
              this.itemOf(this.stage.vars.objectsPointIndex, object - 1)
            ) -
              1)
        ) > 0 ||
          this.compare(
            this.itemOf(this.stage.vars.surfacesP3, this.vars.index1 - 1),
            this.toNumber(this.vars.index2) +
              (this.toNumber(
                this.itemOf(this.stage.vars.objectsPointIndex, object - 1)
              ) -
                1)
          ) > 0
      ) {
        this.stage.vars.surfacesP1.splice(
          this.vars.index1 - 1,
          1,
          this.toNumber(
            this.itemOf(this.stage.vars.surfacesP1, this.vars.index1 - 1)
          ) -
            this.toNumber(
              this.itemOf(this.stage.vars.objectsPointIndex, object - 1)
            )
        );
        this.stage.vars.surfacesP2.splice(
          this.vars.index1 - 1,
          1,
          this.toNumber(
            this.itemOf(this.stage.vars.surfacesP2, this.vars.index1 - 1)
          ) -
            this.toNumber(
              this.itemOf(this.stage.vars.objectsPointIndex, object - 1)
            )
        );
        this.stage.vars.surfacesP3.splice(
          this.vars.index1 - 1,
          1,
          this.toNumber(
            this.itemOf(this.stage.vars.surfacesP3, this.vars.index1 - 1)
          ) -
            this.toNumber(
              this.itemOf(this.stage.vars.objectsPointIndex, object - 1)
            )
        );
        this.vars.index1++;
      } else {
        if (
          !(
            this.compare(
              this.itemOf(this.stage.vars.surfacesP1, this.vars.index1 - 1),
              this.vars.index2
            ) < 0
          ) ||
          !(
            this.compare(
              this.itemOf(this.stage.vars.surfacesP2, this.vars.index1 - 1),
              this.vars.index2
            ) < 0
          ) ||
            !(
              this.compare(
                this.itemOf(this.stage.vars.surfacesP3, this.vars.index1 - 1),
                this.vars.index2
              ) < 0
            )
        ) {
          this.stage.vars.surfacesP1.splice(this.vars.index1 - 1, 1);
          this.stage.vars.surfacesP2.splice(this.vars.index1 - 1, 1);
          this.stage.vars.surfacesP3.splice(this.vars.index1 - 1, 1);
          this.stage.vars.surfacesDiameter.splice(this.vars.index1 - 1, 1);
          this.stage.vars.surfacesType.splice(this.vars.index1 - 1, 1);
          this.stage.vars.surfacesR.splice(this.vars.index1 - 1, 1);
          this.stage.vars.surfacesG.splice(this.vars.index1 - 1, 1);
          this.stage.vars.surfacesB.splice(this.vars.index1 - 1, 1);
        } else {
          this.vars.index1++;
        }
      }
    }
    for (
      let i = 0;
      i <
      this.toNumber(this.itemOf(this.stage.vars.objectsPointIndex, object - 1));
      i++
    ) {
      this.stage.vars.pointDataX.splice(this.vars.index2 - 1, 1);
      this.stage.vars.pointDataY.splice(this.vars.index2 - 1, 1);
      this.stage.vars.pointDataZ.splice(this.vars.index2 - 1, 1);
    }
    this.stage.vars.objectsX.splice(object - 1, 1);
    this.stage.vars.objectsY.splice(object - 1, 1);
    this.stage.vars.objectsZ.splice(object - 1, 1);
    this.stage.vars.objectsRotX.splice(object - 1, 1);
    this.stage.vars.objectsRotY.splice(object - 1, 1);
    this.stage.vars.objectsRotZ.splice(object - 1, 1);
    this.stage.vars.objectsPointIndex.splice(object - 1, 1);
  }
}
