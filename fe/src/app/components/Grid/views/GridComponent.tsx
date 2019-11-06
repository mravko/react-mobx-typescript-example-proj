import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { observer } from "mobx-react";
import { IGridModel } from "app/reusable_components/Grid/models/IGridModel";
import { GridComponentModel } from "app/reusable_components/Grid/models/GridComponentModel";

@observer
export default class GridComponent extends React.Component<{
  adapter: IGridModel;
}> {
  model: GridComponentModel;
  constructor(props) {
    super(props);

    this.model = new GridComponentModel(props.adapter);
  }
  public render() {
    return (
      <>
        <Table size="small">
          <TableHead>
            <TableRow>
              {this.model.adapter.columns.map(c => (
                <TableCell key={c}>{c}</TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.model.adapter.rows.map(r => {
              return (
                <TableRow key={r["id"]}>
                  {this.model.adapter.columns.map(c => (
                    <TableCell key={r[c]}>{r[c]}</TableCell>
                  ))}
                  <TableCell
                    onClick={this.model.adapter.removeRow.bind(this, r["id"])}
                  >
                    Remove
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div>Total rows: {this.model.rowsCount}</div>
      </>
    );
  }
}
