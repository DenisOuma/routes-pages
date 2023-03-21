import React from "react";
import { Accordion } from "./componets/Accordion";

export const App = () => {
	const items = [
		{
			label: "Can I use react on  project?",
			content: "Yes you can there is no issue about it.",
		},
		{
			label: "Can I use javascript on  project?",
			content: "Yes you can ther is no issue about it.",
		},
		{
			label: "Can I use CSS on  project?",
			content: "Yes you can ther is no issue about it.",
		},
	];
	return <Accordion items={items} />;
};
