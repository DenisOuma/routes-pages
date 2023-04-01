import React from "react";

export const Table = ({ data, config, keyFn }) => {
	const renderHead = config.map((head) => {
		return <th key={head.label}>{head.label}</th>;
	});
	const renderedRows = data.map((rowData) => {
		const renderedCells = config.map((column) => {
			return (
				<td className="p-2" key={column.label}>
					{column.render(rowData)}
				</td>
			);
		});
		return (
			<tr className="border-b" key={keyFn(rowData)}>
				{renderedCells}
			</tr>
		);
	});
	return (
		<table className="table-auto border-spacing-2">
			<thead>
				<tr className="border-b-2">{renderHead}</tr>
			</thead>
			<tbody>{renderedRows}</tbody>
		</table>
	);
};
