import React from "react";
import { Link } from "./Link";
export const SideBar = () => {
	const links = [
		{ lable: "Dropdown", path: "/" },
		{ lable: "Accordion", path: "/accordion" },
		{ lable: "Button", path: "/button" },
		{ lable: "Modal", path: "/modal" },
		{ lable: "Table", path: "/table" },
	];

	const sidebarOption = links.map((option, i) => (
		<Link
			className="mb-3"
			key={i}
			to={option.path}
			activeClassName="font-bold border-l-4 border-blue-500 pl-2"
		>
			{option.lable}
		</Link>
	));
	return (
		<div className="sticky top-0 overflow-x-scroll flex flex-col items-start">
			{sidebarOption}
		</div>
	);
};
