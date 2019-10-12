import { SoulModel } from "./Soul";
import { TimeDimensionModel } from "./TimeDimensionModel";
import { action, reaction } from "mobx";
import { GameWorldModel } from "./GameWorld";
import { LocationModel } from "./LocationModel";

export class CarnivoreModel extends SoulModel {
	constructor(x: number, y: number, id: string, timeAware: TimeDimensionModel, world: GameWorldModel) {
		super(x, y, id);
		this.world = world;

		this.disposers.push(reaction(() => {
			return timeAware.seconds
		}, () => {
			this.move();
		}));
	}

	@action
	move() {
		let location = this.world.locations[`${this.positionY}_${this.positionX}`];
		if (location) {
			location.carnivore = null;
		}
		let smell = this.moveBySmell();
		if (smell != null) {
			super.moveOn(smell.positionX, smell.positionY);
		} else {
			super.move();
		}
		location = this.world.locations[`${this.positionY}_${this.positionX}`];
		if (location) {
			location.carnivore = this;
			if (location.herbivore != null) {
				console.log("eating", this, location.herbivore);
				let i = this.world.souls.findIndex((s) => s.id === location.herbivore.id);
				if (i !== -1 && this.world.souls[i]) {
					location.herbivore.die();
					location.herbivore = null;
					this.world.souls.splice(i, 1);
				}
			}
		}
	}

	get smellBox(): any[] {
		return [
			this.world.locations[`${this.positionY - 1}_${this.positionX}`],
			this.world.locations[`${this.positionY + 1}_${this.positionX}`],
			this.world.locations[`${this.positionY - 1}_${this.positionX - 1}`],
			this.world.locations[`${this.positionY}_${this.positionX - 1}`],
			this.world.locations[`${this.positionY + 1}_${this.positionX - 1}`],
			this.world.locations[`${this.positionY - 1}_${this.positionX + 1}`],
			this.world.locations[`${this.positionY}_${this.positionX + 1}`],
			this.world.locations[`${this.positionY + 1}_${this.positionX + 1}`],

			this.world.locations[`${this.positionY - 2}_${this.positionX}`],
			this.world.locations[`${this.positionY + 2}_${this.positionX}`],
			this.world.locations[`${this.positionY - 2}_${this.positionX - 1}`],
			this.world.locations[`${this.positionY + 2}_${this.positionX - 1}`],
			this.world.locations[`${this.positionY - 2}_${this.positionX + 1}`],
			this.world.locations[`${this.positionY + 2}_${this.positionX + 1}`],
			this.world.locations[`${this.positionY - 2}_${this.positionX - 2}`],
			this.world.locations[`${this.positionY + 2}_${this.positionX - 2}`],
			this.world.locations[`${this.positionY - 2}_${this.positionX + 2}`],
			this.world.locations[`${this.positionY + 2}_${this.positionX + 2}`]
		];
	}

	moveBySmell(): LocationModel {
		const mostSmelly = this.smellBox.sort((x) => x.herbivoreSmell)[0];
		if (mostSmelly.herbivoreSmell == 0)
			return null;
		else {
			console.log("moving by smell", mostSmelly);
			return (mostSmelly as LocationModel);
		}
	}
}
