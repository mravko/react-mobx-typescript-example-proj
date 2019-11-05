import * as React from "react";
import { StepperModel } from "../models/StepperModel";
import { observer } from "mobx-react";
import { runInAction } from "mobx";
import { Step1Model } from "../models/Step1Model";
import { Step2Model } from "../models/Step2Model";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
      <Paper style={{ width: 500, padding: 20 }}>
        <Typography variant="h5" component="h3">
          {this.viewModel.currentStepModel.title}
        </Typography>
        <hr></hr>
        <Component viewModel={this.viewModel.currentStepModel} />
        <div
          style={{
            margin: "0 auto",
            width: 300,
            marginTop: 20,
            marginBottom: 10
          }}
        >
          <Button
            style={{ width: "50%" }}
            variant="contained"
            color="secondary"
            onClick={this.viewModel.prevStep}
          >
            Prev
          </Button>
          <Button
            style={{ width: "50%" }}
            variant="contained"
            color="primary"
            disabled={!this.viewModel.currentStepModel.isValid()}
            onClick={this.viewModel.nextStep}
          >
            Next
          </Button>
        </div>
      </Paper>
    );
  }
}
