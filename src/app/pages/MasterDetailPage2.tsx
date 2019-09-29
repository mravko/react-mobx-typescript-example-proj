import * as React from 'react';
import Grid from 'app/components/Grid/Grid';
import { GridModel } from 'app/models/GridModel';
import { observer } from 'mobx-react';
import AppStore from 'app/stores/AppStore';

export interface IMasterDetailPageProps {
	appStore?: AppStore
}
@observer
export default class MasterDetailPage2 extends React.Component<IMasterDetailPageProps> {

	constructor(props) {
		super(props);
		this.gridModel = new GridModel(props.appStore);

	}

	componentDidMount() {
		//api call
		//should be through store
		this.gridModel.init();
	}

	gridModel: GridModel;
	public render() {
		return (
			<div>
				<Grid model={this.gridModel} ></Grid>
			</div>
		);
	}
}
