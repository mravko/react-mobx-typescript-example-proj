import { observable, computed, action, runInAction } from "mobx";
import ApiService from "app/services/ApiService";
import { IGridModel } from "app/reusable_components/Grid/models/IGridModel";

export class WebSitesListModel implements IGridModel {
  @observable
  isCreateDialogOpen: boolean;

  constructor() {
    runInAction(() => {
      this.data = [];
      this.isCreateDialogOpen = false;
    });
  }

  @observable
  data: any[];

  @computed
  get rows(): any[] {
    return this.data;
  }

  @computed
  get columns(): string[] {
    if (this.hasData) return Object.keys(this.data[0]);
    else return [];
  }

  @computed
  get hasData(): boolean {
    return this.data.length !== 0;
  }

  @action
  openCreateDialog = () => {
    this.isCreateDialogOpen = true;
  };

  @action
  closeCreateDialog = () => {
    this.isCreateDialogOpen = false;
  };

  @action
  removeRow = async (id: number) => {
    debugger;
    let toRemove = this.rows.filter(x => x["id"] == id);
    let index = this.rows.indexOf(toRemove);
    this.rows.splice(index, 1);
    await ApiService.RemoveWebsite(id);
  };

  @action
  async init() {
    let response = await ApiService.GetWebsites();
    runInAction(() => {
      this.data = response.data;
    });
  }
}
