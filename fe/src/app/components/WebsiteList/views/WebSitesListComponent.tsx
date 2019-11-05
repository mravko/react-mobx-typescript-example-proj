import * as React from "react";
import { WebSitesListModel } from "../models/WebSitesListModel";
import { observer } from "mobx-react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import StepperComponent from "app/components/WebsiteCreate/views/StepperComponent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

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
    if (!this.viewModel.hasData) return <div>No data</div>;

    return (
      <>
        <Table>
          <TableHead>
            <TableRow>
              {this.viewModel.columns.map(c => (
                <TableCell key={c}>{c}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.viewModel.rows.map(r => {
              return (
                <TableRow key={r["id"]}>
                  {this.viewModel.columns.map(c => (
                    <TableCell key={r[c]}>{r[c]}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
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
            <StepperComponent></StepperComponent>
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
