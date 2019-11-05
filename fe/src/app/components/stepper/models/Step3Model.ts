import { BaseStepModel } from "./BaseStepModel";
import { runInAction, observable } from "mobx";
import { Step3Component } from "../views/Step3Component";
import { StepperModel } from "./StepperModel";

export class Step3Model extends BaseStepModel {
  @observable
  databaseName: string;
  @observable
  connectionString: string;
  @observable
  adminUserEmail: string;
  @observable
  adminUserPassword;

  constructor(stepperContainer: StepperModel) {
    super(stepperContainer);
    runInAction(() => {
      this.title = "Step 3 - Database";
      this.component = Step3Component;
      this.databaseName = "";
      this.connectionString = "";
      this.adminUserEmail = "";
      this.adminUserPassword = "";
      this.process = 100;
    });
  }

  isValid = (): boolean => {
    if (
      this.connectionString.length !== 0 &&
      this.databaseName.length !== 0 &&
      this.adminUserEmail.length !== 0 &&
      this.adminUserPassword.length !== 0
    )
      return super.isValid();

    return false;
  };
}
