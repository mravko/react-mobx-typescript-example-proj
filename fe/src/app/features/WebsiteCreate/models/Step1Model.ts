import { BaseStepModel } from "./BaseStepModel";
import { runInAction, observable } from "mobx";
import { Step1Component } from "../views/Step1Component";
import { WebSiteStepperModel } from "./WebSiteStepperModel";

export class Step1Model extends BaseStepModel {
  @observable
  websiteName: string;
  @observable
  websiteUrl: string;
  @observable
  adminUserEmail: string;
  @observable
  adminUserPassword;

  constructor(stepperContainer: WebSiteStepperModel) {
    super(stepperContainer);
    runInAction(() => {
      this.title = "Step 1 - Website info";
      this.component = Step1Component;
      this.websiteName = "";
      this.websiteUrl = "";
      this.adminUserEmail = "";
      this.adminUserPassword = "";
      this.process = 30;
    });
  }

  isValid = (): boolean => {
    if (
      this.websiteName.length !== 0 &&
      this.websiteUrl.length !== 0 &&
      this.adminUserEmail.length !== 0 &&
      this.adminUserPassword.length !== 0
    )
      return super.isValid();

    return false;
  };
}
