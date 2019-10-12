import * as React from 'react';
import { observer } from 'mobx-react';
import AppStore from 'app/stores/AppStore';
import StoreProvider from 'app/stores/StoreProvider';
import GameWorldComponent from 'app/components/Game/views/GameWorldComponent';

export interface IGamePageProps {
	appStore?: AppStore
}

@observer
export default class GamePage extends React.Component<IGamePageProps> {

	constructor(props: IGamePageProps) {
		super(props);

	}

	componentDidMount() {
		StoreProvider.stores.appStore.setPageTitle("Game page");
	}

	public render() {
		return (
			<GameWorldComponent></GameWorldComponent>

		);
	}
}
