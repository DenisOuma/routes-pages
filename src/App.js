import React from "react";
import { Link } from "./componets/Link";
import { Route } from "./componets/Route";
import { Accordion } from "./componets/Accordion";
import { DropDownPage } from "./componets/pages/DropDownPage";
import { AccordinoPage } from "./componets/pages/AccordinoPage";
import { ButtonPage } from "./componets/pages/ButtonPage";
import { SideBar } from "./componets/SideBar";

export const App = () => {
	return (
		<div className="flex">
			<SideBar />

			<div>
				<Route path="/accordion">
					<AccordinoPage />
				</Route>
				<Route path="/dropdown">
					<DropDownPage />
				</Route>
				<Route path="/button">
					<ButtonPage />
				</Route>
			</div>
		</div>
	);
};
