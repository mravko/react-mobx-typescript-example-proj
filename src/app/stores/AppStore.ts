import UserStore from "./UserStore";
import { observable } from "mobx";
import RoutingStore from "./RoutingStore";

export default class AppStore {
	constructor(routingStore: RoutingStore) {
		this.userStore = new UserStore(this);
		this.routingStore = routingStore;
	}
	
	userStore: UserStore;
	routingStore: RoutingStore;

	@observable
	freezeScreen: boolean;
};

