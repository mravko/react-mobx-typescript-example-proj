import UserStore from "./UserStore";
import { observable, reaction, action } from "mobx";
import RoutingStore from "./RoutingStore";

export class AppStore {
	constructor(routingStore: RoutingStore) {
		this.userStore = new UserStore(this);
		this.routingStore = routingStore;

		reaction(() => {
			return this.pageTitle
		}, (val) => {
			document.title = val;
		});
	}

	userStore: UserStore;
	routingStore: RoutingStore;

	@observable
	freezeScreen: boolean;

	@observable
	pageTitle: string;

	@action
	setPageTitle(title: string) {
		this.pageTitle = title;
	}
};

console.log("creating appstore instance");
const rs = new RoutingStore();
const as = new AppStore(rs);
export default as;