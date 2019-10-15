import RootModel from "app/models/RootModel";
import { observable, runInAction } from "mobx";
export class TimeDimensionModel extends RootModel {
  constructor() {
    super();

    runInAction(() => {
      this.seconds = 0;
    });

    this.time = setInterval(() => {
      runInAction(() => {
        this.seconds++;
      });
    }, 100);

    this.disposers.push(this.disposeInterval);
  }

  time;

  disposeInterval() {
    this.time && clearInterval(this.time);
  }

  @observable
  seconds: number;
}
