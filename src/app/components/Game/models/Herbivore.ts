import { SoulModel } from "./Soul";
import { TimeDimensionModel } from "./TimeDimensionModel";
import { action } from "mobx";
import { GameWorldModel } from "./GameWorld";

export class HerbivoreModel extends SoulModel {
	constructor(x: number, y: number, id: string, timeAware: TimeDimensionModel, world: GameWorldModel) {
		super(x, y, id, timeAware, world);
		this.world = world;
	}

	world: GameWorldModel;

	@action
	move() {
		var location = this.world.locations[`${this.positionY}_${this.positionX}`];

		if (location) {
			location.herbivore = null;
		}

		super.move(this.world);

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

export class CarnivoreModel extends SoulModel {
	constructor(x: number, y: number, id: string, timeAware: TimeDimensionModel, world: GameWorldModel) {
		super(x, y, id, timeAware, world);

		this.world = world;
	}

	world: GameWorldModel;

	@action
	move() {
		var location = this.world.locations[`${this.positionY}_${this.positionX}`];

		if (location) {
			location.carnivore = null;
		}

		super.move(this.world);

		location = this.world.locations[`${this.positionY}_${this.positionX}`];

		if (location) {
			location.carnivore = this;
			if (location.herbivore) {
				let i = this.world.souls.findIndex((s) => s.id === location.herbivore.id);
				if(i) {
					location.herbivore.die();
					this.world.souls.splice(i, 1);
				}
				console.log("eating", this, location.herbivore);
			}
		}
	}
}
