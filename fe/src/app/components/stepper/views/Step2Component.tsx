import * as React from "react";
import { observer } from "mobx-react";
import { Step2Model } from "../models/Step2Model";
import TextField from "@material-ui/core/TextField";

interface Step2ComponentProps {
  viewModel: Step2Model;
}

@observer
export class Step2Component extends React.Component<Step2ComponentProps> {
  viewModel: Step2Model;
  firstInputRef;

  constructor(props: Step2ComponentProps) {
    super(props);

    this.viewModel = props.viewModel;

    this.firstInputRef = React.createRef();
  }

  componentDidMount() {
    this.firstInputRef.current.focus();
  }

  public render() {
    const buttonStyle = { width: 400, margin: 10 };
    return (
      <div>
        <TextField
          style={buttonStyle}
          inputRef={this.firstInputRef}
          type="text"
          value={this.viewModel.logoPath}
          name="logoPath"
          onChange={this.viewModel.changeValue}
          required
          label="Logo path"
          margin="normal"
        />
        <br />
      </div>
    );
  }
}
