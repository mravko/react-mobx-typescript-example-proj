import * as React from 'react';
import { GameWorldModel } from '../models/GameWorld';
import HerbivoreComponent from './HerbivoreComponent';
import { observer } from 'mobx-react';
import { HerbivoreModel } from '../models/Herbivore';
import { CarnivoreModel } from "../models/CarnivoreModel";
import CarnivoreComponent from './CarnivoreComponent';

export interface IGameWorldProps {
}

@observer
export default class GameWorldComponent extends React.Component<IGameWorldProps> {

	viewModel: GameWorldModel;

	constructor(props) {
		super(props);

		this.viewModel = new GameWorldModel(10, 10);
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
						if (vm instanceof HerbivoreModel)
							return (
								<HerbivoreComponent key={vm.id} viewModel={vm as HerbivoreModel}>
								</HerbivoreComponent>)
						else
							return (<CarnivoreComponent key={vm.id} viewModel={vm as CarnivoreModel}></CarnivoreComponent>)
					})

				}
			</div>
		);
	}
}
