import { computed } from "mobx";
import { IGridModel } from "./IGridModel";

export class GridComponentModel {
  adapter: IGridModel;

  constructor(adapter: IGridModel) {
    this.adapter = adapter;
  }

  @computed
  get rowsCount() {
    return this.adapter.rows.length;
  }
}
