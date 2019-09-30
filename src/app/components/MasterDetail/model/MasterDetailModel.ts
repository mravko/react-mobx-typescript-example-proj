import { GridModel } from "app/components/Grid/model/GridModel";
import { observable, reaction, action, runInAction } from "mobx";
import { DetailModel } from "./DetailModel";
import AppStore from "app/stores/AppStore";

export class MasterDetailModel {
	constructor(appStore: AppStore) {
		this.appStore = appStore;

		runInAction(() => {
			this.masterModel = new GridModel();
		});

		reaction(() => {
			return this.masterModel.activeRow;
		}, () => {
			this.routeToDetail(this.masterModel.activeRow)
		});

		reaction(() => appStore.routingStore.queryStringValue,
			() => {
				const detailsId = this.appStore.routingStore.queryValue("detailsId");
				this.openDetailFromId(parseInt(detailsId));
			}, { fireImmediately: true });
	}

	appStore: AppStore;

	masterModel: GridModel;

	@observable
	detailModel: DetailModel;

	@action
	openDetail(data) {
		this.detailModel = new DetailModel(data);
	}

	openDetailFromId(id) {
		let data = this.masterModel.data.find((d) => parseInt(d.id) === parseInt(id));
		if (data)
			this.openDetail(data);
		else
			this.detailModel = null;
	}

	routeToDetailId(id) {
		this.appStore.routingStore.setQueryValue("detailsId", id);
	}

	routeToDetail(data) {
		this.routeToDetailId(data.id);
	}
};

