import UserStore from "./UserStore";

export default class AppStore {
	constructor() {
		this.userStore = new UserStore(this);
	}
	userStore: UserStore;
};

