import { observable, computed, action } from "mobx";
import * as React from "react";

export class StepModel {
  @computed
  get isValid(): boolean {
    return true;
  }
  @observable
  title: string;

  component: React.ReactElement;

  @action
  changeValue = e => {
    this[e.target.name] = e.target.value;
  };
}
