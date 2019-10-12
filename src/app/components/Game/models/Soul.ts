import RootModel from "app/models/RootModel";
import { observable, runInAction, reaction, action } from "mobx";
import { TimeDimensionModel } from "./TimeDimensionModel";
export class SoulModel extends RootModel {
	constructor(x: number, y: number, id: number,
		timeAware: TimeDimensionModel,
		worldBoundaries: { maxX: number, maxY: number }
	) {
		super();

		runInAction(() => {
			this.positionX = x;
			this.positionY = y;
			this.id = id;
		});

		reaction(() => {
			return timeAware.seconds
		}, () => {
			this.move(worldBoundaries);
		});
	}

	@observable
	id: number;

	@observable
	positionX: number;

	@observable
	positionY: number;

	@action
	move(worldBoundaries: { maxX: number, maxY: number }) {

		const direction = this.getRandomInt(1, 5);
		console.log("moving", direction);
		if (direction == 1) { //top
			if (this.positionY + 1 < worldBoundaries.maxY)
				this.positionY++;
		}
		else if (direction == 2) { //right
			if (this.positionX + 1 < worldBoundaries.maxX)
				this.positionX++;
		}
		else if (direction == 3) { //bottom
			if (this.positionY - 1 > 1)
				this.positionY--;
		}
		else { //left
			if (this.positionX - 1 > 1)
				this.positionX--;
		}
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}
}
