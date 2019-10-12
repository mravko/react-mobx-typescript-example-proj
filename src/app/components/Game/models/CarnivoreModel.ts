import { SoulModel } from "./Soul";
import { TimeDimensionModel } from "./TimeDimensionModel";
import { action } from "mobx";
import { GameWorldModel } from "./GameWorld";
export class CarnivoreModel extends SoulModel {
	constructor(x: number, y: number, id: string, timeAware: TimeDimensionModel, world: GameWorldModel) {
		super(x, y, id, timeAware, world);
		this.world = world;
	}
	world: GameWorldModel;
	@action
	move() {
		let location = this.world.locations[`${this.positionY}_${this.positionX}`];
		if (location) {
			location.carnivore = null;
		}
		super.move(this.world);
		location = this.world.locations[`${this.positionY}_${this.positionX}`];
		if (location) {
			location.carnivore = this;
			if (location.herbivore) {
				let i = this.world.souls.findIndex((s) => s.id === location.herbivore.id);
				if (i !== -1 && this.world.souls[i]) {
					location.herbivore.die();
					location.herbivore = null;
					this.world.souls.splice(i, 1);
				}
				console.log("eating", this, location.herbivore);
			}
		}
	}
}
