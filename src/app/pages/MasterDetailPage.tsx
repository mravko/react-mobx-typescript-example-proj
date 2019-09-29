import * as React from 'react';
import { observer, inject } from 'mobx-react';
import AppStore from 'app/stores/AppStore';
import { MasterDetailModel } from 'app/components/MasterDetail/model/MasterDetailModel';
import MasterDetail from 'app/components/MasterDetail/views/MasterDetail';

export interface IMasterDetailPageProps {
	appStore?: AppStore
}

@inject("appStore")
@observer
export default class MasterDetailPage extends React.Component<IMasterDetailPageProps> {

	constructor(props) {
		super(props);
		this.masterDetailModel = new MasterDetailModel();

	}

	componentDidMount() {
		//api call
		this.masterDetailModel.init();
	}

	masterDetailModel: MasterDetailModel;

	public render() {
		return (
			<div>
				<MasterDetail model={this.masterDetailModel} ></MasterDetail>
			</div>
		);
	}
}
