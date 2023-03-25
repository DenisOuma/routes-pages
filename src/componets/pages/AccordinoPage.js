import React from "react";
import { Accordion } from "../Accordion";
export const AccordinoPage = () => {
	const items = [
		{
			label: "Can I use react on  project?",
			content:
				"Yes you can there is no issue about it. this is a test on React apllication Question",
		},
		{
			label: "Can I use javascript on  project?",
			content:
				"Yes you can ther is no issue about it. Thsi is the answer to a javascript question",
		},
		{
			label: "Can I use CSS on  project?",
			content: "Yes you can ther is no issue about it.",
		},
	];
	return <Accordion items={items} />;
};
