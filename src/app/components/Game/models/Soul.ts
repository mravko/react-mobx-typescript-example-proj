import RootModel from "app/models/RootModel";
import { observable, runInAction, reaction, action } from "mobx";
import { TimeDimensionModel } from "./TimeDimensionModel";
import { GameWorldModel } from "./GameWorld";
export class SoulModel extends RootModel {
	constructor(x: number, y: number, id: string,
		timeAware: TimeDimensionModel,
		world: GameWorldModel
	) {
		super();

		runInAction(() => {
			this.positionX = x;
			this.positionY = y;
			this.id = id;
			this.size = 3;
		});

		this.disposers.push(reaction(() => {
			return timeAware.seconds
		}, () => {
			this.move(world);
		}));
	}

	@observable
	id: string;

	@observable
	positionX: number;

	@observable
	positionY: number;

	@observable
	size: number;

	@action
	move(world: GameWorldModel) {
		const direction = this.getRandomInt(1, 5);
		if (direction == 1) { //top
			if (this.positionY + 1 < world.worldHeight - this.size)
				this.positionY++;
		}
		else if (direction == 2) { //right
			if (this.positionX + 1 < world.worldWidth - this.size)
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
