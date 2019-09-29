import * as React from 'react';
import AddRow from './AddRow';
import { GridModel } from '../../models/GridModel';
import { observer } from 'mobx-react';

export class GridProps {
	model: GridModel
}

const Grid: React.FunctionComponent<GridProps> = observer((props) => {
	if (!props.model.hasData)
		return <div>No data</div>;

	return (
		<React.Fragment>
			<table>
				<thead>
					<tr>
						{props.model.columns.map(c => <th key={c}>{c}</th>)}
					</tr></thead>
				<tbody>
					{props.model.data.map(r => {
						return (
							<tr key={r["id"]}>
								{props.model.columns.map(c => <td key={r[c]}>{r[c]}</td>)}
							</tr>
						);
					})}
				</tbody>
			</table>
			<AddRow model={props.model}></AddRow>
		</React.Fragment>);
});

export default Grid;
