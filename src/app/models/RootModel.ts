import { IReactionDisposer } from "mobx";

export default class RootModel {
	reactions: IReactionDisposer[] = [];

	disposeReactions() {
		console.debug('disposing reactions');
		for (const reaction of this.reactions) {
			reaction();
		}
	}
}