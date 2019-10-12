import * as React from 'react';
import { CarnivoreModel } from "../models/CarnivoreModel";
import { observer } from 'mobx-react';

export interface ICarnivoreComponentProps {
	viewModel: CarnivoreModel
}

@observer
export default class CarnivoreComponent extends React.Component<ICarnivoreComponentProps> {
  public render() {
	return (
	  <div style={{
		position: "absolute",
		top: this.props.viewModel.positionY,
		left: this.props.viewModel.positionX,
		height: this.props.viewModel.size, width: this.props.viewModel.size, 
		backgroundColor: "red"}}>
	  </div>
	);
  }
}
