import * as React from 'react';
import { GameWorldModel } from '../models/GameWorld';
import HerbivoreComponent from './HerbivoreComponent';
import { observer } from 'mobx-react';
import { HerbivoreModel, CarnivoreModel } from '../models/Herbivore';
import CarnivoreComponent from './CarnivoreComponent';

export interface IGameWorldProps {
}

@observer
export default class GameWorldComponent extends React.Component<IGameWorldProps> {

	viewModel: GameWorldModel;

	constructor(props) {
		super(props);

		this.viewModel = new GameWorldModel(200, 200);
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
					this.viewModel.souls.map(vm => {
						let soul;
						if (vm instanceof HerbivoreModel)
							soul = (
								<HerbivoreComponent viewModel={vm as HerbivoreModel}>
								</HerbivoreComponent>)
						else
							soul = (
								<CarnivoreComponent viewModel={vm as CarnivoreModel}></CarnivoreComponent>)

						return <React.Fragment key={vm.id}>{soul}</React.Fragment>;
					})
				}
			</div>
		);
	}
}
