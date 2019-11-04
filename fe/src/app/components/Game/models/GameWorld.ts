import RootModel from "app/models/RootModel";
import { observable, action, runInAction, extendObservable } from "mobx";
import { HerbivoreModel } from "./Herbivore";
import { CarnivoreModel } from "./CarnivoreModel";
import { SoulModel } from "./Soul";
import { TimeDimensionModel } from "./TimeDimensionModel";
import { LocationModel } from "./LocationModel";

export class GameWorldModel extends RootModel {
  constructor(height: number, width: number) {
    super();
    runInAction(() => {
      this.worldHeight = height;
      this.worldWidth = width;
      this.souls = [];
      this.timeDimension = new TimeDimensionModel();
      this.locations = {};
    });
  }
  @observable.struct
  worldWidth: number;

  @observable.struct
  worldHeight: number;

  @observable
  souls: SoulModel[];

  @observable
  timeDimension: TimeDimensionModel;

  get randomPosition(): {
    x: number;
    y: number;
  } {
    let x = Math.random();
    x = Math.round(x * this.worldWidth);
    let y = Math.random();
    y = Math.round(y * this.worldWidth);
    return { x, y };
  }

  @observable
  locations;

  @action
  ltbl() {
    for (let index = 0; index < 500; index++) {
      const p = this.randomPosition;
      this.souls.push(
        new HerbivoreModel(p.x, p.y, `h${index}`, this.timeDimension, this)
      );
    }

    for (let index = 0; index < 20; index++) {
      const p = this.randomPosition;
      const c = new CarnivoreModel(
        p.x,
        p.y,
        `c${index}`,
        this.timeDimension,
        this
      );

      this.souls.push(c);
    }

    let tempLocations = {};
    for (let i = 0; i <= this.worldHeight; i++) {
      for (let j = 0; j <= this.worldWidth; j++) {
        tempLocations[`${i}_${j}`] = new LocationModel(
          `${i}_${j}`,
          this.timeDimension
        );
      }
    }
    extendObservable(this.locations, tempLocations);

    window["world"] = this;
  }
}
