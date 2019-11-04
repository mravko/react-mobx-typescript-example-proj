import RootModel from "app/models/RootModel";
import { observable, action, computed } from "mobx";

export class StepperModel extends RootModel {
  @observable
  currentStepIndex: number = 0;

  @observable
  stepsArray: StepModel[];

  constructor(stepsArray: StepModel[]) {
    super();
    this.stepsArray = stepsArray;
  }

  @action
  nextStep() {
    if (this.currentStepIndex + 1 < this.stepsArray.length) {
      this.currentStepIndex++;
    }
  }

  @action
  prevStep() {
    if (this.currentStepIndex - 1 >= 0) {
      this.currentStepIndex--;
    }
  }

  @computed
  get currentStepModel(): StepModel {
    return this.stepsArray[this.currentStepIndex];
  }
}

export class StepModel {
  @observable
  title: string;
}
