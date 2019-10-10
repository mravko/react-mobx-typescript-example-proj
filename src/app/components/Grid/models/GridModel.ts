import { observable, computed, action, runInAction } from 'mobx';
import StoreProvider from 'app/stores/StoreProvider';

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
	get rows(): any[] {
		if (!StoreProvider.stores.appStore.userStore.isUserLoggedIn)
			return this.data.filter((r) => r["_private"] === false);
		return this.data;
	}

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
			{ id: 1, name: 'Marko', surname: 'Vuckovik', _private: false },
			{ id: 2, name: 'Salvadordalu', surname: 'Kojetoj', _private: false },
			{ id: 3, name: 'Butrosgali', surname: 'Tojetoj', _private: false },
			{ id: 4, name: 'Tos', surname: 'Tkajbombata', _private: true }
		];
	}
}
