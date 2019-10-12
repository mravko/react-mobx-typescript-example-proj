import { SoulModel } from "./Soul";
import { TimeDimensionModel } from "./TimeDimensionModel";

export class HerbivoreModel extends SoulModel {
	constructor(x: number, y: number, id: number, timeAware: TimeDimensionModel, worldBoundaries: { maxX: number, maxY: number }) {
		super(x, y, id, timeAware, worldBoundaries);
	
	}
}
