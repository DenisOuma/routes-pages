import React, { useState } from "react";
import { DropDown } from "../DropDown";
export const DropDownPage = () => {
	const [select, setSelect] = useState();
	const options = [
		{ lable: "red", value: "red" },
		{ lable: "green", value: "green" },
		{ lable: "blue", value: "blue" },
	];

	const handleSelect = (option) => {
		setSelect(option);
	};
	console.log(select);
	return (
		<div className="flex">
			<DropDown
				options={options}
				value={select}
				lable={"Select... test"}
				onChange={handleSelect}
			/>
		</div>
	);
};
