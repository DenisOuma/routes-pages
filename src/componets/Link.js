import React from "react";
import useNavigateContext from "./hook/use-navigate-context";
import classNames from "classnames";
export const Link = ({ to, children }) => {
	const { currentPath, navigate } = useNavigateContext();
	const classes = classNames("text-blue-500");
	const handleClick = (e) => {
		// openning link to a new page
		if (e.metaKey || e.ctrlKey) {
			return;
		}
		e.preventDefault();

		navigate(to);

		console.log(to);
	};
	return (
		<a className={classes} onClick={handleClick} href={to}>
			{children}
		</a>
	);
};
