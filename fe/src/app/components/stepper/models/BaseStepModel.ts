import { observable, action } from "mobx";
import * as React from "react";
import { StepperModel } from "./StepperModel";

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

  stepperContainer: StepperModel;

  constructor(stepperContainer: StepperModel) {
    this.stepperContainer = stepperContainer;
  }
}
