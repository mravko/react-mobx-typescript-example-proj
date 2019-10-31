import RootModel from "app/models/RootModel";
import { observable, action, runInAction } from "mobx";
import ApiService from "app/services/ApiService";

export class ForecastModel extends RootModel {
  @observable
  results: [];

  constructor() {
    super();
    runInAction(() => {
      this.results = [];
    });
  }

  @action
  getResults = async () => {
    let response = await ApiService.GetForecastData();
    console.log(response.data);

    runInAction(() => {
      this.results = response.data;
    });
  };
}
