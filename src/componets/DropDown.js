import React, { useState } from "react";

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
				className="hover:bg-sky-100 rounded cursor-pointer p1"
				onClick={() => handleOptionclick(option.value)}
				key={option.value}
			>
				{option.lable}
			</div>
		);
	});

	return (
		<div className="w-48 relative">
			<div
				className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
				onClick={handleClick}
			>
				{value?.lable || lable}
			</div>
			{isOpen && (
				<div className="absolute top-full border rounded p-3 bg-white w-full">
					{renderedOptions}
				</div>
			)}
		</div>
	);
};
