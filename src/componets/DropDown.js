import React, { useState } from "react";

export const DropDown = ({ options }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen);
	};

	const renderedOptions = options.map((option) => {
		return <div key={option.value}>{option.lable}</div>;
	});

	return (
		<div>
			<div onClick={handleClick}>Select...</div>
			{isOpen && renderedOptions}
		</div>
	);
};
