import { observable, computed, action, runInAction } from 'mobx';

export class GridModel {
	constructor() {
		runInAction(() => {
			this.data = [];
			this.init();
			this.activeRow = null;
		});
	}

	@observable
	activeRow;

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
	selectRow(obj: any) {
		this.activeRow = obj;
	}

	@action
	init() {
		this.data = [
			{ id: 1, name: 'Marko', surname: 'Vuckovik' },
			{ id: 2, name: 'Salvadordalu', surname: 'Kojetoj' },
			{ id: 3, name: 'Butrosgali', surname: 'Tojetoj' },
			{ id: 4, name: 'Tos', surname: 'Tkajbombata' }
		];
	}
}
