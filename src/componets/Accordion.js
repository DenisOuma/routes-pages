import React, { useState } from "react";

export const Accordion = ({ items }) => {
	const [expandedIndex, setExpandedIndex] = useState(0);

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;
		return (
			<div key={index}>
				<div onClick={() => setExpandedIndex(index)}>{item.label}</div>
				{isExpanded && <div>{item.content}</div>}
			</div>
		);
	});
	return <div>{renderedItems}</div>;
};
