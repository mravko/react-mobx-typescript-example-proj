import RootModel from "app/models/RootModel";
import { observable, action, computed, runInAction } from "mobx";
import AppStore from "app/stores/AppStore";
import { StepModel } from "./StepModel";

export class StepperModel extends RootModel {
  @observable
  currentStepIndex: number;

  @observable
  stepsArray: StepModel[];

  constructor(stepsArray: StepModel[]) {
    super();
    runInAction(() => {
      this.stepsArray = stepsArray;
      this.currentStepIndex = 0;
    });
  }

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
  get currentStepModel(): StepModel {
    return this.stepsArray[this.currentStepIndex];
  }
}
