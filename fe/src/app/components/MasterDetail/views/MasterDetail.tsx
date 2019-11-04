import * as React from "react";
import Grid from "../../Grid/views/Grid";
import { MasterDetailModel } from "../models/MasterDetailModel";
import DetailView from "./DetailView";
import { observer } from "mobx-react";

export interface IMasterDetailProps {}

@observer
export default class MasterDetail extends React.Component<IMasterDetailProps> {
  constructor(props) {
    super(props);

    this.viewModel = new MasterDetailModel();
  }

  viewModel: MasterDetailModel;

  componentWillUnmount() {
    this.viewModel.disposeReactions();
  }

  public render() {
    return (
      <React.Fragment>
        <Grid model={this.viewModel.masterModel}></Grid>
        {this.viewModel.detailModel ? (
          <DetailView model={this.viewModel.detailModel} />
        ) : null}
      </React.Fragment>
    );
  }
}
