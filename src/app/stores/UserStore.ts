import { AppStore } from "./AppStore";
import { computed, action, observable } from "mobx";
import UserModel from "app/models/UserModel";

export default class UserStore {
  @observable
  loggedInUser: UserModel;

  appStore: AppStore;

  constructor(appStore: AppStore) {
    this.appStore = appStore;
  }

  @computed
  get isUserLoggedIn(): boolean {
    return !!this.loggedInUser;
  }

  @action
  logInUser() {
    this.loggedInUser = new UserModel();
    this.loggedInUser.userName = "Marko";
  }

  @action
  logout() {
    this.loggedInUser = null;
  }
}
