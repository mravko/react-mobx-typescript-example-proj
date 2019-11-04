import * as React from "react";
import { StepperModel, StepModel } from "./StepperModel";
import { observer } from "mobx-react";
import { runInAction } from "mobx";

export interface IStepperComponentProps {}

@observer
export default class StepperComponent extends React.Component<
  IStepperComponentProps
> {
  constructor(props) {
    super(props);

    runInAction(() => {
      let step1 = new StepModel();
      step1.title = "Step 1";
      let step2 = new StepModel();
      step2.title = "Step 2";
      let step3 = new StepModel();
      step3.title = "Step 3";
      this.viewModel = new StepperModel([step1, step2, step3]);
    });
  }

  viewModel: StepperModel;

  public render() {
    return (
      <div>
        <span>{this.viewModel.currentStepModel.title}</span>
        <hr></hr>
        <button onClick={this.viewModel.prevStep}>Prev</button>
        <button onClick={this.viewModel.nextStep}>Next</button>
      </div>
    );
  }
}
