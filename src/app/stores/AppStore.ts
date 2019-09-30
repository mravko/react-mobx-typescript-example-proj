import UserStore from "./UserStore";
import { observable, reaction, action } from "mobx";
import RoutingStore from "./RoutingStore";

export default class AppStore {
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

