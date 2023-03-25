import React from "react";
import classNames from "classnames";
export const Panel = ({ children, className, ...rest }) => {
	const cardClassNames = classNames(
		className,
		"border rounded p-3 shadow bg-white w-full"
	);
	return (
		<div {...rest} className={cardClassNames}>
			{children}
		</div>
	);
};
