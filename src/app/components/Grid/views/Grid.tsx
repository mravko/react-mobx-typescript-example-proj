import * as React from "react";
import AddRow from "./AddRow";
import { GridModel } from "../models/GridModel";
import { observer } from "mobx-react";
import styled from "styled-components";

export class GridProps {
  model: GridModel;
}

const Tr = styled.tr`
  :hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

const Grid: React.FunctionComponent<GridProps> = observer(props => {
  if (!props.model.hasData) return <div>No data</div>;

  return (
    <React.Fragment>
      <table className="table table-bordered">
        <thead>
          <tr>
            {props.model.columns.map(c => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.model.rows.map(r => {
            return (
              <Tr onClick={() => props.model.selectRow(r)} key={r["id"]}>
                {props.model.columns.map(c => (
                  <td key={r[c]}>{r[c]}</td>
                ))}
              </Tr>
            );
          })}
        </tbody>
      </table>
      <AddRow model={props.model}></AddRow>
    </React.Fragment>
  );
});

export default Grid;
