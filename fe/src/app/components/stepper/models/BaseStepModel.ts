import { observable, computed, action } from "mobx";
import * as React from "react";
import { StepperModel } from "./StepperModel";

export class BaseStepModel {
  @computed
  get isValid(): boolean {
    return true;
  }
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
