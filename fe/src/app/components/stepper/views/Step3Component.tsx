import * as React from "react";
import { observer } from "mobx-react";
import TextField from "@material-ui/core/TextField";
import { Step3Model } from "../models/Step3Model";

interface Step3ComponentProps {
  viewModel: Step3Model;
}

@observer
export class Step3Component extends React.Component<Step3ComponentProps> {
  viewModel: Step3Model;
  firstInputRef;

  constructor(props: Step3ComponentProps) {
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
          label="Database name"
          margin="normal"
          value={this.viewModel.databaseName}
          onChange={this.viewModel.changeValue}
          name="databaseName"
        />
        <br />
        <TextField
          style={buttonStyle}
          type="text"
          name="connectionString"
          value={this.viewModel.connectionString}
          onChange={this.viewModel.changeValue}
          required
          label="Connection string"
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
