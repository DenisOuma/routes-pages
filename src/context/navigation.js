import { createContext, useEffect, useState } from "react";
const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const handler = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener("popstate", handler);
		return () => {
			window.removeEventListener("popstate", handler);
		};
	}, []);

	const navigate = (to) => {
		window.history.pushState({}, "", to);
		setCurrentPath(to);
	};
	const stateToShare = {};

	return (
		<NavigationContext.Provider value={stateToShare}>
			<div>
				<button onClick={() => navigate("/accordion")}>Go to accordion</button>
				<button onClick={() => navigate("/dropdown")}>Go to dropDown</button>
			</div>
			{currentPath}
			{children}
		</NavigationContext.Provider>
	);
};

export { NavigationProvider };
export default NavigationContext;
