import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
export const Accordion = ({ items }) => {
	const [expandedIndex, setExpandedIndex] = useState(0);

	const handleToggle = (index) => {
		setExpandedIndex(index);
	};
	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;
		const icon = (
			<span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
		);
		return (
			<div key={index}>
				<div onClick={() => handleToggle(index)}>
					{item.label} {icon}
				</div>
				{isExpanded && <div>{item.content}</div>}
			</div>
		);
	});
	return <div>{renderedItems}</div>;
};
