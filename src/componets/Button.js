import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
export const Button = ({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
}) => {
	const classes = classNames("px-3 py-1.5 border m-1.5", {
		"bg-blue-500  border-blue-600  text-white": primary,
		"bg-gray-900  border-gray-900  text-white": secondary,
		"bg-green-500  border-green-500  text-white": success,
		"bg-yellow-400  border-yellow-400  text-white": warning,
		"bg-red-500  border-red-600  text-white": danger,
		"rounded-full": rounded,
		"bg-white": outline,
		"text-blue-500": outline && primary,
		"text-gray-900": outline && secondary,
		"text-green-500": outline && success,
		"text-yellow-400": outline && warning,
		"text-red-500": outline && danger,
	});
	return <button className={classes}>{children}</button>;
};

Button.propTypes = {
	checkVariationvalue: ({ primary, secondary, success, warning, danger }) => {
		console.log(primary);
	},
};
