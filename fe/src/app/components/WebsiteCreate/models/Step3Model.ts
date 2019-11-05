import { BaseStepModel } from "./BaseStepModel";
import { runInAction, observable, action } from "mobx";
import { Step3Component } from "../views/Step3Component";
import { WebSiteStepperModel } from "./WebSiteStepperModel";

export class Step3Model extends BaseStepModel {
  @observable
  databaseName: string;
  @observable
  connectionString: string;
  @observable
  dbAdminUserEmail: string;
  @observable
  dbAdminUserPassword;

  constructor(stepperContainer: WebSiteStepperModel) {
    super(stepperContainer);
    runInAction(() => {
      this.title = "Step 3 - Database";
      this.component = Step3Component;
      this.databaseName = "";
      this.connectionString = "";
      this.dbAdminUserEmail = "";
      this.dbAdminUserPassword = "";
      this.process = 100;
    });
  }

  isValid = (): boolean => {
    if (
      this.connectionString.length !== 0 &&
      this.databaseName.length !== 0 &&
      this.dbAdminUserEmail.length !== 0 &&
      this.dbAdminUserPassword.length !== 0
    )
      return super.isValid();

    return false;
  };

  @action
  saveModel() {}
}
