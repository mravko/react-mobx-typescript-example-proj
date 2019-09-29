import UserStore from "./UserStore";
import { observable } from "mobx";

export default class AppStore {
	constructor() {
		this.userStore = new UserStore(this);
	}
	
	userStore: UserStore;

	@observable
	freezeScreen: boolean;
};

