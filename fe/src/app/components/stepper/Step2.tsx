import * as React from "react";
import { StepModel } from "./StepModel";
import { runInAction } from "mobx";
import { observer } from "mobx-react";

export class Step2Model extends StepModel {
  websiteName: string;
  websiteUrl: string;
  adminUserEmail: string;
  adminUserPassword;

  constructor() {
    super();

    runInAction(() => {
      this.title = "Step 2";
      this.component = <Step2Component viewModel={this}></Step2Component>;
    });
  }
}

interface Step2ComponentProps {
  viewModel: Step2Model;
}
@observer
export class Step2Component extends React.Component<Step2ComponentProps> {
  viewModel: Step2Model;

  constructor(props: Step2ComponentProps) {
    super(props);

    this.viewModel = props.viewModel;
  }

  public render() {
    return (
      <div>
        <label>Choose logo</label> <br />
        <input type="text" value={this.viewModel.websiteName} />
        <br />
      </div>
    );
  }
}
