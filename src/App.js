import React from "react";
import { DropDown } from "./componets/DropDown";

export const App = () => {
	const options = [
		{ lable: "red", value: "red" },
		{ lable: "green", value: "green" },
		{ lable: "blue", value: "blue" },
	];
	return (
		<div>
			<DropDown options={options} />
		</div>
	);
};
