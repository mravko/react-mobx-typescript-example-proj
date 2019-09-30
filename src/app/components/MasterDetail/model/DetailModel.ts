import { observable, reaction, action, computed } from "mobx";
export class DetailModel {
	constructor(data) {
		this.data = data;
		this.saveReaction = reaction(() => this.data, () => {
			console.log('data has changed');
		});
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
}
