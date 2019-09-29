import * as React from 'react';
import { DetailModel } from "../model/DetailModel";
import { observer } from 'mobx-react';

interface IDetailViewProps {
	model: DetailModel
}

const DetailView: React.FunctionComponent<IDetailViewProps> = observer((props) => {
	return (
		<div>
			{props.model.keys.map(k =>
				<div key={k}>
					<h3>
						{k}
					</h3>
					<div>
						{props.model.data[k]}
					</div>
				</div>)}
		</div>);
});

export default DetailView;
