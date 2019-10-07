import { observable, reaction, action, runInAction } from "mobx";
import { DetailModel } from "./DetailModel";
import { GridModel } from "app/components/Grid/models/GridModel";
import StoreProvider from "app/stores/StoreProvider";
import RootModel from "app/models/RootModel";

export class MasterDetailModel extends RootModel {
	constructor() {
		super();

		runInAction(() => {
			this.masterModel = new GridModel();
		});

		this.reactions.push(
			reaction(() => {
				return this.masterModel.activeRow;
			}, () => {
				this.routeToDetail(this.masterModel.activeRow)
			})
		);

		this.reactions.push(reaction(() => StoreProvider.stores.appStore.routingStore.queryStringValue,
			() => {
				const detailsId = StoreProvider.stores.appStore.routingStore.queryValue("detailsId");
				this.openDetailFromId(parseInt(detailsId));
			}, { fireImmediately: true })
		);
	}

	masterModel: GridModel;

	@observable
	detailModel: DetailModel;

	@action
	openDetail(data) {
		this.detailModel = new DetailModel(data);
	}

	@action
	openDetailFromId(id) {
		let data = this.masterModel.data.find((d) => parseInt(d.id) === parseInt(id));
		if (data)
			this.openDetail(data);
		else
			this.detailModel = null;
	}

	@action
	routeToDetailId(id) {
		StoreProvider.stores.appStore.routingStore.setQueryValue("detailsId", id);
	}

	@action
	routeToDetail(data) {
		this.routeToDetailId(data.id);
	}
};

