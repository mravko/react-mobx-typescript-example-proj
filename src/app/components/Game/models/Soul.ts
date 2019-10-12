import RootModel from "app/models/RootModel";
import { observable, runInAction, autorun } from "mobx";
import { TimeDimensionModel } from "./GameWorld";
export class SoulModel extends RootModel {
	constructor(x: number, y: number, id: number, timeAware: TimeDimensionModel) {
		super();

		runInAction(() => {
			this.positionX = x;
			this.positionY = y;
			this.id = id;
		});

		autorun(() => {
			console.log(id, timeAware.seconds);
		});
	}

	@observable
	id: number;

	@observable
	positionX: number;

	@observable
	positionY: number;
}
