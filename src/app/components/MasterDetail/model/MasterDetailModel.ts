import { GridModel } from "app/components/Grid/model/GridModel";
import { observable, reaction, action, runInAction } from "mobx";
import { DetailModel } from "./DetailModel";

export class MasterDetailModel {
	constructor() {
		runInAction(() => {
			this.masterModel = new GridModel();
		});

		reaction(() => {
			return this.masterModel.activeRow;
		}, () => {
			this.openDetail(this.masterModel.activeRow)
		});
	}

	masterModel: GridModel;

	@observable
	detailModel: DetailModel;

	@action
	openDetail(data) {
		this.detailModel = new DetailModel(data);
	}

	@action
	init() {
		this.masterModel.init();
	}
};

