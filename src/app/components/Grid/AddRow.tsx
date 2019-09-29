import * as React from 'react';
import { GridModel } from '../../models/GridModel';

interface IAddRowProps {
	model: GridModel
}

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

const AddRow: React.FunctionComponent<IAddRowProps> = (props) => {
	let refs = {};
	for (const column of props.model.columns) {
		refs[column] = React.createRef()
	}
	return (
		<div>
			{props.model.columns.map(f => (
				<div key={f}>
					{f}: <input ref={refs[f]} type="text"></input>
				</div>
			))}
			<button onClick={() => { handleClick(props.model, refs) }}>Add</button>
		</div>
	);
};

export default AddRow;
