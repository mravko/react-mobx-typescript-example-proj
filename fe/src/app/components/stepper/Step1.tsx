import * as React from "react";
import { StepModel } from "./StepModel";
import { runInAction } from "mobx";
import { observer } from "mobx-react";

export class Step1Model extends StepModel {
  websiteName: string;
  websiteUrl: string;
  adminUserEmail: string;
  adminUserPassword;

  constructor() {
    super();

    runInAction(() => {
      this.title = "Step 1";
      this.component = <Step1Component viewModel={this}></Step1Component>;
    });
  }
}

interface Step1ComponentProps {
  viewModel: Step1Model;
}
@observer
export class Step1Component extends React.Component<Step1ComponentProps> {
  viewModel: Step1Model;

  constructor(props: Step1ComponentProps) {
    super(props);

    this.viewModel = props.viewModel;
  }

  public render() {
    return (
      <div>
        <label>Website name</label> <br />
        <input
          name="websiteName"
          type="text"
          value={this.viewModel.websiteName}
          onChange={this.viewModel.changeValue}
        />
        <br />
        <label>Website url</label> <br />
        <input
          type="text"
          name="websiteUrl"
          value={this.viewModel.websiteUrl}
          onChange={this.viewModel.changeValue}
        />
        <br />
        <label>Admin email</label> <br />
        <input
          type="email"
          name="adminUserEmail"
          value={this.viewModel.adminUserEmail}
          onChange={this.viewModel.changeValue}
        />
        <br />
        <label>Admin password</label> <br />
        <input
          type="password"
          name="adminUserPassword"
          value={this.viewModel.adminUserPassword}
          onChange={this.viewModel.changeValue}
        />
      </div>
    );
  }
}
