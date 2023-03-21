import className from "classnames";
export const Button = ({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,

	...rest
}) => {
	const classes = className(
		rest.className,
		"flex px-3 items-center py-1.5 m-1.5 border",
		{
			"border-blue-500 bg-blue-500 text-white": primary,
			"border-gray-900 bg-gray-900 text-white": secondary,
			"border-green-500 bg-green-500 text-white": success,
			"border-yellow-400 bg-yellow-400 text-white": warning,
			"bg-red-500 border-red-500  text-white": danger,
			"rounded-full": rounded,
			"bg-gray-900": outline,
			"text-blue-900": outline && primary,
			"text-gray-900": outline && secondary,
			"text-green-900": success && outline,
			"text-yellow-900": outline && warning,
			"text-red-900": outline && danger,
		}
	);

	console.log(rest);
	return (
		<button {...rest} className={classes}>
			{children}
		</button>
	);
};
