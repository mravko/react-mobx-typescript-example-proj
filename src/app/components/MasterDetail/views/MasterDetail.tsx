import * as React from 'react';
import Grid from '../../Grid/views/Grid';
import { MasterDetailModel } from '../models/MasterDetailModel';
import { observer } from 'mobx-react';
import DetailView from './DetailView';

interface IMasterDetailProps {
	model: MasterDetailModel
}

const MasterDetail: React.FunctionComponent<IMasterDetailProps> = observer((props) => {
	return (
		<React.Fragment>
			<Grid model={props.model.masterModel}></Grid>
			{props.model.detailModel ? <DetailView model={props.model.detailModel} /> : null}
		</React.Fragment>);
});

export default MasterDetail;
