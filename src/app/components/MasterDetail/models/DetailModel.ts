import { observable, reaction, action, computed, toJS } from "mobx";
export class DetailModel {
	constructor(data) {
		this.data = data;
		this.saveReaction = reaction(() => toJS(this.data), () => {
			alert(`You haven't made a change for 3s. The data is saved on the server.`);
		}, { delay: 3000 });
	}

	saveReaction;

	@observable
	data;

	@action
	closeDetail() {
		this.saveReaction();
	}

	@computed
	get keys(): string[] {
		return Object.keys(this.data);
	}

	@action
	setDataValue(key: string, value: string) {
		this.data[key] = value;
	}
}
