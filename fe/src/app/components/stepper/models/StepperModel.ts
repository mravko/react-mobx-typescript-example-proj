import RootModel from "app/models/RootModel";
import { observable, action, computed, runInAction } from "mobx";
import AppStore from "app/stores/AppStore";
import { BaseStepModel } from "./BaseStepModel";

export class StepperModel extends RootModel {
  @observable
  currentStepIndex: number;

  @observable
  stepsArray: BaseStepModel[];

  constructor() {
    super();
    runInAction(() => {
      this.stepsArray = [];
      this.currentStepIndex = 0;
    });
  }

  @action
  addStep = (step: BaseStepModel) => {
    this.stepsArray.push(step);
    return this;
  };

  @action
  nextStep = () => {
    if (this.currentStepIndex + 1 < this.stepsArray.length) {
      if (this.currentStepModel.isValid) {
        this.currentStepIndex++;
        AppStore.setPageTitle(this.currentStepModel.title);
      }
    }
  };

  @action
  prevStep = () => {
    if (this.currentStepIndex - 1 >= 0) {
      if (this.currentStepModel.isValid) {
        this.currentStepIndex--;
        AppStore.setPageTitle(this.currentStepModel.title);
      }
    }
  };

  @computed
  get currentStepModel(): BaseStepModel {
    return this.stepsArray[this.currentStepIndex];
  }
}
