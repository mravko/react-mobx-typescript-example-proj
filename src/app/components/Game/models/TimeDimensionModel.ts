import RootModel from "app/models/RootModel";
import { observable, runInAction } from "mobx";
export class TimeDimensionModel extends RootModel {
	constructor() {
		super();
		
		runInAction(() => {
			this.seconds = 0;
		});

		setInterval(() => {
			runInAction(() => {
				this.seconds++;
			});
		}, 100);
	}
	@observable
	seconds: number;
}
