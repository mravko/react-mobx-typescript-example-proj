import * as React from "react";
import { observer } from "mobx-react";
import { Step1Model } from "../models/Step1Model";
import TextField from "@material-ui/core/TextField";

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
    const buttonStyle = { width: 400, margin: 10 };
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          style={buttonStyle}
          inputRef={this.firstInputRef}
          required
          label="Web site name"
          margin="normal"
          value={this.viewModel.websiteName}
          onChange={this.viewModel.changeValue}
          name="websiteName"
        />
        <br />
        <TextField
          style={buttonStyle}
          type="text"
          name="websiteUrl"
          value={this.viewModel.websiteUrl}
          onChange={this.viewModel.changeValue}
          required
          label="Web site url"
          margin="normal"
        />
        <br />
        <TextField
          style={buttonStyle}
          type="email"
          name="adminUserEmail"
          value={this.viewModel.adminUserEmail}
          onChange={this.viewModel.changeValue}
          required
          label="Admin email"
          margin="normal"
        />
        <br />
        <TextField
          style={buttonStyle}
          type="password"
          name="adminUserPassword"
          value={this.viewModel.adminUserPassword}
          onChange={this.viewModel.changeValue}
          required
          label="Admin password"
          margin="normal"
        />
        <button type="submit" hidden></button>
      </form>
    );
  }
}
