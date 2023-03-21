import React from "react";

export const Accordion = ({ items }) => {
	const renderedItems = items.map((item, idex) => (
		<div key={idex}>
			<div>{item.label}</div>
			<div>{item.content}</div>
		</div>
	));
	console.log(items);
	return <div>{renderedItems}</div>;
};
