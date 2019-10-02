import * as React from 'react';
import { observer } from 'mobx-react';
import AppStore from 'app/stores/AppStore';
import { RouteComponentProps } from 'react-router';
import StoreProvider from 'app/stores/StoreProvider';
import { GridModel } from 'app/components/Grid/models/GridModel';
import Grid from 'app/components/Grid/views/Grid';

export interface IGridOnlyPageProps extends RouteComponentProps {
	appStore ?: AppStore
}

@observer
export default class GridOnlyPage extends React.Component<IGridOnlyPageProps> {

	constructor(props: IGridOnlyPageProps) {
		super(props);
		this.gridModel = new GridModel();
	}

	componentDidMount() {
		StoreProvider.stores.appStore.setPageTitle("Grid only page");
	}

	gridModel: GridModel;

	public render() {
		return (
			<div>
				<Grid model={this.gridModel}></Grid>
			</div>
		);
	}
}
