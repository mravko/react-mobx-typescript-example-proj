import * as React from 'react';
import { GameWorldModel } from '../models/GameWorld';
import HerbivoreComponent from './HerbivoreComponent';
import { observer } from 'mobx-react';

export interface IGameWorldProps {
}

@observer
export default class GameWorldComponent extends React.Component<IGameWorldProps> {

	viewModel: GameWorldModel;

	constructor(props) {
		super(props);

		this.viewModel = new GameWorldModel(500, 500);
		this.viewModel.ltbl();
	}

	public render() {
		return (
			<div style={{
				position: "relative",
				height: this.viewModel.worldHeight,
				width: this.viewModel.worldWidth,
				border: "1px solid green"
			}}>
				{
					this.viewModel.souls.map(vm =>
						<HerbivoreComponent key={vm.id} viewModel={vm}>
						</HerbivoreComponent>)
				}
			</div>
		);
	}
}
