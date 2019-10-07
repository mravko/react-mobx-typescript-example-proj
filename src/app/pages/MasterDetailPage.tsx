import * as React from 'react';
import { observer } from 'mobx-react';
import MasterDetail from 'app/components/MasterDetail/views/MasterDetail';
import { RouteComponentProps } from 'react-router';

export interface IMasterDetailPageProps extends RouteComponentProps {

}

@observer
export default class MasterDetailPage extends React.Component<IMasterDetailPageProps> {
	public render() {
		return (
			<MasterDetail></MasterDetail>
		);
	}
}
