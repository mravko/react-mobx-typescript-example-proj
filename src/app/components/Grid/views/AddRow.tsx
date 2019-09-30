import * as React from 'react';
import { GridModel } from '../models/GridModel';
import styled from 'styled-components';

interface IAddRowProps {
	model: GridModel
}

//this function works with refs to find the 
//uncontrolled component and extract the value.
//then it calls add row on the model with all values from all fields as props
const handleClick = (model, refs) => {
	let toSave = {};
	model.columns.map(c => {
		toSave[c] = refs[c].current.value;
	})
	model.addRow(toSave);
	Object.keys(refs).forEach(ref => {
		refs[ref].current.value = '';
	});
}

const AddRowWrapper = styled.div`
	display: flex;
	direction: horizontal;
`;

const AddRow: React.FunctionComponent<IAddRowProps> = (props) => {
	let refs = {};
	for (const column of props.model.columns) {
		refs[column] = React.createRef()
	}
	return (
		<form onSubmit={(e) => { e.preventDefault(); handleClick(props.model, refs); }}>
			<AddRowWrapper>
				{props.model.columns.map(f => (
					<div key={f}>
						{f}: <input required ref={refs[f]} type="text"></input>
					</div>
				))}
				<button type="submit">Add</button>
			</AddRowWrapper>
		</form>
	);
};

export default AddRow;
