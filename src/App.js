import React from "react";
import { Route } from "./componets/Route";
import { DropDownPage } from "./componets/pages/DropDownPage";
import { AccordinoPage } from "./componets/pages/AccordinoPage";
import { ButtonPage } from "./componets/pages/ButtonPage";
import { SideBar } from "./componets/SideBar";
import { ModalPage } from "./componets/pages/ModalPage";
import { TablesPage } from "./componets/pages/TablesPage";

export const App = () => {
	return (
		<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
			<SideBar />

			<div className="col-span-5">
				<Route path="/accordion">
					<AccordinoPage />
				</Route>
				<Route path="/">
					<DropDownPage />
				</Route>
				<Route path="/button">
					<ButtonPage />
				</Route>
				<Route path="/modal">
					<ModalPage />
				</Route>
				<Route path="/table">
					<TablesPage />
				</Route>
			</div>
		</div>
	);
};
