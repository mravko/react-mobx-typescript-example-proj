import * as React from 'react';
import { observer, inject } from 'mobx-react';
import AppStore from 'app/stores/AppStore';
import { MasterDetailModel } from 'app/components/MasterDetail/model/MasterDetailModel';
import MasterDetail from 'app/components/MasterDetail/views/MasterDetail';
import { RouteComponentProps } from 'react-router';

export interface IMasterDetailPageProps extends RouteComponentProps {
	appStore ?: AppStore
}

@inject("appStore")
@observer
export default class MasterDetailPage extends React.Component<IMasterDetailPageProps> {

	constructor(props: IMasterDetailPageProps) {
		super(props);
		this.masterDetailModel = new MasterDetailModel(props.appStore);
		this.masterDetailModel.masterModel.init();
	}

	componentDidMount() {
		//api call
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
