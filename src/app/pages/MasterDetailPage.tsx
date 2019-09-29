import * as React from 'react';
import Grid from 'app/components/Grid/Grid';
import { GridModel } from 'app/components/Grid/GridModel';
import { observer } from 'mobx-react';

export interface IMasterDetailPageProps {
}

@observer
export default class MasterDetailPage extends React.Component<IMasterDetailPageProps> {

	constructor(props) {
		super(props);
		this.gridModel = new GridModel();

	}

	componentDidMount() {
		//api call
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
