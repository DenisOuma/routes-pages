import React from "react";

export const Link = ({ path }) => {
	const handleClick = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<a onClick={handleClick} href={path}>
				welcome
			</a>
		</div>
	);
};
