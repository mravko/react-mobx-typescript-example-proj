import * as React from "react";
import { observer } from "mobx-react";
import { Step2Model } from "../models/Step2Model";

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
    return (
      <div>
        <label>Choose logo</label> <br />
        <input
          ref={this.firstInputRef}
          type="text"
          value={this.viewModel.logoPath}
        />
        <br />
      </div>
    );
  }
}
