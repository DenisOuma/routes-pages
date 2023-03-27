import React from "react";
import { Link } from "./componets/Link";
import { DropDownPage } from "./componets/pages/DropDownPage";
// import { DropDownPage } from "./componets/pages/DropDownPage";

export const App = () => {
	return (
		<div className="flex">
			<DropDownPage />
			<Link path="www.google.com" />
		</div>
	);
};
