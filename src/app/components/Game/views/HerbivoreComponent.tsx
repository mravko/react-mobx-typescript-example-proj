import * as React from "react";
import { HerbivoreModel } from "../models/Herbivore";
import { observer } from "mobx-react";

export interface IHerbivoreComponentProps {
  viewModel: HerbivoreModel;
}

@observer
export default class HerbivoreComponent extends React.Component<
  IHerbivoreComponentProps
> {
  public render() {
    return (
      <div
        style={{
          position: "absolute",
          top: this.props.viewModel.positionY,
          left: this.props.viewModel.positionX,
          height: this.props.viewModel.size,
          width: this.props.viewModel.size,
          backgroundColor: "green"
        }}
      ></div>
    );
  }
}
