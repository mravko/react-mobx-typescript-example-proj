import RootModel from "app/models/RootModel";
import { observable, runInAction, action } from "mobx";
import { GameWorldModel } from "./GameWorld";

export class SoulModel extends RootModel {
	constructor(x: number, y: number, id: string
	) {
		super();

		runInAction(() => {
			this.positionX = x;
			this.positionY = y;
			this.id = id;
			this.size = 1;
		});
	}

	@observable
	id: string;

	@observable
	positionX: number;

	@observable
	positionY: number;

	@observable
	size: number;

	world: GameWorldModel;

	@action
	move() {
		console.log("move from soul");
		const direction = this.getRandomInt(1, 5);
		if (direction == 1) { //top
			if (this.positionY + 1 < this.world.worldHeight - this.size)
				this.positionY++;
		}
		else if (direction == 2) { //right
			if (this.positionX + 1 < this.world.worldWidth - this.size)
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

	@action 
	moveOn(positionX: number, positionY: number) {
		this.positionX = positionX;
		this.positionY = positionY;
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}
}
