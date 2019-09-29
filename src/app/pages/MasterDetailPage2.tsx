import * as React from 'react';
import Grid from 'app/components/Grid/views/Grid';
import { GridModel } from 'app/components/Grid/model/GridModel';
import { observer } from 'mobx-react';
import AppStore from 'app/stores/AppStore';

export interface IMasterDetailPageProps {
	appStore?: AppStore
}
@observer
export default class MasterDetailPage2 extends React.Component<IMasterDetailPageProps> {

	constructor(props) {
		super(props);
		this.gridModel = new GridModel();

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
