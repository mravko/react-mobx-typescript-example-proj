import * as React from "react";
import { observer } from "mobx-react";
import { Step1Model } from "../models/Step1Model";

interface Step1ComponentProps {
  viewModel: Step1Model;
}
@observer
export class Step1Component extends React.Component<Step1ComponentProps> {
  viewModel: Step1Model;
  firstInputRef;

  constructor(props: Step1ComponentProps) {
    super(props);

    this.viewModel = props.viewModel;
    this.firstInputRef = React.createRef();
  }

  componentDidMount() {
    this.firstInputRef.current.focus();
  }

  onSubmit = e => {
    e.preventDefault();
    this.viewModel.stepperContainer.nextStep();
  };

  public render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Website name</label> <br />
        <input
          ref={this.firstInputRef}
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
        <button type="submit" hidden></button>
      </form>
    );
  }
}
