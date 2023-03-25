import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
export const Accordion = ({ items }) => {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleToggle = (index) => {
		index !== expandedIndex ? setExpandedIndex(index) : setExpandedIndex(-1);
	};
	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;
		const icon = (
			<span className="text-xl">
				{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
			</span>
		);
		return (
			<div key={index}>
				<div
					className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
					onClick={() => handleToggle(index)}
				>
					{item.label} {icon}
				</div>
				{isExpanded && <div className="border-b p-5">{item.content}</div>}
			</div>
		);
	});
	return <div className="border-x border-t rounded">{renderedItems}</div>;
};
