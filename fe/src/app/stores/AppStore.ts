import UserStore from "./UserStore";
import { observable, action } from "mobx";
import RoutingStore from "./RoutingStore";

export class AppStore {
  constructor(routingStore: RoutingStore) {
    this.userStore = new UserStore(this);
    this.routingStore = routingStore;
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

const rs = new RoutingStore();
const as = new AppStore(rs);

console.log("creating appstore instance");

export default as;
