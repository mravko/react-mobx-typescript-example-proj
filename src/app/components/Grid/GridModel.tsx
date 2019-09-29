import { observable, computed, action, runInAction } from 'mobx';
export class GridModel {
	constructor() {
		runInAction(() => {
			this.data = [];
		});
	}

	@observable
	data: any[];

	@computed
	get columns(): string[] {
		if (this.hasData)
			return Object.keys(this.data[0]);
		else
			return [];
	}

	@computed
	get hasData(): boolean {
		return this.data.length !== 0;
	}

	@action
	addRow(obj: any) {
		this.data.push(obj);
	}

	@action
	init() {
		this.data = [{ id: 1, value: 5 }, { id: 2, value: 6 }];
	}
}
