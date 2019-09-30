import * as React from 'react';
import AddRow from './AddRow';
import { GridModel } from '../models/GridModel';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import AppStore from 'app/stores/AppStore';

export class GridProps {
	model: GridModel
	appStore?: AppStore
}

const Tr = styled.tr`
	:hover {
		background-color: gray;
	    cursor: pointer;
	}
`;

const Grid: React.FunctionComponent<GridProps> = inject("appStore")(observer((props) => {
	if (!props.model.hasData)
		return <div>No data</div>;

	return (
		<React.Fragment>
			<table className="table table-bordered">
				<thead>
					<tr>
						{props.model.columns.map(c => <th key={c}>{c}</th>)}
					</tr></thead>
				<tbody>
					{props.model.data.map(r => {
						return (
							<Tr onClick={() => props.model.selectRow(r)} key={r["id"]}>
								{props.model.columns.map(c => <td key={r[c]}>{r[c]}</td>)}
							</Tr>
						);
					})}
				</tbody>
			</table>
			<AddRow model={props.model}></AddRow>
		</React.Fragment>);
}));

export default Grid;
