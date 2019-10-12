import { SoulModel } from "./Soul";
import { TimeDimensionModel } from "./TimeDimensionModel";
import { action, reaction } from "mobx";
import { GameWorldModel } from "./GameWorld";

export class HerbivoreModel extends SoulModel {
	constructor(x: number, y: number, id: string, timeAware: TimeDimensionModel, world: GameWorldModel) {
		super(x, y, id);
		this.world = world;

		this.disposers.push(reaction(() => {
			return timeAware.seconds;
		}, (val : number) => {
			if(val % 2 === 0)
				this.move();
		}));
	}

	@action
	move() {
		var location = this.world.locations[`${this.positionY}_${this.positionX}`];

		if (location) {
			location.herbivore = null;
		}

		super.move();

		location = this.world.locations[`${this.positionY}_${this.positionX}`];
		if (location) {
			location.herbivore = this;
		}
	}

	@action
	die() {
		this.disposeReactions();
	}
}


