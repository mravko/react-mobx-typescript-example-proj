import * as React from 'react';
import { observer } from 'mobx-react';
import { MasterDetailModel } from 'app/components/MasterDetail/models/MasterDetailModel';
import MasterDetail from 'app/components/MasterDetail/views/MasterDetail';
import { RouteComponentProps } from 'react-router';
import StoreProvider from 'app/stores/StoreProvider';

export interface IMasterDetailPageProps extends RouteComponentProps {
	
}

@observer
export default class MasterDetailPage extends React.Component<IMasterDetailPageProps> {

	constructor(props: IMasterDetailPageProps) {
		super(props);
		this.masterDetailModel = new MasterDetailModel();
	}

	componentDidMount() {
		//api call
		StoreProvider.stores.appStore.setPageTitle("Master detail page");
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
