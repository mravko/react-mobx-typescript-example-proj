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

const FormWrapper = styled.div`
	width: 350px;
`;

const AddRow: React.FunctionComponent<IAddRowProps> = (props) => {
	let refs = {};
	for (const column of props.model.columns) {
		refs[column] = React.createRef()
	}
	return (
		<FormWrapper>
			<form onSubmit={(e) => { e.preventDefault(); handleClick(props.model, refs); }}>
				{props.model.columns.map(f => (
					<div className="form-group mb-2">
						<label key={f}>{f}</label>
						<input className="form-control" required ref={refs[f]} type="text"></input>
					</div>))}
				<button className="btn btn-secondary btn-lg btn-block" type="submit">Add</button>
			</form>
		</FormWrapper>
	);
};

export default AddRow;
