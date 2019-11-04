import * as React from "react";
import { StepperModel } from "./StepperModel";
import { observer } from "mobx-react";
import { runInAction } from "mobx";
import { Step1Model } from "./Step1";
import { Step2Model } from "./Step2";

export interface IStepperComponentProps {}

@observer
export default class StepperComponent extends React.Component<
  IStepperComponentProps
> {
  constructor(props) {
    super(props);

    runInAction(() => {
      let step1 = new Step1Model();
      let step2 = new Step2Model();

      this.viewModel = new StepperModel([step1, step2]);
    });
  }

  viewModel: StepperModel;

  public render() {
    return (
      <div>
        <span>{this.viewModel.currentStepModel.title}</span>
        <hr></hr>
        {this.viewModel.currentStepModel.component}
        <hr></hr>
        <button onClick={this.viewModel.prevStep}>Prev</button>
        <button onClick={this.viewModel.nextStep}>Next</button>
      </div>
    );
  }
}
