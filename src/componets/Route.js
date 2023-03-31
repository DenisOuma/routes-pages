import React from "react";
import useNavigateContext from "./hook/use-navigate-context";
export const Route = ({ children, path }) => {
	const { currentPath } = useNavigateContext();

	if (path === currentPath) {
		return children;
	}
	return null;
};
