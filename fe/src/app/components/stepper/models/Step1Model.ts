import { BaseStepModel } from "./BaseStepModel";
import { runInAction, observable } from "mobx";
import { Step1Component } from "../views/Step1Component";
import { StepperModel } from "./StepperModel";

export class Step1Model extends BaseStepModel {
  @observable
  websiteName: string;
  @observable
  websiteUrl: string;
  @observable
  adminUserEmail: string;
  @observable
  adminUserPassword;

  constructor(stepperContainer: StepperModel) {
    super(stepperContainer);
    runInAction(() => {
      this.title = "Step 1";
      this.component = Step1Component;
    });
  }
}
