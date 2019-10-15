import { observable, action, reaction, computed } from "mobx";
import { HerbivoreModel } from "./Herbivore";
import { CarnivoreModel } from "./CarnivoreModel";
import RootModel from "app/models/RootModel";
import { TimeDimensionModel } from "./TimeDimensionModel";

export class LocationModel extends RootModel {
  constructor(id: string, timeAware: TimeDimensionModel) {
    super();
    this.id = id;
    this.herbivoreSmell = 0;
    this.disposers.push(
      reaction(
        () => {
          return timeAware.seconds;
        },
        () => {
          if (this.herbivore) {
            this.herbivoreSmell = 100;
          } else {
            this.herbivoreSmell = this.herbivoreSmell - 25;
            if (this.herbivoreSmell < 0) this.herbivoreSmell = 0;
          }
        }
      )
    );
  }

  @computed
  get positionX(): number {
    return parseInt(this.id.split("_")[1]);
  }

  @computed
  get positionY(): number {
    return parseInt(this.id.split("_")[0]);
  }

  id: string;

  @observable
  carnivore: CarnivoreModel;

  @observable
  herbivore: HerbivoreModel;

  @observable
  herbivoreSmell: number;

  @action
  resetLocation() {
    this.carnivore = null;
    this.herbivore = null;
  }
}
