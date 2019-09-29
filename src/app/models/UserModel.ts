import { observable } from "mobx";

export default class UserModel {
	@observable
	userName: string;

	@observable
	isAdmin: boolean;

	constructor() {
		this.isAdmin = false;
	}
};
