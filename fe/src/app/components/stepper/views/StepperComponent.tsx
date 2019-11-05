import * as React from "react";
import { StepperModel } from "../models/StepperModel";
import { observer } from "mobx-react";
import { runInAction } from "mobx";
import { Step1Model } from "../models/Step1Model";
import { Step2Model } from "../models/Step2Model";

export interface IStepperComponentProps {}

@observer
export default class StepperComponent extends React.Component<
  IStepperComponentProps
> {
  constructor(props) {
    super(props);

    runInAction(() => {
      this.viewModel = new StepperModel();

      let step1 = new Step1Model(this.viewModel);
      let step2 = new Step2Model(this.viewModel);

      this.viewModel.addStep(step1).addStep(step2);
    });
  }

  viewModel: StepperModel;

  public render() {
    const Component: any = this.viewModel.currentStepModel.component;
    return (
      <div>
        <span>{this.viewModel.currentStepModel.title}</span>
        <hr></hr>
        <Component viewModel={this.viewModel.currentStepModel} />
        <hr></hr>
        <button onClick={this.viewModel.prevStep}>Prev</button>
        <button onClick={this.viewModel.nextStep}>Next</button>
      </div>
    );
  }
}
