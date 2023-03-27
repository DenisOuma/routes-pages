import React, { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { Panel } from "./Panel";
export const DropDown = ({ options, onChange, value, lable }) => {
	const [isOpen, setIsOpen] = useState(false);
	const divEl = useRef();
	useEffect(() => {
		const handler = (e) => {
			if (!divEl.current) {
				return;
			}
			if (!divEl.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("click", handler, true);

		return () => {
			document.removeEventListener("click", handler);
		};
	}, []);
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
		<div ref={divEl} className="w-48 relative">
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
