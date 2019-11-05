import { BaseStepModel } from "./BaseStepModel";
import { runInAction, observable } from "mobx";
import { Step2Component } from "../views/Step2Component";
import { StepperModel } from "./StepperModel";

export class Step2Model extends BaseStepModel {
  @observable
  logoPath: string;
  constructor(stepperContainer: StepperModel) {
    super(stepperContainer);
    runInAction(() => {
      this.title = "Step 2";
      this.component = Step2Component;
      this.logoPath = "";
    });
  }

  isValid = (): boolean => {
    if (this.logoPath.length !== 0) return super.isValid();

    return false;
  };
}
