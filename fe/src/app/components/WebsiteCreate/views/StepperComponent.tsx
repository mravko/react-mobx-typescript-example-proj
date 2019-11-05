import * as React from "react";
import { WebSiteStepperModel } from "../models/WebSiteStepperModel";
import { observer } from "mobx-react";
import { runInAction } from "mobx";
import { Step1Model } from "../models/Step1Model";
import { Step2Model } from "../models/Step2Model";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Step3Model } from "../models/Step3Model";

export interface IStepperComponentProps {}

@observer
export default class StepperComponent extends React.Component<
  IStepperComponentProps
> {
  constructor(props) {
    super(props);

    runInAction(() => {
      this.viewModel = new WebSiteStepperModel();

      let step1 = new Step1Model(this.viewModel);
      let step2 = new Step2Model(this.viewModel);
      let step3 = new Step3Model(this.viewModel);

      this.viewModel
        .addStep(step1)
        .addStep(step2)
        .addStep(step3);
    });
  }

  viewModel: WebSiteStepperModel;

  public render() {
    const Component: any = this.viewModel.currentStepModel.component;
    return (
      <>
        <Typography variant="h5" component="h3">
          {this.viewModel.currentStepModel.title}
        </Typography>
        <div style={{ margin: "10px 0" }}>
          <LinearProgress
            variant="buffer"
            value={this.viewModel.currentStepModel.process}
            valueBuffer={100}
          />
        </div>
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
      </>
    );
  }
}
