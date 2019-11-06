import { observable, action } from "mobx";
import * as React from "react";
import { WebSiteStepperModel } from "./WebSiteStepperModel";

export class BaseStepModel {
  isValid(): boolean {
    return true;
  }

  @observable
  process;

  @observable
  title: string;

  component: React.ComponentClass;

  @action
  changeValue = e => {
    this[e.target.name] = e.target.value;
  };

  stepperContainer: WebSiteStepperModel;

  constructor(stepperContainer: WebSiteStepperModel) {
    this.stepperContainer = stepperContainer;
  }
}
