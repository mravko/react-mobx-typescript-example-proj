import * as React from "react";
import { WebSitesListModel } from "../models/WebSitesListModel";
import { observer } from "mobx-react";
import StepperComponent from "app/features/WebsiteCreate/views/StepperComponent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import GridComponent from "app/reusable_components/Grid/views/GridComponent";

@observer
class WebSitesListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.viewModel = new WebSitesListModel();
  }

  viewModel: WebSitesListModel;

  componentDidMount() {
    this.viewModel.init();
  }

  public render() {
    if (!this.viewModel.hasData)
      return (
        <div>
          No data
          <Fab
            color="primary"
            aria-label="add"
            onClick={this.viewModel.openCreateDialog}
          >
            <AddIcon />
          </Fab>
        </div>
      );

    return (
      <>
        <GridComponent adapter={this.viewModel}></GridComponent>
        <Dialog open={this.viewModel.isCreateDialogOpen}>
          <DialogTitle>
            Create
            <IconButton
              style={{ float: "right" }}
              aria-label="close"
              onClick={this.viewModel.closeCreateDialog}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <StepperComponent listModel={this.viewModel}></StepperComponent>
          </DialogContent>
        </Dialog>
        <Fab
          color="primary"
          aria-label="add"
          onClick={this.viewModel.openCreateDialog}
        >
          <AddIcon />
        </Fab>
      </>
    );
  }
}

export default WebSitesListComponent;
