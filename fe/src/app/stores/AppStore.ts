import UserStore from "./UserStore";
import { observable, action } from "mobx";
import RoutingStore from "./RoutingStore";

export class AppStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.routingStore = new RoutingStore();

    console.log("creating appstore instance");
  }

  userStore: UserStore;
  routingStore: RoutingStore;

  @observable
  freezeScreen: boolean;

  @observable
  pageTitle: string;

  @action
  setPageTitle(title: string) {
    document.title = title;
  }
}

const instance = new AppStore();

export default instance;
