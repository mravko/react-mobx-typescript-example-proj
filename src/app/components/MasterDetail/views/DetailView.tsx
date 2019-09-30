import * as React from 'react';
import { DetailModel } from "../models/DetailModel";
import { observer, inject } from 'mobx-react';
import AppStore from 'app/stores/AppStore';

interface IDetailViewProps {
	model: DetailModel,
	appStore?: AppStore
}

const DetailView: React.FunctionComponent<IDetailViewProps> = inject("appStore")(observer((props) => {
	return (
		<div>
			{props.model.keys.map(k =>
				<div key={k}>
					<h4>
						{k}
					</h4>
					<div>
						<input type="text" value={props.model.data[k]} onChange={(e) => {
							props.model.setDataValue(k, e.target.value);
						}} />

					</div>
				</div>)}
		</div>);
}));

export default DetailView;
