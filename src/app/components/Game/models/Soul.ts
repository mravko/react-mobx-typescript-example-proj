import RootModel from "app/models/RootModel";
import { observable, runInAction, reaction, action } from "mobx";
import { TimeDimensionModel } from "./TimeDimensionModel";
export class SoulModel extends RootModel {
	constructor(x: number, y: number, id: number, timeAware: TimeDimensionModel) {
		super();

		runInAction(() => {
			this.positionX = x;
			this.positionY = y;
			this.id = id;
		});

		reaction(() => {
			return timeAware.seconds
		}, () => {
			this.move();
		});
	}

	@observable
	id: number;

	@observable
	positionX: number;

	@observable
	positionY: number;

	@action
	move() {

		const direction = this.getRandomInt(1, 5);
		console.log("moving", direction);
		if (direction == 1) { //top
			this.positionY++;
		}
		else if (direction == 2) { //right
			this.positionX++;
		}
		else if (direction == 3) { //bottom
			this.positionY--;
		}
		else { //left
			this.positionX--;
		}
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	  }
}
