import React from "react";
import { Link } from "./componets/Link";
import { Route } from "./componets/Route";
import { Accordion } from "./componets/Accordion";
import { DropDownPage } from "./componets/pages/DropDownPage";
import { AccordinoPage } from "./componets/pages/AccordinoPage";
import { ButtonPage } from "./componets/pages/ButtonPage";
import { SideBar } from "./componets/SideBar";
import { Modal } from "./componets/Modal";

export const App = () => {
	return (
		<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
			<SideBar />

			<div className="col-span-5">
				<Route path="/accordion">
					<AccordinoPage />
				</Route>
				<Route path="/dropdown">
					<DropDownPage />
				</Route>
				<Route path="/button">
					<ButtonPage />
				</Route>
				<Route path="/modal">
					<Modal />
				</Route>
			</div>
		</div>
	);
};
