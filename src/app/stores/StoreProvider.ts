import AppStore from "./AppStore";
import RoutingStore from "./RoutingStore";

export interface IStores {
	appStore: AppStore;
}

class StoreProvider {
	private constructor() {

	}

	private static singleton: IStores = null;

	static get stores(): IStores {
		if (this.singleton == null) {
			console.info('creating stores singleton');
			const routingStore: RoutingStore = new RoutingStore();

			this.singleton = {
				appStore: new AppStore(routingStore)
			};
		}
		return this.singleton;
	}
}

export default StoreProvider;