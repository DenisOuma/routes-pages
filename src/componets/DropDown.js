import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { Panel } from "./Panel";
export const DropDown = ({ options, onChange, value, lable }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen);
	};
	const handleOptionclick = (option) => {
		setIsOpen((currentClose) => !currentClose);
		onChange(option);
	};

	const renderedOptions = options.map((option) => {
		return (
			<div
				className="hover:bg-sky-100 p-1 rounded cursor-pointer p1"
				onClick={() => handleOptionclick(option.value)}
				key={option.value}
			>
				{option.lable}
			</div>
		);
	});

	const icon = isOpen ? (
		<GoChevronDown className="text-lg" />
	) : (
		<GoChevronLeft className="text-lg" />
	);

	return (
		<div className="w-48 relative">
			<Panel
				className="flex justify-between items-center cursor-pointer"
				onClick={handleClick}
			>
				{value?.lable || lable}
				{icon}
			</Panel>
			{isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
		</div>
	);
};
