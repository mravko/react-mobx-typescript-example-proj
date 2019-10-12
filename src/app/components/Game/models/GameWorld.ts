import RootModel from "app/models/RootModel";
import { observable, action, runInAction } from "mobx";
import { HerbivoreModel } from "./Herbivore";
import { SoulModel } from "./Soul";
import { TimeDimensionModel } from "./TimeDimensionModel";

export class GameWorldModel extends RootModel {
	constructor(height: number, width: number) {
		super();
		runInAction(() => {
			this.worldHeight = height;
			this.worldWidth = width;
			this.souls = [];
			this.timeDimension = new TimeDimensionModel();
		});
	}
	@observable.struct
	worldWidth: number;

	@observable.struct
	worldHeight: number;

	@observable
	souls: SoulModel[];

	@observable
	timeDimension: TimeDimensionModel;

	get randomPosition(): {
		x: number;
		y: number;
	} {
		let x = Math.random();
		x = Math.round(x * this.worldWidth);
		let y = Math.random();
		y = Math.round(y * this.worldWidth);
		return { x, y };
	}

	@action
	ltbl() {
		for (let index = 0; index < 50; index++) {
			const p = this.randomPosition;
			this.souls.push(new HerbivoreModel(p.x, p.y, index, this.timeDimension));
		}
	}
}


